<?php
$to = "omihajlov-resume@mail.ru";
$subject = "Форма обратной связи";
$message = "Новое сообщение!";
$headers = "Content-type: text/plain; charset=utf-8 \r\n";

if($_SERVER["REQUEST_METHOD"] == "POST") {
    if(isset($_POST["username"])) {
        $name     = trim(strip_tags($_POST["username"]));
    }
    if(isset($_POST["usersurname"])) {
        $surname     = trim(strip_tags($_POST["usersurname"]));
    }
    if(isset($_POST["usernumber"])) {
        $number   = trim(strip_tags($_POST["usernumber"]));
    }
    if(isset($_POST["useremail"])) {
        $email   = trim(strip_tags($_POST["useremail"]));
    }
    if (isset( $_POST["userquestion"])) {
        $question   = trim(strip_tags($_POST["userquestion"]));
    }
    $message  .= "Телефон: ".$number;
    $message  .= "Email: ".$email;
    $message  .= "Имя: ".$name;
    $message  .= "Фамилия: ".$surname;
    $message  .= "Вопрос: ".$question;
    mail ($to, $subject, $message, $headers);
}
else
{
    exit;
}
$redirect = isset($_SERVER['HTTP_REFERER'])? $_SERVER['HTTP_REFERER']:'index.html';
header("Location: $redirect");
exit();


?>