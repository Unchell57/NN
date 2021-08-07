<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Отправка отзыва</title>
</head>
<body>
	<?php
		$title = $_POST['title'];
		$review = $_POST['review'];
		$product = $_POST['product'];
		$contact = $_POST['contact'];

		$title = htmlspecialchars($title);
		$review = htmlspecialchars($review
		$product = htmlspecialchars($product);
		$contact = htmlspecialchars($contact);


		$title = trim(urldecode($title));
		$review = trim(urldecode($review));
		$product = trim(urldecode($product));
		$contact = trim(urldecode($contact));

		$message = "Заголовок:".$title.". Текст: ".$review.". Продукт: ".$product.". Контакты: ".$contact ,"From: noreply@nn.com";

		mail("VolozheninVadim@yandex.ru", "N.N. Отзыв/Сообщение", $message);
	?>
</body>
</html>