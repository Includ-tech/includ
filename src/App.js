import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Header } from "./components/header/header";
import { Home } from "./components/home/home";
import { About } from "./components/about/about";
import { Portfolio } from "./components/portfolio/portfolio";
import { Services } from "./components/services/services";
import { Contact } from "./components/contact/contact";
import { Footer } from "./components/footer/footer";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Home />
        <About />
        <Services id="services" />
        <Portfolio id="portfolio" />
        <Contact id="contact" />
        <Footer />
        {/* <Router>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/portfolio">
              <Portfolio />
            </Route>
            <Route path="/services">
              <Services />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router> */}
      </main>
    </div>
  );
}

export default App;
