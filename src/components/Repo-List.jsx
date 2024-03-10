import styled from 'styled-components';
import RepoItem from './Repo-Item';

const RepoListStyled = styled.div`
    grid-area: Repo-List;
    display: flex;
    flex-direction: column;
    gap: 2rem;
`

const RepoList = ({ repoList, search }) => {
    let list = repoList


    if (search !== '') {
        list = list.filter((item) => {
            return item.name.search(search) >= 0;
        })
    }

    return (
        <RepoListStyled>
            {
            list.map((repo) => {
                return <RepoItem key={repo.id} {...repo} />
            })}
        </RepoListStyled>
    )
}

export default RepoList
