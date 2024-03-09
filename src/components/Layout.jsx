import styled from 'styled-components'

const LayoutStyled = styled.main`
    display: grid;
    min-block-size: 100vh;
    max-inline-size: 75rem;
    margin: auto;
    padding-inline: 1.25rem;
    
    @media screen and (min-width: 768px) {
        border: 1px solid red;
        grid-template-columns: 278px 1fr;
        grid-template-rows: auto 1fr;
        column-gap: 2rem;
        grid-template-areas: "Profile Filter" "Profile Repo-List"
}


`


const Layout = ({children}) => {
    return (
        <LayoutStyled>
            {children}
        </LayoutStyled>
    )
}

export default Layout
