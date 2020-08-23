import React from 'react';
import Styled from 'styled-components';

export default function KeywordTable(){

  const keywords =[{
    assignmentID: {approverID: {fullname: "Daniel"}},
    keywordID: {
      title: "jobs in la"
    },
    categoryID: {
      title: "job search"
    },
    subcategoryIDs: [{
      title: "jobs"
    }],
    modifierID: {
      title: "online"
    },
  }];

  function renderKeywords() {
    return (
      keywords &&
      keywords.map((keyword: any, index: number) => {
        return (
          <tr key={index}>
            <td className="bold_text">{keyword.keywordID.title}</td>
            <td className="light_text">{keyword.categoryID.title}</td>
            <td className="light_text">
              {keyword.subcategoryIDs
                ? keyword.subcategoryIDs.map(
                    (subcategory: { title: string }) => subcategory.title + ',',
                  )
                : 'None'}
            </td>
            <td className="light_text">{keyword.modifierID?.title}</td>
            <td className="bold_text">{keyword.assignmentID?.approverID.fullname}</td>
          </tr>
        );
      })
    );
  }

    return(
        <KeywordTableContainer style={{overflowX: "auto"}}>
        <table>
          <thead>
          <tr className="table_header">
            <th>Keywords</th>
            <th>Category</th>
            <th>Sub Category</th>
            <th>Modifier</th>
            <th>Approved By</th>
          </tr>
          </thead>
          <tbody>
            {keywords && renderKeywords()}
          </tbody>
        </table>
      </KeywordTableContainer>
   
    )
}

const KeywordTableContainer = Styled.div`
    table{
        margin-bottom: 1rem;
      width: 100%;
      border-spacing: 0;
      border-collapse: collapse; 
      th{
        background-color: #F5F5FA66;
      }
      th,
        td {
          padding: 1rem;
          text-align: left;
        }
        .bold_text {
          font-size: 16px;
          color: #1C1D21;
          font-weight: 600;
        }

        .light_text {
          font-size: 16px;
          color: #1C1D21;
          font-weight: 400;
        }
    }
`;