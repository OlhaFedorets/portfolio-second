import './App.css';
import styled from 'styled-components';
import {Header} from './layout/header/Header';
import {Main} from './layout/sections/main/Main';
import {SocialNetworks} from './layout/sections/socialNetworks/SocialNetworks';
import {About} from './layout/sections/about/About';
import {WorkExperience} from './layout/sections/workExperience/WorkExperience';
import {Testimony} from './layout/sections/testimony/Testimony';
import {Contacts} from './layout/sections/contacts/Contacts';
import {Particle} from "./components/particle/Particle";

function App() {
    return (
        <div className="App">
            <Particle/>
            <Header/>
            <Main/>
            <SocialNetworks />
            <About/>
            <WorkExperience/>
            <Testimony/>
            <Contacts/>
        </div>
    );
}

export default App;
