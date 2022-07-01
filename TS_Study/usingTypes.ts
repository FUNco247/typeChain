// this file content many errors

// How to using types

/* Implicit */
let a = "hello"; // TS 가 a 변수의 type을 string으로 추론함
a = "hi"; // no error
a = 1; // error

/* explicit */
let a: string = "hello"; // 변수와 함께 타입 지정
let b: number[] = [1, 2, 3]; // 숫자들의 배열
b.push("1"); // error

let c: string[] = [1, 2]; //error
let d: bollean = true;

/* optional */
let user1: { name: string; age?: number } = {
  name: "funco",
  age: 32,
}; // ? 이 붙으면 선택적 속성이다.

let user2: { name: string; age?: number } = {
  name: "nugu",
}; // no error

/* Alias */
type User = { name: string; age?: number };
let user1: User = {
  name: "funco",
  age: 32,
}; // no error -> 타입 재사용 & 코드를 줄이기 위한 나은 방법

/* function argument & return type */
function createUser(name: string): User {
  return {
    name: name, // same as just `name`
  };
} // name 이라는 string 변수를 입력받아 User 타입을 리턴한다.

const funco = createUser("funco"); // typeof funco = User
func0.age = 32; // no error

const createUser2 = (name: string): User => ({ name }); // 위와 동일

// Readonly property

type User = { readonly name: string; age?: number };
const createUser2 = (name: string): User => ({ name });
const funco = createUser2("funco");
funco.age = 32; // no error
funco.name = "nugu"; // error

// Tuple

const user: [string, number, boolean] = ["funco", 20, false]; // no error
user[0] = true; // error

const user: readonly [string, number, boolean] = ["funco", 20, false];
user[0] = "lalala"; // error

// Any

const a: any[] = [1, 2, 3, 4]; // no error
const b: any = true; // no error
a + b; // no error

// Unknown

let a: unknown;
let b = a + 1; // error, because TS doesn't know type of `a`
if (typeof a === "number") {
  let b = a + 1;
} // no error

let c = a.toUpperCase(); // error, because type of `a` isn't string
if (typeof a === "string") {
  let c = a.toUpperCase();
} // no error

// Void

function hello() {
  console.log("hello world");
} // typeof hello is 'void' because this function return nothing

// Never

function hello(name: string | bollean) {
  if (typeof name === "string") {
    return name; // typeof name is " string "
  } else if (typeof name === "bollean") {
    return name; // typeof name is " bollean "
  } else {
    return name; // typeof name is " never ", because this line never run
  }
}
