//Ejecuta la validacion del formulario una vez el usuario toque el boton registrar
function submitFunction(event){
    const validate = formValidate();
    if(!validate){
        event.preventDefault();
    }else{
        event.preventDefault();
        alert(
            "Los datos enviados fueron \n"+
            "Nombre: " + document.getElementById("name").value + `\n`+
            "Apellido: " + document.getElementById("surname").value + `\n`+
            "Dni: " + document.getElementById("dni").value + `\n`+
            "Email: " + document.getElementById("mail").value + `\n`+
            "Edad: " + document.getElementById("old").value + `\n`+
            "Actividad: " + document.getElementById("act").value + `\n`+
            "Nivel de estudio: " + document.getElementById("lvlStudy").value + `\n`
        )
    }
}

document.getElementById("form1").addEventListener("submit",submitFunction);

//Validacion del formulario
function formValidate(){

    //Validacion de los inputs de tipo texto
    const textCamps = document.querySelectorAll("input[type=text]");
    let correctValidate = true;
    textCamps.forEach(function campFunction(camp){
    let errorCamp = document.getElementById("error" + camp.id.charAt(0).toUpperCase() + camp.id.slice(1));
    if(camp.value === ""){
        seeError(errorCamp,"Este campo debe completarse!");
        correctValidate = false;
    }else if(camp.value.length < 3){
        seeError(errorCamp,"Debe tener al menos 3 caracteres!");
        correctValidate = false;
    }else{
        noSeeError(errorCamp);
    }
});

    //Validacion del email
    const email = document.getElementById("mail");
    let emailError = document.getElementById("errorMail");

    if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)){
        noSeeError(emailError);
    }else{
        seeError(emailError,"Ingrese un email valido!")
        correctValidate = false;
    }

    //Validacion de la edad
    const old = document.getElementById("old");
    let oldError = document.getElementById("errorOld");

    if(old.value.length === 0){
        seeError(oldError,"Completa este campo!");
        correctValidate = false;
    }else if(old.value < 18){
        seeError(oldError,"Debes ser mayor!");
        correctValidate = false;
    }else{
        noSeeError(oldError);
    }

    //Validacion del input actividad
    const act = document.getElementById("act");
    let actError = document.getElementById("errorAct");

    if(act.value === ""){
        seeError(actError,"Ingrese una actividad!");
        correctValidate = false;
    }else{
        noSeeError(actError);
    }

    //Validacion del input de nivel de estudio
    const lvlStudy = document.getElementById("lvlStudy");
    let lvlStudyError = document.getElementById("errorLvl");

    if(lvlStudy.value === ""){
        seeError(lvlStudyError,"Ingrese un nivel de estudio!");
        correctValidate = false;
    }else{
        noSeeError(lvlStudyError);
    }

    //Validacion de los terminos y condiciones
    const terms = document.getElementById("accept");
    let termsError = document.getElementById("errorAccept");

    if(!terms.checked){
        seeError(termsError,"Debes aceptar los terminos y condiciones!");
        correctValidate = false;
    }else{
        noSeeError(termsError);
    }

    return correctValidate;
}

//Funcion que muestra el error en caso de que lo haya
function seeError(elem,message){
    elem.textContent = message;
    elem.style.display = "block";
}

//Funcion que se ejecuta en caso de que no haya ningun error
function noSeeError(elem){
    elem.textContent = "";
    elem.style.display = "none";
}



