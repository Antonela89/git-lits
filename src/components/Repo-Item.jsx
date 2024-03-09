import styled from 'styled-components'

const RepoItemStyled = styled.div`
    border: 10px solid red;
    margin: 10px;
`

const RepoItem = ({name}) => {
    return (
        <RepoItemStyled>
            {name}
        </RepoItemStyled>
    )
}

export default RepoItem
