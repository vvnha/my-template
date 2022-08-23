import * as React from 'react';
import Button from '../Button';
import './Profile.scss';

export interface IAppProps {}

export default function App(props: IAppProps) {
  return (
    <div className="container">
      <div className="profile-card">
        <div className="profile-card__header">
          <div className="background-image">
            <img
              src={'https://picsum.photos/id/1043/300/200'}
              alt="backgroundImage"
            />
          </div>

          <div className="avatar">
            <img src={'https://picsum.photos/id/1027/200/200'} alt="avatar" />
          </div>
        </div>
        <div className="profile-card__content">
          <div className="profile-card__content__name">
            <h1>Michelle Gomes</h1>
          </div>
          <div className="profile-card__content__job-title">
            <h3>UX/UI Designer</h3>
          </div>
          <div className="profile-card__content__description">
            <p>
              The beautiful range of Apple Naturalé that has an exciting mix of
              natural ingredients. With the Goodness of 100% Natural Ingredients
              The beautiful range of Apple Naturalé that has an exciting mix of
              natural ingredients. With the Goodness of 100% Natural Ingredients
            </p>
          </div>
          <div className="profile-card__content__button">
            <Button label="Contact" />
          </div>
        </div>
      </div>
    </div>
  );
}
