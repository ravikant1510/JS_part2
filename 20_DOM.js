// index2 main kaam hoga iss file ka
// Document (root node)  -> Javascript object
// HTML (root element)-> Root Element (child node of document)

const rootNode = document.getRootNode();
// gives document object
console.log(rootNode);//document object

console.log(rootNode.childNodes);//NodeList [html]

const htmlElementNode = rootNode.childNodes[0];
console.log(htmlElementNode);
// console.log(htmlElementNode.childNodes);//NodeList(3) [head, text, body]

const headElementNode = htmlElementNode.childNodes[0];//head
const textNode1= htmlElementNode.childNodes[1]; // text
const bodyElementNode = htmlElementNode.childNodes[2]; // body
// yha pr text node koi actual text nhi hai, vo \n and whitespace ko bhi ek object ya element maan le rha hai, 
// Baki jo kaam ke nodes hai vo htmlElementNode hai

console.log(textNode1);

console.log(headElementNode.parentNode);

// sibling relation
console.log(headElementNode.nextSibling);
console.log(bodyElementNode.nextSibling); // koi nhi to null de diya

// browser by default white- space property ko normal kr ke rkhta hai
// jisse whitespace automatically discard ho jate hai

// agar white-space : pre kr denge to sb whitespace dikne lg jayenge

console.log(headElementNode.nextElementSibling);
// yh next element sibling dega, text vala sibling ignor kr dega 

const h1Element = document.querySelector("h1");

console.log(h1Element);
const divElement = h1Element.parentNode;
console.log(divElement);

divElement.style.backgroundColor = "black";

// 
const head = document.querySelector("head");
const title = head.querySelector("title");// ab head ke andar ka object pr search hoga
console.log(title);
console.log(title.children);
console.log(title.childNodes);




// ab agar hum chahte hai ke jo text vale faltu ke node hai vo na mile
// baki jo kaam ke childs hai sirf vo dikh jaye

const container = document.querySelector(".container");
console.log(container.children);//HTMLCollection(2) [h1, p]
console.log(container.childNodes);//NodeList(5) [text, h1, text, p, text]

