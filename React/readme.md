```
1. typescript 5 project
2. react hook form
3. dae UI
4. shads Ui
5. redex ui
6. tailwind
7. simple and advanced hook
8. zeus stand
9. framer motion
10. tan stack auery


00:00 - Intro
4:31 - React Fundamentals
2:45:30 - React Hooks
4:00:22 - React Projects For Beginners
6:43:39 - TypeScript Complete Course
10:12:04 - React With TypeScript
11:38:02 - Popular Component Libraries
11:51:08 - React Hook Form
12:13:17 - React 19 Features
16:17:25 - Framer Motion
21:37:27 - Zustand
26:08:14 - Redux Toolkit
27:25:58 - React Design Patterns
32:02:11 - TanStack Query
33:13:19 - Unit Testing
35:15:21 - React Testing
37:10:25 - React Design System
37:41:12 - React Storybook
38:51:49 - Useful Packages For Design System
39:21:59 - Building Component Library
42:11:32 - React Monorepos
42:25:30 - Building Complete Design System For Company
43:22:40 - FullStack Project
50:31:53 - Outro
```


<!-- // system thinking
// small -->

- React is free Open Source javascript library (pre written code) specifically designed for building user interface UI

- Developed by Facebook 2011, use components model, build Modular Apps, (Learn once, Write Anywhere)

- https://babeljs.io/ you can see jsx to js


- 5:45
- 12:23
 
- 40:20

- 1:47:58 (state)

- (2:34:36) Portal => Portal is a feature that allows you to render a child component into a DOM node that exists outside the hierarchy of the parent component. This can be useful for scenarios like modals, tooltips, or dropdowns, where you want to break out of the usual parent-child structure and render in a diffirent part of the DOM
 
- (2:45:37) useEffect() => useEffect hook allows you to perform side effects in your components. Some example of side effects are: fetching data, directly updating the DOM etc.
    1. if i don't use depedency array then useEffect will run every render

<!-- Context API  -->
- (3:9:40) Context API => Context API is a feature that allow you to manage and share state across your component tree without having to pass props down manually at every level. It's useful for scenarios where you need to share data and functions across many component, especially when these components are deeply nested
    1. Provide => it allows us to provide a value into multiple component / Give data to children.
    2. export const Data = createContext() // instence
        wrap// <Data.Provider value={name}>
        // Data have two property Provide and Consumer
        Provider = data sender
        Consumer = data receiver

<!-- useContext() -->
-(3:15:57) => useContext hook allows us to access the context values provided by a context object directly within a functional component. Context provides a way to pass data through the component tree withough having to pass props down manually at every level.

- props drilling


<!-- useReducer -->
-(3:25:54) useReducer is a hook that is similer to useState, but  it is designed for more complex state objects or state transitions that involves multiple sub values. It allow you to manage state in a functional, immutable way
  (3:27:19)- const [state, dispatch] = useReducer(reducer (fun), initialState)

        
<!-- useRef --> 
-(3:43:34) useRef hook provide a way to access and interact with DOM elements or to persist values across renders withough causing a re-render.


<!-- Custom hooks -->
-(3:50:54) Custom hooks are javascript function that start with the prefix "use", useFetch, etc.. and can call other hooks within them. They allow you to actract and reuse logic that involves state or side effects, making your component more readable and maintainable.

<!-- useId hook -->
- (3:56:50) The useId hook in React is used to generate unique IDs for components
    use => import {useId} from 'react'


<!-- React 19 -->
1. compiler => react 19 now its own compiler, which will not only speed up performance but also automate certain tedious tasks, reducing the workload for developers.
2. Memorization => with react 19's new ocmpiler, there's no longer a need for memorization the process of optimizing components to prevent unnecessary re-render. Previously, we relied on hooks like `useMemo()` and `useCallback()` for this purpose, but these will now become obsolete.
3. Metadata => we no longer need to third party packages for SEO and metadata because React 19 now offers built-in support for these features. We can place the tags anywhere within the component and it will work for both the client and server
4. Directives => React 19 now includes built-in support for use client and use serve directives. This allows components to be rendered on the server, resulting in improved SEO, faster page load times, and more straightforword data fetching we don't need to use (forwardRef, React.lazy, useContext, memo, useEffect, useCallback)

    <!-- use -->
    The use() hook lets you read and load resources asynchronously, such as promises or context. Unlike other hooks, it can be utilized in loops and conditionals.
    In certain situations, it can serve as a replacement for useEffect() when fetching data, and it streamlines context useage by allowing you to use use(context) instead of useContext(contex)

5. Actions => React 19 introduces Actions, which are asynchronous function designed to simplify form submissions. Actions can be utilized on both the client and server sides.    
6. useFormStatus => useFormStatus is a hook that give you status information of the last form submission.
7. useActionState => useActionState is a hook that allows you to update state based on the result of a form action.



