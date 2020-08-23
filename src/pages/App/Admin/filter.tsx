import React, { useState, useEffect } from 'react';
import Icon from '@mdi/react';
import { mdiClose } from '@mdi/js';
import Styled from 'styled-components';

import Subcategory from '../../../components/keywords/KeywordCard/Subcategory';

export default function FilterPopup(props: any) {
  const { onClick } = props;
  const [categories, setCategories] = useState<Array<
    Record<string, unknown>
  > | null>(null);
  const [, setSelectedCategoryID] = useState<string | null>(
    null,
  );
  const [subCategories, setSubCategories] = useState<any>(null);
  const [modifiers, setModifiers] = useState<any>(null);
  const [selectedSubCategories, setSelectedSubCategories] = useState<Array<
    string
  > | null>(null);
  const [loading] = useState(false)
  const categoryData= [
    {id: 1, title: "salary"},
    {id: 2, title: "job search"},
    {id: 3, title: "job indeed"},
  ];
  const subCategoriesData = [
    {id: 1, title: "jobs", categoryID: 2},
    {id: 2, title: "location", categoryID: 2},
  ];

  const categoryModifierData = [
    {id: 1, title: "online", categoryID: 2},
    {id: 2, title: "internship", categoryID: 2},
  ];

  const [response] = useState<{
    show: boolean;
    message: string | null;
  }>({ show: false, message: null });

  useEffect(() => {
    if (categoryData) {
      setCategories(categoryData);
    }
  }, [categoryData]);

  useEffect(() => {
    if (subCategoriesData) {
      setSubCategories(subCategoriesData);
    }
  }, [subCategoriesData]);

  useEffect(() => {
    if (categoryModifierData) {
      setModifiers(categoryModifierData);
    }
  }, [categoryModifierData]);

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

  function handleFilterDownload() {
    // setLoading(true)
  }

  return (
    <FilterContainer>
      <ContentArea>
        {response.show ? response.message : null}
        <CloseIcon onClick={onClick}>
          <Icon path={mdiClose} size={2} />
        </CloseIcon>
        <CategoryContainer>
          <p>Select Category</p>
          <CategoryWrap>{categories && renderCategories()}</CategoryWrap>
        </CategoryContainer>
        <CategoryContainer>
          <p>Select Subcategory</p>
          <CategoryWrap>
            {subCategories && renderSubcategories()}
            {modifiers && renderModifiers()}
          </CategoryWrap>
        </CategoryContainer>
        {loading ? (
          <button>Loading...</button>
        ) : (
          <button onClick={handleFilterDownload}>Export keywords</button>
        )}
      </ContentArea>
    </FilterContainer>
  );
}

const FilterContainer = Styled.div`
    position: fixed;
  width: 100%;
  height: max-content;
  box-shadow: 0 0 4px #ccc;
  border-radius: 4px;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9999;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentArea = Styled.div`
    background: #fff;
    width: 80%;
    margin: auto;
    padding: 20px;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    button{
        width: 100%;
    background: #234ddd;
    border: none;
    border-radius: 4px;
    color: #fff;
    padding: 15px;
    margin-top: 10px;
    font-weight: bold;
    font-size: 0.8rem;
    }
`;

const CloseIcon = Styled.div`
    margin: 0 0 0 auto;
  background-color: #ff808b;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CategoryContainer = Styled.div`
     p {
      margin-bottom: 0.6rem;
    }
`;

const CategoryWrap = Styled.div`
    display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  .cat-inactive {
    background: rgba(0, 0, 0, 0.1);
    padding: 10px;
    margin-right: 5px;
    margin-bottom: 10px;
    font-size: 12px;
    border-radius: 4px;
    color: rgba(0, 0, 0, 0.7);
    font-weight: 500;
    cursor: pointer;
  }
  
  .cat-active {
    background: #234ddd;
    color: #fff;
    padding: 10px;
    margin-right: 5px;
    margin-bottom: 10px;
    font-size: 12px;
    border-radius: 4px;
    font-weight: 500;
    cursor: pointer;
  }
`;
