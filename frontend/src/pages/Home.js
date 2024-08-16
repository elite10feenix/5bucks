import React from 'react';
import { Link } from 'react-router-dom';
import homeslider from '../assets/homeslider.png'; 
import playnow from '../assets/playnow.png'; 
import purplecircle from '../assets/purplecircle.png'; 
import purpleline from '../assets/purpleline.png'; 
import greencircle from '../assets/greencircle.png'; 
import greenline from '../assets/greenline.png'; 
import app3dimage from '../assets/app3dimage.png'; // Adjust the path as needed
import avatar from '../assets/avatar.png'; // Adjust the path as needed

const Home = ({ openLoginModal, openRegisterModal}) => {
  return (
    <main className="w-full bg-custom-purple">

      <section className="relative bg-cover bg-center mb-8 w-full h-screen" style={{ backgroundImage: `url(${homeslider})` }}>
        <div className="flex w-full h-full">
          {/* Left Half */}
          <div className="w-1/2 flex flex-col justify-center items-start px-10">
            <ul className="list-none text-white text-2xl md:text-4xl font-bold">
              <li className="mb-2">SKIP YOUR</li>
              <li className="mb-2">COFFEE TODAY</li>
              <li className="mb-2">AND BECOME</li>
              <li className="mb-2 text-3xl md:text-5xl">MILLIONAIRE</li>
              <li className="mb-2">TOMORROW</li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <button onClick={openRegisterModal} className="bg-register text-white px-6 py-2 rounded-full hover:bg-register-400 transition-colors duration-300 text-center">Register</button>
              <button onClick={openLoginModal} className="bg-login text-black px-8 py-2 rounded-full hover:bg-login-400 transition-colors duration-300 text-center">Login</button>
            </div>
          </div>
          {/* Right Half */}
          <div className="w-1/2"></div> {/* Optional: Right side can be empty or have other content */}
        </div>
      </section>

      {/* winner code*/}
      <section className="flex flex-col items-center justify-center px-6">

        <div className="bg-custom-purple2 p-3 text-white text-center rounded-md mx-12 mb-8">
          <h1 className="text-4xl font-bold mb-8">What is the power of 5 dollars?</h1>
          <p className="text-2xl mb-8">
            Have you ever wondered how people around the world most often spend their 5 dollars?
            Just ask yourself what percentage of people on this planet start their day with coffee?
            And constantly repeat the same thing several times a day, often without real need for it... 
          </p>
        </div>

        <div className="flex items-center justify-center mb-8 text-4xl text-bold text-white">
          <div className="relative flex items-center justify-center mx-2">
            <img src={purplecircle} className="w-36 h-auto"/>
            <span className="absolute">1</span>
          </div>
          <div className="relative flex items-center justify-center mx-2">
            <img src={purplecircle} className="w-36 h-auto"/>
            <span className="absolute">0</span>
          </div>
          <div className="relative flex items-center justify-center mx-2">
            <img src={purplecircle} className="w-36 h-auto"/>
            <span className="absolute">0</span>
          </div>
          <div className="relative flex items-center justify-center mx-2">
            <img src={purplecircle} className="w-36 h-auto"/>
            <span className="absolute">0</span>
          </div>
          <div className="relative flex items-center justify-center mx-2">
            <img src={purplecircle} className="w-36 h-auto"/>
            <span className="absolute">0</span>
          </div>
          <div className="relative flex items-center justify-center mx-2">
            <img src={purplecircle} className="w-36 h-auto"/>
            <span className="absolute">0</span>
          </div>
          <div className="relative flex items-center justify-center mx-2">
            <img src={purplecircle} className="w-36 h-auto"/>
            <span className="absolute">0</span>
          </div>
        </div>

        <img src={purpleline} className="w-2/3 mb-8"/>

        <div className="w-full flex md:justify-end justify-center">
          <div className="w-full md:w-1/2 flex items-start md:justify-start justify-center pl-4">
            <h1 className="text-4xl text-white font-bold pt-2 mb-8">OF</h1>
            <h1 className="text-5xl text-white font-bold pt-0 mb-6">&nbsp;1 000 000 $</h1>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center mb-8">
          <Link to="/playnow">
            <img src={playnow} className="w-full h-auto" />
          </Link>
        </div>

        <h1 className="text-4xl text-custom-green font-bold mb-8">WINNER CODE</h1>
        
        <div className="flex items-center justify-center mb-8 text-4xl text-bold text-white">
          {/* Circle images and text */}
          <div className="relative flex items-center justify-center mx-2">
            <img src={greencircle} className="w-36 h-auto"/>
            <span className="absolute">A</span>
          </div>
          <div className="relative flex items-center justify-center mx-2">
            <img src={greencircle} className="w-36 h-auto"/>
            <span className="absolute">B</span>
          </div>
          <div className="relative flex items-center justify-center mx-2">
            <img src={greencircle} className="w-36 h-auto"/>
            <span className="absolute">C</span>
          </div>
          <div className="relative flex items-center justify-center mx-2">
            <img src={greencircle} className="w-36 h-auto"/>
            <span className="absolute">D</span>
          </div>
          <div className="relative flex items-center justify-center mx-2">
            <img src={greencircle} className="w-36 h-auto"/>
            <span className="absolute">E</span>
          </div>
          <div className="relative flex items-center justify-center mx-2">
            <img src={greencircle} className="w-36 h-auto"/>
            <span className="absolute">F</span>
          </div>
          <div className="relative flex items-center justify-center mx-2">
            <img src={greencircle} className="w-36 h-auto"/>
            <span className="absolute">G</span>
          </div>
        </div>
        
        <img src={greenline} className="w-2/3 mb-8"/>
        
        <h1 className="text-4xl text-white font-bold mb-8">They skipped the coffee and became millionaires!</h1>
        <h1 className="text-4xl text-custom-green font-bold mb-8">JOIN THEM TODAY!</h1>
      </section>

      {/* winners */}
      <section className="relative bg-custom-purple2 flex flex-row items-center justify-center px-6 mx-10 rounded-md">
        {/* Left Half */}
        <div className="flex-1 flex flex-col justify-between text-white p-4">
          <h1 className="text-4xl font-bold mb-8">Winners</h1>
          <div className="flex flex-col items-start space-y-4 text-xl md:text-2xl">
            <div className="flex items-center bg-gradient-purple-pink text-white w-full rounded-md">
              <img src={avatar} className="w-8 md:w-16 h-auto m-2 rounded-full"/>
              <h2 className="p-2 rounded-md ">Person X</h2>
            </div>
            <div className="flex items-center bg-gradient-purple-pink text-white w-full rounded-md">
              <img src={avatar} className="w-8 md:w-16 h-auto m-2 rounded-full"/>
              <h2 className="p-2 rounded-md ">Person X</h2>
            </div>
            <div className="flex items-center bg-gradient-purple-pink text-white w-full rounded-md">
              <img src={avatar} className="w-8 md:w-16 h-auto m-2 rounded-full"/>
              <h2 className="p-2 rounded-md ">Person X</h2>
            </div>
            <div className="flex items-center bg-gradient-purple-pink text-white w-full rounded-md">
              <img src={avatar} className="w-8 md:w-16 h-auto m-2 rounded-full"/>
              <h2 className="p-2 rounded-md ">Person X</h2>
            </div>
            <div className="flex items-center bg-gradient-purple-pink text-white w-full rounded-md">
              <img src={avatar} className="w-8 md:w-16 h-auto m-2 rounded-full"/>
              <h2 className="p-2 rounded-md ">Person X</h2>
            </div>
          </div>
        </div>

        {/* Right Half */}
        <div className="flex-1 flex items-center justify-center">
          <img src={app3dimage} className="w-full h-auto"/>
        </div>
      </section>
      
      <div className="w-full h-10 bg-custom-purple"></div>

    </main>
  );
};

export default Home;
