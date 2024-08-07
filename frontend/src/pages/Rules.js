import React from 'react';
import logo from '../assets/logo.png'; 
import app3dimage2 from '../assets/app3dimage2.png'; 

const Rules = () => {
  return (
    <main className="w-full bg-custom-purple">
       {/* Desktop/Mobile View */}
      <div className="px-6 text-white pb-2">
        {/* Logo */}
        <img src={logo} className="max-w-full h-auto pb-10" />

        {/* Heading */}
        <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>

        {/* Criteria Text */}
        <p className="text-xl font-bold mb-4 pb-2">
          Criteria the user must meet and rules for participation:
        </p>

        {/* List of Terms */}
        <ul className="list-disc list-inside mb-6 space-y-2">
          <li>I confirm that I am over 18 years old.</li>
          <li>Since this platform aims to unite people from all over the world and give them knowledge about their power, the power of unity. And the true power of the price of coffee, this platform does not fall under the category of gambling or lottery. Therefore, the winner of this cash amount will be paid in several installments according to the rules, not entirely and at once.</li>
          <li>The winner must legally declare the money in their country and is obligated to pay personal taxes (in different percentages depending on the legislation of their country where the money will be deposited).</li>
          <li>10% of the total winnings are retained by the platform for its technical support and development.</li>
          <li>All user information goes into our user database, ensuring strict discretion, without sharing it according to all legal regulations.</li>
          <li>Funds deposited by users must be legal and undisputed.</li>
          <li>Participation restrictions may be imposed to prevent abuse.</li>
          <li>Participants may be required to provide proof of the legitimacy of the funds they deposit.</li>
          <li>The game is conducted according to all legal regulations.</li>
          <li>Follow all applicable laws and regulations.</li>
        </ul>

        {/* Additional Information */}
        <p className="text-base mb-6">
          Create an account with your accurate personal information and a mandatory username that will not match with your first and last name.
          Enter/pay through a liquid bank account (an account to which your winnings will be paid if you are a winner); otherwise, if your account is not liquid, your winnings will be nullified.
          The user’s data must match the data of the bank account.
          Choose a location (country) of permanent residence.
          There is no age limit for participation if the user possesses a valid ID card and bank account.
          10% of each win goes to our platform for technical support; also, each winner is subject to personal tax, which varies (%) depending on the place of residence and is paid for them.
          The deposited money remains in your account until the required amount of 1,000,000 is reached; then your money is in play, and you are a potential winner.
          The winners will be cured through a direct transfer, allowing every participant to have insight into the lucky winner.
          An official payment counter is visible to all visitors to the platform. When the required amount is reached (1,000,000), all those who have purchased coffee, i.e., participants in the game, receive notification that the amount has been completed. Within a time period of 30 minutes on the website, they will have the opportunity to follow who will be the winner of the prize.
        </p>
      </div>

      {/* Mobile View */}
      <section className="px-6 md:hidden flex">
        {/* Text List */}
        <div className="flex-1 flex flex-col justify-end">
          <ul className="list-none text-white text-3xl mb-4">
            <li className="mb-2">SKIP YOUR</li>
            <li className="mb-2">COFFEE TODAY</li>
            <li className="mb-2">AND BECOME</li>
            <li className="mb-2 text-4xl">MILLIONAIRE</li>
            <li className="mb-2">TOMORROW</li>
          </ul>
        </div>
        
        {/* Image */}
        <div className="flex-1 flex justify-left">
          <img src={app3dimage2} className="w-full h-auto"/>
        </div>
      </section>

    </main>
  );
};

export default Rules;
