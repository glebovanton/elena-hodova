<?php

$recepient = "workglebov@gmail.com";
$sitename = "Елены Радион";

$name = trim(strip_tags(html_entity_decode(trim($_POST["name"]))));
$phone = trim(strip_tags(html_entity_decode(trim($_POST["phone"]))));

$pagetitle = "Новая заявка с сайта \"$sitename\"";
$message = "Имя: $name \nТелефон: $phone";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");

?>