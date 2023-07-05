// event bubling/ propagation
// event capturing
// event deligation

// console.log("hello world");

const grandparent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

// normal aevent listen krne pr yh ho rha ki aga child pr click kiya to child ke saath saath
// parent, grandparent, body sab ka bhi chlega as its inside them to unke event bhi fire honge
// this is called event bubling or event propogation
// not capture
//on clicking chid the console is :bubble child,bubble parent,
// bubble grandparent,bubble document.body
// child.addEventListener("click", () => {
//   console.log("bubble child");
// });
// parent.addEventListener("click", () => {
//   console.log("bubble parent");
// });
// grandparent.addEventListener("click", () => {
//   console.log("bubble grandparent");
// });
// document.body.addEventListener("click", () => {
//   console.log("bubble document.body");
// });

// so true lgane kr aise listen krna is called capturing event
// to jaise child pr click kiya to phle capture vale event fire honge body to child ki trf aate 
// hue, fir buble vale fire honge niche se upaar jate hue
// child.addEventListener(
//   "click",
//   () => {
//     console.log("capture !!!! child");
//   },
//   true
// );
// parent.addEventListener(
//   "click",
//   () => {
//     console.log("capture !!!! parent");
//   },
//   true
// );
// grandparent.addEventListener(
//   "click",
//   () => {
//     console.log("capture !!!! grandparent");
//   },
//   true
// );
// document.body.addEventListener(
//   "click",
//   () => {
//     console.log("capture !!!! document.body");
//   },
//   true
// );

// event delegation
grandparent.addEventListener("click", (e) => {
  console.log(e.target);
});
// yha pr target main child pr click kiya to target child hoga, parent pr kiya to parent hoga
// pr bubling abhi bhi ho rhi hai
