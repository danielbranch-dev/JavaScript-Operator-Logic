/*In JavaScript, there are many types of operators.*/

/* It is said that JavaScript is a language that determines associactivity from the left, and from the right. Arithmetic operators use math logical opertors like -,+,/,*,**,%.
When trying to solve a math equation in JS using arithmetic operators, the associativity is read from left to right generally speaking. Also note that operator precedence assigns
values to arithmetic operators based on PEMDAS or BODMAS logic.*/

x = 4-5-2;

/* The answer would be -3 because JavaScript associactivity is read from left to right for arithmetic operators. */

/* ASSIGNMENT operators are different and have an associactivity from right to left. */

x = z=s=r=t=0;

/* In this case, 0 is a value assigned to t. t is assigned to r. r is assigned to s. s is assigned to z. z is then assigned to x. */





/*JavaScript operators also have Logical operators. And = &&, OR = ||, NOT = ! */

/* OR Operator */

/* The program below returns the users preferred favourite icecream, Or vanilla is assigned to the favouriteIcecream variable */

let favoriteIcecream = userPreference.favouriteIcecream || "Vanilla";

/*AND operator and NOT operator*/

/*The program below shows the login page when a LoggedInUser is NOT true and displays the showLogInPage variable*/
const LogInPage = !LoggedInUser && showLogInPage;

/* If Not registered, alert register now */
if (!isRegistered) { alert ("Register now!"); }

/* True, I like Vanilla IceCream */
!!"I like Vanilla IceCream"; // Returns true,

