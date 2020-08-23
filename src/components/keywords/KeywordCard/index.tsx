import React from 'react';
import Icon from '@mdi/react';
import { mdiArrowRight } from '@mdi/js';
import { Assignment } from '../../../utils/interfaces';
import Styled from 'styled-components';

interface KeywordProp extends React.PropsWithChildren<unknown> {
  title: string;
  categories?: any;
  keywordID?: string;
  assignmentID?: string;
  skip?: (id: string) => Promise<void>;
  assignments?: Array<Assignment>;
  position?: number;
  done?: boolean;
  clickHandler?: () => void;
}

function KeywordCard({ title, clickHandler }: KeywordProp) {
  return (
    <>
      <Keyword onClick={clickHandler}>
        <p>{title}</p>
        <span>
          <Icon path={mdiArrowRight} size={1} color="#8181A5" />
        </span>
      </Keyword>
    </>
  );
}

export default KeywordCard;

const Keyword = Styled.div`
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  border-radius: 6px;
  padding: 0 15px;
  margin-bottom: 10px;
  p {
    color: #234ddd;
    font-weight: 600;
    font-size: 14px;
  }
  span {
    display: block;
    height: 24px;
  }
`;
