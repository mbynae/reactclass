import React from "react";

const textTitle = {
    subTitle: "Colors of fruits",
    title: "6가지 색깔의 과일",
};

const textCard = [
    {
        title: "빨간색(Red)",
        desc: "화려하고 정렬적인 빨간색은 사람의 식욕을 돋구는 특징이 있습니다. 이런 식욕을 돋구는 색을 가진 과일은 딸기, 체리, 사과 등 다양하죠.",
        textLink: "/",
        iconClass: "t1",
    },
    {
        title: "노란색(Yellow)",
        desc: "명량하고 달콤한 느낌을 주는 노란색의 음식은 바나나가 대표하고 있습니다. 또한 열대과일 하면 빼놓을 수 없는 파인애플도 있죠!",
        textLink: "/",
        iconClass: "t2",
    },
    {
        title: "초록색(Green)",
        desc: "마음이 진정되는 자연의 색인 초록색 역시 맛있는 과일을 내포하고 있습니다. 달콤한 멜론부터 시큼한 매실까지 맛도 다양하죠.",
        textLink: "/",
        iconClass: "t3",
    },
    {
        title: "오랜지색(Orange)",
        desc: "오랜지색은 말 그대로 오랜지의 색깔입니다. 세계 많은 나라에서 사랑받는 오랜지는 한라봉, 천혜향 등 종류도 다양하며, 가볍게 먹는 귤 역시 대표적인 과일입니다.",
        textLink: "/",
        iconClass: "t4",
    },
    {
        title: "보라색(Purple)",
        desc: "대표적인 보라색 과일하면 역시 포도죠! 과일로도, 와인으로도 너무나도 다양하게 쓰이는 음식입니다. 또한 여러 베리류 과일 역시 사랑받는 과일입니다.",
        textLink: "/",
        iconClass: "t5",
    },
    {
        title: "분홍색(Pink)",
        desc: "빨간색보다 은은하고 부드러운 느낌을 주는 분홍색도 달달하고 향기로운 식욕을 주는 색입니다. 분홍색에 속하는 과일로는 복숭아와 연한 색깔의 수박 등 보기만 해도 침이 고이는 음식이있죠.",
        textLink: "/",
        iconClass: "t6",
    },
];

const TextCard = ({ title, desc, textLink, iconClass }) => {
    return (
        <div className={`text ${iconClass}`}>
            <h3 className="text__title">{title}</h3>
            <p className="text__desc">{desc}</p>
            <a className="text_btn" href={`${textLink}`}>
                더보기
            </a>
        </div>
    );
};

function text({ attr }) {
    return (
        <section id="textType" className={`text__wrap ${attr[0]} ${attr[1]}`}>
            <span>{textTitle.subTitle}</span>
            <h2 className="mb70">{textTitle.title}</h2>
            <div className={`text__inner ${attr[2]}`}>
                {textCard.map((text, index) => (
                    <TextCard key={index} title={text.title} desc={text.desc} textLink={text.textLink} iconClass={text.iconClass} />
                ))}
                ;
            </div>
        </section>
    );
}

export default text;
