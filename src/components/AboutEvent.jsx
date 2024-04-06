import React from 'react'
import { benefits } from "../constants/index.js";
import {GradientLight} from './design/Benefits'
import style from "../style.js"

function AboutEvent() {
  return (
    
    <div className='bg-black bg-opacity-40  bg-no-repeat bg-[length:100%_100%]  '>
  <div className={`text-white text-2xl font-stalinist mx-4 pt-2  ${style.heading2} flex justify-center text-gradient`}>About Event</div>
  
  <div className="flex flex-wrap gap-10 mb-10 mt-6 ml-14">
    
          {benefits.map((item ,id) => (
            
            <div
              className="hover:scale-105 block relative  bg-no-repeat bg-[length:100%_100%] md:max-w-[26rem] auto mb-12"
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,

              }}
              key={item.id}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none ">
              
                <h5 className="h5 mb-5 text-white poppins text-2xl font-mediem">{item.title}</h5>
                <p className="body-2 text-[17px] text-white">{item.text}</p>
                

              </div>

              {item.light && <GradientLight />}

              

        

            </div>
          ))}
        </div>
  </div>  
  )
}

export default AboutEvent
