
function Footer() {
  return (
    <footer className="footer">
      <div className="footer__section1">
        <img src="./image/Footer-logo.png" className="footer__image" />
        <div className="footer-section1-block1">
          <a
            href="https://wa.me/+79996019223"
            className="footer__contact-whatsapp"
          >
            <img src="./image/whatsapp3.png" alt="" />
          </a>
          <a
            href="https://telegram.me/+79996019223"
            className="footer__contact-telegram"
          >
            <img src="./image/telegram3.png" alt="" />
          </a>
        </div>
      </div>
      <nav className="footer__nav">
        <ul className="footer__links1">
          <li className="footer__li-link">
            <a href="" className="footer__link" target="_blank">
              О компании
            </a>
          </li>
          <li className="footer__li-link">
            <a href="" className="footer__link" target="_blank">
              Производители
            </a>
          </li>
          <li className="footer__li-link">
            <a href="" className="footer__link" target="_blank">
              Доставка
            </a>
          </li>
          <li className="footer__li-link">
            <a href="" className="footer__link" target="_blank">
              {" "}
              Оплата
            </a>
          </li>
        </ul>
        <ul className="footer__links2">
          <li className="footer__li-link">
            <a href="" className="footer__link" target="_blank">
              Каталог
            </a>
          </li>
          <li className="footer__li-link">
            <a href="" className="footer__link" target="_blank">
              Новости
            </a>
          </li>
          <li className="footer__li-link">
            <a href="" className="footer__link" target="_blank">
              Реквизиты
            </a>
          </li>
          <li className="footer__li-link">
            <a href="" className="footer__link" target="_blank">
              Контакты
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
export default Footer;