import "./App.css";
import Hiro from "./components/Hiro";
import Menu from "./components/Menu";

const App = () => {
    return (
        <div id="app">
            <Menu />
            <Hiro />
        </div>
    );
}

export default App;