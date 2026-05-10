Flex Children

Flexbox also has properties that control the behavior and positioning of flex items


Flex-Grow
- Determines how flex items expand to fill extra space in a container based on a set of proportions
flex-grow: 0;(0, default value)1, 2, 3, 4

Flex-Shrink
- Determines how flex items shrink relative to other in a contianer where there isnt enough space

Align-Self
- Sets individual flex itmes alignment by overriding the flex containers default align-items value
align-self: auto;(default)

align-self: stretch;

align-self: flex-start;

align-self: flex-end;

align-self: center;

align-self: flex-end;
align-self: baseline;



Order
- Changes the visual order of flex items independent of their order in the HTML markup
order: 0;(default)

It goes from lower value (left) to higher value (right)
so order: -1; would put item in the front