import React, { useState } from 'react';
import './styles.scss';
import Axios from 'axios';
import FileDownload from 'js-file-download';
import Subcategory from '../../../components/keywords/KeywordCard/Subcategory';
import Icon from '@mdi/react';
import { mdiClose } from '@mdi/js';
import Dashboard from "../../../components/AppShell"

function Keywords() {
  const [keywords] = useState<any>(null);
  const [categories] = useState<Array<
    Record<string, unknown>
  > | null>(null);
  const [selectCategoryID, setSelectedCategoryID] = useState<string | null>(
    null,
  );
  const [subCategories] = useState<any>(null);
  const [modifiers] = useState<any>(null);
  const [selectedSubCategories, setSelectedSubCategories] = useState<Array<
    string
  > | null>(null);
  const [showPop, setShowPop] = useState<boolean>(false);

  const [response, setResponse] = useState<{
    show: boolean;
    message: string | null;
  }>({ show: false, message: null });

  const token = window.localStorage.getItem('user-token');

  function selectCategory(id: string) {
    setSelectedCategoryID(id);
  }

  function renderCategories() {
    return (
      categories &&
      categories.map((category: any) => {
        return (
          <Subcategory
            key={category.id}
            id={category.id}
            title={category.title}
            selectSubCategory={() => selectCategory(category.id)}
          />
        );
      })
    );
  }

  function renderSubcategories() {
    return (
      subCategories &&
      subCategories.map((subcategory: any) => {
        return (
          <Subcategory
            key={subcategory.id}
            id={subcategory.id}
            selectSubCategory={() => selectSubCategoryHandler(subcategory.id)}
            title={subcategory.title}
          />
        );
      })
    );
  }

  function renderModifiers() {
    return (
      modifiers &&
      modifiers.map((modifier: any) => {
        return (
          <Subcategory
            key={modifier.id}
            id={modifier.id}
            selectSubCategory={() => selectSubCategoryHandler(modifier.id)}
            title={modifier.title}
          />
        );
      })
    );
  }

  function selectSubCategoryHandler(id: string) {
    if (selectedSubCategories) {
      if (selectedSubCategories.includes(id)) {
        let removeSubCat = selectedSubCategories.filter(
          (subcat) => subcat !== id,
        );
        setSelectedSubCategories(removeSubCat);
      } else {
        setSelectedSubCategories([...selectedSubCategories, id]);
      }
    } else {
      setSelectedSubCategories([id]);
    }
  }

  function renderKeywords() {
    return (
      keywords &&
      keywords.map((keyword: any, index: number) => {
        return (
          <tr key={index}>
            <td>{keyword.keywordID.title}</td>
            <td>{keyword.categoryID.title}</td>
            <td>
              {keyword.subcategoryIDs
                ? keyword.subcategoryIDs.map(
                    (subcategory: { title: string }) => subcategory.title + ',',
                  )
                : 'None'}
            </td>
            <td>{keyword.modifierID?.title}</td>
            <td>{keyword.assignmentID?.approverID.fullname}</td>
          </tr>
        );
      })
    );
  }

  function handleExportKeywords() {
    Axios({
      method: 'GET',
      url: `${process.env.REACT_APP_EXPORT__KEYWORD_CSV_URI}`,
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => {
        FileDownload(response.data, `keywords-${Date.now()}.csv`);
      })
      .catch((error) => {
        setResponse({ show: true, message: error.response.data.message });
        setTimeout(() => {
          setResponse({ show: false, message: null });
        }, 3000);
      });
  }

  function handleFilterDownload() {
    let categoryname = categories?.filter(
      (item: any) => item.id === selectCategoryID,
    )[0].title;

    let subcategoryname = subCategories?.filter((item: any) =>
      selectedSubCategories!.includes(item.id),
    );
    let modName = modifiers?.filter((item: any) =>
      selectedSubCategories!.includes(item.id),
    );


    let subcategorynames = subcategoryname.map((item: any) => item.title);
    let modNames = modName.map((name: any) => name.title);

    let subcategoryName: string = '';

    if (subcategorynames.length && modNames.length) {
      subcategoryName = subcategorynames.join('-') + '-' + modNames.join('-');
    } else if (subcategorynames.length && !modNames.length) {
      subcategoryName = subcategorynames.join('-');
    } else if (!subcategorynames.length && modNames.length) {
      subcategoryName = modNames.join('-');
    } else {
      subcategoryName = '';
    }
    Axios({
      method: 'POST',
      url: `${process.env.REACT_APP_FILTER_EXPORT}`,
      headers: { Authorization: `Bearer ${token}` },
      data: {
        categoryID: selectCategoryID,
        subcategoryIDs: selectedSubCategories || null,
      },
    })
      .then((response) => {
        if (response.status === 200) {
          FileDownload(
            response.data,
            `${categoryname}-${subcategoryName}-${Date.now()}.csv`,
          );
        }
      })
      .catch((error) => {
        setResponse({ show: true, message: error.response.data.message });
        setTimeout(() => {
          setResponse({ show: false, message: null });
        }, 3000);
      });
  }

  function togglePop() {
    setShowPop(!showPop);
  }

  return (
    <Dashboard>
      {showPop ? (
        <div className="filter-popup">
          <div className="content-area">
            {response.show ? response.message : null}
            <div className="close" onClick={togglePop}>
              <Icon path={mdiClose} size={2} />
            </div>
            <div className="categories">
              <p>Select Category</p>
              <div className="cat-wrap">{categories && renderCategories()}</div>
            </div>
            <div className="categories">
              <p>Select Subcategory</p>
              <div className="cat-wrap">
                {subCategories && renderSubcategories()}
                {modifiers && renderModifiers()}
              </div>
            </div>
            <button onClick={handleFilterDownload} className="popupButton">
              Export keywords
            </button>
          </div>
        </div>
      ) : null}
      <div className="body_container">
        <div className="table-area">
          <div className="keyword_button">
            <button onClick={handleExportKeywords}>Export as csv</button>
            <button onClick={togglePop} style={{ marginTop: '10px' }}>
              Filter Keyword Export
            </button>
          </div>
          <table className="keywords-table">
            <thead>
              <tr>
                <td>First Name</td>
                <td>Last Name</td>
                <td>Email</td>
                <td>Location</td>
                <td>Tech Stack</td>
              </tr>
            </thead>
            <tbody>{keywords && renderKeywords()}</tbody>
          </table>
        </div>
      </div>
    </Dashboard>
  );
}

export default Keywords;
