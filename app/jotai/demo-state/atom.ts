import { atom, SetStateAction, WritableAtom } from 'jotai';
import { focusAtom } from 'jotai-optics';

const baseAtom = atom({ a: 5 }); // PrimitiveAtom<{a: number}>
const derivedAtom = focusAtom(baseAtom, (optic) => optic.prop('a')); // PrimitiveAtom<number>

interface MyObject {
  a: number;
  b: number;
}

type AtomType = WritableAtom<MyObject, MyObject, void>;

const objectAtom: AtomType = atom({
  a: 5,
  b: 10
});
const aAtom = focusAtom(objectAtom, (optic) => optic.prop('a'));
