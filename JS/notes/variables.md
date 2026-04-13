What is a variable?
- A container
- We can save a vale and use it for later

use keyword let

Syntax Rules
let _ = _;

Variable Name Restrictions
1. Cant use special words, EX: let
2. Cant start with a number
3. Cant use special characters except: $ and _ 

Syntax Rules for Reassigning a Value
1. Dont use "let" again, because the variable already exists



Variable Reassigning Shortcuts

+= 2 : var = var + 2
-=2 : var = var - 2
*=2 : var = var * 2
/=2 : var = var / 2
-- : var = var - 1
++ : var = var + 1


Naming Convention
camelCase = capitalize every word except the first word
- This is the standard for JavaScript

PascalCase : CartQuantity
kebab-case : cart-quantity
snake_case : cart_quantity

3 ways to create variables
1. Use keyword "let" : let age = 12; --This variable can change later on
2. Use keyword "const" : const sign = 'red'; --This variable CAN NOT change, hence the keyword constant
3. Use keyword "var": var var1 = 2; -- We dont use var in modern JS code