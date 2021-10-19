window.addEventListener('load', () => {
    let inputs = document.querySelectorAll('.inputs');
    let fNombre = document.querySelector('.fas-nombre');
    let pNombre1 = document.querySelector('.p-nombre1');
    let pNombre2 = document.querySelector('.p-nombre2');
    let fApellido = document.querySelector('.fas-apellido');
    let pApellido1 = document.querySelector('.p-apellido1');
    let pApellido2 = document.querySelector('.p-apellido2');
    let fEmail = document.querySelector('.fas-email');
    let pEmail1 = document.querySelector('.p-email1');
    let pEmail2 = document.querySelector('.p-email2');
    let fPassword = document.querySelector('.fas-password');
    let pPassword1 = document.querySelector('.p-password1');
    let pPassword2 = document.querySelector('.p-password2');
    pNombre1.classList.add('d-none');
    pNombre2.classList.add('d-none');
    pApellido1.classList.add('d-none');
    pApellido2.classList.add('d-none');
    pEmail1.classList.add('d-none');
    pEmail2.classList.add('d-none');
    pPassword1.classList.add('d-none');
    pPassword2.classList.add('d-none');
    const validator = (event) => {
        switch (event.target.name) {
            case "nombre":
                if (event.target.value == "" || event.target.value.length < 2) {
                    fNombre.classList.add('fa-times-circle');
                    fNombre.classList.remove('fa-check-circle');
                    pNombre1.classList.remove('d-none');
                    pNombre2.classList.remove('d-none');
                    if(event.target.value !== "" && event.target.value.length < 2 ) {
                        pNombre1.classList.add('d-none');
                    }
                } else {
                    fNombre.classList.add('fa-check-circle');
                    fNombre.classList.remove('fa-times-circle');
                    pNombre1.classList.add('d-none');
                    pNombre2.classList.add('d-none');

                }
            break;
            case "apellido":
                if (event.target.value == "" || event.target.value.length < 2) {
                    fApellido.classList.add('fa-times-circle');
                    fApellido.classList.remove('fa-check-circle');
                    pApellido1.classList.remove('d-none');
                    pApellido2.classList.remove('d-none');
                    if(event.target.value !== "" && event.target.value.length < 2 ) {
                        pApellido1.classList.add('d-none');
                    }
                } else {
                    fApellido.classList.add('fa-check-circle');
                    fApellido.classList.remove('fa-times-circle');
                    pApellido1.classList.add('d-none');
                    pApellido2.classList.add('d-none');

                }
            break;
            case "email":
                if (event.target.value == "" || event.target.value.length < 3) {
                    fEmail.classList.add('fa-times-circle');
                    fEmail.classList.remove('fa-check-circle');
                    pEmail1.classList.remove('d-none');
                    pEmail2.classList.remove('d-none');
                    if(event.target.value !== "" && event.target.value.length < 3 ) {
                        pEmail1.classList.add('d-none');
                    }
                } else {
                    fEmail.classList.add('fa-check-circle');
                    fEmail.classList.remove('fa-times-circle');
                    pEmail1.classList.add('d-none');
                    pEmail2.classList.add('d-none');

                }
            break;
            case "password":
                if (event.target.value == "" || event.target.value.length < 8) {
                    fPassword.classList.add('fa-times-circle');
                    fPassword.classList.remove('fa-check-circle');
                    pPassword1.classList.remove('d-none');
                    pPassword2.classList.remove('d-none');
                    if(event.target.value !== "" && event.target.value.length < 8 ) {
                        pPassword1.classList.add('d-none');
                    }
                } else {
                    fPassword.classList.add('fa-check-circle');
                    fPassword.classList.remove('fa-times-circle');
                    pPassword1.classList.add('d-none');
                    pPassword2.classList.add('d-none');

                }
            break;
                        
        }
    }

    inputs.forEach((elemento)=>{
        elemento.addEventListener('keyup', validator);
        elemento.addEventListener('blur', validator);
    });
})