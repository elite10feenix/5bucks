import React from 'react';
import logo from '../assets/logo.png'; 
import kafeImage from '../assets/kafe.png'; // Adjust the path as needed
import coinImage from '../assets/coin.png'; // Adjust the path as needed
import backgroundImage from '../assets/pozadina2.png'; // Adjust the path as needed
import app3dimage1 from '../assets/app3dimage1.png'; // Adjust the path as needed

const About = () => {
  return (
    <main className="w-full bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <section className="relative px-6 flex flex-col md:flex-row mb-6">
        {/* Left Half */}
        <div className="flex-1 flex flex-col justify-between">
          {/* About Text and Logo */}
          <div className="flex flex-col p-3"> {/* Added bottom margin to leave space for bottom coin */}
            <div className="flex items-center mb-4">
              <h1 className="text-3xl font-bold text-white">About Us</h1>
              <img src={logo} className="ml-4" />
            </div>
            <p className="text-custom-purple mb-4 text-justify hidden md:block">
              What is the power of 5 dollars? Have you ever wondered how people around the world most often spend their 5 dollars? Just ask yourself what percentage of people on this planet start their day with coffee? And constantly repeat the same thing several times a day, often without real need for it...
            </p>

            <div className="bg-custom-purple p-3 text-white rounded-md md:hidden">
              <p className="mb-3 text-justify">
                What is the power of 5 dollars? Have you ever wondered how people around the world most often spend their 5 dollars? Just ask yourself what percentage of people on this planet start their day with coffee? And constantly repeat the same thing several times a day, often without real need for it...
              </p>
            </div>
            
            {/* Coin Positioned Below Paragraph */}
            <div className="flex px-10">
              <img src={coinImage} className="w-36 h-30 mx-2" />
            </div>
          </div>
        </div>

        {/* Right Half */}
        <div className="flex-1 flex items-center justify-center">
          <img src={kafeImage} className="w-full h-auto" />
        </div>

        {/* Coin Positioned at the Center Bottom */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-4">
          <img src={coinImage} className="w-36 h-30" />
        </div>
      </section>
      
      {/* Content Section */}
      <section className="px-6">
        <div className="text-custom-purple p-3 hidden md:block">
          <p className="mb-2">Of course, coffee has its health benefits, but have you ever wondered what the power of the price a cup of coffee is ?</p>
          <p className="mb-2">In the Balkans, the average hourly wage is 5 dollars</p>
          <p className="mb-2">In India, one working day amounts to 5 dollars</p>
          <p className="mb-2">Throughout the world, 5 dollars have different power in restricting human freedom.</p>
          <p className="mb-2">Coffee as an excuse is an influential factor in connections between people, time</p>
          <p className="mb-2">spent in a coffee shop can be an investment but also wasted time. </p>
        </div>

        <div className="bg-custom-purple opacity-50 text-white mb-3 p-3 rounded-md md:hidden">
          <p className="mb-2">Of course, coffee has its health benefits, but have you ever wondered what the power of the price a cup of coffee is ?</p>
          <p className="mb-2">In the Balkans, the average hourly wage is 5 dollars</p>
          <p className="mb-2">In India, one working day amounts to 5 dollars</p>
          <p className="mb-2">Throughout the world, 5 dollars have different power in restricting human freedom.</p>
          <p className="mb-2">Coffee as an excuse is an influential factor in connections between people, time</p>
          <p className="mb-2">spent in a coffee shop can be an investment but also wasted time. </p>
        </div>

        <div className="bg-custom-purple p-3 text-white rounded-md">
          <p className="mb-3 text-justify">
            Our goal and idea are to create a platform  that will bring together millions of people from around the world, so that instead of starting their day with coffee, 
            their 5 dollars will be invested in our social platform, with which their 5 dollars
            will make drastic changes in someone`s life, maybe even in their, gaining 
            1,000,000 dollars daily.
          </p>
          <p className="mb-3 text-justify">
            Giving them a new real picture of what is the true power of people`s unity is,
            as well as what the power of money if for those who are morally independent, 
            and what changes are real if there is unity.
            Sounds fantastic, doesn`t it?
          </p>
        </div>
      </section>

      {/* Slogan Section */}
      <section className="relative px-6 flex flex-col md:flex-row mb-6">
        {/* Left Half */}
        <div className="flex-1 flex flex-col justify-between">
          <ul className="list-none text-white text-3xl mb-4">
            <li className="mb-2">SKIP YOUR</li>
            <li className="mb-2">COFFEE TODAY</li>
            <li className="mb-2">AND BECOME</li>
            <li className="mb-2 text-4xl">MILLIONAIRE</li>
            <li className="mb-2">TOMORROW</li>
          </ul>
        </div>

        {/* Right Half */}
        <div className="flex-1 flex items-center justify-center">
        <img src={app3dimage1} className="w-full h-auto"/>
        </div>
      </section>
      
      <div className="w-full h-10 bg-custom-purple"></div>
    </main>
  );
};

export default About;