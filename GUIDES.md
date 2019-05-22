React is a JavaScript library, created by Facebook. It's used mainly for building reusable UI (User Interface) components.

Here is a link to give you a better understanding on React concepts:
React elements, Components, JSX (sounds complicated right? if you know HTML, it will look familiar to you - JSX is JavaScript XML), Virtual DOM, State, Props... It will start to make sense when you play around with it.

[REACT QUICK START GUIDE](https://www.codementor.io/reactjs/tutorial/the-reactjs-quick-start-guide "React Concepts")

# So what is JSX?
JSX handles JS, CSS and HTML 

[INTRODUCING JSX](https://reactjs.org/docs/introducing-jsx.html "JSX")

```javascript
<div className="container">
   <h1 className={myVar ? 'highlight' : ''}>Hello World</h1> 
   <p style={fontSize: 1.25rem}>{description}</p>
   <Button />
</div>
```

`className={myVar ? 'highlight' : ''}`
Line 12 is saying: if myVar is true, apply CSS class called highlight, or else no class is applied -> checkout ternary operators

# What is components, props and state?
With react, we build by functionality rather building by page. These components make up parts of a page and they are reusable. 
Props are properties and this is how React handles the data. It is an effective way to pass existing data to a React component - however, the are read-only (what this means is the component cannot change the props.)
State is a way to save and modify data without really adding it to database - so there is a data flow (sort of...)

---

Let's set up your local environment:
1. Install Node.js (https://nodejs.org/en/)
2. Clone this repo or download the repo and open the folder in your favourite text editor (VSC, Atom, you choose...)
3. Once you have this repo in your machine, go to terminal (VSC has built-in terminal btw) and type `npm install` -> this will install all the node modules (which has all the dependencies required)
4. Now that's done - type `npm start` -> this will start the development server 
5. Then go to Chrome (or your favourite browser) and go to `localhost:3000` and checkout what Dave has created and let's decode it :) 

---

Checkout what Dave's tutorial steps here: 
[TUTORIAL STEPS](http://bit.ly/2wczqdx "Dave's tutorial steps")