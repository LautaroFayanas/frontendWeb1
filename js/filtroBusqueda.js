
const input = document.querySelector('#search')
const fomr = document.querySelector('#formBuscador')
const btn = document.querySelector('#btn-buscar')

input = document.addEventListener('change', e=>{
    e.preventDefault();
    if(e.target.matches('#search')){

        //Agarro todos mis div con la clase producto 
        document.querySelectorAll('.producto').forEach(fil =>{
        
            fil.textContent.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())

            // la clase filtro tiene un display none para armar el filtro
            ? fil.classList.remove('filtro')
            : fil.classList.add('filtro')  
            
            
        })

        //Oculto el bannner cuando comienza la busqueda
        if(input !== ''){
            banner.classList.add('filtro')
            
        }
    }
   
   
})

