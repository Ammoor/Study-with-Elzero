<?php
// Assignment 3:

$a = 200;
$b = &$a;
$a = 100;

echo $b; // 100
