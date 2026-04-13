<?php
$numbers = array(10, 20, 30, 40, 50);

for($i = 0; $i < count($numbers); $i++) {
    echo $numbers[$i] . " ";
}
?>

<?php
function printArray($arr) {
    foreach($arr as $value) {
        echo $value . " ";
    }
}
$numbers = array(10, 20, 30, 40);
printArray($numbers);
?>