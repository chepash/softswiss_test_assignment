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

          {/* mobile menu no JS */}
          <input id="toggle" type="checkbox" className="burger-checkbox" />
          <label htmlFor="toggle" className="burger-btn">
            <div className="top-bun burger-btn__part" />
            <div className="meat burger-btn__part" />
            <div className="bottom-bun burger-btn__part" />
          </label>
          <nav className="nav nav_mobile">
            <ul className="nav__links nav__links_mobile">
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

        <section className="article" aria-label="Embark on a space journey article section">
          <h2 className="section-title article__title">Embark on a space journey</h2>
          <p className="article__text">
            Travelling into space is&nbsp;one of&nbsp;the most exciting and unforgettable adventures
            that can change your life forever. And if&nbsp;you have ever dreamed of&nbsp;exploring
            stars, planets and galaxies, then our company is&nbsp;ready to&nbsp;help you realize
            this dream. We&nbsp;offer a&nbsp;unique experience that will allow you
            to&nbsp;go&nbsp;on&nbsp;a&nbsp;space journey and see all the secrets of&nbsp;the
            universe. We&nbsp;guarantee that every moment in&nbsp;space will be&nbsp;filled with
            incredible impressions, excitement and new discoveries. Our team of&nbsp;professionals
            takes care of your safety and comfort so&nbsp;that you can fully enjoy your adventure
            in&nbsp;space. We&nbsp;offer various options for space excursions.
          </p>

          <input type="checkbox" id="expander-btn" className="expander-checkbox" />
          <label htmlFor="expander-btn" className="expander-label article__expanse">
            Read more
          </label>

          <div className="article__hidden-content">
            <p className="article__text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt nemo dolores soluta
              dicta blanditiis dolorum quas tempore mollitia dolor officia a&nbsp;excepturi, rerum
              impedit molestias modi consequuntur ipsum! Consequatur, distinctio?
            </p>

            <RocketIcon />

            <p className="article__text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit nihil earum assumenda
              sit minima harum veritatis eaque commodi debitis corporis ullam necessitatibus
              voluptatibus aperiam, animi molestiae laborum eius magnam recusandae.
            </p>
          </div>
        </section>
      </main>

      <footer className="footer page__footer">
        <RocketIcon className="footer__icon" />
        <p className="footer__text">Exciting space adventure!</p>
      </footer>
    </div>
  );
}

export default App;
