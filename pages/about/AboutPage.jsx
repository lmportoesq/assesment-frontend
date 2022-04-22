import { Link } from 'react-router-dom'
import './AboutPage.css';

function AboutPage(){
    return(
        <div className="main-about">
            <div className="main-about__data">
                <div className='main-about__data__image'>
                    <img src='../images/Foto.jpg' className = 'main-about__photo'/>
                </div>
                <div className='main-about__data_text'>
                    <h1 id='h1'>Luis Miguel Porto Esquivel</h1>
                    <hr />
                    <p>Desarrollador Web profesional, de la ciudad de Cartagena, me apasiona todo lo relacionado
                        con tecnologías y el mundo de la programación. Actualmente curso una especialización en
                        nuevas tecnologías con Make it Real en la que he aprendido muchísimas cosas entre ellas:
                    </p>
                    <ul>
                        <li>Implementación del Framework más popular en la creación de front-end React</li>
                        <li>Manejo de herramientas para el control de versiones como GitHub</li>
                        <li>Diseño y manejo de bases de datos no relacionales como Mongo DB</li>
                    </ul>
                    <p>Escríbeme a lmportoesq@gmail.com</p>
                    <Link to= "">Git Hub</Link>
                    <Link to="/" className='main-cards__link'>Ir a la home page </Link>
                </div>
            </div>
        </div>
    )
}
export default AboutPage;