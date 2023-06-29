// 定义 target 和 video atoms，它们的值依赖于 scene，base target 和 base video
import { atom } from 'jotai/index';
import { sceneAtom, sceneEnum } from './page';
import { videoAtom } from './videoAtom';

export const targetAtom = atom('', (get, set, value) => {
  set(targetAtom, value);
  if (get(sceneAtom) === sceneEnum.target && value) {
    set(videoAtom, get(videoAtom) + '✅video changed after target:' + value);
  }
});
