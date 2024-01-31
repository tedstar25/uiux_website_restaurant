<?php

function cors() {
    
    // Allow from any origin
    if (isset($_SERVER['HTTP_ORIGIN'])) {
        // Decide if the origin in $_SERVER['HTTP_ORIGIN'] is one
        // you want to allow, and if so:
        header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
        header('Access-Control-Allow-Credentials: true');
        header('Access-Control-Max-Age: 86400');    // cache for 1 day
    }
    
    // Access-Control headers are received during OPTIONS requests
    if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
        
        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
            // may also be using PUT, PATCH, HEAD etc
            header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
        
        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
            header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");
    
        exit(0);
    }
    
    echo "You have CORS!";
}

cors();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $name = $_POST["name"];
    $time = $_POST["time"];
    $phone = $_POST["phone"];

    // Validate and process the data
    if (!empty($name) && !empty($time) && !empty($phone)) {
        // Set the recipient email address
        $to = "quellbrunen@gmail.com";

        // Set the subject of the email
        $subject = "New Form Submission";

        // Compose the email message
        $message = "Name: $name\n";
        $message .= "Time: $time\n";
        $message .= "Phone Number: $phone\n";

        // Set additional headers
        $headers = "From: webmaster@example.com";

        // Send the email
        if (mail($to, $subject, $message, $headers)) {
            echo "Form submitted successfully. We will contact you shortly.";
        } else {
            echo "Failed to submit the form. Please try again later.";
        }
    } else {
        echo "Please fill out all the fields in the form.";
    }
} else {
    // Handle the case where the form is not submitted via POST
    echo "Invalid request.";
}
?>
