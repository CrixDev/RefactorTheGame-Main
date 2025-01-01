import Card from "./Card";
import FollowCursor from "./FollowCursor"

function Landing(){


    return(
    <div className="min-h-screen bg-[#000] bg-cover bg-center flex flex-col cursor-Crix">
    
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-white text-[96px] font-rubik80s">CrixDev</h1> 
          <img href="https://github.com/CrixGames" className="hover:cursor-CrixP" src="/assets/CrixPixel.png" alt="" />    
        </div>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
            <h1 className="text-white text-[80px] font-rubik80s">Refactor the Game </h1> 
           
        </div>
        <div  className=" w-full h-0.5 bg-white my-8"></div>
      
        <div className="overflow-hidden w-full h-28 ">
            
        <img src="/assets/129471.gif" class="walking-gif gif1" alt="gif 2" />     
        <img src="/assets/Mario.gif" class="walking-gif gif2" alt="gif 2" />
        <img src="/assets/Frisk.webp" class="walking-gif1 gif2" alt="gif 3" />
        </div>

        <div className=" w-full h-0.5 bg-white my-8"></div>
          
        <div className="max-w-7xl py-10 mx-auto flex justify-between items-center">
            <h1 className="text-white text-6xl font-rubik80s">GAMES REFACTORED </h1> 
           
            
        </div>
            
        <div className="mx-28 pb-20 flex justify-evenly items-center">
        
        <Card imagen={"/assets/Undertale.png"} nombre={"Undertale"} genero={"RPG - Indie"} ruta={"https://undertale-crix.vercel.app/"}  />
         
        <Card imagen={"/assets/Celeste.png"} nombre={"Celeste"} genero={"Plataform - Indie"}  />
         
        <Card imagen={"/assets/Brawlhalla.jpg"} nombre={"Brawlhalla"} genero={"Fighting - Competitive"}  />
         

        </div>
      
        <div className=" w-full h-0.5 bg-white my-8"></div>
        
     
        <div className="flex max-w-7l py-10 justify-evenly ">
        <div className=" max-w-xl text-wrap">
        <h1 className="text-white text-4xl font-rubik80s">Que es Refactor the Game </h1> 
        <h3 className="text-white text-xl font-rubik80s">Refactor The Game es un proyecto personal donde analizo juegos que me gustan y apartir de su arte, diseño y estilo adapto su concepto al desarrollo Web.</h3> 
        
        </div>
          <div className="flex justify-center items-start bg-transparent h-40 w-auto rounded-3xl">
           <img className=" w-96" src="/assets/CrixPC2.png" alt="" />
           </div>
        </div>
                

    </div>
    )




}

export default Landing
