function limpar() {
    assunto.value = "";
    destino.value = "";
    conteudo.value = "";
}

function enviar() {
    if(/*!destino.checkValidity() &&*/ destino.value != "")
    {
        if(conteudo.value != "")
        {

            var dados = new FormData();
            dados.append(destino.name, destino.value);
            dados.append(assunto.name, assunto.value);
            dados.append(conteudo.name, conteudo.value);

            var req = new XMLHttpRequest();
            req.open('post', 'enviar_email.php');

            req.onloadend = function () {
                if(req.responseText == 'sucesso')
                {
                    alert('Envio do email completo com sucesso...');
                    limpar();
                }

                else
                {
                    alert(req.responseText);
                    alert ('infelizmente o envio foi um fracasso...');
                }
            }

            req.send(dados);
        }

        else
        {
            alert('Sem conteudo....');
        }
    }

    else
    {
        alert('email invalido!');
    }
}