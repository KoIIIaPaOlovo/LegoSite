<?php
    
    $to = "now@papa-carlo.ru";

    $headers  = "Content-type: text/html; charset=utf-8 \r\n";
    $headers .= "From: Lego <lego@lego.ru>\r\n";
    $headers .= "Reply-To: " . "\r\n";

    $keys = [
        'name' => 'Имя',
        'last_name' => 'Фамилия',
        'vid_form' => 'Вид форма',
        'phone' => 'Телефон',
        'comment' => 'Содержание письма',
        'email' => 'Почта',
        'href' => 'Метки',
    ];

    $subject = "Заявка с сайта Lego";

    $content = "";
    $note = "";
    foreach ($_POST as $k => $v) {
        if (isset($keys[$k]))
            $k = $keys[$k];
        if (is_array($v))
            $v = implode(', ', $v);
        $content .= '<p><b>' . $k . ':</b> ' . strip_tags($v) . '</p>' . PHP_EOL;
        $note .= $k . ': ' . strip_tags($v) . PHP_EOL;
    }

    $message = "
            <html>
                <head>
                    <title>" . $subject . "</title>
                </head>
                <body><b>Заявка пришла со страницы:</b> " . $_SERVER["HTTP_REFERER"] .'<br>' . $content . "</body>
            </html>";

    $form = array(
        'phone' => $_POST['phone'],
        'name' => $_POST['name'],
        'email' => '',
        'funnel' => '1000',
        'channel' => '1',
        'responsible' => '100037',
        'lead' => '',
        'task' => '',
        'note' => $note,
    );

    mail($to, $subject, $message, $headers);

?>

