import { atom } from 'jotai/index';
import { sceneAtom, sceneEnum } from './page';
import { targetAtom } from './targetAtom';

export const videoAtom = atom('', (get, set, value) => {
  set(videoAtom, value);
  if (get(sceneAtom) === sceneEnum.video && value) {
    set(targetAtom, get(targetAtom) + +'✅target changed after video' + value);
  }
});
