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

        <section className="offers" aria-label="Offers cards section">
          <h2 className="section-title offers__title">Offers</h2>
          <ul className="offers__cards">
            <li className="card card_size_wide">
              <h3 className="card__title">Move the borders of&nbsp;reality!</h3>

              <p className="card__subtitle card__subtitle_text_desktop">
                {"Go on a space adventure - it's possible with us!"}
              </p>
              <p className="card__subtitle card__subtitle_text_mobile">Go on a space adventure</p>

              <button className="button card__button">Learn more</button>
            </li>

            <li className="card card_size_narrow">
              <h3 className="card__title card__title_narrow">
                Space is not just stars and planets
              </h3>

              <p className="card__subtitle card__subtitle_text_desktop">Go on a space adventure</p>
              <p className="card__subtitle card__subtitle_text_mobile">
                it is a majestic journey to
              </p>

              <button className="button card__button">Learn more</button>
            </li>

            <li className="card card_size_narrow">
              <h3 className="card__title card__title_narrow">
                For those who&nbsp;dream of&nbsp;stars
              </h3>
              <p className="card__subtitle">Our offer: make your dream come true</p>
              <button className="button card__button">Learn more</button>
            </li>

            <li className="card card_size_wide">
              <h3 className="card__title">Fulfill your fantastic dreams</h3>
              <p className="card__subtitle">Space has never been so close</p>
              <button className="button card__button">Learn more</button>
            </li>
          </ul>
        </section>

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
