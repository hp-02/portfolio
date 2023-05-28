import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Menu from "./components/Menu";
import Project from "./components/Project";

const App = () => {
    return (
        <div id="app">
            <Menu />
            <About />
            <Project />
            <Contact />
        </div>
    );
}

export default App;