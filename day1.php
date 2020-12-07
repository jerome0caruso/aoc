<!-- Part: 1 -->

<?php
$array = explode("\n", $list);
$length = count($array);
$matchingNumbers = array();

for($i = 0; $i < $length; $i++) {
 for($j = 0; $j < $length; $j++) {
   if($array[$j] + $array[$i] === 2020) {
     array_push($matchingNumbers, $array[$i], $array[$j]);
   }
  }
}

var_dump($matchingNumbers[0] * $matchingNumbers[1]);

?>

<!-- Part: 2 -->

<?php
$array = explode("\n", $list);
$length = count($array);
$matchingNumbers = array();

for($i = 0; $i < $length; $i++) {
 for($j = 0; $j < $length; $j++) {
   for($k = 0; $k < $length; $k++) {
    if($array[$j] + $array[$i] + $array[$k] === 2020) {
     array_push($matchingNumbers, $array[$i], $array[$j], $array[$k]);
    }
   }
  }
}
$allNumbers = ($matchingNumbers[0] * $matchingNumbers[1] * $matchingNumbers[2]);
var_dump($allNumbers);




?>