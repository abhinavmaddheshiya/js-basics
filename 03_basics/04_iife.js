// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')

// //IIFE
// (function hello(){
//     console.log(`Hi Abhinav`);
// })();
// ( (name) => {
//     console.log(`Hi ${name}`);
// })("Gupta Ji")