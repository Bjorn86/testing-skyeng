// IMPORT STYLES
import './Search.scss';

// IMPORT COMPONENTS
import SearchForm from '../SearchForm/SearchForm.jsx';
import Sorting from '../Sorting/Sorting.jsx';

// SEARCH COMPONENT
function Search({
  onSearchSubmit,
  onSearchChange,
  searchQuery,
  queryError,
  isLoading,
  isOptionsOpen,
  onOptionMenuClick,
  onOptionSelect,
  toSwitchOptions,
  selectedOption,
}) {
  return (
    <section className='search' aria-label='Поиск и сортировка'>
      <SearchForm
        onSearchSubmit={onSearchSubmit}
        onSearchChange={onSearchChange}
        searchQuery={searchQuery}
        queryError={queryError}
        isLoading={isLoading}
      />
      <Sorting
        isOptionsOpen={isOptionsOpen}
        onOptionMenuClick={onOptionMenuClick}
        onOptionSelect={onOptionSelect}
        toSwitchOptions={toSwitchOptions}
        selectedOption={selectedOption}
        isLoading={isLoading}
      />
    </section>
  );
}

export default Search;
