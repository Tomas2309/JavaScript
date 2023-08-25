const cursoSeleccionado=document.querySelector('#lista-cursos');
const carritoHtml=document.querySelector('#carrito tbody');
let carritoCursos=[];

eventos();
function eventos(){
    cursoSeleccionado.addEventListener('click',seleccionarCurso)
}

function seleccionarCurso(e){
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')){
        const infoCurso=e.target.parentElement.parentElement
        objetoCurso(infoCurso);
    }
}

function objetoCurso(curso){
    objeto={
        imagen:curso.querySelector('img').src,
        nombre:curso.querySelector('h4').textContent,
        precio:curso.querySelector('p span').textContent,
        cantidad:1,
        id:curso.querySelector('a').getAttribute('data-id')
    }
    const existe=carritoCursos.some(curso=>curso.id==objeto.id);
    if(existe){
        carritoCursos.forEach(curso=>{
            if(curso.id==objeto.id){
                curso.cantidad++
            }
        })
    }
    else{
    carritoCursos=[...carritoCursos,objeto]
    }
    console.log(carritoCursos)
    carrito();
}
function carrito(){
    limpiarCarrito();
    carritoCursos.forEach(curso=>{
        const{imagen,nombre,precio,cantidad}=curso;
        console.log(imagen,nombre,precio,cantidad)
        const row=document.createElement('tr');
        row.innerHTML=`
        <tr>
            <th><img src="${imagen}" width="100"></th>
            <th>${nombre}</th>
            <th>${precio}</th>
            <th>${cantidad}</th>
        </tr>`
        carritoHtml.appendChild(row);
    })
}
function limpiarCarrito(){
    while(carritoHtml.firstChild){
        console.log(carritoHtml.firstChild)
        carritoHtml.removeChild(carritoHtml.firstChild)
    }
}