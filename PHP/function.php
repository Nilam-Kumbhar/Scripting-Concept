<!-- function without parameter -->
<?php
function greet() {
    echo "Hello, Welcome to PHP!";
}

greet();   
?>

<!-- function with parameter -->
 <?php
function add($a, $b) {
    $sum = $a + $b;
    echo "Sum is: " . $sum;
}

add(10, 20);
?>

<!-- function with return  -->
 <?php
function multiply($x, $y) {
    return $x * $y;
}

$result = multiply(5, 4);
echo "Multiplication is: " . $result;
?>