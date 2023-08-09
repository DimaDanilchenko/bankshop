import bannerLogo from "../images/metrax-logo1.png";
import leftButton from "../images/left-button.png";
import rightButton from "../images/right-button.png";
import catalogPhoto from "../images/catalog-photo.png";
import { Link } from 'react-router-dom';
function Main() {
  return (
    <main className="content">
      <section className="banner">
        <img src={bannerLogo} alt="" className="banner__logo" />
        <p className="banner__title">
          Ручные и автоматические дефибрилляторы «Primedic»
        </p>
        <p className="banner__subtitle">
          что то нужно написать, может быть качество и выгодные цены..
        </p>
        <button className="banner__button">перейти в каталог</button>
        <div className="banner__buttons">
          <button className="banner__button-left">
            <img src={leftButton} alt="" />
          </button>
          <button className="banner__button-right">
            <img src={rightButton} alt="" />
          </button>
        </div>
      </section>
      <section className="catalog-product">
        <h2 className="catalog-product__title">Банковское оборудование</h2>
        <div className="catalog-product__lists">
          <div className="catalog-product__list">
            <h2 className="catalog-product__about">Сортировщики банкнот</h2>
            <Link to="/sortirovka-banknot" className="catalog-product__link">
              перейти в каталог
            </Link>
            <img
              src={catalogPhoto}
              className="catalog-product__photo"
            />
          </div>
          <div className="catalog-product__list">
            <h2 className="catalog-product__about">Техника для офиса</h2>
            <Link to="/office-texnika" className="catalog-product__link">
              перейти в каталог
            </Link>
            <img
              src={catalogPhoto}
              className="catalog-product__photo"
            />
          </div>
        </div>
      </section>
      <section className="new-products">
        <h2 className="new-products__title">Новинки</h2>
      </section>
    </main>
  );
}
export default Main;