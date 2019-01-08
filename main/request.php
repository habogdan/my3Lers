<?php
$text = file_get_contents('php://input');
$request = $_SERVER['REQUEST_METHOD'];

switch($request) {
    case 'GET':
        {
            if (file_exists ( 'topList.txt' )){
                $myfile = fopen("topList.txt", "r");
                $topList = fread($myfile, filesize ( 'topList.txt' ));
                echo $topList;
            }

            break;
        }
    case 'POST':
        {
            $myfile = fopen("topList.txt", "w");
            fwrite($myfile, $text);
            fclose($myfile);

            break;
        }
    case 'PUT' :
        {
                $x = file_get_contents('js-files/JSON.json');
                $y = json_decode($x);
                $search_id = $_GET['id'];
                foreach($y->movies as $movie)
                {
                    if($movie->id == $search_id)
                    {
                        $old_val = $movie->onWatchList;
                        echo $old_val;
                        $new_val = 0;
                        if($old_val == 1)
                            $mew_val = 0;
                        else
                            $new_val = 1;

                        $movie->onWatchList = $new_val;
                    }
                }
                $y = json_encode($y);
                file_put_contents('js-files/JSON.json', $y);

            break;
        }
    case 'DELETE' :
        {
            unlink("topList.txt");
            break;
        }
    default:
}