/* head.js */
type except = null | undefined | [];
type returnType<T> = T extends except ? undefined : T;
type head<T> = {
  (arr: T[]): returnType<T>;
};

/* hasIn.js */
type hasIn = (obj: object, key: string) => boolean;

/* isBoolean.js */
type isBoolean = (val: any) => boolean;

/* toString.js */
type toString = (val: any) => string;

/* split.js */
type split = (str: string, sep: RegExp | string, lim: number) => Array<string>;

/* hasPath.js */
type hasPath = (obj: object, path: Array<string> | string) => boolean;

/* filter.js */
type callbackFilter = (e: any) => boolean;
type filter = (arr: Array<any>, func: callbackFilter) => Array<any>;

/* every.js */
type every = (arr: Array<any>, check: any) => boolean;

/* map.js */
type callbackMap = (e: any) => any;
type map = (arr: Array<any>, func: callbackMap) => Array<any>;
