
function Card({imagen, nombre, genero, ruta }){

    return(
        <>     
        <a href={ruta}>
        <div class="w-full max-w-xs overflow-hidden bg-black rounded-lg border-solid border-2 border-white hover:cursor-CrixP hover:border-yellow-400 shadow-lg transition-all duration-500 hover:shadow-2xl hover:shadow-yellow-400 ">
        <img className="h-48 w-auto border-solid border-b-2 border-white hover:border-yellow-400 transition-all duration-500 " src={imagen} alt="" />
        <div class="py-5 text-center">
            
            <a class="hover:cursor-CrixP block text-xl font-bold text-gray-800 dark:text-white" tabindex="0" role="link">{nombre}</a>
            
            <span class="text-sm text-gray-200">{genero}</span>
        </div>
    </div>
    </a> 
    </>

    ) 
    }
    
    export default Card