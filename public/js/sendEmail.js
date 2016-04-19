$( "#emailForm" ).submit(function( event ) {
  debugger;
  event.preventDefault();

  var dados = {
    nome : $('#nome').val(),
    email : $('#email').val(),
    assunto : $('#assunto').val(),
    mensagem : $('#mensagem').val()
  }

  if(validacao(dados)){
    $.ajax({
      type: "POST",
      url: "",
      data: dados,
      success: function(data){
        Materialize.toast(data.data, 4000,'', function(){
          $('#emailForm')[0].reset();
        });
      },
      error: function(data){
         Materialize.toast(data.data, 4000);
      },
      dataType: "json"
    });
  }

});

var validacao = function(dados){
  var nomeValido = false;
  var emailValido = false;
  var assuntoValido = false;
  var mensagemValida = false;

  if(dados.nome == null || dados.nome == ""){
    $('#nome').addClass("invalid");
  }else{
    $('#nome').addClass("valid");
    nomeValido = true;
  }

  if(dados.email == null || dados.email == "" || !isEmail(dados.email)){
    $('#email').addClass("invalid");
  }else{
    $('#email').addClass("valid");
    emailValido = true;
  }

  if(dados.assunto == null){
    $('#assunto').addClass("invalid");
  }else{
    $('#assunto').addClass("valid");
    assuntoValido = true;
  }

  if(dados.mensagem == null || dados.mensagem == ""){
    $('#mensagem').addClass("invalid");
  }else{
    $('#mensagem').addClass("valid");
    mensagemValida = true;
  }

  return nomeValido && emailValido && assuntoValido && mensagemValida;
};

function isEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
};
