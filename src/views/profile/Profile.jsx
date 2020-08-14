import React, { useState } from 'react';
import './profile.scss';

// avatar
import Avatar001 from '../../avatars/avataaars001.svg';
import Avatar002 from '../../avatars/avataaars002.svg';
import Avatar003 from '../../avatars/avataaars003.svg';
import Avatar004 from '../../avatars/avataaars004.svg';
import Avatar005 from '../../avatars/avataaars005.svg';
import Avatar006 from '../../avatars/avataaars006.svg';
import Avatar007 from '../../avatars/avataaars007.svg';
import Avatar008 from '../../avatars/avataaars008.svg';
import Avatar009 from '../../avatars/avataaars009.svg';
import Avatar010 from '../../avatars/avataaars010.svg';

// Font awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faCalendar,
  faQuoteLeft,
} from '@fortawesome/free-solid-svg-icons';

const Profile = () => {
  // Avatars
  const avatars = [
    Avatar001,
    Avatar002,
    Avatar003,
    Avatar004,
    Avatar005,
    Avatar006,
    Avatar007,
    Avatar008,
    Avatar009,
    Avatar010,
  ];
  const [actualAvatar, setActualAvatar] = useState(avatars[0]);
  const [editProfile, seteditProfile] = useState(false);
  return (
    <div className="profile container container--top container--bottom">
      {!editProfile ? (
        <>
          <div className="vertical-center  profile__header">
            <div className="profile__image__container">
              <img src={actualAvatar} alt="" className="profile__image" />
            </div>
            <button
              className="button profile__button"
              onClick={() => seteditProfile(!editProfile)}
              title="Cambia la información de tu perfil"
            >
              Editar Perfil
            </button>
          </div>
          <div className="container vertical-center">
            <div className="horizontal-center">
              <FontAwesomeIcon icon={faUser} className="link-icon" />
              <span>Junior el pálido seco.</span>
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
              jippi afeitate esas patillas. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Quo eveniet eum quibusdam, odit
              cupiditate omnis ipsam quod soluta velit. Sunt aliquam dolor
              voluptas at illum. Amet velit sequi voluptatem? Accusamus?
            </p>
          </div>
        </>
      ) : (
        <>
          <div className=" horizontal-center">
            <h2>Elige tu nuevo avatar</h2>
          </div>
          <div className="container horizontal-center">
            <div className="avatars">
              {avatars.map((item, idx) => (
                <img
                  src={avatars[idx]}
                  alt=""
                  key={idx}
                  className="avatars__choice"
                  onClick={() => setActualAvatar(avatars[idx])}
                ></img>
              ))}
            </div>
          </div>
          <div className="container vertical-center">
            <div className="profile__image__container">
              <img src={actualAvatar} alt="" className="profile__image" />
            </div>
            <div className="input-field">
              <input
                type="text"
                placeholder="nuevo nombre"
                // onChange={handleChange}
                className="form-input"
                name="nickname"
                // value={email}
              />
            </div>
            <div className="input-field">
              <input
                type="text"
                placeholder="nueva frase descriptiva"
                // onChange={handleChange}
                className="form-input"
                name="quote"
                // value={email}
              />
            </div>
          </div>
          <div className="container vertical-center">
            <button className="button profile__button" title="guardar cambios">
              Guardar
            </button>
            <button
              className="button profile__button"
              onClick={() => seteditProfile(!editProfile)}
              title="Regresa sin efectuar cambios"
            >
              Volver
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Profile;
