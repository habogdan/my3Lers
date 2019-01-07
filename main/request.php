<?php
$text = file_get_contents('php://input');
$request = $_SERVER['REQUEST_METHOD'];
switch($request) {
    case 'GET':
        {
            //echo 'GET';
            if (file_exists ( 'topList.txt' )){
                $myfile = fopen("topList.txt", "r");
                $topList = fread($myfile, filesize ( 'topList.txt' ));
                echo $topList;
            }

            break;
        }
    case 'POST':
        {
            //echo 'POST';

            break;
        }
    case 'PUT' :
        {
            //echo $text;
            $myfile = fopen("topList.txt", "w");
            fwrite($myfile, $text);
            fclose($myfile);

            break;
        }
    case 'DELETE' :
        {
            //echo 'DELETE';
            unlink("topList.txt");
            break;
        }
    default:
}