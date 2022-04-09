// Importantes

// Componentes internos
import NavBar from "./components/navbar";
import Sections from "./components/sections";
import SectionOne from "./components/sectionOne";
import Separation from "./components/separation";
import Carousel from "./components/carousel";
// CSS

// Textos e IMG's
import {
  firstText,
  secondText,
  thirdText,
  fourthText,
  fifthText,
  sixthText,
} from "./assets/texts/texts.js";
import firstImg from "./assets/img/First-img.jpg";

const App = () => {
  return (
    <>
      <NavBar />
      <SectionOne />
      <Separation />
      {/*Primera sección*/}
      <Sections
        firstText={firstText}
        secondText={secondText}
        leftRight={true}
        firstImg={firstImg}
      />
      <Separation />
      {/*Segunda sección*/}
      <Sections
        firstText={thirdText}
        secondText={fourthText}
        leftRight={false}
        firstImg={firstImg}
      />
      <Separation />
      {/*Tercera sección*/}
      <Sections
        firstText={fifthText}
        secondText={sixthText}
        leftRight={true}
        firstImg={firstImg}
      />
      <Separation />
      <Carousel />
      <Separation />
    </>
  );
};

export default App;
