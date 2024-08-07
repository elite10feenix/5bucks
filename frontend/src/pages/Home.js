import React from 'react';
import { Link } from 'react-router-dom';
import homeslider from '../assets/homeslider.png'; 
import homeslogan from '../assets/homeslogan.png'; 
import playnow from '../assets/playnow.png'; 
import winnercodecircle from '../assets/winnercodecircle.png'; 
import winnercodeline from '../assets/winnercodeline.png'; 
import app3dimage2 from '../assets/app3dimage2.png'; // Adjust the path as needed
import avatar from '../assets/avatar.png'; // Adjust the path as needed

const Home = () => {
  return (
    <main className="w-full bg-custom-purple">
      <section className="relative">
        <img src={homeslider} className="w-full h-auto" />

        <div className="absolute top-0 left-0 w-1/2 h-full flex flex-col justify-center items-start px-6">
          <ul className="list-none text-white text-3xl mb-4">
            <li className="mb-2">SKIP YOUR</li>
            <li className="mb-2">COFFEE TODAY</li>
            <li className="mb-2">AND BECOME</li>
            <li className="mb-2 text-4xl">MILLIONAIRE</li>
            <li className="mb-2">TOMORROW</li>
          </ul>
          <div className="flex space-x-4">
            <Link to="/register" className="bg-register text-white px-6 py-2 rounded-full hover:bg-register-400 transition-colors duration-300 text-center">Register</Link>
            <Link to="/login" className="bg-login text-black px-8 py-2 rounded-full hover:bg-login-400 transition-colors duration-300 text-center">Login</Link>
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="bg-custom-purple2 p-3 text-white text-center rounded-md">
          <h1 className="text-xl font-bold">What is the power of 5 dollars?</h1>
          <p className="mb-3">
            Have you ever wondered how people around the world most often spend their 5 dollars?
            Just ask yourself what percentage of people on this planet start their day with coffee?
            And constantly repeat the same thing several times a day, often without real need for it... 
          </p>
        </div>

        <div className="flex flex-col items-center justify-center mb-4">
          <img src={homeslogan} className="w-full h-auto" />
          <Link to="/playnow">
            <img src={playnow} className="w-full h-auto" />
          </Link>
        </div>
      </section>

      {/* winner code*/}
      <section className="flex flex-col items-center justify-center px-6">
        <h1 className="text-4xl text-custom-green font-bold mb-4">WINNER CODE</h1>
        
        <div className="flex items-center justify-center mb-4 text-4xl text-bold text-white">
          {/* Circle images and text */}
          <div className="relative flex items-center justify-center mx-2">
            <img src={winnercodecircle} className="w-36 h-auto"/>
            <span className="absolute">A</span>
          </div>
          <div className="relative flex items-center justify-center mx-2">
            <img src={winnercodecircle} className="w-36 h-auto"/>
            <span className="absolute">B</span>
          </div>
          <div className="relative flex items-center justify-center mx-2">
            <img src={winnercodecircle} className="w-36 h-auto"/>
            <span className="absolute">C</span>
          </div>
          <div className="relative flex items-center justify-center mx-2">
            <img src={winnercodecircle} className="w-36 h-auto"/>
            <span className="absolute">D</span>
          </div>
          <div className="relative flex items-center justify-center mx-2">
            <img src={winnercodecircle} className="w-36 h-auto"/>
            <span className="absolute">E</span>
          </div>
          <div className="relative flex items-center justify-center mx-2">
            <img src={winnercodecircle} className="w-36 h-auto"/>
            <span className="absolute">F</span>
          </div>
          <div className="relative flex items-center justify-center mx-2">
            <img src={winnercodecircle} className="w-36 h-auto"/>
            <span className="absolute">G</span>
          </div>
        </div>
        
        <img src={winnercodeline} className="w-2/3 mb-4"/>
        
        <h1 className="text-4xl text-white font-bold mb-4">They skipped the coffee and became millionaires!</h1>
        <h1 className="text-4xl text-custom-green font-bold mb-4">JOIN THEM TODAY!</h1>
      </section>

      {/* winners */}
      <section className="relative bg-custom-purple2 flex flex-row items-center justify-center px-6 mx-10 rounded-md">
        {/* Left Half */}
        <div className="flex-1 flex flex-col justify-between text-white p-4">
          <h1 className="text-4xl font-bold mb-4">Winners</h1>
          <div className="flex flex-col items-start space-y-4">
            <div className="flex items-center bg-gradient-purple-pink text-white w-full rounded-md">
              <img src={avatar} className="w-16 h-auto m-2 rounded-full"/>
              <h2 className="p-2 text-2xl rounded-md ">Person X</h2>
            </div>
            <div className="flex items-center bg-gradient-purple-pink text-white w-full rounded-md">
              <img src={avatar} className="w-16 h-auto m-2 rounded-full"/>
              <h2 className="p-2 text-2xl rounded-md ">Person X</h2>
            </div>
            <div className="flex items-center bg-gradient-purple-pink text-white w-full rounded-md">
              <img src={avatar} className="w-16 h-auto m-2 rounded-full"/>
              <h2 className="p-2 text-2xl rounded-md ">Person X</h2>
            </div>
            <div className="flex items-center bg-gradient-purple-pink text-white w-full rounded-md">
              <img src={avatar} className="w-16 h-auto m-2 rounded-full"/>
              <h2 className="p-2 text-2xl rounded-md ">Person X</h2>
            </div>
            <div className="flex items-center bg-gradient-purple-pink text-white w-full rounded-md">
              <img src={avatar} className="w-16 h-auto m-2 rounded-full"/>
              <h2 className="p-2 text-2xl rounded-md ">Person X</h2>
            </div>
          </div>
        </div>

        {/* Right Half */}
        <div className="flex-1 flex items-center justify-center">
          <img src={app3dimage2} className="w-full h-auto"/>
        </div>
      </section>
      <div className="w-full h-10 bg-custom-purple"></div>

    </main>
  );
};

export default Home;
