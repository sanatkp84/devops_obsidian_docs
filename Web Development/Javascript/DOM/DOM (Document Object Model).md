- The DOM represents a document with a logical tree.
- It allows us to manipulate/change webpage content (HTML elements).

# Selecting Elements

*getElementsById*

- Returns the Element as an object or null (if not found)

*getElementsByClassName*

- Returns the Elements as an HTML Collection (not an array) or empty collection (if not found).

*getElementByTagName*

- Returns the elements as an HTML collection or empty collection (if not found).

# Query Selector

```
document.querySelector("h1");                       //for tags
document.querySelector("#description");             //for ids
document.querySelector(".oldImage");

# For print them
console.dir(document.querySelector("div a"));      //anchor tag inside div
```

# Using Properties & Methods

- innerText : Shows the visible text contained in a role
- textContent : Shows all the full text
- innerHTML : Shows the full markup

```
# Suppose there is a paragraph with tag "p". then we need to select that with query selector.

let para = document.querySelector('p');

para.innerText;
para.textContent;
para.innerHTML;

# Suppose the text inside h1 tag is "Hello world" and you want to manipulate that title by adding an underline to that.

para.innerHTML = "<u>Hello world</u>";
```

# Manipulating Attributes

- Two Methods
```
obj.getAttribute(attr)
obj.setAttribute(attr, val)
```
- These are also called as getters & setters.

