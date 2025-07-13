import { BrowserRouter } from "react-router-dom";
import { Hero, Header, Project, Resume, Skills, About } from "./components";
const App = () => {
  return (
    <BrowserRouter>
      <Hero />
      <Header />
      <Project />
      <Resume />
      <Skills />
      <About />
    </BrowserRouter>
  );
};

export default App;
