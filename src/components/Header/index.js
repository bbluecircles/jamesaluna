import React from "react";
import ArrowRight from "../../assets/icons/Arrow_Right.svg";

import "./index.scss";

export default function Header() {

    function changeColor() {
        const body = document.body;
        if (document.documentElement.style.getPropertyValue('--color-white') === "#fff" || !document.documentElement.style.getPropertyValue('--color-white')) {
            document.documentElement.style.setProperty('--color-white', '#000');
            document.documentElement.style.setProperty('--color-black', '#fff');
        } else {
            document.documentElement.style.setProperty('--color-white', '#fff');
            document.documentElement.style.setProperty('--color-black', '#000');
        }
        body.style.opacity = '0';
        body.classList.add('loadPageAnimation');

        setTimeout(() => {
            body.classList.remove('loadPageAnimation');
            body.style.opacity = '1';
        }, 1000)
    }

  function showMenu() {
    const menu = document.querySelector(".header-expand");
    const menu_button = document.querySelector(".header-menu");

    menu.style.display = "block";
    menu.style.zIndex = 1;

    if (menu.classList.contains("hide-header-menu")) {
      menu.classList.remove("hide-header-menu");
      menu_button.classList.remove("bring-element-down");
    }
    menu.classList.add("show-header-menu");
    menu_button.classList.add("bring-element-up");

    setTimeout(() => {
      menu_button.style.transform = "translate(-50%, -50%)";
    }, 1700);
  }

  function showProjects(e) {
    const header = document.getElementById("header");
    const parent = e.target.closest(".header-expand");
    const el = e.target.classList.contains("header-menu")
      ? e.target
      : e.target.closest(".header-menu");


    parent.classList.add("hide-header-menu");
    el.classList.add("bring-element-down");

    setTimeout(() => {
      el.style.transform = "translate(-50%, 200%)";
    }, 500);

    setTimeout(() => {
      parent.style.zIndex = "-1";
      parent.style.display = "none";
    }, 1000);
  }

  return (
    <header id="header">
      <a className="logo" href="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="400"
          height="260"
          viewBox="0, 0, 400, 260"
        >
          <path
            d="M82.761 3c-4.189 7.346-11.538 34.319-12.557 46.087C69.589 56.189 62.705 85.4 54.906 114c-7.8 28.6-15.391 61-16.869 72-2.27 16.892-5.435 22.543-20.362 36.364C-2.047 240.623-7.028 260 8 260c5.169 0 8-2.667 8-7.535C16 236.115 68.043 200 91.605 200c13.269 0 20.32-7.102 12.096-12.185-6.109-3.775-23.897-1.075-42.547 6.459l-12.847 5.189 2.238-12.731C51.776 179.729 62.513 138.9 74.405 96S96.021 13.95 96.013 9C96.001.515 86.605-3.74 82.761 3m116.446 69.72c-3.736 2.904-11.365 13.38-16.952 23.28l-10.159 18-.048-17c-.05-17.641.116-17.504-22.544-18.667-6.594-.338-25.393 46.508-25.469 63.467-.027 5.966-1.138 6.697-4.726 3.109-3.589-3.589-3.474-7.303.489-15.8 6.778-14.536 15.691-52.286 12.984-54.994-6.701-6.7-13.131.605-19.026 21.615-6.586 23.47-21.802 46.132-24.845 37.002-.844-2.531 2.206-14.599 6.777-26.817C105.331 80.141 106.064 72 98.74 72c-6.858 0-22.833 45.668-22.78 65.126.045 16.81 6.689 22.019 19.405 15.214 5.889-3.152 8.411-3.011 9.594.537 5.038 15.113 30.511 6.002 35.032-12.529 9.473-38.83 19.698-45.944 11.572-8.051-3.589 16.734-3.398 21.349 1 24.135 8.068 5.113 11.437 4.312 11.437-2.718 0-5.714.571-5.714 6.286 0 3.457 3.457 8.857 6.286 12 6.286 3.143 0 5.714 2.507 5.714 5.572 0 6.055 10.705 11.849 13.402 7.253.911-1.554 2.943-9.125 4.515-16.825 1.572-7.7 6.414-20.174 10.76-27.72 8.343-14.485 23.87-53.066 22.078-54.858-4.625-4.625-33.834-5.143-39.548-.702m7.786 32.024c-5.405 11.691-13.629 25.756-18.275 31.256l-8.448 10 3.426-12.442c3.966-14.407 10.221-26.967 21.307-42.788 11.967-17.078 12.998-9.835 1.99 13.974"
            fillRule="evenodd"
          />
        </svg>
      </a>
      <div className="header__nav">
        <div className="change-color-toggle" onClick={changeColor}>
          <input type="checkbox" />
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx={16} cy={16} r={9.5} stroke="#000" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16 6v20c5.523 0 10-4.477 10-10S21.523 6 16 6Z"
              fill="#000"
            />
          </svg>
        </div>
        <svg
          onClick={showMenu}
          className="header__menu"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="6" y1="9.5" x2="26" y2="9.5" stroke="black" />
          <line x1="6" y1="15.5" x2="26" y2="15.5" stroke="black" />
          <line x1="6" y1="21.5" x2="26" y2="21.5" stroke="black" />
        </svg>
      </div>
      <div className="header-expand">
        <div className="header-expand-wrapper">
          <a
            className="header-menu"
            href="#projects"
            onClick={(e) => showProjects(e)}
          >
            <div href="#projects">
              <img src={ArrowRight} />
              <span>View Projects</span>
            </div>
          </a>
        </div>
      </div>
    </header>
  );
}
