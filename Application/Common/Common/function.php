<?php
function p($arr){
	header("Content-Type: text/html; charset=UTF-8");
    dump($arr,1,'<pre>',0);
}