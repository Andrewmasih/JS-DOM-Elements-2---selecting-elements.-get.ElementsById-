/*2nd way: return collection of elements rather than indivdual items. use: 'getElementByClassName ("class-name")' */

/*if one or more element is found, it returns a collection - called a 'Nodelist' containing the elemenst, even if 1 is found. */

/*3rd way are elements with TAGS: 'document.getElementsByTagName ("tag-name")',
if we call the method like this: 'document.getElementsByTagName ("div")' we would get a 'Nodelist ' with all the div elements */


let element = document.getElementById ("main-heading");
console.log (element);