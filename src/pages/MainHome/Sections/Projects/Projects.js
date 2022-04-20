import {
    ProjectsContainer,
    ProjectsWrapper,
    ItemsContainer,
    Card
} from './Projects.elements';
import changoonga from '../../../../assets/Projects/changoonga.png';
import matrona from '../../../../assets/Projects/matrona.jpg';
import indicio from '../../../../assets/Projects/indicio.png';
import geoaplication from '../../../../assets/Projects/geoaplication.png';
import predict from '../../../../assets/Projects/predict.png';
import dbs from '../../../../assets/Projects/dbs.png';

const Projects = () => {
    return(
        <ProjectsContainer id='projects'>
            <ProjectsWrapper>
                <h2>PROYECTOS</h2>
                <ItemsContainer>
                    <Card> 
                        <a href='https://play.google.com/store/apps/details?id=com.changoonga.changoonga&hl=es_MX' alt='changoonga' target='_blank' rel="noreferrer">
                            <img src={changoonga} alt='changoonga' />
                        </a>
                    </Card>
                    <Card>
                        <a href='/' alt='matrona' target='_blank' rel="noreferrer"> 

                        <img src={matrona} alt='matrona' />
                        </a>
                    </Card>
                    <Card> 
                        <a href='https://github.com/Kevinrkg97/PredictCryptoPricesTkinter' alt='predict' target='_blank' rel="noreferrer">
                            <img src={predict} alt='predict' />
                        </a>
                    </Card>
                    <Card> 
                        <a href='/' alt='geoaplication' target='_blank' rel="noreferrer">
                            <img src={geoaplication} alt='geoaplication' />
                        </a>
                    </Card>
                    <Card> 
                        <a href='https://play.google.com/store/apps/details?id=com.gruporvi2.indiciomich&hl=es_MX' alt='indicio' target='_blank' rel="noreferrer">
                        <img src={indicio} alt='indicio' />
                        </a>
                    </Card>
                    <Card> 
                        <a href='https://digitalboostsolutions.com/' alt='dbs' target='_blank' rel="noreferrer">
                            <img src={dbs} alt='dbs' />
                        </a>
                    </Card>
                </ItemsContainer>
            </ProjectsWrapper>
        </ProjectsContainer>
    )
}

export default Projects;