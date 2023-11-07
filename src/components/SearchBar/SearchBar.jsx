import {
  SearchbarHeader,
  SearchForm,
  SearchFormButton,
  SearchFormLabel,
  SearchFormInput,
} from './SearchBar.styled';
import { ImSearch } from 'react-icons/im';

export const SearchBar = ({ getQuery }) => {
  const handleSubmit = event => {
    event.preventDefault();
    const value = event.target.elements.searchQuery.value;
    getQuery({ query: value });
  };

  return (
    <SearchbarHeader>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormButton type="submit">
          <ImSearch />
          <SearchFormLabel className="button-label">Search</SearchFormLabel>
        </SearchFormButton>

        <SearchFormInput
          type="text"
          autoComplete="off"
          autoFocus
          name="searchQuery"
          placeholder="Search images and photos"
        />
      </SearchForm>
    </SearchbarHeader>
  );
};
