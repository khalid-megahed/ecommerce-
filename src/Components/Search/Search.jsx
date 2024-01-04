import  { useState } from 'react';
import allProducts from '../../assets/all_product';
import './Search.css';
import { Link } from 'react-router-dom';

const SearchComponent = () => {
  const [searchValue, setSearchValue] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchValue(query);
    if (query.trim() === '') {
      setSearchResults([]); // Clear search results if input is empty
    } else {
      filterResults(query);
    }
  };

  const filterResults = (query) => {
    const filteredProducts = allProducts.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filteredProducts);
  };

  const handleProductClick = (productId) => {
    // Navigate to the specific product page using React Router
    window.location.href.push(`/product/${productId}`); // Assuming your product URL follows a pattern like /product/:productId
  };

  return (
    <div className="searchcomponent">
      <div className="search-container">
      <input
        type="text"
        placeholder="Search..."
        value={searchValue}
        onChange={handleSearchChange}
        className="search-input"
      />


      {searchValue.trim() !== '' && ( // Only display results if searchValue is not empty
        <ul className="search-results">
          {searchResults.map((result) => (
            <li key={result.id} onClick={() => handleProductClick(result.id)}>
             <Link to={`/product/${result.id}`}> {result.name}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
    </div>
  );
};

export default SearchComponent;
