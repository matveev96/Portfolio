import './App.css';
import { Header } from './layout/header/Header';
import { Main } from './layout/sections/main/Main';
import { About } from './layout/sections/about/About';
import { Skills } from './layout/sections/skills/Skills';
import { Projects } from './layout/sections/projects/Projects';
import { Contacts } from './layout/sections/contacts/Contacts';
import { Footer } from './layout/footer/Footer';
import { Testimony } from './layout/sections/testimony/Testimony';
import { GoTopBtn } from './components/goTopBtn/GoTopBtn';



function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <About/>
            <Skills/>
            <Projects/>
            <Testimony/>
            <Contacts/>
            <Footer/>
            <GoTopBtn/>
        </div>
    );
}

export default App;
