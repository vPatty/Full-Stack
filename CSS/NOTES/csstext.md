 Text Styling

Font-weight
- Sets the thickness of text characters
font-weight: bold;

Text Decoration

- Sets decorative lines on text
property         line value     color value      style value      
text-decoration: underline      blue             dotted;

Line values
- line-through, overline, underline(default for anchor elements), none(default for most elements)

Color values
- named, hex, rgb

Style values
- double, dotted, wavy, solid dashed

Text-Decoration guidance
- Always remove underline from anchor tags and very rarely use text-decoration
- Style with weight and color instead


Font Style
- Sets the style of a font
font-style: italic;

normal, italic, oblique, oblique 10deg

Font Style guidance
- Can sometimes be used to draw attention


Text Transform
- Sets the capitalisation of text
text-transform: uppercase;
none, uppercase, lowevase, capitalize




Text Spacing

Text-align
- Specfies the horizontal alignment of text within an element
text-align: center;
left, right, center, justify


Line Height
- Sets the heigh of text and is commonly used to set distance between multiple lines of text
line-height: 1.5;
unitless, percentage, pixels, ems




Letter Spacing
- Sets the horizontal space betwen characters
letter-spacing: 8px;
pixels, percentage, ems


Text Size

Font Size
- Sets the size of the text
font-size: 16px;
pixels, rems

- Regular text should be 16 - 32 pc, and heading can be >60px.




Pixels
- A CSS pixel has a length of 1/96 inches (0.0104 inch)




Font Family

Typeface
- Characters with consistent visual characteristics


Serif Typeface
- A classic feel used by brands to communicate luxury and reliability

Sand-Serif Typeface
- A modern and clean feel used by nrand to communicate simplicity and clarity

Monospace Typeface
- A technical feel used by brnads to communicate accuracy and precision

Cursive Typeface
- A personal feel used to connect with people on a more emotional level

Display Typeface
- A creative feel used by brnads to communicate playfulness and rule breaking

Font-Family
- Sets a prioritized list of font names or font categories
font-family: 'Tahoma', sans-serif;




Color

Named Colors
- CSS includes 147 named colors that browsers recognize

Color Systems
- A structured method for creating different colors using a set of primary colors and rules for mixing them
    - Subtractive Color System
        - Commonly used in print and painting
        - Start with white and apply colored pigments that absorb light
    - Additive Color System
        - Commonly used in electronic displays
        - Start with black and emit light at different intensities



RGB and Hexadecimal Notation
- Color values can be represented in either RGB or Hexadecimal notation
RGB rgb(152, 116, 249)
Hexadecimal #9874F9

Shades of Grey
- When all three channels of RGB have the same value we get a shade of grey
rgb(0,0,0) #000000
rgb(64,64,64) #404040
rgb(136,136,136) #888888
rgb(192,192,192) #888888
rgb(255,255,255) #FFFFFF

CSS Color
- Specifies the color of text
color: #987$F9;
rgb, rgba, hex, hsl

Color Guidance
- Have at least 2 colors in your color palette, a primary and grey color

- Primary colors are used to highlight important parts of a page and tints and shades can be used to creat contrast
- Grey color with tints and shades often used for fonts
- Color is used in images and illustrations for consistency
- Color is used throughout design for components and sections
- Adding a secondary color introduces variety and contrast often making designs more appealing
- Primary colors are typically used on dominant elements such as buttons, bakcground colors, and more
- Secondary colors are used to add variety
- Tertiary colors add further variety