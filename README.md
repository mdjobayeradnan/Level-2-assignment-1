# Level-2-assignment-1


Interface and Type in TypeScript

An interface is declared using the interface keyword, followed by the interface name and a block of properties. On the other hand, a type is declared using the type keyword, followed by the type alias name and the type definition.

Example of Interface:


interface Student {
  name: string;
  age: number;
}
Example of Type:



type User = {
  name: string;
  email: string;
  isAdmin: boolean;
};
Similar Structure:


 Interface
interface User {
  name: string;
  age: number;
  isAdmin: boolean;
}
 Type
type User = {
  name: string;
  age: number;
  isAdmin: boolean;
};
Differences:
Interface is used to define the structure of objects, while type can define not only object structures but also unions, primitives, functions, and more.

Interface declarations can be merged, whereas type declarations will throw an error if declared with the same name multiple times.

Summary: In TypeScript, both interfaces and types are used to define the structure of objects, but they are used in slightly different ways.










TypeScript is like a better version of JavaScript made by Microsoft. 
It helps you write code with fewer mistakes. also it just adds some extra tools that tell you when you do something wrong, before the code runs.

TypeScript checks the types of variables so you don't make silly mistakes.
example
let age = 23;
age = "twenty-three" ;    !!! error !!! 

TypeScript knows what kind of data you're working with, so your editor can give suggestions. if you click ctrl + space it  give you  suggestion  

 so we can say typescript make our coding life easy and faster 