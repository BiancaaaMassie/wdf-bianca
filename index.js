// IIFE (Immediately Invoked Function Expression) & Callback

// No Params & Args
(function() {
    console.log("Ini adalah IIFE!");
})();


// With params & Args
let output = (function(fullname) {
    return ("aku " + fullname);
})("Deil");
console.log(output);