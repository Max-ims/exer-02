"use strict";

let parents = {
    father: 'John',
    mother: 'Jane',

    printfather: function() {
        alert(this.father);
    }
}


let id = Symbol('id');
parents[id] = 'Our id value';
console.log(Number(parents));
