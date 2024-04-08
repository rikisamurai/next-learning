'use client';

import { useEffect, useState } from 'react';

export default function Page() {
  const [count, setCount] = useState(0);

  // useEffect(() => {
  //   let ignore = false;
  //   console.info('ignore', ignore);
  //   console.info('effect', count);
  //   return () => {
  //     ignore = true;
  //     console.info('ignore', ignore);
  //     console.info('clean up', count);
  //   };
  // }, [count]);

  return (
    <div>
      effect{count}
      <button onClick={() => setCount((pre) => pre + 1)}>click me!</button>
    </div>
  );
}

const deepClone = (target) => {
  // 非对象类型直接返回
  if (typeof target !== 'object') return target;
  let cloneTarget = Array.isArray(target) ? [] : {};
  // for in target会包括原型链上继承的属性,一般不考虑
  for (let key of Reflect.ownKeys(target)) {
    // 这里每次通过递归得到属性,省去判断是否为对象的代码
    cloneTarget[key] = deepClone(target[key]);
  }
  return cloneTarget;
};

let sym = Symbol('deepClone');
const target = {
  field1: 1,
  field2: undefined,
  field3: 'ConardLi',
  field4: {
    child: 'child',
    child2: {
      child2: 'child2'
    }
  },
  [sym]: 'symbol'
};
const copy = deepClone(target);
console.log(copy);
console.log(copy.field4.child2 === target.field4.child2);
console.log(copy[sym] === target[sym]);
