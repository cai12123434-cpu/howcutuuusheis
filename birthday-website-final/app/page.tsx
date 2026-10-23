import { ToggleSection } from "@/components/ToggleSection";
import { HeroSection } from "../components/sections/HeroSection";
import { DraggableCardBody, DraggableCardContainer } from "@/components/DraggableCards";
import LoveGallery from "@/components/LoveGallery";
import StellarCardGallerySingle from "@/components/NewWorld";
import Book from "@/components/Book";
import { Section } from "lucide-react";
import CuteMotion from "@/components/CuteMotion";
import ScrollHint from "@/components/ScrollHint";


export default function Home() {
  return (
    <div className=" h-full w-full overflow-x-hidden overflow-y-scroll snap-y snap-mandatory bg-zinc-50 dark:bg-black select-none scroll-smooth">
      <CuteMotion />
      {/* <section className="h-screen w-full snap-start snap-always shrink-0">
        <HeroSection />
      </section> */}
    
        {/* <ToggleSection /> */}
        {/* <BirthdayMagic /> */}
         
           {/* <StellarCardGallerySingle/> */}
           {/* <StellarCardGallerySingle/> */}
             {/* <HeroSection /> */}
             

              

         

         
           
        
     
 
    <section  className="h-screen  w-full snap-start snap-always shrink-0 overflow-visible relative z-10" >
<HeroSection />
<ScrollHint variant="cream" />
    </section>


      <section  className="h-screen  w-full snap-start snap-always shrink-0 overflow-visible relative z-10" >
 <LoveGallery/>
<ScrollHint />
    </section>

    <section  className="h-screen  w-full snap-start snap-always shrink-0 overflow-visible relative z-10" >
 <div className="flex  h-screen overflow-hidden flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
                           <Book/>  
              </div>
<ScrollHint />
    </section>



    <section className="h-screen w-full snap-start overflow-y-scroll snap-always shrink-0 relative ">
        <StellarCardGallerySingle />
      </section>



 


  


    
   


    


    

     

      
    </div>
  );
}
