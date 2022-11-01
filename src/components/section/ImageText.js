import React from "react";

const imgTypeTitle = {
    subTitle: "Seasonal Fruits",
    title: "계절별 제철 과일 알아보기",
    desc: "과일은 봄여름가을겨울 그리고 지역에 따라 제배 종류가 달라지죠. 다양한 과일을 알아봅시다.",
};

const imgTypeCont = [
    {
        name: "봄 제철 과일",
        contLink: "/",
    },
    {
        name: "여름 제철 과일",
        contLink: "/",
    },
    {
        name: "가을 제철 과일",
        contLink: "/",
    },
    {
        name: "겨울 제철 과일",
        contLink: "/",
    },
    {
        name: "열대 지역 과일",
        contLink: "/",
    },
    {
        name: "한랭 지역 과일",
        contLink: "/",
    },
];

const imgTypeImg = [
    {
        name: "열대 과일",
        rightimg: "img1",
        imgLink: "/",
    },
    {
        name: "한랭 과일",
        rightimg: "img2",
        imgLink: "/",
    },
];

const TextCont = ({ name, contLink }) => {
    return (
        <li>
            <a href={`${contLink}`}>{name}</a>
        </li>
    );
};

const ImgTypeImg = ({ name, rightimg, imgLink }) => {
    return (
        <div className={`imgText__img ${rightimg}`}>
            <a href={`${imgLink}`}>{name}</a>
        </div>
    );
};

function imageText({ attr }) {
    return (
        <section id="imgTextType" className={`mgText__wrap ${attr[0]} ${attr[1]} ${attr[2]}`}>
            <h2 className="blind">계절별 제철 과일 알아보기</h2>
            <div className={`imgText__inner ${attr[3]}`}>
                <div className="imgText__txt">
                    <span>{imgTypeTitle.subTitle}</span>
                    <h3>{imgTypeTitle.title}</h3>
                    <p>{imgTypeTitle.desc}</p>
                    <ul>
                        {imgTypeCont.map((text, index) => (
                            <TextCont key={index} name={text.name} contLink={text.contLink} />
                        ))}
                        {/* <li>
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
                        </li> */}
                    </ul>
                </div>
                {imgTypeImg.map((img, index) => (
                    <ImgTypeImg key={index} name={img.name} rightimg={img.rightimg} imgLink={img.imgLink} />
                ))}
                {/* <div className="imgText__img img1">
                    <a href="/">열대 과일</a>
                </div>
                <div className="imgText__img img2">
                    <a href="/" className="blue">
                        한랭 과일
                    </a>
                </div> */}
            </div>
        </section>
    );
}

export default imageText;
