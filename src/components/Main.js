function Main() {
  return (
    <main className="content">
      <section className="banner">
        <img src="./image/mainLogoBanner.png" alt="" className="banner__photo" />
        <img src="./image/metrax-logo1.png" alt="" className="banner__logo" />
        <p className="banner__title">
          Ручные и автоматические дефибрилляторы «Primedic»
        </p>
        <p className="banner__subtitle">
          что то нужно написать, может быть качество и выгодные цены..
        </p>
        <button className="banner__button">перейти в каталог</button>
        <div className="banner__butons">
          <button className="banner__button-left">
            <img src="./image/left-button.png" alt="" />
          </button>
          <button className="banner__button-right">
            <img src="./image/right-button.png" alt="" />
          </button>
        </div>
      </section>
      <section className="catalog-product">
        <h2 className="catalog-product__title">Банковское оборудование</h2>
        <div className="catalog-product__lists">
          <div className="catalog-product__list">
            <h2 className="catalog-product__about">ОБОРУДОВАНИЕ</h2>
            <a href="#" className="catalog-product__link">
              перейти в каталог &gt;
            </a>
            <img
              src="./image/catalog-photo.png"
              className="catalog-product__photo"
            />
          </div>
          <div className="catalog-product__list">
            <h2 className="catalog-product__about">ОБОРУДОВАНИЕ</h2>
            <a href="#" className="catalog-product__link">
              перейти в каталог &gt;
            </a>
            <img
              src="./image/catalog-photo.png"
              className="catalog-product__photo"
            />
          </div>
          <div className="catalog-product__list">
            <h2 className="catalog-product__about">ОБОРУДОВАНИЕ</h2>
            <a href="#" className="catalog-product__link">
              перейти в каталог &gt;
            </a>
            <img
              src="./image/catalog-photo.png"
              className="catalog-product__photo"
            />
          </div>
          <div className="catalog-product__list">
            <h2 className="catalog-product__about">ОБОРУДОВАНИЕ</h2>
            <a href="#" className="catalog-product__link">
              перейти в каталог &gt;
            </a>
            <img
              src="./image/catalog-photo.png"
              className="catalog-product__photo"
            />
          </div>
          <div className="catalog-product__list">
            <h2 className="catalog-product__about">ОБОРУДОВАНИЕ</h2>
            <a href="#" className="catalog-product__link">
              перейти в каталог &gt;
            </a>
            <img
              src="./image/catalog-photo.png"
              className="catalog-product__photo"
            />
          </div>
          <div className="catalog-product__list">
            <h2 className="catalog-product__about">ОБОРУДОВАНИЕ</h2>
            <a href="#" className="catalog-product__link">
              перейти в каталог &gt;
            </a>
            <img
              src="./image/catalog-photo.png"
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