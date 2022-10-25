import React from "react";

function Header(props) {
  //변수로 설정해서 클래스를 넣을땐 props란 매개변수를 넣어줌
  return (
    <header id="headerType" className={`header__wrap ${props.fonts}`}>
      <div className="header__inner">
        <div className="header__logo">
          <a href="/">
            web <em>site</em>
          </a>
        </div>
        <div className="header__menu">
          <ul>
            <li>
              <a href="#imageType">이미지 영역</a>
            </li>
            <li>
              <a href="#imgTextType">이미지/텍스트 영역</a>
            </li>
            <li>
              <a href="#cardType">카드 영역</a>
            </li>
            <li>
              <a href="#bannerType">배너 영역</a>
            </li>
            <li>
              <a href="#textType">텍스트 영역</a>
            </li>
          </ul>
        </div>
        <div className="header__member">
          <a href="/">로그인</a>
        </div>
        <div className="header__ham">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
}

export default Header;
