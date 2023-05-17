import * as R from 'ramda';

/** 自定义默认选中功能与运营约定字段 */
const defaultSelectCustom = {
  // 预算
  budget: 'growth_mission_budget',
  // 投放时长
  duration: 'growth_mission_duration',
  // 自动续费
  autoRenew: 'growth_mission_auto_renew',
} as const;
const defaultSelectCustomValues = Object.values(defaultSelectCustom);

type DefaultSelectCustomQueryValues =
  (typeof defaultSelectCustom)[keyof typeof defaultSelectCustom];

/**
 * 获取url search参数
 *
 * @param urlSearch url中的query部分, 一般为window.location.search
 * @returns {URLSearchParams} 返回URLSearchParams实例
 */
const getUrlSearchParams = (urlSearch: string) =>
  new URLSearchParams(urlSearch);

// 判断url search params中是否有被检查的参数
const hasSearchParam = R.curry(
  /**
   * 判断url search params中是否有被检查的参数
   *
   * @param {string} paramToCheck - 需要进行检查的参数
   * @param {URLSearchParams} searchParams - URLSearchParams实例
   * @returns {boolean} - searchParams中是否含有给定的param参数
   */
  <T extends string>(paramToCheck: T, searchParams: URLSearchParams) =>
    searchParams.has(paramToCheck),
);

/** 判断url search params中是否有被检查的参数 - 数组形式 */
const hasSearchParamArr = R.curry(
  <T extends string[]>(paramValues: T, searchParams: URLSearchParams) =>
    paramValues.map(param => hasSearchParam(param, searchParams)),
);

const getCustomParamArr = hasSearchParamArr(defaultSelectCustomValues);
const pipeCustom = R.pipe(
  // 1.获取url中的search params
  getUrlSearchParams,
  // 2.判断search params中是否有自定义默认选中的参数, 返回boolean数组
  getCustomParamArr,
  R.any(Boolean),
);

const urlSearch = '?growth_mission_budget=value1&growth_mission_duration=value2';
console.log(pipeCustom(urlSearch)); // 输出：true