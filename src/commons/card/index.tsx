import React from 'react';

import './styles.scss';

interface CardProps extends React.PropsWithChildren<unknown>{
    cardClass?: string,
    onClick?: (event: React.MouseEvent<HTMLElement>) => void,
    style?: React.CSSProperties
}

export default (props: CardProps) => {
    const {children, cardClass, style, onClick} = props;
    return(
        <div style={style} className={`card_container ${cardClass}`} onClick={onClick}>
            {children}
        </div>
    )
}