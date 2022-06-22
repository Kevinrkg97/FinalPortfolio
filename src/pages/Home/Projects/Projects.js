import React, {useState} from 'react';
import {
    ProjectsSection,
    ProjectsWrapper,
    Title,
    TextTitle,
    ProjectsContainer,
    Card,
    CardImage,
    CardShadow,
    ButtonCard,
    IconTech
} from './ProjectsStyles';
import { projects } from '../../../data/projectsData';
import Modal from '../../../components/Modal/Modal';

const Projects = () => {

    const [openModal, setOpenModal] = useState(false);
    const [element, setElement] = useState({});

    const getElement = (el) =>{
        setOpenModal(true);
        setElement(el);
    }

    return (
        <ProjectsSection id='projects'>
            <ProjectsWrapper>
            <Title>
                    <TextTitle>P</TextTitle>
                    <TextTitle>r</TextTitle>
                    <TextTitle>o</TextTitle>
                    <TextTitle>y</TextTitle>
                    <TextTitle>e</TextTitle>
                    <TextTitle>c</TextTitle>
                    <TextTitle>t</TextTitle>
                    <TextTitle>o</TextTitle>
                    <TextTitle>s</TextTitle>
                </Title>
               
                <ProjectsContainer>
                        {projects.map((el, index) => (
                            <Card key={index}  >
                                <CardShadow>
                                    <ButtonCard onClick={() => getElement(el) } >Ver más</ButtonCard>
                                    <IconTech src={el.tech} loading="lazy"/>
                                    <IconTech src={el.tech1} loading="lazy"/>
                                    <IconTech src={el.tech2} loading="lazy"/>
                                    <IconTech src={el.tech3} loading="lazy"/>
                                </CardShadow>
                                <CardImage src={el.image} loading="lazy" alt={el.name} />
                            </Card>
                        ))}
                                
                        <Modal open={openModal} onClose={() => setOpenModal(false)} e={element} />

                </ProjectsContainer>
               

            </ProjectsWrapper>
            
        </ProjectsSection>
    );
}



export default Projects;