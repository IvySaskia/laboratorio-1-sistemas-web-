
//Guardar en un archivo de texto
function save()
{
    var jsonObj={
    email: document.getElementById('email').value,
    password: document.getElementById('password').value
    }
    var fileText=new Blob([JSON.stringify(jsonObj)],{type:"application/json"});// mostrar el contenido(objeto,tipo)
    var textURL=window.URL.createObjectURL(fileText);
    var downloadLink=document.createElement("a");
    downloadLink.download="login.json";
    downloadLink.innerHTML="";
    downloadLink.href=textURL;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    console.log(jsonObj);//como objeto
}