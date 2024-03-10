import styled from 'styled-components'

const SelectorStyled = styled.select`
    border: none;
    border-radius: 0.5rem;
    background: var(--buttonBG);
    color: var(--white);
    padding-inline: 1rem;
`

const Selector = ({children}) => {
    return (
        <SelectorStyled>
            {children}
        </SelectorStyled>
    )
}

export default Selector
