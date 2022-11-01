import React from "react";

const bannerInfo = {
    title: "저녁의 와인 한잔",
    desc1: "오늘 밤은 좋은 무드를 가지고 와인 한잔 어떨까요?",
    desc2: "와인은 포도를 발효시켜 만든 오랜 역사를 가진 양조주입니다.",
    small: "Let's try to wine!",
    bannerClass: "banner__wrap",
};

function banner(props) {
    return (
        <section id="bannerType" className={`${bannerInfo.bannerClass} ${props.fonts}`}>
            <h2 className="blind">배너 영역</h2>
            <div className="banner__inner">
                <h3 className="title">{bannerInfo.title}</h3>
                <p className="desc">
                    {bannerInfo.desc1}
                    <br />
                    {bannerInfo.desc2}
                </p>
                <span className="small">{bannerInfo.small}</span>
            </div>
        </section>
    );
}

export default banner;
