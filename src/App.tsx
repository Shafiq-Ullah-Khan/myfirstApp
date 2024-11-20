import NavBar from "./components/NavBar"
import Logo from "../src/assets/omnifood-logo.png";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import WorkSection from "./components/WorkSection";
import MealsSection from "./components/MealsSection";
import Testimonal from "./components/Testimonal";
import PricingText from "./components/PricingText";
import SignUpSection from "./components/SignUpSection";
import Footer from "./components/Footer";
import "../src/App.css";

function App() {
  return (
    <>
      <NavBar logo = {Logo}/>
      <HeroSection/>
      <FeaturesSection/>
      <WorkSection/>
      <MealsSection/>
      <Testimonal/>
      <PricingText/>
      <SignUpSection/>
      <hr />
      <Footer logo={Logo}/>
    </>
  )
}

export default App
