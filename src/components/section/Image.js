import React from "react";

function image(props) {
  return (
    <section
      id="imageType"
      className={`image__wrap ${props.attr[0]} ${props.attr[1]}`}
    >
      <h2>365일 언제나 맛있는 과일 쥬스</h2>
      <p>남녀노소 누구에게나 인기있는 생과일 쥬스를 소개합니다!</p>
      <div className={`image__inner ${props.attr[2]}`}>
        <article className="image img1">
          <h3 className="image__title">상큼한 오렌지 쥬스</h3>
          <p className="image__desc">
            톡 쏘는 맛과 시원하고 달달한 오랜지 쥬스입니다.
            <br />
            비타민C의 함유량도 엄청나요.
          </p>
          <a className="image__btn" href="/" title="자세히 보기">
            자세히 보기
          </a>
        </article>
        <article className="image img2">
          <h3 className="image__title">달콤한 딸기 쥬스</h3>
          <p className="image__desc">
            달달하고 맛있는 딸기쥬스입니다.
            <br />
            한모금 마시면 잊을수가 없는 맛이죠.
          </p>
          <a className="image__btn yellow" href="/" title="자세히 보기">
            자세히 보기
          </a>
        </article>
      </div>
    </section>
  );
}

export default image;
