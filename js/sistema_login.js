// Aqui esta pegando os butões
let btnlogin = document.getElementById("btnlogin");

let btnlog = document.getElementById("btnlog");

let btncad = document.getElementById("btncad");

let login = document.getElementById("login");

let cad = document.getElementById("cad");

let btnreg = document.getElementById("btnreg");

// Fução para pegar o click do butão
btnlogin.onclick = () => {
    login.style.display = 'block';

    cad.style.display = 'none';

}

btncad.onclick = () => {
    login.style.display = 'none';

    cad.style.display = 'block';
}

// Array para guarda os cadastros
let registros = [];

// Butão para cadastrar usuario e senha e suas validações 
btnreg.onclick = () => {
    let lis = document.getElementById("listacad");
    let emailInput = document.getElementById("email");
    let senhaInput = document.getElementById("senha");

    let email = emailInput.value;
    let senha = senhaInput.value;

    if (email == '' || senha == '') {
        lis.innerHTML = "O campo não pode ser vazio!";
        lis.style.color = '#FF0000';
    } else {
        lis.innerHTML = "Cadastrado com sucesso";
        lis.style.color = '#008000';
    }

    let objetos = {
        email: email,
        senha: senha
    }
    registros.push(objetos);
    limparcad();
    inserircad();
}

let limparcad = () => {
    email.value = '';
    senha.value = '';
}

let inserircad = () => {
    registros.forEach((value) => {

        console.log('Email: ' + value.email + ' Senha: ' + value.senha);

    });
}

// Butão para logar e validações do login
btnlog.onclick = () => {
    let li = document.getElementById("listalog");


    let email = inputEmail.value;
    let senha = inputSenha.value;

    if (email == '' && senha == '') {
        li.innerHTML = "O campo não pode ser vazio";
        li.style.color = '#FF0000';
    } else {
        let dados = registros.some((value) => {

            return value.email == email && value.senha == senha 
        }); 
            if(dados){    
                li.innerHTML = "Login efetuado com sucesso";
                li.style.color = '#008000';
            } else {
                li.innerHTML = "Usuario ou senha invalidos";
                li.style.color = '#FF0000';
            }
        
        
    }
}

        







