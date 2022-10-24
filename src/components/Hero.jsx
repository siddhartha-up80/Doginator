import React from "react";
import hero from "../assets/images/hero.png";
import AutoTyping, { BlinkCursor } from 'react-auto-typing'

const Hero = () => {
  const social_media = [
    "logo-instagram",
  ];
  return (
    <section
      id="home"
      className="min-h-screen flex py-10 md:flex-row flex-col items-center"
    >
      <div className="flex-1 flex items-center justify-center h-full">
        <img src={hero} alt="" className="md:w-6/12 h-full object-cover rounded-3xl" />
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-cyan-600 md:text-5xl text-5xl">
             <span className="text-white text-3xl">Want a full time dog?</span>  <br/> <span className="text-4xl"><AutoTyping
      active // <boolean>
      textRef= 'Gautam Premium Services' // <string>
      writeSpeed={150} // <number>
      deleteSpeed={150} // <number>
      delayToWrite={1000} // <number>
      delayToDelete={2000} // <number>
    />
    <BlinkCursor
      active // <boolean>
      blinkSpeed={500} // <number>
    /></span>
              <br />
            </span>
            
          </h1>
          
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
            FIR Expert, Dog Food Expert, Dogs Security Provider
          </h4>
          <a href="#contact"><button className="btn-primary mt-8">Contact Me</button></a>
          <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5 ml-10">
            {social_media?.map((icon) => (
              <div
                key={icon}
                className="text-gray-600 hover:text-white cursor-pointer "
              >
                <a href="https://www.instagram.com/gautam.yadaav/"><ion-icon name={icon}></ion-icon></a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;