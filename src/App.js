import React from "react";
import Header from "./components/layout/Header";
import Slider from "./components/section/Slider";
import Image from "./components/section/Image";
import ImageText from "./components/section/ImageText";
import Card from "./components/section/Card";
import Banner from "./components/section/Banner";
import Text from "./components/section/Text";
import Footer from "./components/layout/Footer";
import Main from "./components/layout/Main";

function App() {
  //앞에 대문자쓰면 컨퍼런트(include랑 기능 같음)
  return (
    //노드.js는 형제가 한번에 여러개 있으면 안되서 이렇게 박스로 묶어야됨
    <>
      {/* 헤더를 php처럼 임포트 시키기 위해 이런식으로 쓰고 위에다 주소를 연결함 */}
      <Header fonts="LocusSang" /> {/* 변수로 설정해서 css를 넣을 수 있음 */}
      <Main>
        {" "}
        {/* 이런식으로 프롭스 시킬 수 있음(Main.js 참조) */}
        <Slider />
        <Image attr={["section", "nexon", "container"]} />
        <ImageText attr={["section", "nexon", "gray", "container"]} />
        <Card attr={["section", "nexon", "gray", "container"]} />
        <Banner fonts="nexon" />
        <Text attr={["section", "nexon", "container"]} />
      </Main>
      <Footer attr={["section", "nexon", "gray", "container"]} />
    </>
  );
}

export default App;
