<?php

$name = $_POST['name'];
$citizenship = $_POST['citizenship'];
$passport = $_POST['passport'];
$find = $_POST['find'];
$vacancy = $_POST['vacancy'];
$salary = $_POST['salary'];
$visa = $_POST['visa'];
$country = $_POST['country'];
$age = $_POST['age'];
$questions = $_POST['questions'];
$document = $_POST['document'];
$approval = $_POST['approval'];
$phone = $_POST['phone'];
$social = $_POST['social'];
$tariff = $_POST['tariff'];

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

// $mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'itwork.notifications@gmail.com';                 // Наш логин
$mail->Password = 'hvyvpxvawdercyut';                           // Наш пароль от ящика
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                    // TCP port to connect to
 
$mail->setFrom('itwork.notifications@gmail.com', 'IT-Work');   // От кого письмо 
$mail->addAddress('jkytky@bk.ru');     // Кому будет приходить
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

// foreach($_FILES['document'] as $file){
//     $mail->addAttachment($file['path'], $file['name']);
// 	// if (isset($_FILES['file'])
// 	// 	&& $_FILES['file']['error'] == UPLOAD_ERR_OK
// 	// ) {
// 	// 	$mail->addAttachment($_FILES['file']['tmp_name'],
// 	// 						$_FILES['file']['name']);
// 	// }
// }

// if (isset($_FILES['file'])
// 		&& $_FILES['file']['error'] == UPLOAD_ERR_OK
// 	) {
// 		$mail->addAttachment($_FILES['file']['tmp_name'],
// 							$_FILES['file']['name']);
// 	}

for($ct=0;$ct<count($_FILES['document']['tmp_name']);$ct++){
	$mail->AddAttachment($_FILES['document']['tmp_name'][$ct],$_FILES['document']['name'][$ct]);
}


$mail->Subject = 'Новое обращение на IT-Work!';
$mail->Body    = '
		Пользователь оставил данные <br><br> 
	Ф.И.О: ' . $name . ' <br>
	Гражданство: ' . $citizenship . '<br>
	Действующий загранпаспорт: ' . $passport . '<br>
	В каких странах ищите работу?: ' . $find . '<br>
	Какие вакансии Вам подходят?: ' . $vacancy . '<br>
	На какую зарплату рассчитываете?: ' . $salary . '<br>
	Есть уже действующая виза?: ' . $visa . '<br>
	В какой стране Вы сейчас находитесь?: ' . $country . '<br>
	Сколько полных лет: ' . $age . '<br>
	На кого учились, какие курсы проходили, кем и где работали, женаты, есть ли дети, есть ли у вас судимости, депорты?: ' . $questions . '<br>
	Ознакомились ли Вы с нашими условиями работы, стоимостью, договором и иными документами, понимаете ли Вы и принимаете их? Понимаете что стоимость наших услуг (ОРИЕНТИРОВОЧНО, зависит от тарифа) будет равна 600-800 евро, и готовы ли Вы к предоплате за первый этап нашей работы (100-150 евро) в день заполнения Вами данной анкеты Если вы не готовы оплатить за перевод документов в течение суток от отправления анкеты, не заполняйте: ' . $approval . '<br>
	Какой тарифный план выбираете?: ' . $tariff . '<br>
	Напишите, Ваш мобильный телефон, аккаунт Telegram, Viber,WhatsApp, по которому Вас можно будет найти для связи: ' . $phone . '<br>
	Укажите адрес Вашей электронной почты, ссылку на инстаграм, фейсбук, вконтакте, по которому мы сможем с Вами связаться: ' . $social . '';

if(!$mail->send()) {
	$message = 'Ошибка!';
} else {
    $message = 'Данные отправлены!';
}

$response = ['message' => $message];

header('Content-type: application/json');
echo json_encode($response);
?>