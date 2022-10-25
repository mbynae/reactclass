import React from "react";

function banner(props) {
  return (
    <section id="bannerType" className={`banner__wrap ${props.fonts}`}>
      <h2 className="blind">배너 영역</h2>
      <div className="banner__inner">
        <h3 className="title">저녁의 와인 한잔</h3>
        <p className="desc">
          오늘 밤은 좋은 무드를 가지고 와인 한잔 어떨까요?
          <br />
          와인은 포도를 발효시켜 만든 오랜 역사를 가진 양조주입니다.
        </p>
        <span className="small">Let's try to wine!</span>
      </div>
    </section>
  );
}

export default banner;
