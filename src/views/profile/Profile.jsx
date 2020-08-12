import React from 'react';
import './profile.scss';

// Font awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faCalendar,
  faQuoteLeft,
} from '@fortawesome/free-solid-svg-icons';

const Profile = () => {
  return (
    <div className="profile">
      <div className="vertical-center  profile__header">
        <div className="profile__image__container">
          <img
            src="https://writestylesonline.com/wp-content/uploads/2018/11/Three-Statistics-That-Will-Make-You-Rethink-Your-Professional-Profile-Picture-1024x1024.jpg"
            alt="profilepic"
            className="profile__image"
          />
        </div>
        <button className="button profile__button">Editar Perfil</button>
      </div>
      <div className="container vertical-center">
        <div className="horizontal-center">
          <FontAwesomeIcon icon={faUser} className="link-icon" />
          <span>Sara la fresa</span>
        </div>
        <div className="horizontal-center">
          <FontAwesomeIcon icon={faCalendar} className="link-icon" />
          <span>Se unió en Junio 2016</span>
        </div>
      </div>
      <div className=" container container--bottom ">
        <p className="quote">
          <FontAwesomeIcon icon={faQuoteLeft} className="quote__icon" />
          Las rosas son rojas las amapolas amarillas yo soy un machote y tu
          jippi afeitate esas patillas. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quo eveniet eum quibusdam, odit cupiditate omnis
          ipsam quod soluta velit. Sunt aliquam dolor voluptas at illum. Amet
          velit sequi voluptatem? Accusamus?
        </p>
      </div>
    </div>
  );
};

export default Profile;
