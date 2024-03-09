import styled from 'styled-components';
import Icon from './icon';

const FilterStyled = styled.div`
    grid-area: Filter;
    background-color: blue;

`

const Filter = () => {
    return (
        <FilterStyled>
            <Icon name="arrowDown" />
            <Icon name="book" />
            <Icon name="branch" />
            <Icon name="cancel" />
            <Icon name="check" />
            <Icon name="github" />
            <Icon name="heart" />
            <Icon name="home" />
            <Icon name="link" />
            <Icon name="location" />
            <Icon name="search" />
            <Icon name="star" />
            <Icon name="twitter" />
            <Icon name="user" />
        </FilterStyled>
    )
}

export default Filter
