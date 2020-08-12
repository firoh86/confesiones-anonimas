import React from 'react';
import './about.scss';

const About = () => {
  return (
    <div className="about">
      <div className="container container--top">
        <h1 className="header__title">Sobre Nosotros</h1>
        <h3 className="section__title">¿Quienes somos?</h3>
        <p className="section__text">
          Nuestra comunidad de{' '}
          <a
            className="link"
            href="https://www.facebook.com/SoloConfesionesAnonimas"
            title="Facebook"
            rel="noopener noreferrer"
            target="_blank"
          >
            Facebook
          </a>{' '}
          ya ha superado los 5mil seguidores y cuenta con más de 500 confesiones
          completamente anónimas.
        </p>

        <p className="section__text">
          Somos una comunidad en crecimiento que comparte experiencias
          personales de forma completamente anónima y segura.
        </p>
      </div>
      <div className="container">
        <h3 className="section__title">¿Que hacemos?</h3>
        <p className="section__text">
          Llevamos 4 años trabajando juntos para crear un espacio seguro y
          anónimo, donde podais expresaros de manera completamente libre y
          contar vuestras experiencias personales con el fin de recibir feedback
          y segundas opiniones.
        </p>
      </div>
      <div className="container container--bottom">
        <h3 className="section__title">Nuestra historia</h3>
        <p className="section__text">
          Creamos nuestra comunidad en facebook en{' '}
          <span className="link"> 17 de junio de 2016</span> con el fin de
          compartir experiencias divertidas y de todo tipo.
        </p>
        <p className="section__text">
          Pero con el tiempo nos hemos dado cuenta de que podíamos llegar mucho
          más allá.
        </p>
        <p className="section__text">
          Como cualquier otra red social hemos tenido la oportunidad de conectar
          a la gente, de una forma no directa y les hemos dado un lugar donde
          expresar cosas que no podían en sus circulos comúnes.
        </p>
        <p className="section__text">
          Nuestra actual misión es seguir creciendo y ofrecer este mísmo
          servicio de una forma más profesional.
        </p>
        <p className="section__text">
          Siempre es bueno tener un lugar donde poder hablar de todo y liberarse
          quizás de esas cargas tan pesadas que llevamos a lo largo de nuestro
          camino.
        </p>
      </div>
    </div>
  );
};

export default About;
