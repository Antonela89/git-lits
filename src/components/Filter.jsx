import styled from 'styled-components';
import InputText from './input-text';
import Selector from './selector';
import Separator from './separator';

const FilterStyled = styled.div`
    grid-area: Filter;

    .count {
        font: var(--headline2-semi-bold);
        color: var(--white);
        margin-block-end: 1.5rem;
    }

    .action-list {
        display: flex;
        gap: 1rem;
    }

    .select-list {
        display: flex;
        gap: 0.5rem;
    }
`

const Filter = ({repoListCount, setSearch}) => {
    const handleChange = (event) => {
        setSearch(event.target.value);
    }
    
    return (
        <FilterStyled>
            <h2 className="count">
                Repositorios {repoListCount}
            </h2>
            <div className="action-list">
                <InputText
                    type="search"
                    placeholder="Busca un respositorio"
                    onChange = {handleChange}
                    />
                <div className="select-list">
                    <Selector>
                        <option value="tipo" disabled>Tipo</option>
                        <option value="all">All</option>
                        <option value="sources">Sources</option>
                        <option value="forks">Forks</option>
                        <option value="archived">Archived</option>
                        <option value="mirrors">Mirrors</option>
                    </Selector>
                    <Selector>
                        <option value="lenguaje" disabled>Lenguaje</option>
                        <option value="all">All</option>
                        <option value="css">CSS</option>
                        <option value="javascript">JavaScript</option>
                        <option value="java">Java</option>
                        <option value="htnml">HTML</option>
                    </Selector>
                    <Selector>
                        <option value="orden" disabled>Orden</option>
                        <option value="lastUpdated">Last Updated</option>
                        <option value="name">Name</option>
                        <option value="stars">Stars</option>
                    </Selector>
                </div>
            </div>
            <Separator/>
        </FilterStyled>
    )
}

export default Filter
