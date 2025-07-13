import { BrowserRouter } from "react-router-dom";
import {
  Hero,
  Header,
  Projects,
  Resume,
  Skills,
  About,
  Contact,
} from "./components";
const App = () => {
  return (
    <BrowserRouter>
      <Hero />
      <Header />
      <About />
      <Resume />
      <Projects />
      <Skills />
      <Contact />
    </BrowserRouter>
  );
};

export default App;
