import { atom } from 'jotai';
import { PrimitiveAtom, WritableAtom } from 'jotai/esm/vanilla/atom';

const priceAtom = atom(10);
const messageAtom = atom('hello');
const productAtom = atom({ id: 12, name: 'good stuff' });

const readOnlyAtom = atom((get) => get(priceAtom) * 2);
const writeOnlyAtom = atom(
  null, // it's a convention to pass `null` for the first argument
  (get, set, discount: number) => {
    // `update` is any single value we receive for updating this atom
    set(priceAtom, get(priceAtom) - discount);
  }
);
const readWriteAtom = atom(
  (get) => get(priceAtom) * 2,
  (get, set, newPrice: number) => {
    set(priceAtom, newPrice / 2);
    // you can set as many atoms as you want at the same time
  }
);

// const readOnlyReallyAtom = atom<number>(0, (get, set, newPrice: number) => {
//   set(readOnlyReallyAtom, newPrice / 2);
// });

const writeOnlyReallyAtom = atom<undefined, [number], void>(
  undefined,
  (get, set, newPrice: number) => {
    set(priceAtom, newPrice);
  }
);

const writeAndReadAtom = atom<number, [number], void>(
  0,
  (get, set, newPrice) => {
    set(priceAtom, newPrice);
  }
);

const writeAndReadMoreAtom = atom<number, [number, string], void>(
  0,
  (get, set, newPrice, words) => {
    set(priceAtom, newPrice);
    console.info(words);
  }
);

const writeAndReadAtom1 = atom(0, (get, set, newPrice: number) => {
  set(priceAtom, newPrice);
});

const writeDerivedAtom = atom<number>((get) => get(priceAtom));
