function funcionQueLlamaLaGeolocalizacion(posicion)
{
    console.log("Salta geolocalizacion");
    console.log("Estas en "+ posicion.coords.latitude + ", "+posicion.coords.longitude);

}

function funcionParaError(error)
{
    console.log("Se ha producido un error");
    console.log("Error numero "+ error.code);
    console.log(error.message);
    
}


if (navigator.geolocation)
{
    // SOPORTA  GEOLOCALIZACION
    document.write("Perfecto, podemos trabajar la geolocalizacion")

//    navigator.geolocation.getCurrentPosition(funcionQueLlamaLaGeolocalizacion,funcionParaError);
navigator.geolocation.watchPosition(funcionQueLlamaLaGeolocalizacion,funcionParaError);
}
else
    {
        // NO SOPORTA G
        document.write("Debes usar un navegador mas moderno")
    }












