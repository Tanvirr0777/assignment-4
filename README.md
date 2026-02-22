1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
  Solution:

            getElementById
   Selects only one element by using unique ID.

           getElementsByClassName
   Selects a group of elements under the same class.

              querySelector
   Selects only first element of css selector that match.
   
             querySelectorAll
   Selects all elements of css selector that match.
                                                                               


2.How do you create and insert a new element into the DOM?
Solution:
1. get a parent element : const parent = document.getElementById("container");
2. create a new element : const newElement = document.createElement("h1");
3. add content : newElement.innerText = "Simple easy assignment"
4. append child to parent: parent.append(newElement);



3.What is Event Bubbling? And how does it work?
Solution:
A mechanism where event start from target elements and then bubbles up to the parent elements, in DOM tree.
Example : A Button clicked then:
                               1.Button event runs
                               2.parent event runs
                               3.body event runs

4. What is Event Delegation in JavaScript? Why is it useful?
Solution:
Event delegation is a process to use single event listener in parent elements instead of multiple evnets listener in child elements.
1. apply event listener on parent element
2. then identify the target child element using (.target() )
3. then control event listener

Reduce number of event listeners
Improves performence
Simplification of code


5.What is the difference between preventDefault() and stopPropagation() methods?
Solution:

                   preventDefault()  
   Stops default behaviour of an element    
   Example: form.addEventListener("submit", function(event){ 
   event.preventDefault(); });                               
   form will not submit. it also stops: 
                                       1.link navigation
                                       2.checkbox
                                                      
                
                stopPropagation()
   Stops event bubbling up .  
   Example: <div id="parent" > <button id="child"> Click </button> </div>
   documnent.getElementById("paernt").addEventListener("click",function(){ 
   alert("Parent clicked");})
   document.getElementById("child").addEventListener("click",function(){
   alert("Button Clicked"); })
                                  
   parent event will not trigger due to stopPropagation();





   
