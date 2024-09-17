import './App.css';
import styled from 'styled-components';
import { Header } from './layout/header/Header';
import { Main } from './layout/sections/main/Main';
import { SocialNetworks } from './layout/sections/social_networks/Social_Networks';


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <SocialNetworks/>
        </div>
    );
}

export default App;

const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: #e91e63;
`;