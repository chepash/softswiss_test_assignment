import BuscketIcon from '@assets/svg/busket.svg?react';

function App() {
  return (
    <div className="page">
      <header className="header">
        <div className="header__content">
          <div className="header__logo" />
          <nav className="nav">
            <ul className="nav__links">
              <li>
                <a href="#" className="nav__link">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="nav__link">
                  Products
                </a>
              </li>
              <li>
                <a href="#" className="nav__link">
                  <BuscketIcon className="nav__icon" />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main></main>
      <footer className="footer"></footer>
    </div>
  );
}

export default App;
