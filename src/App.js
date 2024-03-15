import { Layout } from "./components/Layout";
import About from "./pages/About";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Projects from "./pages/Projects";
import ArticlesIndex from "./pages/Articles";


function App() {
  return (
    <Router>
    <div className="">
      <Layout>
       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/articles" element={<ArticlesIndex />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Layout>

    </div>
    </Router>
  );
}

export default App;
