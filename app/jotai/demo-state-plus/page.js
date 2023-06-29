/**
 * @file 在set中控制依赖
 */
'use client';
import React from 'react';
import { atom, useAtom } from 'jotai';

export const sceneEnum = {
  target: 'targetFirst',
  video: 'videoFirst'
};

// 定义 scene 状态
export const sceneAtom = atom(sceneEnum.target, (_, set, value) => {
  set(targetAtom, '');
  set(videoAtom, '');
  set(sceneAtom, value);
});

// 定义 target 和 video atoms，它们的值依赖于 scene，base target 和 base video
const targetAtom = atom('', (get, set, value) => {
  set(targetAtom, value);
  if (get(sceneAtom) === sceneEnum.target && value) {
    set(videoAtom, get(videoAtom) + '✅video changed after target:' + value);
  }
});

const videoAtom = atom('', (get, set, value) => {
  set(videoAtom, value);
  if (get(sceneAtom) === sceneEnum.video && value) {
    set(targetAtom, get(targetAtom) + +'✅target changed after video' + value);
  }
});

// 定义 combo 状态，它的值依赖于 video 和 target
const comboAtom = atom((get) => {
  const video = get(videoAtom);
  const target = get(targetAtom);
  return `${target}-${video}`;
});

function MyComponent() {
  const [scene, setScene] = useAtom(sceneAtom);
  const [video, setVideo] = useAtom(videoAtom);
  const [target, setTarget] = useAtom(targetAtom);
  const [combo] = useAtom(comboAtom);

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
