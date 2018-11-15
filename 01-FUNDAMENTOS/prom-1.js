function sumarUno(numero, callback) {
    setTimeout(function () {
        callback(numero + 1);
    }, 800)

}

sumarUno(5, function (nuevoValor) {
    console.log(nuevoValor); 
});