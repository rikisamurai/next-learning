'use client';
import { makeAutoObservable, reaction } from 'mobx';
import { observer } from 'mobx-react-lite';
import React from 'react';

const sceneEnum = {
  target: 'targetFirst',
  video: 'videoFirst'
};

class Store {
  scene = sceneEnum.target;
  target = '';
  video = '';

  constructor() {
    makeAutoObservable(this);

    reaction(
      () => this.target,
      (target) => {
        if (this.scene === sceneEnum.target && target) {
          this.video = this.video + '✅video changed after target:' + target;
        }
      }
    );

    reaction(
      () => this.video,
      (video) => {
        if (this.scene === sceneEnum.video && video) {
          this.target = this.target + '✅target changed after video:' + video;
        }
      }
    );
  }

  get combo() {
    return `${this.target}-${this.video}`;
  }

  setScene(value) {
    this.target = '';
    this.video = '';
    this.scene = value;
  }

  setTarget(value) {
    this.target = value;
  }

  setVideo(value) {
    this.video = value;
  }
}

const store = new Store();

const MyComponent = observer(() => {
  return (
    <div>
      <h1>Scene: {store.scene}</h1>
      <h4>Target: {store.target}</h4>
      <h4>Video: {store.video}</h4>
      <h4>Combo: {store.combo}</h4>
      <button onClick={() => store.setTarget(store.target + '[new target]')}>
        Update Target
      </button>
      <button onClick={() => store.setVideo(store.video + '[new video]')}>
        Update Video
      </button>
      <button onClick={() => store.setScene(sceneEnum.target)}>
        Set Scene to Target First
      </button>
      <button onClick={() => store.setScene(sceneEnum.video)}>
        Set Scene to Video First
      </button>
    </div>
  );
});

export default MyComponent;
