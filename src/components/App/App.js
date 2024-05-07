import "./App.css";
import Header from "../Header/Header";
import MainContent from "../MainContent/MainContent";
import hello from "../../assets/sounds/hello.mp3";


function App() {
    
    return (
        <div className="App">
            <Header />
            <MainContent />
            <audio style={{position:"absolute", left:"0"}} src={hello} controls autoPlay loop/>
        </div>
    );
}
export default App;
