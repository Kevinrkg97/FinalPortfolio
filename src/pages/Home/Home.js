import React from 'react';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';

import {
    Hero,
     About,
     Projects,
     Skills,
     Contact
} from './index';



const Home = () => {
    return(
        <>
            <Navbar />
            <Hero />
            <About />
            <Projects />
            <Skills />
            <Contact />
            <Footer />
            <ScrollToTop />
        </>    
        )
}

export default Home;