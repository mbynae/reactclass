import React from "react";

function imageText({ attr }) {
  return (
    <section
      id="imgTextType"
      className={`mgText__wrap ${attr[0]} ${attr[1]} ${attr[2]}`}
    >
      <h2 className="blind">계절별 제철 과일 알아보기</h2>
      <div className={`imgText__inner ${attr[3]}`}>
        <div className="imgText__txt">
          <span>Seasonal Fruits</span>
          <h3>계절별 제철 과일 알아보기</h3>
          <p>
            과일은 봄여름가을겨울 그리고 지역에 따라 제배 종류가 달라지죠.
            다양한 과일을 알아봅시다.
          </p>
          <ul>
            <li>
              <a href="/">봄 제철 과일</a>
            </li>
            <li>
              <a href="/">여름 제철 과일</a>
            </li>
            <li>
              <a href="/">가을 제철 과일</a>
            </li>
            <li>
              <a href="/">겨울 제철 과일</a>
            </li>
            <li>
              <a href="/">열대 지역 과일</a>
            </li>
            <li>
              <a href="/">한랭 지역 과일</a>
            </li>
          </ul>
        </div>
        <div className="imgText__img img1">
          <a href="/">열대 과일</a>
        </div>
        <div className="imgText__img img2">
          <a href="/" className="blue">
            한랭 과일
          </a>
        </div>
      </div>
    </section>
  );
}

export default imageText;
