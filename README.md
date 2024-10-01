<!------------------------Welcome to React---------------------------------------------------!>
React is a JavaScript library for building user interfaces.
React is used to build single-page applications.
React allows us to create reusable UI components.

What is React?
React, sometimes referred to as a frontend JavaScript framework, is a JavaScript library created by Facebook.
React is a tool for building UI components.

How does React Work?
React creates a VIRTUAL DOM in memory.
Instead of manipulating the browser's DOM directly, React creates a virtual DOM in memory, where it does all the necessary manipulating, before making the changes in the browser DOM.React only changes what needs to be changed!

React.JS was first used in 2011 for Facebook's Newsfeed feature.
Facebook Software Engineer, Jordan Walke, created it.

What is ES6?
ES6 stands for ECMAScript 6.
ECMAScript was created to standardize JavaScript, and ES6 is the 6th version of ECMAScript, it was published in 2015, and is also known as ECMAScript 2015.
REACT CLASS
A class is a type of function, but instead of using the keyword function to initiate it, we use the keyword class, and the properties are assigned inside a constructor() method.The constructor function is called automatically when the object is initialized.
class Car {
  constructor(name) {
    this.brand = name;
  }
}

const mycar = new Car("Ford");
------Method in Classes-------
You can add your own methods in a class:
class Car {
  constructor(name) {
    this.brand = name;
  }
  
  present() {
    return 'I have a ' + this.brand;
  }
}

const mycar = new Car("Ford");
mycar.present();
---------Class Inheritance--------
To create a class inheritance, use the extends keyword.
A class created with a class inheritance inherits all the methods from another class:
Example
Create a class named "Model" which will inherit the methods from the "Car" class:

class Car {
  constructor(name) {
    this.brand = name;
  }

  present() {
    return 'I have a ' + this.brand;
  }
}

class Model extends Car {
  constructor(name, mod) {
    super(name);
    this.model = mod;
  }  
  show() {
      return this.present() + ', it is a ' + this.model
  }
}
const mycar = new Model("Ford", "Mustang");
mycar.show();
The super() method refers to the parent class.
By calling the super() method in the constructor method, we call the parent's constructor method and get access to the parent's properties and methods.
-----------Variables----------
Before ES6 there was only one way of defining your variables: with the var keyword. If you did not define them, they would be assigned to the global object. Unless you were in strict mode, then you would get an error if your variables were undefined.
Now, with ES6, there are three ways of defining your variables: var, let, and const.
VAR has block scope while const and let have block scope.
If you use var outside of a function, it belongs to the global scope.
If you use var inside of a function, it belongs to that function.
If you use var inside of a block, i.e. a for loop, the variable is still available outside of that block.
var has a function scope, not a block scop
----------Array Methods------
There are many JavaScript array methods.One of the most useful in React is the .map() array method.
The .map() method allows you to run a function on each item in the array, returning a new array as the result.

----------Destructing Arrays--------
When destructuring arrays, the order that variables are declared is important.

---------Spread Operator---------
The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.

-----------Modules----------
JavaScript modules allow you to break up your code into separate files.This makes it easier to maintain the code-base.
ES Modules rely on the import and export statements.
----------Export--------
You can export a function or variable from any file.
Let us create a file named name.js, and fill it with the things we want to export.
There are two types of exports: Named and Default.
Named Exports--You can create named exports two ways. In-line individually, or all at once at the bottom.
You can only have one default export in a file.
-----------Import------
You can import modules into a file in two ways, based on if they are named exports or default exports.Named exports must be destructured using curly braces. Default exports do not.
------------Ternary Operator-------
The ternary operator is a simplified conditional operator like if / else.
Syntax: condition ? <expression if true> : <expression if false>
------react render-------
React's goal is in many ways to render HTML in a web page.
React renders HTML to the web page by using a function called createRoot() and its method render().
he createRoot() function takes one argument, an HTML element.
The purpose of the function is to define the HTML element where a React component should be displayed.

The render() method is then called to define the React component that should be rendered.

------------But render where?---------
There is another folder in the root directory of your React project, named "public". In this folder, there is an index.html file.
You'll notice a single <div> in the body of this file. This is where our React application will be rendered.

-----------the Root Node--------
The root node is the HTML element where you want to display the result.
It is like a container for content managed by React.
It does NOT have to be a <div> element and it does NOT have to have the id='root':


-----------What is JSX?------
JSX stands for JavaScript XML.JSX allows us to write HTML in React.JSX makes it easier to write and add HTML in React.
JSX allows us to write HTML elements in JavaScript and place them in the DOM without any createElement()  and/or appendChild() methods.
JSX converts HTML tags into react elements.
You are not required to use JSX, but JSX makes it easier to write React applications.

---------Expressions in JSX--------
With JSX you can write expressions inside curly braces { }.
The expression can be a React variable, or property, or any other valid JavaScript expression. JSX will execute the expression and return the result:
---------Inserting a Large Block of HTML-------
To write HTML on multiple lines, put the HTML inside parentheses:
------you can use a "fragment" to wrap multiple lines. This will prevent unnecessarily adding extra nodes to the DOM.
A fragment looks like an empty HTML tag: <></>.
------React Components-------
Components are like functions that return HTML elements.
Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML.
Components come in two types, Class components and Function components.
--------Create Your First Component-----
When creating a React component, the component's name MUST start with an upper case letter.
-----Class Component-----
Class Component
A class component must include the extends React.Component statement. This statement creates an inheritance to React.Component, and gives your component access to React.Component's functions.The component also requires a render() method, this method returns HTML.
-------Function Component-------
Here is the same example as above, but created using a Function component instead.
A Function component also returns HTML, and behaves much the same way as a Class component, but Function components can be written using much less code, are easier to understand

