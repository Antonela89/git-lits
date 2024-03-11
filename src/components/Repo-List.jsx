import styled from 'styled-components';
import RepoItem from './repo-Item';

const RepoListStyled = styled.div`
    grid-area: Repo-List;
    display: flex;
    flex-direction: column;
    gap: 2rem;
`

const RepoList = ({ repoList, search, type, language, sort }) => {
    let list = [...repoList]
    
    if (search !== '') {
        list = list.filter((item) => {
            return item.name.search(search) >= 0;
        })
    }

    if(type !== 'all' && type !== '') {
        switch (type) {
            case 'sources':
                list = list.filter((item) => item['clone_url'])
                break;
            case 'forks':
                list = list.filter((item) => item["fork"]);
                break;
            case 'archived':
                list = list.filter((item) => item['archived'] === true)
                break;
            case 'mirrors':
                list = list.filter((item) => item['mirror_url'] === true)
                break;
            default:
                return null;
        }
    }

    if(language !== 'all' && language !== '') {
        list = list.filter((item) => {
            return item["language"] && item["language"].toLowerCase() === language.toLowerCase();
        });
    }

    if (sort !== '') {
        switch (sort) {
            case 'lastUpdated':
                list.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
                break;
            case 'name':
                list.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case 'stars':
                list.sort((a, b) => {
                    if (a.stargazers_count < b.stargazers_count) return 1;
                    if (a.stargazers_count > b.stargazers_count) return -1;
                return 0;
                }) 
                break;
            default:
                return null;
        }
    }

    return (
        <RepoListStyled>
                {list.map((repo) => {
                    return <RepoItem key={repo.id} {...repo} />
                })}
        </RepoListStyled>
    )
}

export default RepoList
