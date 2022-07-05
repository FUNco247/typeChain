/* localStorage */
interface Item<T> {
  [key: string]: T;
}

abstract class MyLocalStorage<T> {
  protected item: Item<T> = {};
  setItem(key: string, value: T) {
    if (Object.keys(this.item).includes(String(key))) {
      console.log("error, key already exsit");
    } else {
      this.item[key] = value;
    }
  }
}

export class FinalStorage<T> extends MyLocalStorage<T> {
  getItem(key: string): T {
    return this.item[key];
  }
  cleatItem(key: string): void {
    delete this.item[key];
  }
  clear() {
    this.item = {};
  }
}

/* geoLocation */

interface Coord {
  x?: Number;
  y?: Number;
}

interface Position {
  readonly coord?: Coord;
  readonly timestamp?: Number;
}

type Success = (pos: Position) => void;

interface Error {
  code?: Number;
  msg?: String;
}

type Fail = (err: Error) => void;

interface Options {
  maximumAge?: Number;
  timeout?: Number;
  enableHighAccuracy?: Boolean;
}

class MyGeoLocation {
  private position: Position;
  private error: Error;
  private options: Options;
  private watch: number;
  constructor() {
    this.position = {};
    this.error = {};
    this.options = {};
    this.watch = 0;
  }
  getCurrentLocation(
    successFn: Success,
    errorFn?: Fail,
    optionsObj?: Options
  ): void {
    this.position = { coord: { x: 0, y: 0 }, timestamp: 100 };
    this.error = { code: 300, msg: "so sad T.T" };
    this.options = { maximumAge: 150, timeout: 1, enableHighAccuracy: true };
    if (errorFn && !optionsObj) {
      try {
        successFn(this.position);
      } catch (error) {
        errorFn(this.error);
      }
    } else if (errorFn && optionsObj) {
      try {
        successFn(this.position);
      } catch (error) {
        errorFn(this.error);
        console.log(this.options);
      }
    } else {
      successFn(this.position);
    }
  }
  watchPosition(
    successFn: Success,
    errorFn?: Fail,
    optionsObj?: Options
  ): Number {
    this.position = { coord: { x: 0, y: 0 }, timestamp: 100 };
    this.error = { code: 300, msg: "so sad T.T" };
    this.options = { maximumAge: 150, timeout: 1, enableHighAccuracy: true };
    if (errorFn && !optionsObj) {
      try {
        successFn(this.position);
      } catch (error) {
        errorFn(this.error);
      }
      this.watch = this.watch + 1;
    } else if (errorFn && optionsObj) {
      try {
        successFn(this.position);
      } catch (error) {
        errorFn(this.error);
      }
      console.log(this.options);
      this.watch = this.watch + 1;
    } else {
      successFn(this.position);
      this.watch = this.watch + 1;
    }
    return this.watch;
  }
  clearWatch(): void {
    this.watch = 0;
  }
}
