import React, { useState } from 'react';
import headerButton from "../images/hamburger_menu_icon_160905.svg";

function Header() {
  let [isMenuHeaderOpen, setMenuHeaderOpen] = useState(false);
  function handleMenuHeaderOpen() {
    setMenuHeaderOpen(isMenuHeaderOpen = !isMenuHeaderOpen);
  }
  return (
    <header className="header">
      <div className="header__logo" />
      <nav className="header__nav">
        <ul className={`header__links ${isMenuHeaderOpen ? "header__links_active" : ""}`}>
          <li className={`header__list ${isMenuHeaderOpen ? "header__list_active" : ""}`}>
            <a href="#" className={`header__link ${isMenuHeaderOpen ? "header__link_active" : ""}`}>
              О компании
            </a>
          </li>
          <li className={`header__list ${isMenuHeaderOpen ? "header__list_active" : ""}`}>
            <a href="#" className={`header__link ${isMenuHeaderOpen ? "header__link_active" : ""}`}>
              Производители
            </a>
          </li>
          <li className={`header__list ${isMenuHeaderOpen ? "header__list_active" : ""}`}>
            <a href="#" className={`header__link ${isMenuHeaderOpen ? "header__link_active" : ""}`}>
              Доставка
            </a>
          </li>
          <li className={`header__list ${isMenuHeaderOpen ? "header__list_active" : ""}`}>
            <a href="#" className={`header__link ${isMenuHeaderOpen ? "header__link_active" : ""}`}>
              Оплата
            </a>
          </li>
          <li className={`header__list ${isMenuHeaderOpen ? "header__list_active" : ""}`}>
            <a href="#" className={`header__link ${isMenuHeaderOpen ? "header__link_active" : ""}`}>
              Новости
            </a>
          </li>
          <li className={`header__list ${isMenuHeaderOpen ? "header__list_active" : ""}`}>
            <a href="#" className={`header__link ${isMenuHeaderOpen ? "header__link_active" : ""}`}>
              Реквизиты
            </a>
          </li>
          <li className={`header__list ${isMenuHeaderOpen ? "header__list_active" : ""}`}>
            <a href="#" className={`header__link ${isMenuHeaderOpen ? "header__link_active" : ""}`}>
              Контакты
            </a>
          </li>
        </ul>
      </nav>
      <button className='header__button'
        onClick={handleMenuHeaderOpen}
      >
        <img src={headerButton} alt="" className="header__button" />
      </button>
    </header>
  );
}
export default Header;