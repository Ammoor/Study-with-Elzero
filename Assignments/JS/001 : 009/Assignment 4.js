// Assignment 4:

console.group("Group 1");
console.log("Message One");
console.log("Message Two");
console.group("Child Group");
console.log("Message One");
console.log("Message Two");
console.group("Grand Child Group");
console.log("Message One");
console.log("Message Two");
console.groupEnd(); // Ends "Grand Child Group".
console.groupEnd(); // Ends "Child Group".
console.groupEnd(); // Ends "Group 1".
console.group("Group 2");
console.log("Message One");
console.log("Message Two");

/*

1- console.group(): Create a group of messages in the console.
2- console.groupEnd(): Ends a message group in the console.
3- console.groupCollapsed(): Create a collapsed group of messages in the console.

*/
