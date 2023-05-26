import "./App.css";
import About from "./components/About";
import Menu from "./components/Menu";
import Project from "./components/Project";

const App = () => {
    return (
        <div id="app">
            <Menu />
            <About />
            <Project />
        </div>
    );
}

export default App;