import { Header, About } from "./Sections";
import { MainHomeContainer } from "./MainHome.elements";

const MainHome = () => {
    return (
        <MainHomeContainer>
            <Header />
            <About />
        </ MainHomeContainer>
    )
}

export default MainHome;