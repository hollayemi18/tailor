import React from 'react'
import eas from "../../image/eas5.jpg"
import eas1 from "../../image/eas3.jpg"
import  { Link} from 'react-router-dom'

function Ease() {

  return (
   <div>
        <div>
             <Link to="/" className="ml-4 mt-3" >
               <h2 className=" font-serif font-semibold text-indigo-600 md:text-4xl text-2xl">Ease </h2>       
             </Link>
        </div>
        <div>
            <h2 className='text-center my-6  font-2xl text-2xl text-color1'>Why EaseApparel</h2>
        </div>
        <img src={eas1} alt='done'/>
        <section className='mx-10 text-md font-bold' >
            <p className='my-1 text-neutral-900 '>
                An online platform for fashion ,bringing comfort and convience as it name imply.
                <br />
                As a fashion ethusiast and a lover of fashion , we are dedicating to bring lovers of fashion 
                and native attire the best that could be offered with the simplicity of making it ease without going 
                through stress.
                <br />
                <div>
                    <p>Easeapparel is created with long time vision of creativity ,started from bed rock with lot of struggle and hardship ,
                        but with the aim of making a stress-free world, the vision keeps burning all through. 
                    </p>
                </div>
                <div>
                    <p className='mt-5'>
                          <img src={eas}  alt='donner'/>
                        Our Aim and vision is making your wish about your sense of fashion comes true without going through stress,
                        just with tap ,Our AGENTS are right with you taking your orders .At your comfort we make your fashion wish come through
                        .
                        <br />
                        Ease offered NO DELAY, NO DISAPPOINTMENT, FAST DELIVERY, AFFORDABLE PRICE ,CLIENTS ACCOUNT TO MANAGE
                         and LOTS MORE 
                        <br />
                        To enjoy our EXCLUSIVE deal and Discounts create an account or log-in with a click
                    </p>
                </div>
            </p>
        </section>
    </div> 
  )
}

export default Ease