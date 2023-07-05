// in html we write
/* 
<script src="./129.js"></script> 
header main aisa likha hai to jab control iss line pr aayega to ruk 
jayega, and phle .js file ki javascript ko read krga and execute krne lg jayega
to that will lead to slow execution as well as getting error. Error iss karn ayega kunki
ab agar apn dom element access kr rhe hai to vo to abhi read hi nhi hua hai na. to vohi
dikkat aati jayegi
*/


/*
 <script src="./129.js" async></script>
aisa likne se controller .js ko read bhi krta rhega and aage html ko parse bhi krta rhega
but jaise hi js puri read hui vo usko execute krne lg jayega 
but that can lead to error
*/

/*
<script src="./129.js" defer></script>
yh best trika hai, yh parallel run krne dega and JS file ko read hone ke baad jab tk 
HTML parse nhi hota... execute nhi krega

*/
