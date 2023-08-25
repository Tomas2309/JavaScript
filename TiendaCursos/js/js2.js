const carrito=document.querySelector('#carrito');
const contenedorCarrito=document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn=document.querySelector('#vaciar-carrito');
const listaCursos=document.querySelector('#lista-cursos');
let articulosCarrito=[];

addEventListener();
function addEventListener(){
    listaCursos.addEventListener('click',agregarProducto);
}

//FUNCIONES
function agregarProducto(e){
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')){
        console.log('AGREGAR CARRITO');
        const cursoSeleccionado=e.target.parentElement.parentElement;
        leerCurso(cursoSeleccionado);
    }
}

function leerCurso(curso){
    const infoCurso={
        imagen:curso.querySelector('img').src,
        titulo:curso.querySelector('div h4').textContent,
        precio:curso.querySelector('.precio span').textContent,
        id:curso.querySelector('a').getAttribute('data-id'),
        cantidad:1
    }
    articulosCarrito=[...articulosCarrito,infoCurso];
    
    console.log(articulosCarrito);
    carritoHTML();
}

function carritoHTML(){
    articulosCarrito.forEach(curso=>{
        const{imagen,titulo,precio,cantidad}=curso;
        const row=document.createElement('tr');
        row.innerHTML=`
            <td>
                <img src=${imagen} width="100">
            </td>
            <td>
                ${titulo}
            </td>    
                ${precio}
            <td>
                ${cantidad}
            </td>
            `;
        contenedorCarrito.appendChild(row);
    });
}