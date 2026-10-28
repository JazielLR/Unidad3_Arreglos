//Ejercicio 1
let temperaturas=new Array(7);
function cargar(){
    let suma=0;
    for(let i=0; i<7; i++){
        let valor=prompt("Captura la temperatura del dia "+(i+1));
        temperaturas[i]=parseFloat(valor)||0;
        console.log(temperaturas[i]);
    }
    mostrar();
}
function mostrar(){
    let suma=0;
    let cadena="<h1>Temperatura promedio de 7 dias</h1>";
    for(let j=0; j<temperaturas.length; j++){
        suma+=temperaturas[j];
        cadena+=temperaturas[j]+"<br>";
    }
    let promedio=suma/temperaturas.length;
    cadena+="<hr>";
    cadena+=suma.toFixed(2)+"<br><br>";
    cadena+="Temperatura promedio semana:<br>";
    cadena+=promedio.toFixed(7);
    document.getElementById("impTemperaturas").innerHTML=cadena;
}
//Ejercicio 2
function ejercicio2Sueldo(){
    const matrizTarifas=[
        [120,240,210],
        [240,280,300],
        [400,600,3000]
    ];
    let puesto=parseInt(prompt("Elige el Puesto (Coordenada fila):\n0: Diseñador\n1: Programador\n2: Líder"));
    let nivel=parseInt(prompt("Elige el Nivel (Coordenada columna):\n0: Newbe\n1: Jr\n2: Sr"));
    let horas=parseFloat(prompt("Ingresa las horas trabajadas:"));
    if(isNaN(puesto)||isNaN(nivel)||isNaN(horas)||puesto<0||puesto>2||nivel<0||nivel>2){
        alert("Coordenadas o datos inválidos.");
        return;
    }
    let tarifaPorHora=matrizTarifas[puesto][nivel];
    let totalSalario=tarifaPorHora*horas;
    let nombresPuestos=["Diseñador","Programador","Líder"];
    let nombresNiveles=["Newbe","Jr","Sr"];
    let salida="<h1>Ejercicio 2: Cálculo por Coordenadas</h1>";
    salida+="Puesto seleccionado: "+nombresPuestos[puesto]+" (Fila "+puesto+")<br>";
    salida+="Nivel seleccionado: "+nombresNiveles[nivel]+" (Columna "+nivel+")<br>";
    salida+="Tarifa encontrada en la matriz: $"+tarifaPorHora+"<br>";
    salida+="Horas trabajadas: "+horas+"<br>";
    salida+="<hr>";
    salida+="<b>Total a pagar: $"+totalSalario.toFixed(2)+"</b>";
    document.getElementById("impSueldos").innerHTML=salida;
}
//Ejercicio 3
function generarBloques(){
    let salida="<h1>Ejercicio 3: Patrón del Número 8</h1>";
    salida+="<div style='font-family:monospace; font-size:20px; line-height:1.2; white-space:pre;'>";
    let patron8=[
        " S S S ",
        " S   S ",
        " S   S ",
        " S S S ",
        " S   S ",
        " S   S ",
        " S S S "
    ];
    for(let i=0; i<patron8.length; i++){
        salida+=patron8[i]+"<br>";
    }
    salida+="</div>";
    document.getElementById("impBloques").innerHTML=salida;
}