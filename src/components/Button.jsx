import { isValidElement } from 'react';
import styled from 'styled-components';

const ButtonStyled = styled.button`
    background: var(--buttonBG);
    color: var(--white);
    border: 1px solid var(--grey);
    border-radius: 0.5rem;
    padding-block: 0.25rem;
    min-inline-size: 135px;
    font: var(--button);
    display: inline-flex;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    text-decoration: none !important;
    &:hover {
        background: var(--white);
        color: var(--buttonBG);
    }
`

const Button = ({text, link, className, icon}) => {

    const component = link ? 'a' : 'button';

    let iconComponent = null;

    if (icon) {
        if(isValidElement(icon)) {
            iconComponent = icon;
        }
    }

    return (
        <ButtonStyled as={component} href={link} className={className}>
            {iconComponent}
            {text}
        </ButtonStyled>
    )
}

export default Button
