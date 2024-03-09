import styled from 'styled-components';
import RepoItem from './Repo-Item';

const RepoListStyled = styled.div`
    grid-area: Repo-List;
    background-color: pink;

`

const RepoList = ({ repoList }) => {
    return (
        <RepoListStyled>
            {
            repoList.map((repo) => {
                return <RepoItem key={repo.id} {...repo} />
            })}
        </RepoListStyled>
    )
}

export default RepoList
