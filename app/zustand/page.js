'use client';
import React from 'react';
import { create } from 'zustand';

const sceneEnum = {
  target: 'targetFirst',
  video: 'videoFirst'
};

const useStore = create((set) => ({
  scene: sceneEnum.target,
  target: '',
  video: '',
  combo: '',
  setScene: (value) =>
    set((state) => {
      state.target = '';
      state.video = '';
      state.scene = value;
    }),
  setTarget: (value) =>
    set((state) => {
      state.target = value;
      if (state.scene === sceneEnum.target && value) {
        state.video = state.video + '✅video changed after target:' + value;
      }
      state.combo = `${state.target}-${state.video}`;
    }),
  setVideo: (value) =>
    set((state) => {
      state.video = value;
      if (state.scene === sceneEnum.video && value) {
        state.target = state.target + '✅target changed after video' + value;
      }
      state.combo = `${state.target}-${state.video}`;
    })
}));

function MyComponent() {
  const { scene, target, video, combo, setScene, setTarget, setVideo } =
    useStore((state) => [
      state.scene,
      state.target,
      state.video,
      state.combo,
      state.setScene,
      state.setTarget,
      state.setVideo
    ]);

  // 渲染 UI
  return (
    <div>
      <h1>Scene: {scene}</h1>
      <h4>Target: {target}</h4>
      <h4>Video: {video}</h4>
      <h4>Combo: {combo}</h4>
      <button onClick={() => setTarget(target + '[new target]')}>
        Update Target
      </button>
      <button onClick={() => setVideo(video + '[new video]')}>
        Update Video
      </button>
      <button onClick={() => setScene(sceneEnum.target)}>
        Set Scene to Target First
      </button>
      <button onClick={() => setScene(sceneEnum.video)}>
        Set Scene to Video First
      </button>
    </div>
  );
}

export default MyComponent;
