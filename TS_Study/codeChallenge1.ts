// Q1. last(arr): 이 함수는 array의 마지막 아이템을 리턴해야 합니다.

// get last item of arr
type Generic = {
  <GenericType>(arr: GenericType[]): any;
};

const last: Generic = (arr) => {
  if (arr.length === 0) {
    return "no item in this array";
  } else {
    return arr.pop();
  }
};

last([1, 2, 3]);
last([false, true]);
last([1, 2, 3, "aaaa"]);
last([]);

// Q2. prepend(arr, item): 이 함수는 array의 시작에 아이템을 넣고, 리턴해야 합니다.
// add first argument of array
// #1
type Generic2 = {
  <GenericType2>(arr: GenericType2[], item: GenericType2): GenericType2[];
};
const prepend: Generic2 = (arr, item) => {
  arr.unshift(item);
  return arr;
};

prepend([1, "haha", true], 3);

// #2
type NoUndifined = string | number | boolean;
const prepend2 = (arr: NoUndifined[], item: NoUndifined): NoUndifined[] => {
  arr.unshift(item);
  return arr;
};

prepend2([1, "haha", true], 3);
