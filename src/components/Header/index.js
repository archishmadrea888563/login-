const Header = () => (
  <nav className="nav-heading">
    <div className="navbar-content">
      <div className="logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
          className="logo-image"
        />
        <button type="button" className="nav-logout-btn">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
            alt="nav logout"
            className="logout-btn"
          />
        </button>
      </div>
      <div className="navbar-content nav-large-con">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
          className="website-logo"
        />
        <ul className="nav-items">
          <li className="nav-list-item">Home</li>
          <li className="nav-list-item">Products</li>
          <li className="nav-list-item">Cart</li>
        </ul>
        <button type="button" className="logout-button">
          Logout
        </button>
      </div>
    </div>
    <div className="nav-mobile">
      <ul className="list-mobile">
        <li className="mobile-item">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
            alt="home"
            className="home-image"
          />
        </li>

        <li className="mobile-item">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
            alt="nav products"
            className="products-img"
          />
        </li>

        <li className="mobile-item">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
            alt="nav cart"
            className="cart-img"
          />
        </li>
      </ul>
    </div>
  </nav>
)

export default Header
