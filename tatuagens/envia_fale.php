<?

# alterar a variavel abaixo colocando o seu email

$destinatario = "yudilopes87@gmail.com";

$nome = $_REQUEST['nome'];
$email = $_REQUEST['email'];
$tel = $_REQUEST['tel'];
$assunto = $_REQUEST['assunto'];

 // monta o e-mail na variavel $body

$body = "===================================" . "\n";
$body = $body . "FALE CONOSCO - TESTE COMPROVATIVO" . "\n";
$body = $body . "===================================" . "\n\n";
$body = $body . "Nome: " . $nome . "\n";
$body = $body . "Email: " . $email . "\n";
$body = $body . "tel: " . $tel . "\n\n";

$body = $body . "===================================" . "\n";

// envia o email
mail($destinatario, $assunto , $body, "From: $email\r\n");

// redireciona para a página de obrigado
header("location:obrigado.htm");


?>