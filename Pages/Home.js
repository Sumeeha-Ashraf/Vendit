import React from 'react';

import Header from '../Components/Header/Header';

import Posts from '../Components/Posts/Posts';


function Home(props) {
  return (
    <div className="homeParentDiv">
      <Header />
      <Posts/>
    </div>
  );
}

export default Home;
 
