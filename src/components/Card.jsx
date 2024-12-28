

function Card(){

    const imagen = ["/assets/Undertale.png"]
    
    return(
    
    
    
        <div class="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <img src={imagen} alt="" />
        <div class="py-5 text-center">
            <a href="#" class="block text-xl font-bold text-gray-800 dark:text-white" tabindex="0" role="link">Undetale</a>
            <span class="text-sm text-gray-700 dark:text-gray-200">RPG - Indie</span>
        </div>
    </div>
    
    )
    }
    
    export default Card