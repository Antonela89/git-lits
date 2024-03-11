import styled from 'styled-components'

const SelectorStyled = styled.select`
    border: none;
    border-radius: 0.5rem;
    background: var(--buttonBG);
    color: var(--white);
    padding-inline: 1rem;

`

const Selector = ({children, onChange, name, defaultValue}) => {
    return (
        <SelectorStyled onChange={onChange} name={name} defaultValue={defaultValue}>
            {children}
        </SelectorStyled>
    )
}

export default Selector
