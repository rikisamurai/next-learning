function produce(state, processor) {
  let changes = {};

  let draft = new Proxy(state, {
    get(target, prop) {
      return target[prop]; // 返回原始属性值
    },
    set(target, prop, value) {
      changes[prop] = value; // 存储修改的属性值
      return true;
    }
  });

  processor(draft); // 对草稿状态进行修改

  return { ...state, ...changes }; // 返回新的状态，结合原始状态和修改
}

const state = {
  name: 'Alice',
  age: 25,
  grade: {
    class: '123'
  },
  address: {
    city: 'New York',
    country: 'USA'
  }
};

const nextState = produce(state, (draftState) => {
  draftState.name = 'Bob';
  draftState.grade = {
    class: '1232'
  };
  draftState.address.city = 'San Francisco';
});
console.info('state', state);
console.info('nextState', nextState);
console.info(state.grade === nextState.grade);
console.info(state.address === nextState.address);
