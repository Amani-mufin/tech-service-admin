import React from 'react';
import Styled, { CSSProperties } from 'styled-components';

interface CardProps extends React.PropsWithChildren<unknown> {
  style?: CSSProperties;
}

function Card(props: CardProps) {
  return (
    <CardContainer style={{ ...props.style }}>{props.children}</CardContainer>
  );
}

export default Card;

const CardContainer = Styled.div`
    width: 100%;
    background: #fff;
    border-radius: 6px;
`;
