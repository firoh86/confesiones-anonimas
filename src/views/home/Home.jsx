import React from 'react';
import './home.scss';
// Components

import Card from '../../components/card/Card';
const Home = () => {
  return (
    <div className="home">
      <div className="container container--top">
        <h1 className="home__title">Solo confesiones anónimas</h1>
      </div>
      <div className="container confesions">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className="container container--bottom"></div>
    </div>
  );
};

export default Home;
