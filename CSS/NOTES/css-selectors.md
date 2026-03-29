CSS Selectors
- Selectors allow us to select HTML elements to apply rules
- There is a large range of CSS selectors that allow us to apply styles from broad styling to specific visual details

Most basic type of selector
-
Type Selector
-Selects elements based on their tag name(What we have been using so far)
h1 {
    font-size: 20px;
    color: blue;
}
Type Selector guidance
- It is useful for setting global styles to ensure consistency


State Pseudo Classes
- Dynamic styling based on user interaction & commonly used for hyperlinks

4 Types

a:link
- Targets anchor tags that have not yet been visited

a:visited
- Targets anchor tags that have been visited

Both are specific to anchor tags

a:hover
- Targets an element when the cursor is placed over it

a:active
- Targets an element when it is being clicked




The Universal selector
- Applies styles to all elements
- Primarily used for resetting default properties and is not typically used for applying specific styling
