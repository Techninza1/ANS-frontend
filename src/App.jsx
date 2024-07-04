import "./App.css";
import { useRef, useState ,useEffect} from "react";
import FirstContainer from "./components/FirstContainer/FirstContainer";
import NavBar from "./components/NavBar/NavBar";
import Dashboadimage from "./assets/images/Dashboadimage.gif";
import Dashboadimage2 from "./assets/images/Dashboadimage2.jpeg";
import Dashboadimage3 from "./assets/images/Dashboadimage3.webp";
import Dashboadimage4 from "./assets/images/Dashboardimage4.jpeg";
import CompnayLogoSlider from "./components/CompanyLogoSlider/CompnayLogoSlider";
import EcommerceContainer from "./components/ECommerceContainer/EcommerceContainer";
import ThirdContainer from "./components/ThirdContainer/ThirdContainer";
import FourthContainer from "./components/FourthContainer/FourthContainer";
import FormContainer from "./components/FormContainer/FormContainer";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Router } from "react-router-dom";
import { BsBehance } from "react-icons/bs";

function App() {
  const sliderData = [
    {
      text1: "Unlock Your E-Commerce success journey",
      para1:
        "With Kartapult, streamline your online advertising efforts. Easily manage, analyze, automate and optimize your ad campaigns to efficiently maximize your revenue",
      img1: Dashboadimage,
    },
    {
      text1: "Your extended e-commerce team",
      para1: "You focus on the product and brand, and leave the rest to us",
      img1: Dashboadimage2,
    },
    {
      text1: "E-commerce made easy in India",
      para1: "You focus on the product and brand, and leave the rest to us",
      img1: Dashboadimage3,
    },
    {
      text1: "Connecting brands and their consumers",
      para1: "You focus on the product and brand, and leave the rest to us",
      img1: Dashboadimage4,
    },
  ];

  const [onSlider, setOnSlider] = useState(0);

  
    const formRef = useRef(null);
  
    useEffect(() => {
      console.log('FormRef:', formRef.current);
    }, [formRef]);
  
    const scrollToForm = () => {
      if (formRef.current) {
        formRef.current.scrollIntoView({ behavior: 'smooth' });
      } else {
        console.error('formRef is null');
      }
    };


  return (
    <>
      <NavBar />
      <FirstContainer
        sliderData={sliderData[onSlider]}
        onSlider={onSlider}
        setOnSlider={setOnSlider}
        handleForm={scrollToForm}
      />
      <CompnayLogoSlider />
      <EcommerceContainer />
      <ThirdContainer/>
      <FourthContainer/>
      <FormContainer 
        ref={formRef}
      />
      <CompnayLogoSlider />
      <Footer/>

    </>
  );
}

export default App;
