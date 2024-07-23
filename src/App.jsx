import BuscketIcon from '@assets/svg/busket.svg?react';
import RocketIcon from '@assets/svg/rocket.svg?react';

function App() {
  return (
    <div className="page">
      <header className="header page__header">
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
      <main className="page__content">
        <section className="promo" aria-label="promo section">
          <div className="promo__content">
            <h1 className="promo__title">
              Discover the vast expanses of <span className="promo__title_pink">space</span>
            </h1>
            <p className="promo__subtitle">
              Where the possibilities are <span className="promo__subtitle_yellow">endless!</span>
            </p>
            <button className="button">Learn more</button>
          </div>
        </section>
        <section aria-label="Offers cards section"></section>
        <section aria-label="Embark on a space journey article section"></section>
      </main>
      <footer className="footer page__footer">
        <RocketIcon className="footer__icon" />
        <p className="footer__text">Exciting space adventure!</p>
      </footer>
    </div>
  );
}

export default App;
