import * as R from 'ramda';

const hasSearchParam = R.curry((param: string, searchParams: URLSearchParams) =>
  searchParams.has(param),
);

const hasAnySearchParam = (searchParams: URLSearchParams, params: string[]) =>
  R.any((param: string) => hasSearchParam(param, searchParams), params);

// 使用示例
const urlParams = new URLSearchParams('?param1=value1&param2=value2');
const paramsToCheck = ['param1', 'param3', 'param4'];

console.log(hasAnySearchParam(urlParams, paramsToCheck)); // 输出：true

console.info(R.ap([R.multiply(2)], [1,2,3])); //=> [2, 4, 6, 4, 5, 6]