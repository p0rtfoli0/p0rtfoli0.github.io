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
	Понимаете ли Вы что Ваши траты на все этапы работы с нами составят ориентировочно 500-800 евро? Поминаете ли Вы сколько, когда и за что платить? Какие этапы Вас ждут, какие гарантии и прочее?: ' . $approval . '';

if(!$mail->send()) {
	$message = 'Ошибка!';
} else {
    $message = 'Данные отправлены!';
}

$response = ['message' => $message];

header('Content-type: application/json');
echo json_encode($response);
?>