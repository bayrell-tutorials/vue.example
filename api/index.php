<?php

define ('ROOT_PATH', dirname(__DIR__));
ini_set('display_errors', 'on');
ini_set('html_errors', 'on');
set_time_limit(300);


// Include vendor
// require ROOT_PATH . "/vendor/autoload.php";


/* Include enviroments */
$env = include ROOT_PATH . "/env.php";


/* Response */
header('Content-Type: application/json');
echo "{}";


/* End */
exit (0);