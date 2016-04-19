$( "#send" ).on('click', function(event) {
  // debugger;
  event.preventDefault();

  var dados = {
    nome : $('#nome').val(),
    email : $('#email').val(),
    _subject : $('#assunto').val(),
    mensagem : $('#mensagem').val(),
    _format : 'plain'
    // _cc : 'tiemi@ufscar.br,lzaina@ufscar.br,lizier@ufscar.br'
  }

  if(validacao(dados)){
    $.ajax({
      method: "POST",
      url: "https://formspree.io/marco.oliveira@dcomp.sor.ufscar.br",
      data: dados,
      dataType: "json",
      success: function(data){
        Materialize.toast('Mensagem enviada!', 4000, '', function(){
          $('#emailForm')[0].reset();
        });
      },
      error: function(data){
         Materialize.toast('Desculpe-nos, ocorreu um erro :(', 4000);
      }
    });
  }

});

var validacao = function(dados){
  console.log(dados);
  var nomeValido = false;
  var emailValido = false;
  var assuntoValido = false;
  var mensagemValida = false;

  if(dados.nome == null || dados.nome == ""){
    $('#nome').removeClass("valid");
    $('#nome').addClass("invalid");
  }else{
    $('#nome').addClass("valid");
    $('#nome').removeClass("invalid");
    nomeValido = true;
  }

  if(dados.email == null || dados.email == "" || !isEmail(dados.email)){
    $('#email').removeClass("valid");
    $('#email').addClass("invalid");
  }else{
    $('#email').addClass("valid");
    $('#email').removeClass("invalid");
    emailValido = true;
  }

  if(dados._subject == null){
    $('#assunto').removeClass("valid");
    $('#assunto').addClass("invalid");
  }else{
    $('#assunto').addClass("valid");
    $('#assunto').removeClass("invalid");
    assuntoValido = true;
  }

  if(dados.mensagem == null || dados.mensagem == ""){
    $('#mensagem').removeClass("valid");
    $('#mensagem').addClass("invalid");
  }else{
    $('#mensagem').addClass("valid");
    $('#mensagem').removeClass("invalid");
    mensagemValida = true;
  }
  return nomeValido && emailValido && assuntoValido && mensagemValida;
};

function isEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
};
