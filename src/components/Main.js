import React from 'react';

const Main = () => {
  return (
    <div className="main">
      <div className="upperNav">some text</div>
      <div className="mainContent">
        <h1>Uniquely yours</h1>
        <div className="cardsWrap">
          <div className="card">
            <div className="cardImage">
              <img
                src="https://images.unsplash.com/photo-1474149609615-ce5628f98c80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                alt="peace and books"
              />
            </div>
            <div className="cardContent">
              <h3>Liked songs</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
