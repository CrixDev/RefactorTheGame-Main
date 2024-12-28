import Card from "./Card"
function Landing(){

    return(
    <div className="min-h-screen bg-[#000] bg-cover bg-center flex flex-col">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-white text-[96px] font-rubik80s">CrixDev</h1> 
          <img src="./src/assets/CrixPixel.png" alt="" />    
        </div>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
            <h1 className="text-white text-[80px] font-rubik80s">Refactor the Game </h1> 
           
        </div>
        <div  className=" w-full h-0.5 bg-white my-8"></div>
      
        <div className="overflow-hidden w-full h-28 ">
        <img src="/assets/129471.gif" class="walking-gif gif1" alt="gif 1" />
        <img src="/assets/Mario.gif" class="walking-gif gif2" alt="gif 2" />
        <img src="/assets/Frisk.webp" class="walking-gif1 gif2" alt="gif 3" />
        <img src="/assets/Kirby.gif" class="walking-gif gif3" alt="gif 4" />
        </div>

        <div className=" w-full h-0.5 bg-white my-8"></div>
          
        <div className="max-w-7xl py-10 mx-auto flex justify-between items-center">
            <h1 className="text-white text-6xl font-rubik80s">Games Analyzed </h1> 
           
            
        </div>
            
        <div className="max-w-7xl py-10 mx-auto flex justify-between items-center">
        
        <Card />
         
        </div>
      
        <div className=" w-full h-0.5 bg-white my-8"></div>
        
    </div>
    )




}

export default Landing