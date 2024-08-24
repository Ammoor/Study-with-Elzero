<?php
// Assignment 6:

$something = "Programming";

// Edited code:
echo <<<"code"
Hello \PHP\
We Love $something
code;

/* 
Original code:
$something = "Programming";

echo <<<'code'
Hello \PHP\
We Love $something
        code;
*/

// [1] Fix The Error
// [2] Remove 2 Characters To Get The Output

/* 
Needed Output:

Hello \PHP\ We Love Programming
*/

/* 
    Important note:
        In heredoc and nowdoc, the end title must not be precede the content of the block it self.
*/
