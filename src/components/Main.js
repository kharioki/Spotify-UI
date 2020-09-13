import React from 'react';
import { ReactComponent as PlayIcon } from '../svgs/play.svg';

const Main = () => {
  return (
    <div className="main">
      <div className="upperNav">some text</div>
      <div className="mainContent">
        <div className="cardsWrap">
          <h1>Uniquely yours</h1>
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
            <span className="playIcon">
              <PlayIcon />
            </span>
          </div>
        </div>
        <div className="cardsWrap">
          <h2>Focus</h2>
          <p className="subText">Music to help you concentrate.</p>
          <div className="cardsWrapInner">
            <div className="card">
              <div className="cardImage">
                <img
                  src="https://images.unsplash.com/photo-1474149609615-ce5628f98c80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                  alt="peace and books"
                />
              </div>
              <div className="cardContent">
                <h3>Music for concentration</h3>
                <span>Music to help you concentrate.</span>
              </div>
              <span className="playIcon">
                <PlayIcon />
              </span>
            </div>
            <div className="card">
              <div className="cardImage">
                <img
                  src="https://images.unsplash.com/photo-1474149609615-ce5628f98c80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                  alt="peace and books"
                />
              </div>
              <div className="cardContent">
                <h3>Music for concentration</h3>
                <span>Music to help you concentrate.</span>
              </div>
              <span className="playIcon">
                <PlayIcon />
              </span>
            </div>
            <div className="card">
              <div className="cardImage">
                <img
                  src="https://images.unsplash.com/photo-1474149609615-ce5628f98c80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                  alt="peace and books"
                />
              </div>
              <div className="cardContent">
                <h3>Music for concentration</h3>
                <span>Music to help you concentrate.</span>
              </div>
              <span className="playIcon">
                <PlayIcon />
              </span>
            </div>
            <div className="card">
              <div className="cardImage">
                <img
                  src="https://images.unsplash.com/photo-1474149609615-ce5628f98c80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                  alt="peace and books"
                />
              </div>
              <div className="cardContent">
                <h3>Music for concentration</h3>
                <span>Music to help you concentrate.</span>
              </div>
              <span className="playIcon">
                <PlayIcon />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
