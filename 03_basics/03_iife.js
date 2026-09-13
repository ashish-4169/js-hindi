// IIFE -> IMMEDIATELY INVOKED FUNCTION EXPRESSION

(function(){
    console.log("hello");
})();

// IIFE WITH ARROW FUNCTION

( () => {
    console.log("hello Ashish");
})();

// IIFE WITH PARAMETERS

( function(name){
    console.log(`hello, ${name}, what is going on`);
})("Ashish");