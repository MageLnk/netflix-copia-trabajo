// Importantes

// Componentes internos
import Faq from "./components/FAQ";
import Footer from "./components/footer";
import NavBar from "./components/navbar";
import Sections from "./components/sections";
import Carousel from "./components/carousel";
import SectionOne from "./components/sectionOne";
import Separation from "./components/separation";
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
      <Faq />
      <Separation />
      <Footer />
    </>
  );
};

export default App;
