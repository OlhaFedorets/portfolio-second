import './App.css';
import {Header} from './layout/header/Header';
import {Main} from './layout/sections/main/Main';
import {Technologies} from './layout/sections/technologies/Technologies';
import {About} from './layout/sections/about/About';
import {Contacts} from './layout/sections/contacts/Contacts';
import {Particle} from "./components/particle/Particle";
import {Skills} from "./layout/sections/skills/Skills";
import {Projects} from "./layout/sections/projects/Projects";
import {Footer} from "./layout/footer/Footer";

function App() {
    return (
        <div className="App">
            <Particle/>
            <Header/>
            <Main/>
            <Technologies />
            <About/>
            <Skills/>
            <Projects/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
