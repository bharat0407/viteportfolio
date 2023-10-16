import "./App.scss";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Navbar from "./components/navbar/Navbar";
import Parralax from "./components/parralax/Parralax";
import Portfolio from "./components/portfolio/Portfolio";

const App = ()=> {

  return (
    <>
    <Cursor/>
      <section id="HomePage">
        <Navbar/>
        <Hero/>
      </section>
      <section id="Services">
        <Parralax type="Services"/>
        </section>
      <section id="Services">
        <Services/>
         </section>
      <section id="Portfolio"> 
        <Parralax type="Portfolio"/>
        </section>
        <Portfolio />
      <section id = "Contacts"><Contact/></section>

    </>
  )
}
export default App;
