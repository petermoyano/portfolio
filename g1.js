let title = "Carefull when asumming what the keyword this is";
const obj1 = {
    adjective: "awesome",
    statement: function (word) {
        console.log(`************* JavaScript is ${this.adjective} and ${word}!`);
    }
};
/* We have a simple object with a propery and a method. 
If we want to see the sentence we have to execute the method. But what happens if we store the function inside a variable.
 */

const sentence = obj1.statement;
sentence === obj1.statement /* returns true, they point to the same function*/

obj1.statement("fun"); /* JavaScript is awesome and fun! */
sentence("fun"); /* JavaScript is undefined and fun! */

/* The value of the keyword this changed depending on how we call the method! */

/* JavaScript doesn't really have functions. Everything is called on something! When you call a function without 
referencing some object, it is called on the global object, wich in the browser is the window object. 
In Node it's called global. 

So, always think that the value of the keyword this, is going to be set on WHATEVER IS TO THE LEFT OF THE DOT.
In the case of sentence, there is "nothing", no dot. So the dot is implicit as is the global object.
We are calling global.sentence("fun"), and the global object doesn't have an "adjective" property so we get undefined.
The value of the keyword this is deciden uppon function execution, not when we are writting the code. It will change depending on how 
you execute that function.
*/





const obj2 = {
    x: 2,
    y: 5,
    add() {
        console.log(`2 + 5 is: ${this.x + this.y}`)
    }
}
obj2.add(); /* works fine */
document.querySelector('#g1-btn').addEventListener('click', function () {
    obj2.add();
    console.log(this)
});


/* Doesn't work because we are not calling the method on obj2, so the value of this is the global object*/

/* When in doubt just console.log(this); */

/* Arrow functions and this
 */

const obj3 = {
    team: "winter",
    sayTeamWithArrow: () => { console.log(this.team) },
    sayTeamWithoutArrow: function () { console.log(this.team) }
}

obj3.sayTeamWithArrow(); /* undefined */
obj3.sayTeamWithoutArrow(); /* winter */




