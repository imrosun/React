// With react we are building our website entire page in javacript
/* Why react:  */
ReactDOM.render(
        <div> <ul> <li>Hi how are you</li> </ul></div>
,document.getElementById("root"));


/*  */
 function MainContent(){
    return {
        <h1>I am learning react</h1>
    };
}
ReactDOM.render(
        <div>
            <Navbar />
        </div>,
        document.getElementById("root"))


/*
Declarative: What should be done?: Just tell me what to do, and i'll worry about how i get it done
Imperative: How should be done?: Describe to me every step on how to do something, and i'll do it

- create a new h1 element
- give it some text content
- give it a class name of a "header"
- append it as a child of a div root
*/

const h1 = document.createElement("h1")
h1.textContent = "This is an imperative way to program"
h1.className = "header"
document.getElementById("root").append(h1)

ReactDOM.render(<h1 className="header"> Declarative </h1>,document.getElementById("root"))

 
/* Build react info site | JSX: JavaScriptXML "flavour of javascript" looks alot like a html, 
   JSX made react very declarative instead imperative
   with JSX we can write same as we were writing in HTML
   JSX is craeting clean old/regular javascript object
   with JSX We need to make sure we are returing a single parent element
 */

const page = (
    <div>
        <h1 className="header">This is JSX parent</h1>
        <p>This is JSX child</p>
    </div> 
)
console.log(page)

ReactDOM.render(
    page,
    document.getElementById("root")
);


/*
Create a navbar in JSX:
- Use the semantic 'nav' element as the parent wrapper
- Have an h1 element with the brand name of your "website"
- Insert an unordered list for the other nav elements
  - Inside the 'ul', have three 'li's for "Pricing","About", and "Contact"
 * 
 */

const navbar = (
    <nav>
        <h1>Roshan's portfolio</h1>
        <ul>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>    
)
ReactDOM.render(navbar,document.getElementById("root"))


import React from "react"
import ReactDOM fom "react-dom"
const navbar = (
    <nav>
        <h1>Roshan's portfolio</h1>
        <ul>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>    
)
ReactDOM.render(navbar,document.getElementById("root"))




