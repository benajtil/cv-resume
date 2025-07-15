import { BrowserRouter } from "react-router-dom";
import {
  Hero,
  Header,
  Projects,
  Timeline,
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
      <Timeline />
      <Projects />
      <Skills />
      <Contact />
    </BrowserRouter>
  );
};

export default App;