------Props------
Components can be passed as props, which stands for properties.Props are like function arguments, and you send them into the component as attributes.

-----Components in Files------
React is all about re-using code, and it is recommended to split your components into separate files.
Note that the filename must start with an uppercase character.

-----------React Events--------
Event handlers have access to the React event that triggered the function.


--------Keys-------
Keys
Keys allow React to keep track of elements. This way, if an item is updated or removed, only that item will be re-rendered instead of the entire list.
Keys need to be unique to each sibling. But they can be duplicated globally.
Generally, the key should be a unique ID assigned to each item. As a last resort, you can use the array index as a key.

-------react forms-----
------React Router-------
npm i -D react-router-dom@latest
ur content first with <BrowserRouter>.
Then we define our <Routes>. An application can have multiple <Routes>. Our basic example only uses one.
<Route>s can be nested. The first <Route> has a path of / and renders the Layout component.
The nested <Route>s inherit and add to the parent route. So the blogs path is combined with the parent and becomes /blogs.
The Home component route does not have a path but has an index attribute. That specifies this route as the default route for the parent route, which is /.
Setting the path to * will act as a catch-all for any undefined URLs. This is great for a 404 error page.
return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );


-------react link----
return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
  The Layout component has <Outlet> and <Link> elements.The <Outlet> renders the current route selected.<Link> is used to set the URL and keep track of browsing history.Anytime we link to an internal path, we will use <Link> instead of <a href="">.The "layout route" is a shared component that inserts common content on all pages, such as a navigation menu.
  ------------------------React Memo-------------
  There are many ways to style React with CSS, this tutorial will take a closer look at three common ways:

Inline styling-----To style an element with the inline style attribute
CSS stylesheets----separate file  .css   your CSS styling in a separate file, just save the file with the .css file extension, and import it in your application.
CSS Modules------separate file  .module.css CSS Modules are convenient for components that are placed in separate files.


What is Sass
Sass is a CSS pre-processor.Sass files are executed on the server and sends CSS to the browser.


----------Hooks----------------------------------
Hooks allow function components to have access to state and other React features.

--------------------Hook Rules----------------------
There are 3 rules for hooks:

Hooks can only be called inside React function components.
Hooks can only be called at the top level of a component.
Hooks cannot be conditional
Note: Hooks will not work in React class components.

------------------Custom Hooks------------------
If you have stateful logic that needs to be reused in several components, you can build your own custom Hooks.
-------------------------------usestate-------------------------
The React useState Hook allows us to track state in a function component.State generally refers to data or properties that need to be tracking in an application.
useState accepts an initial state and returns two values:
1.The current state.
2.A function that updates the state

----Read State.
can now include our state anywhere in our component.
-----Update State
To update our state, we use our state updater function..

What Can State Hold
The useState Hook can be used to keep track of strings, numbers, booleans, arrays, objects, and any combination of these!We could create multiple state Hooks to track individual values.
--------------------------------------useEffect------------------------
The useEffect Hook allows you to perform side effects in your components.Some examples of side effects are: fetching data, directly updating the DOM, and timers.
useEffect accepts two arguments. The second argument is optional.
useEffect(<function>, <dependency>)
useEffect runs on every render. That means that when the count changes, a render happens, which then triggers another effect.
-------------------------------------useContext---------------------------------
React Context is a way to manage state globally.
It can be used together with the useState Hook to share state between deeply nested components more easily than with useState alone.
----------------------------------------useRef---------------------------------
Hook allows you to persist values between renders.It can be used to store a mutable value that does not cause a re-render when updated.It can be used to access a DOM element directly.
useRef() only returns one item. It returns an Object called current.When we initialize useRef we set the initial value: useRef(0).
---------------------------useReducer----------------------------------
useReducer Hook is similar to the useState Hook.It allows for custom state logic.If you find yourself keeping track of multiple pieces of state that rely on complex logic, useReducer may be useful.The useReducer Hook accepts two arguments.
useReducer(<reducer>, <initialState>)
----------------------------------useCallback---------------------------------------
useCallback Hook returns a memoized callback function.The useCallback and useMemo Hooks are similar. The main difference is that useMemo returns a memoized value and useCallback returns a memoized function.One reason to use useCallback is to prevent a component from re-rendering unless its props have changed.
----------------------------------useMemo------------------------
The React useMemo Hook returns a memoized value.
The useMemo and useCallback Hooks are similar. The main difference is that useMemo returns a memoized value and useCallback returns a memoized function.


---------------------------------ReactCustom Hooks------------------------------
Hooks are reusable functions.When you have component logic that needs to be used by multiple components, we can extract that logic to a custom Hook.Custom Hooks start with "use".
!---------------------------------------Happy Ending-----------------------------!






