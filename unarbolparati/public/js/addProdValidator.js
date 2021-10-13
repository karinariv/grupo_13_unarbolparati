window.addEventListener('load', () => {
    let inputs = document.querySelectorAll('.inputs');
    let fNombre = document.querySelector('.fas-nombre');
    let pNombre1 = document.querySelector('.p-nombre1');
    let pNombre2 = document.querySelector('.p-nombre2');
    let fPrecio = document.querySelector('.fas-precio');
    let pPrecio1 = document.querySelector('.p-precio1');
    let pPrecio2 = document.querySelector('.p-precio2');
    let fncientifico = document.querySelector('.fas-nombre_cientifico');
    let pncientifico = document.querySelector('.p-nombre_cientifico');
    let fRegion = document.querySelector('.fas-region');
    let pRegion = document.querySelector('.p-region');
    let fTipo = document.querySelector('.fas-tipo');
    let pTipo = document.querySelector('.p-tipo');
    let fAltura = document.querySelector('.fas-altura');
    let pAltura = document.querySelector('.p-altura');
    let fCrecimiento = document.querySelector('.fas-crecimiento');
    let pCrecimiento = document.querySelector('.p-crecimiento');
    let fRiego = document.querySelector('.fas-riego');
    let pRiego = document.querySelector('.p-riego');
    let fSuelo = document.querySelector('.fas-suelo');
    let pSuelo = document.querySelector('.p-suelo');
    let fClima = document.querySelector('.fas-clima');
    let pClima = document.querySelector('.p-clima');
    let fLuz = document.querySelector('.fas-luz');
    let pLuz = document.querySelector('.p-luz');
    let fFruto = document.querySelector('.fas-fruto');
    let pFruto = document.querySelector('.p-fruto');
    pNombre1.classList.add('d-none');
    pNombre2.classList.add('d-none');
    pPrecio1.classList.add('d-none');
    pPrecio2.classList.add('d-none');
    pncientifico.classList.add('d-none');
    pRegion.classList.add('d-none');
    pTipo.classList.add('d-none');
    pAltura.classList.add('d-none');
    pCrecimiento.classList.add('d-none');
    pRiego.classList.add('d-none');
    pSuelo.classList.add('d-none');
    pClima.classList.add('d-none');
    pLuz.classList.add('d-none');
    pFruto.classList.add('d-none');
    
    const validator = (event) => {
        switch (event.target.name) {
            case "nombre":
                if (event.target.value == "" || event.target.value.length < 5) {
                    fNombre.classList.add('fa-times-circle');
                    fNombre.classList.remove('fa-check-circle');
                    pNombre1.classList.remove('d-none');
                    pNombre2.classList.remove('d-none');
                    if(event.target.value !== "" && event.target.value.length < 5 ) {
                        pNombre1.classList.add('d-none');
                    }
                } else {
                    fNombre.classList.add('fa-check-circle');
                    fNombre.classList.remove('fa-times-circle');
                    pNombre1.classList.add('d-none');
                    pNombre2.classList.add('d-none');

                }
            break;
            case "precio":
                if (event.target.value == "" || !event.target.value.match(/^[0-9]+$/)) {
                    fPrecio.classList.add('fa-times-circle');
                    fPrecio.classList.add('fa-check-circle');
                    pPrecio1.classList.remove('d-none');
                    pPrecio2.classList.remove('d-none');
                    if (event.target.value !== "" && !event.target.value.match(/^[0-9]+$/)) {
                        pPrecio1.classList.add('d-none');
                    }
                } else {
                    fPrecio.classList.add('fa-check-circle');
                    fPrecio.classList.remove('fa-times-circle');
                    pPrecio1.classList.add('d-none');
                    pPrecio2.classList.add('d-none');
                }
            break;
            case "nombre_cientifico":
                if (event.target.value == "") {
                    fncientifico.classList.add('fa-times-circle');
                    fncientifico.classList.add('fa-check-circle');
                    pncientifico.classList.remove('d-none');
                } else {
                    fncientifico.classList.add('fa-check-circle');
                    fncientifico.classList.remove('fa-times-circle');
                    pncientifico.classList.add('d-none');
                }
            break;
            case "region":
                if (event.target.value == "") {
                    fRegion.classList.add('fa-times-circle');
                    fRegion.classList.add('fa-check-circle');
                    pRegion.classList.remove('d-none');
                } else {
                    fRegion.classList.add('fa-check-circle');
                    fRegion.classList.remove('fa-times-circle');
                    pRegion.classList.add('d-none');
                }
            break;
            case "tipo":
                if (event.target.value == "") {
                    fTipo.classList.add('fa-times-circle');
                    fTipo.classList.add('fa-check-circle');
                    pTipo.classList.remove('d-none');
                } else {
                    fTipo.classList.add('fa-check-circle');
                    fTipo.classList.remove('fa-times-circle');
                    pTipo.classList.add('d-none');
                }
            break;
            case "altura":
                if (event.target.value == "") {
                    fAltura.classList.add('fa-times-circle');
                    fAltura.classList.add('fa-check-circle');
                    pAltura.classList.remove('d-none');
                } else {
                    fAltura.classList.add('fa-check-circle');
                    fAltura.classList.remove('fa-times-circle');
                    pAltura.classList.add('d-none');
                }
            break;
            case "crecimiento":
                if (event.target.value == "") {
                    fCrecimiento.classList.add('fa-times-circle');
                    fCrecimiento.classList.add('fa-check-circle');
                    pCrecimiento.classList.remove('d-none');
                } else {
                    fCrecimiento.classList.add('fa-check-circle');
                    fCrecimiento.classList.remove('fa-times-circle');
                    pCrecimiento.classList.add('d-none');
                }
            break;
            case "riego":
                if (event.target.value == "") {
                    fRiego.classList.add('fa-times-circle');
                    fRiego.classList.add('fa-check-circle');
                    pRiego.classList.remove('d-none');
                } else {
                    fRiego.classList.add('fa-check-circle');
                    fRiego.classList.remove('fa-times-circle');
                    pRiego.classList.add('d-none');
                }
            break;
            case "suelo":
                if (event.target.value == "") {
                    fSuelo.classList.add('fa-times-circle');
                    fSuelo.classList.add('fa-check-circle');
                    pSuelo.classList.remove('d-none');
                } else {
                    fSuelo.classList.add('fa-check-circle');
                    fSuelo.classList.remove('fa-times-circle');
                    pSuelo.classList.add('d-none');
                }
            break;
            case "clima":
                if (event.target.value == "") {
                    fClima.classList.add('fa-times-circle');
                    fClima.classList.add('fa-check-circle');
                    pClima.classList.remove('d-none');
                } else {
                    fClima.classList.add('fa-check-circle');
                    fClima.classList.remove('fa-times-circle');
                    pClima.classList.add('d-none');
                }
            break;
            case "luz":
                if (event.target.value == "") {
                    fLuz.classList.add('fa-times-circle');
                    fLuz.classList.add('fa-check-circle');
                    pLuz.classList.remove('d-none');
                } else {
                    fLuz.classList.add('fa-check-circle');
                    fLuz.classList.remove('fa-times-circle');
                    pLuz.classList.add('d-none');
                }
            break;
            case "fruto":
                if (event.target.value == "") {
                    fFruto.classList.add('fa-times-circle');
                    fFruto.classList.add('fa-check-circle');
                    pFruto.classList.remove('d-none');
                } else {
                    fFruto.classList.add('fa-check-circle');
                    fFruto.classList.remove('fa-times-circle');
                    pFruto.classList.add('d-none');
                }
            break;
        }
    }

    inputs.forEach((elemento)=>{
        elemento.addEventListener('keyup', validator);
        elemento.addEventListener('blur', validator);
    });

} );