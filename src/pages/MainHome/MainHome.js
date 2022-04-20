import { Header, About, Projects} from "./Sections";
import { MainHomeContainer } from "./MainHome.elements";
import Contact from "../../components/Contact/Contact";

const MainHome = () => {
    return (
        <MainHomeContainer>
            <Header />
            <About />
            <Projects />
            {/* <Experience /> */}
            <Contact />
        </ MainHomeContainer>
    )
}

export default MainHome;