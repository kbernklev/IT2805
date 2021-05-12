/* Part 2 */
console.log('PART 2')

for (let i=1; i<21; i+=1) {
    console.log(i)
}
/* Prints all integers from 1 through 20 in the console. */

/* Part 3 */
console.log('PART 3')

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
for (let i=0; i<numbers.length; i+=1) {
    if (numbers[i]%3==0 && numbers[i]%5==0) {
        console.log("eplekake")
    }
    else if (numbers[i]%3==0) {
        console.log("eple")
    }
    else if (numbers[i]%5==0) {
            console.log("kake")
        }
    else {
        console.log(numbers[i])
        }
}
/* Uses for loop to print numbers in the array "numbers". First, prints the word "eplekake" instead of the number, if
the number is divisible by both 3 and 5. Then, if number is divisble by 3, it prints the word "eple" instead of the
number, and if it is divisible by 5 it prints the word "kake", instead of the number. If none of these conditons are
met, then simply the number will be printed. */

/* Part 4 */

document.getElementById("title").innerText = "Hello, JavaScript"
/* Fetches the element "title" from the HTML-document and insets the text "Hello, JavaScript" */

/* Part 5 */
function changeDisplay () {
    document.getElementById("magic").style.display ="none"
}
/* Changes the visibilty of button "1" so that it is removed from the page. */

function changeVisibility () {
    document.getElementById("magic").style.visibility ="hidden"
}
/* Changes the visibilty of button "1" so that it is hidden from the page but still takes up space. */

function reset () {
    document.getElementById("magic").style.display ="block"
    document.getElementById("magic").style.visibility ="visible"
}
/* Resets the previous functions so that the button "1" is once again visible. */

/* Part 6 */
const technologies = [
    'HTML5',
    'CSS3',
    'JavaScript',
    'Python',
    'Java',
    'AJAX',
    'JSON',
    'React',
    'Angular',
    'Bootstrap',
    'Node.js'
];

var liste = document.getElementById("tech");
for (let i=0; i<technologies.length; i+=1) {
    var a = document.createElement("li");
    a.innerText = technologies[i];
    liste.appendChild(a)
}
/* Loops through the array "technologies", appending one child each time to the empty list "tech" in the HTML-documen.
 This creates an unordered list of all the elements once the loop is finished. */



