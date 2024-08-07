import React from 'react';
import homeslider from '../assets/homeslider.png'; 
import coinImage from '../assets/coin.png'; // Adjust the path as needed

const Home = () => {
  return (
    <main className="w-full">
      <section className="relative flex flex-col md:flex-row mb-6">
        <img src={homeslider} className="w-full h-auto" alt="Home Slider" />

        <div className="absolute -bottom-10 right-10" >
          <img src={coinImage} className="w-36 h-30" alt="Coin" />
        </div>
      </section>
    </main>
  );
};

export default Home;
