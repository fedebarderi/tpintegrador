(function(){
            
    var formulario = document.getElementsByName('formulario')[0];

    var validarNombre = function(e){
        if (formulario.nombre.value == 0){
            alert("Completa el campo nombre");
            e.preventDefault();
            }
            else{
                if (formulario.nombre.value.length > 12){
                    alert("Nombre extenso");
                    e.preventDefault();
                    }
            }
};           
    var validarCheckbox = function(e){
        if (formulario.pasta.checked == false){
            alert("Seleciona por lo menos una pasta");
            e.preventDefault();
    }
};
    var validar = function(e){
        validarNombre(e);
        validarCheckbox(e);
    };
    formulario.addEventListener("submit", validar);
}())