video: 12:34:39



# React Design Patterns

<!-- 1. Layout Component -->
- Layout components are strategies for organizing and composing components that manage the layout structure of a project. These components typically control the positioning and arrengement of child elements within a page, acting as cotainers for other UI elements or sections.

































https://medium.com/javarevisited/i-tried-30-system-design-courses-here-are-my-top-5-recommendations-for-2025-3c4971206a39




https://www.w3schools.com/REACT/react_events.asp

# class
 A class is a type of function, but instead of using the keyword function to initiate it, we use the keyword class, and the properties are assigned inside a constructor() method.

- In short, with arrow functions there is no binding of this.
- Regular function ka this call ke upar depend karta hai.
- Arrow function = It always takes this from the place where it was created → global/window, this fix ho jaata hai (lexical binding).
- Arrow function ka this global (window) hota hai, obj nhi.
- in class => Arrow → parent = constructor → this = instance

# rules of this in regular fun and arrow fun
1. Regular Function (function keyword) => this = depends on WHO CALLS the function, It is dynamic, changes every time. Jisne call kiya, this uska.

2. Arrow Function (=> function) => this = comes from WHERE the function was written (parent scope), Jaha likha gaya, this waha ka.

# Destructuring
 - const [car,, suv] = vehicles; // skip in array
 - let {age, country = "Norway"} = person; // default value
 - let {firstName, car: { brand, model }} = person; // nested object:
# Props Destructuring 

# Spread Operator
- The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.
- const [one, two, ...rest] = numbers; ///  [1, 2, 3, 4, 5, 6];
- const mycar = {...car, ...car_more}
- [...array]

# Modules
- Named Exports 
        1. export const age = 18
        2. export { name, age }    
        import { name, age } from "./person.js"; // fixed name, as changeName

- Default Exports   
        1. export default () => {}
        2. export default function message() {}
        3. export default name 
        import name from "./message.js"; // you can change name
        You can have only one default export per file

# Template Strings
    1. Using the map function inside template strings:
    2. Tagged Templates

# React JSX ( JavaScript XML.)
    - JSX is an extension of the JavaScript language based on ES6, and is translated into regular JavaScript at runtime.
    - wihout jsx use createElement(tagname, {}, children)    
    - A fragment looks like an empty HTML tag: <></>. but internall [] an array of children

# React JSX Expressions
    - Function Calls {kwtohp(218)}
    - camelCase Event Attributes

# React Components
    - Components are like functions that return HTML elements.
    - Components come in two types, Class components and Function components
    - Arguments can be passed into a component as props, which stands for properties.
    - Note that the filename must start with an uppercase character.

# react lifecycle 
    - React lifecycle = the stages a component goes through from birth → update → death.
    1. Mounting (component is created and added to the DOM) useEffect(() => {}, [])
    2. Updating (state/props change → UI re-renders) useEffect(() => {}, [deps])
    3. Unmounting (component is removed from the DOM) useEffect(() => { return cleanup })
    https://chatgpt.com/c/6920041e-22b0-8324-836e-a45e49570d03



# React Props
    - Strings can be sent inside quotes as in the examples above, but numbers, variables, and objects need to be sent inside curly brackets.
    - You can use myobj instead of props in the component:
    - Note: React Props are read-only! You will get an error if you try to change their value.
    - Default Values With Destructuring, you can set default values for props. If a property has no value, the default value will be used.


# React Props Children
    - In React, you can send the content between the opening and closing tags of a component, to another component.
    - This can be accessed in the other component using the props.children property.


# React Events  
    - Just like HTML DOM events
    - React has the same events as HTML: click, change, mouseover etc.
    - React events are written in camelCase syntax:

# React Conditional Rendering
    - if Statement
    - Logical && Operator
    - Ternary Operator


# React Forms
    -  React provides a way to manage form data through component state, leading to what are known as "controlled components."
    - all the data is stored in the component state.
    - Single Source of Truth (SSOT) = Data is controlled from one main source, not copied in many places.
    - for checkbox,, value = target.type === 'checkbox' ? target.checked : target.value;

# React Portals    
    - React Portals provide a way to render HTML outside the parent component's DOM hierarchy. React root element ke outside render hota hai.
    - <div id="root"></div> => This is called the normal parent root.
    - A Portal is a React method that is included in the react-dom package.


# React Suspense
    - Suspense is a React feature that lets your components display an alternative HTML while waiting for code or data to load.
    - Data fetching with suspense-enabled frameworks
    - Loading components dynamically with React.lazy()



# React forwardRef
    - forwardRef lets your component pass a reference to one of its children. It's like giving a direct reference to a DOM element inside your component.dsf

# React Higher Order Components
    - A Higher Order Component (HOC) is like a wrapper that adds extra features to your React components. Think of it like putting a case on your phone - the case adds new features (like water protection) without changing the phone itself.