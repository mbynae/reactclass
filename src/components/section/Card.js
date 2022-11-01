import React from "react";

const cardTitle = {
    title: "과일로 만든 다양한 음식",
    desc: "과일로 만든 맛있고 다양한 대표적인 음식을 소개합니다!",
};

const cardCont = [
    {
        title: "과일 샐러드",
        desc: "과일 샐러드는 다양한 야채와 과일을 섞어 넣고 소스에 버무려 먹는 대표적인 과일 음식입니다. 다양한 음식과 어울리며, 콘프레이크, 드레싱, 요구르트 등과 곁들어 먹기도 합니다.",
        cardImg: "card_bg01_01.jpg",
        cardLink: "/",
    },
    {
        title: "과일 타르트",
        desc: "과일 타르트는 비스켓 위에 크림과 갖가지 과일을 올려 먹는 달콤한 과자입니다. 유럽에서 오랜 역사를 가지고 있으며, 나라와 지역별로 종류도 다양해 많은 나라에서 사랑받고있습니다.",
        cardImg: "card_bg01_02.jpg",
        cardLink: "/",
    },
    {
        title: "과일 화채",
        desc: "과일 화채는 탄산수나 우유에 과일을 넣어 시원하게 해서 먹는 여름용 별미 음식입니다. 화채는 우리나라의 전통 음식으로 다양한 화채가 존재하나 특히 과일 화채가 가장 사랑받고있습니다.",
        cardImg: "card_bg01_03.jpg",
        cardLink: "/",
    },
];

const CardCont = ({ title, desc, cardImg, cardLink }) => {
    return (
        <article className="card">
            <figure className="card__header">
                <img src={`assets/img/${cardImg}`} alt="아기 리트리버에 대해 알아보기" />
            </figure>
            <div className="card__body">
                <h3 className="title">{title}</h3>
                <p className="desc">{desc}</p>
                <a className="btn" href={`${cardLink}`}>
                    더 자세히 보기
                    <span aria-hidden="true">
                        <svg width="71" height="8" viewBox="0 0 71 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M70.3536 4.35355C70.5488 4.15829 70.5488 3.84171 70.3536 3.64645L67.1716 0.464466C66.9763 0.269204 66.6597 0.269204 66.4645 0.464466C66.2692 0.659728 66.2692 0.976311 66.4645 1.17157L69.2929 4L66.4645 6.82843C66.2692 7.02369 66.2692 7.34027 66.4645 7.53553C66.6597 7.7308 66.9763 7.7308 67.1716 7.53553L70.3536 4.35355ZM0 4.5H70V3.5H0V4.5Z"
                                fill="black"
                            />
                        </svg>
                    </span>
                </a>
            </div>
        </article>
    );
};

function card({ attr }) {
    return (
        <section id="cardType" className={`card__wrap ${attr[0]} ${attr[1]} ${attr[2]}`}>
            <h2>{cardTitle.title}</h2>
            <p>{cardTitle.desc}</p>
            <div className={`card__inner ${attr[3]}`}>
                {cardCont.map((cont, index) => (
                    <CardCont key={index} title={cont.title} desc={cont.desc} cardImg={cont.cardImg} cardLink={cont.cardLink} />
                ))}
                {/* <article className="card">
                    <figure className="card__header">
                        <img src="assets/img/card_bg01_01.jpg" alt="아기 리트리버에 대해 알아보기" />
                    </figure>
                    <div className="card__body">
                        <h3 className="title">과일 샐러드</h3>
                        <p className="desc">
                            과일 샐러드는 다양한 야채와 과일을 섞어 넣고 소스에 버무려 먹는 대표적인 과일 음식입니다. 다양한 음식과 어울리며, 콘프레이크, 드레싱, 요구르트 등과 곁들어 먹기도 합니다.
                        </p>
                        <a className="btn" href="/">
                            더 자세히 보기
                            <span aria-hidden="true">
                                <svg width="71" height="8" viewBox="0 0 71 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M70.3536 4.35355C70.5488 4.15829 70.5488 3.84171 70.3536 3.64645L67.1716 0.464466C66.9763 0.269204 66.6597 0.269204 66.4645 0.464466C66.2692 0.659728 66.2692 0.976311 66.4645 1.17157L69.2929 4L66.4645 6.82843C66.2692 7.02369 66.2692 7.34027 66.4645 7.53553C66.6597 7.7308 66.9763 7.7308 67.1716 7.53553L70.3536 4.35355ZM0 4.5H70V3.5H0V4.5Z"
                                        fill="black"
                                    />
                                </svg>
                            </span>
                        </a>
                    </div>
                </article>
                <article className="card">
                    <figure className="card__header">
                        <img src="assets/img/card_bg01_02.jpg" alt="아기 리트리버에 대해 알아보기" />
                    </figure>
                    <div className="card__body">
                        <h3 className="title">과일 타르트</h3>
                        <p className="desc">
                            과일 타르트는 비스켓 위에 크림과 갖가지 과일을 올려 먹는 달콤한 과자입니다. 유럽에서 오랜 역사를 가지고 있으며, 나라와 지역별로 종류도 다양해 많은 나라에서 사랑받고
                            있습니다.
                        </p>
                        <a className="btn" href="/">
                            더 자세히 보기
                            <span aria-hidden="true">
                                <svg width="71" height="8" viewBox="0 0 71 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M70.3536 4.35355C70.5488 4.15829 70.5488 3.84171 70.3536 3.64645L67.1716 0.464466C66.9763 0.269204 66.6597 0.269204 66.4645 0.464466C66.2692 0.659728 66.2692 0.976311 66.4645 1.17157L69.2929 4L66.4645 6.82843C66.2692 7.02369 66.2692 7.34027 66.4645 7.53553C66.6597 7.7308 66.9763 7.7308 67.1716 7.53553L70.3536 4.35355ZM0 4.5H70V3.5H0V4.5Z"
                                        fill="black"
                                    />
                                </svg>
                            </span>
                        </a>
                    </div>
                </article>
                <article className="card">
                    <figure className="card__header">
                        <img src="assets/img/card_bg01_03.jpg" alt="아기 리트리버에 대해 알아보기" />
                    </figure>
                    <div className="card__body">
                        <h3 className="title">과일 화채</h3>
                        <p className="desc">
                            과일 화채는 탄산수나 우유에 과일을 넣어 시원하게 해서 먹는 여름용 별미 음식입니다. 화채는 우리나라의 전통 음식으로 다양한 화채가 존재하나 특히 과일 화채가 가장 사랑받고
                            있습니다.
                        </p>
                        <a className="btn" href="/">
                            더 자세히 보기
                            <span aria-hidden="true">
                                <svg width="71" height="8" viewBox="0 0 71 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M70.3536 4.35355C70.5488 4.15829 70.5488 3.84171 70.3536 3.64645L67.1716 0.464466C66.9763 0.269204 66.6597 0.269204 66.4645 0.464466C66.2692 0.659728 66.2692 0.976311 66.4645 1.17157L69.2929 4L66.4645 6.82843C66.2692 7.02369 66.2692 7.34027 66.4645 7.53553C66.6597 7.7308 66.9763 7.7308 67.1716 7.53553L70.3536 4.35355ZM0 4.5H70V3.5H0V4.5Z"
                                        fill="black"
                                    />
                                </svg>
                            </span>
                        </a>
                    </div>
                </article> */}
            </div>
        </section>
    );
}

export default card;
