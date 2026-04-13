<?php
for($i = 1; $i <= 5; $i++) {
    echo $i . " ";
}
?>

<?php
$i = 1;
while($i <= 5) {
    echo $i . " ";
    $i++;
}
?>

<?php
$i = 1;
do {
    echo $i . " ";
    $i++;
} while($i <= 5);
?>

<?php
$colors = array("Red", "Green", "Blue");

foreach($colors as $value) {
    echo $value . " ";
}
?>