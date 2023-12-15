import { produce } from 'immer';

let state = {
  name: 'Alice',
  age: 25,
  address: {
    city: 'New York',
    country: 'USA'
  },
  grade: {
    class: '1'
  }
};

let nextState = produce(state, (draftState) => {
  draftState.name = 'Bob';
  draftState.address.city = 'San Francisco';
});

console.info('state', state);
console.info('nextState', nextState);
console.info(state.grade === nextState.grade);
console.info(state.address === nextState.address);
