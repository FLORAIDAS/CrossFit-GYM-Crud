// Variables globales

const formularioUI = document.querySelector('#formulario');
const listaActividadesUI = document.getElementById('listaActividades');
let arrayActividades = [];


// Funciones

const CrearItem = (actividad) => {

  let item = {
    actividad: actividad,
    estado: false
  }

  arrayActividades.push(item);

  return item;

}

const GuardarDB = () => {

  localStorage.setItem('rutina', JSON.stringify(arrayActividades));

  PintarDB();

}

const PintarDB = () => {

  listaActividadesUI.innerHTML = '';

  arrayActividades = JSON.parse(localStorage.getItem('rutina'));
  
  if(arrayActividades === null){
    arrayActividades = [];
  }else{

    arrayActividades.forEach(element => {

      if(element.estado){
        listaActividadesUI.innerHTML += `<div class="alert alert-success" role="alert"><i class="material-icons float-left mr-2">accessibility</i><b>${element.actividad}</b> - ${element.estado}<span class="float-right"><i class="material-icons">done</i><i class="material-icons">delete</i></span></div>`
      }else{
        listaActividadesUI.innerHTML += `<div class="alert alert-danger" role="alert"><i class="material-icons float-left mr-2">accessibility</i><b>${element.actividad}</b> - ${element.estado}<span class="float-right"><i class="material-icons">done</i><i class="material-icons">delete</i></span></div>`
      }
    });

  }
}
