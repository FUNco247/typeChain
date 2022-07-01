/* this script belong many errors */

/* Call signiture */
// 함수의 인자와 리턴값의 타입을 미리 선언하여 함수 타입의 재사용성 확보

const add1 = (a: number, b:number) : number => a+b;
// before signiture

type Add1 = (a: number, b:number) => number;
//or
type Add2 = {
  (a: number, b:number) : number
};
// 함수의 인자와 리턴갑의 타입 선언
const add2:Add1 = (a, b) => a + b;
// 함수 타입의 재사용

/* Overloading */
//여러 call signiture가 있는 함수

type Add3 = {
    (a: number, b:number) : number
    (a: number, b:string) : number
  };
  
  const add3:Add3 = (a, b) => a + b; //error because typeof b is number | string
  
  const add4:Add3 = (a, b) => {
    if(typeof b === "string") return a
    return a+b
  } // no error

  //example in real world (Next.js)

  Router.push({
    path: "/home",
    state: 100
  })
  
  Router.push("home")
  // same code have differnt argument type ( object vs string )
  
  type Config = {
    path: string,
    state: object
  };
  
  type Push = {
    (path: string): void
    (config: Config): void
  };
  
  const push:Push = (config) => {
    if(typeof config === "string") { console.log(config) }
    else { console.log(config.path, config.state) }
  }

  //example for call-signiture has diffent number of argument

  type Add = {
    (a: number, b:number) : number
    (a: number, b:number c:number) : number
  }
  
  const add:Add = (a, b, c) => {
    return a + b + c
  }
  
  add(1, 2, 3) // error because 'c' 
  
  const add2:Add = (a, b, c?:number) => {
    if(c) return a + b + c
    return a + b
    
  add2(1,3) // no error
  add2(1,2,3) // no error

  /* Polymorphism (다형성) */
// geseric type -> Any 타입과 비슷하게 쓰이지만 generic 은 우리의 요구에 따라 적합한 call signiture을 생성함

type MyPrint = {
    (arr : number[]) : void
    (arr : bollean[]) : void
  };
  
  const myPrint : MyPrint = (arr) => {
    arr.forEach( i => console.log(i))
  }
  
  myPrint([1,2,3]); // ok
  myPrint([true, false, true]);//ok
  mtPrint(["a","b","c"]); // error
// should add `(arr : string[]) : void` call signiture? check below

//example of using generic type

type MyGeneric = {
    <ThisIsGenericType>(arr : ThisIsGenericType[]) : void
};

const myPrint : MyPrint = (arr) => {
    arr.forEach( i => console.log(i))
};

const a = myPrint([1,2,3]); // ok & type of a : number
const b = myPrint([true, false, true]);//ok & type of b : bollean
const c = mtPrint(["a","b","c"]); // ok & type of c : string
const d = mtPrint([1,true,"c"]); //ok & type of d : number | bollean | string