import './App.css';
import styled from 'styled-components';
import { Header } from './layout/header/Header';
import { Main } from './layout/sections/main/Main';
import { About } from './layout/sections/about/About';
import { WorkExperience } from './layout/sections/workExperience/WorkExperience';

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <About/>
            <WorkExperience/>
        </div>
    );
}

export default App;

const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: #e91e63;
`;