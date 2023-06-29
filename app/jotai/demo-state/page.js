'use client';
import React, { useEffect } from 'react';
import { atom, useAtom } from 'jotai';

const sceneEnum = {
  target: 'targetFirst',
  video: 'videoFirst'
};

// 定义 scene、video、target 和 combo 状态
const sceneAtom = atom(sceneEnum.target);
const videoAtom = atom('');
const targetAtom = atom('');
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

  // video 依赖于 target
  useEffect(() => {
    if (scene === sceneEnum.target && target) {
      setVideo('✅video changed after target:' + target + ' || ');
    }
  }, [scene, target, setVideo]);

  // target 依赖于 video
  useEffect(() => {
    if (scene === sceneEnum.video && video) {
      setTarget('✅target changed after video' + video + ' || ');
    }
  }, [scene, video, setTarget]);

  // 渲染 UI
  return (
    <div>
      <h1>📷Scene: {scene}</h1>
      <h4>Target: {target}</h4>
      <h4>Video: {video}</h4>
      <h4>Combo: {combo}</h4>
      <button onClick={() => setTarget(target + '[new target]')}>
        Update Target
      </button>
      <button onClick={() => setVideo(video + '[new video]')}>
        Update Video
      </button>
      <button
        onClick={() => {
          setTarget('');
          setVideo('');
          setScene(sceneEnum.target);
        }}
      >
        Set Scene to Target First
      </button>
      <button
        onClick={() => {
          setTarget('');
          setVideo('');
          setScene(sceneEnum.video);
        }}
      >
        Set Scene to Video First
      </button>
    </div>
  );
}

export default MyComponent;
