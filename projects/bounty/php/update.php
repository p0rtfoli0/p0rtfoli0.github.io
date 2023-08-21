<?php
    
    $post = json_decode(file_get_contents('php://input'), true);
    file_put_contents('../db.json', json_encode($post));
    echo "Success!";

?>