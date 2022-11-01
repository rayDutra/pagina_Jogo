function validar(){

    user= document.getElementById("user");
    pwd = document.getElementById("pwd");

    if(!user.value){
        alertWifi("Usuário em branco! Favor preenchê-lo",  false, 0, "../img/toupeira.gif", 30);
        nome.focus();
        
    }else if (!pwd.value){
        alertWifi("Senha em branco! Favor preenchê-la",  false, 0, "../img/toupeira.gif", 30);
        senha.focus();
    }else{
        //alertWifi("Login válido. Uhuull!" , false, 0, "../img/toupeira.gif", 30);
        readJSON(user.value, pwd.value);
    }
    
}
function readJSON(usuario, senha) {
    file = "https://wilton-filho.github.io/JS-GitHub/aulas/jogo/login/json/users2.json";
    fetch(file)
        .then(response => response.json())
        .then(content => checkUser(content, usuario, senha))
        .catch(err => console.log("erro na leitura do JSON"));
}
function checkUser(content, usuario, senha) {
    var achou = false;
    for (i = 0; i < content.usuarios.length; i++) {
        if ((content.usuarios[i].user == usuario) && (content.usuarios[i].pwd == senha)) {
            achou = true;
            break;
        }
    }
    if (achou)
    alertWifi("Login válido. Uhuull!" , false, 0, "../img/toupeira.gif", 30);
    else
        alertWifi("Usuário inválido!", false, 0, "../img/toupeira.gif", 30);
}
    