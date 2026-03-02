What are block and inline elements??
- All HTML elements are by default teither a block or inline element

BLOCK ELEMENT
- Starts on a new line
- Takes up full width of a page
- <h1> <p> <ul> <li>

INLINE ELEMENTS
- Does not start on a new line
- Only occupies width of their width
- <a> <img> <br> <input>

An inline element can be nested inside a block element

Valid or Invalid

<ul>
    <li></li>
</ul>
VALID

<h1><a></a><h1>
VALID

<a><h1></h1></a>
INVALID

<a><img></a>

Containters
- A container groups content and is used in conjuction with css to control the positioning and styling of content blocks

So how do we do this??

The div element
- A block level container element used to group content for styling and positioning
<div>
    <!-- CODE BLOCK -->
</div>

The span element
<h1>Create<span>Amazing</span>Journals</h1>
Custom styling can be applied without impacting the rest of the heading

DIV VS SPAN

DIV
- <div>
- Used to group large blocks of HTML content for styling and positioning
- Block level element

SPAN
- <span>
- Primarirly used to wrap text for custom styling
- Inline level element