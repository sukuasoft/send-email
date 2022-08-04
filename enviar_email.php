<?php

    if(isset($_POST['conteudo']) && isset($_POST['assunto']) && isset($_POST['destino']))
    {
       if(filter_input(INPUT_POST, 'destino', FILTER_VALIDATE_EMAIL) && 
       !empty($_POST['conteudo']))
        {
            
            $headers  = 'MIME-Version: 1.0' . "\r\n";
          $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
             $headers .= 'From: Sebastião <sukuakueches@gmail.com>';
     //$headers .= "Bcc: $EmailPadrao\r\n";
           
            if(mail($_POST['destino'], $_POST['assunto'], $_POST['conteudo'], $headers))
            {
                echo 'sucesso';
            }
       

        }     
    }
?>
