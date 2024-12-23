import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


function Product({ addToCart }) {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState(''); // State for search query
  

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error(error));
  }, []);

  // Filter products based on the search query
  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    product.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
      <header>
    <div className="container-fluid">
      <div className="row py-3 border-bottom">
        <div className="col-sm-4 col-lg-2 text-center text-sm-start d-flex gap-3 justify-content-center justify-content-md-start">
          <div className="d-flex align-items-center my-3 my-sm-0">
            <a href="index.html">
              <img src="./assets/images/logo.svg" alt="logo" className="img-fluid" />
            </a>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <svg width={24} height={24} viewBox="0 0 24 24">
              <use xlinkHref="#menu" />
            </svg>
          </button>
        </div>
        <div className="col-sm-6 offset-sm-2 offset-md-0 col-lg-4">
          <div className="search-bar row bg-light p-2 rounded-4">
            <div className="col-md-4 d-none d-md-block">
              <select className="form-select border-0 bg-transparent">
                <option>All Categories</option>
                <option>Groceries</option>
                <option>Drinks</option>
                <option>Chocolates</option>
              </select>
            </div>
            <div className="col-11 col-md-7">
              <form
                id="search-form"
                className="text-center"
                action="index.html"
                method="post"
              >
                <input
                  type="text"
                  className="form-control border-0 bg-transparent"
                  placeholder="Search for more than 20,000 products"
                />
              </form>
            </div>
            <div className="col-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M21.71 20.29L18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.39ZM11 18a7 7 0 1 1 7-7a7 7 0 0 1-7 7Z"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <ul className="navbar-nav list-unstyled d-flex flex-row gap-3 gap-lg-5 justify-content-center flex-wrap align-items-center mb-0 fw-bold text-uppercase text-dark">
            <li className="nav-item active">
              <a href="/Home" className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle pe-3"
                role="button"
                id="pages"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Pages
              </a>
              <ul
                className="dropdown-menu border-0 p-3 rounded-0 shadow"
                aria-labelledby="pages"
              >
                <li>
                  <a href="index.html" className="dropdown-item">
                    About Us{" "}
                  </a>
                </li>
                <li>
                  <a href="/shop" className="dropdown-item">
                    Shop{" "}
                  </a>
                </li>
                <li>
                  <a href="index.html" className="dropdown-item">
                    Single Product{" "}
                  </a>
                </li>
                <li>
                  <a href="/cart" className="dropdown-item">
                    Cart
                  </a>
                </li>
                <li>
                  <a href="index.html" className="dropdown-item">
                    Checkout{" "}
                  </a>
                </li>
                <li>
                  <a href="index.html" className="dropdown-item">
                    Blog{" "}
                  </a>
                </li>
                <li>
                  <a href="index.html" className="dropdown-item">
                    Single Post{" "}
                  </a>
                </li>
                <li>
                  <a href="index.html" className="dropdown-item">
                    Styles{" "}
                  </a>
                </li>
                <li>
                  <a href="index.html" className="dropdown-item">
                    Contact{" "}
                  </a>
                </li>
                <li>
                  <a href="index.html" className="dropdown-item">
                    Thank You{" "}
                  </a>
                </li>
                <li>
                  <a href="index.html" className="dropdown-item">
                    My Account{" "}
                  </a>
                </li>
                <li>
                  <a href="index.html" className="dropdown-item">
                    404 Error{" "}
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        
        <div className="col-sm-8 col-lg-2 d-flex gap-5 align-items-center justify-content-center justify-content-sm-end">
          <ul className="d-flex justify-content-end list-unstyled m-0">
            <li>
              <a href="#" className="p-2 mx-1">
                <svg width={24} height={24}>
                  <use xlinkHref="#user" />
                </svg>
              </a>
            </li>
            <li>
              <a href="#" className="p-2 mx-1">
                <svg width={24} height={24}>
                  <use xlinkHref="#wishlist" />
                </svg>
              </a>
            </li>
            <li>
            <Link to="/cart" className="nav-link">
              <i className="fas fa-shopping-cart"></i> Cart <span className="cart-count"></span>
            </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  
    <div className="product-list">
      <h2>Products</h2>
      
      {/* Search Input */}
      <div className="search-container">
        <input 
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="search-input"
        />
        <i className="fas fa-search search-icon"></i>
      </div>

      <div className="products">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <div key={product.id} className="product-card">
              <Link to={`/products/${product.id}`}>
                <img src={product.image} alt={product.title} />
                <h3>{product.title}</h3>
                <p>${product.price}</p>
              </Link>
              <button onClick={() => addToCart(product)} className="add-to-cart-btn">
                addToCart
              </button>
            </div>
          ))
        ) : (
          <p>No products found</p> // Message when no products match
        )}
      </div>
    </div>
    </header>
  );
}

export default Product;
