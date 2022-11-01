import React from "react";

const imageTitle = {
    title: "365일 언제나 맛있는 과일 쥬스",
    desc: "남녀노소 누구에게나 인기있는 생과일 쥬스를 소개합니다!",
};

const imageText = [
    {
        title: "상큼한 오렌지 쥬스",
        desc1: "톡 쏘는 맛과 시원하고 달달한 오랜지 쥬스입니다.",
        desc2: "비타민C의 함유량도 엄청나요.",
        imgClass: "img1",
        btnClass: "basic",
        btnLink: "/",
    },
    {
        title: "달콤한 딸기 쥬스",
        desc1: "달달하고 맛있는 딸기쥬스입니다.",
        desc2: "한모금 마시면 잊을수가 없는 맛이죠.",
        imgClass: "img2",
        btnClass: "yellow",
        btnLink: "/",
    },
];

const ImageText = ({ title, desc1, desc2, imgClass, btnClass, btnLink }) => {
    return (
        <article className={`image ${imgClass}`}>
            <h3 className="image__title">{title}</h3>
            <p className="image__desc">
                {desc1}
                <br />
                {desc2}
            </p>
            <a className={`image__btn ${btnClass}`} href={`${btnLink}`} title="자세히 보기">
                자세히 보기
            </a>
        </article>
    );
};

function image(props) {
    return (
        <section id="imageType" className={`image__wrap ${props.attr[0]} ${props.attr[1]}`}>
            <h2>{imageTitle.title}</h2>
            <p>{imageTitle.desc}</p>
            <div className={`image__inner ${props.attr[2]}`}>
                {imageText.map((text, index) => (
                    <ImageText key={index} title={text.title} desc1={text.desc1} desc2={text.desc2} imgClass={text.imgClass} btnClass={text.btnClass} btnLink={text.btnLink} />
                ))}
            </div>
        </section>
    );
}

export default image;
