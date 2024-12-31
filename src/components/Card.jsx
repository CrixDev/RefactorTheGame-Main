

function Card({imagen, nombre, genero}){

    return(
    
    
    
        <div class="w-full max-w-xs overflow-hidden bg-black rounded-lg border-solid border-2 border-white shadow-lg ">
        <img className="h-48 w-auto border-solid border-b-2 border-white" src={imagen} alt="" />
        <div class="py-5 text-center">
            
            <a href="#" class="block text-xl font-bold text-gray-800 dark:text-white" tabindex="0" role="link">{nombre}</a>
            
            <span class="text-sm text-gray-200">{genero}</span>
        </div>
    </div>
    
    
    )
    }
    
    export default Card