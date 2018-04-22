<p align="center">
  <img width="256" height="256" src="https://raw.githubusercontent.com/TomDobbelaere/Flight/master/misc/logo.png">
</p>

A language that transpiles to JavaScript, mostly made for educational purposes.

How to run:
- Make sure you have node and npm installed, nodemon is optional but useful
- Clone the repository
- `npm install` inside the directory
- `npm install -g nodemon` to install nodemon
- `nodemon index` to run the file watcher, changes to \*.fl files inside the examples directory will transpile on save
- `nodemon .\examples\yourscript.fl.js` to run the transpiled javascript of your Flight code

# If you know JavaScript, you know Flight (basically)
## 'State' is a nice guy, but don't let him dominate your code
Flight believes good code can be partially enforced by the programming language.  
An example of this is that **variables in Flight are true constants by default**, unless you declare them mutable.  
In other words, the `let` keyword in Flight is actually immutable, unless you make it a `let mut`, here's an example:

```Javascript
/* JavaScript */
let x = 5;
x = 6; //This is okay in JavaScript

/* Flight */
let x = 5;
x = 6; //This won't work (x is a constant)

let mut x = 5;
x = 6; //But this is!
```

`const` is pretty useless in JavaScript because it's still possible to modify object members.  
Declaring immutable variables that have object literals in Flight are correctly frozen in JavaScript.  
This is what is meant by 'true constants'.

## Keep state out of your functions
In functional programming, it's usually impossible to make all your functions pure.  
With some things like database access and IO, you have no choice.  
The 20/80 rule applies here too, where 20% of your code can be impure against 80% of pure code.

To help with this, functions (`func`) in Flight will do some checking at transpile time to see if your function is pure.  
**All funcs in Flight are pure by default**, unless you explicitly declare them impure.  

Here's an example:

```Javascript
/* JavaScript */
let y = 5;

function inc(x) {
  y = 6; //This works, we're modifying outside state
  return x + 1;
}

/* Flight */
let mut y = 5;

func inc(x) {
  y = 6; //This will throw an error at transpile time, function is not marked impure!
  return x + 1;
}


impure func inc(x) {
  y = 6; //This will work, we told Flight this function is impure and we know about it
  return x + 1;
}
```

This idea comes from just how painful debugging code can be when state is being modified by all kinds of functions.  
When you have a pure function, it's an isolated, easily testable module. When it works, it works.  
(Note: impure checking is not complete at this date, only variables are checked but not method calls)

## Keep it simple
Flight aims to simplify certain procedures in JavaScript by providing syntactic sugar for complex constructs.  
The only example of this right now is the array initializer expression in Flight.  

Initializing an array in JavaScript is surprisingly painful, here's a comparison:  

```Javascript
/* JavaScript */
let x = Array(3).fill().map(a => { return Array(4).fill().map(a => { return 0; }); });

/* Flight */
let x = array 3, 4 default 0;
```
Now, isn't that clean? You can have any number of dimensions. The `default` is optional and sets a default value for all the cells.
