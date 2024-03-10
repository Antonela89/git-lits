import styled from 'styled-components';
import { ButtonRounded } from './Button';
import Icon from './icon';


const SearchStyled = styled.div`
    position: fixed;
    inset-inline-end: 1.5rem;
    inset-block-end: 1.5rem;

`

const Search = ({setIsVisible}) => {

    const handleClick = () => {
        setIsVisible(true);
    }
    return (
        <SearchStyled onClick={handleClick}>
            <ButtonRounded icon={<Icon name="search" size={24}/>}/>
        </SearchStyled>
    )
}

export default Search
