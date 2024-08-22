// Main.js
import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import default styles for the calendar
import { Link } from 'react-router-dom';
import coffeeimg from '../assets/main/coffee.png'; 
import minusbutton from '../assets/main/minus.png'; 
import plusbutton from '../assets/main/plus.png'; 
import billbutton from '../assets/main/bill.png'; 
import purplecircle from '../assets/purplecircle.png'; 
import purpleline from '../assets/purpleline.png'; 
import invited from '../assets/main/invited.png';
import activeplaced from '../assets/main/activeplaced.png';
import pozadina from '../assets/pozadina.png'; 
import logo from '../assets/logo3.png';
import app3dimg from '../assets/app3dimage.png';
import walletimg from '../assets/main/wallet.png';
import incomingimg from '../assets/main/incoming.png';
import withdrawlimg from '../assets/main/withdrawl.png';
import coffeesmile from '../assets/main/coffeesmile.png';



const Main = () => {
    const [quantity, setQuantity] = useState(1);

    const handleDecrease = () => {
        setQuantity(prevQuantity => Math.max(prevQuantity - 1, 0));
    };
  
    const handleIncrease = () => {
        setQuantity(prevQuantity => Math.min(prevQuantity + 1, 99999));
    };

    const handleQuantityChange = (e) => {
        const value = Math.min(Math.max(parseInt(e.target.value, 10) || 0, 0), 99999);
        setQuantity(value);
    };

    const handleBill = () => {
        alert(quantity);
    };

    const data = [
        { id: 3, date: 'May 5,2024, 18:00', paymentType: 'Credit Card' },
        { id: 3, date: 'May 5,2024, 18:00', paymentType: 'Credit Card' },
        { id: 3, date: 'May 5,2024, 18:00', paymentType: 'Credit Card' },
        { id: 3, date: 'May 5,2024, 18:00', paymentType: 'Credit Card' },
        { id: 3, date: 'May 5,2024, 18:00', paymentType: 'Credit Card' },
        { id: 3, date: 'May 5,2024, 18:00', paymentType: 'Credit Card' },
        { id: 3, date: 'May 5,2024, 18:00', paymentType: 'Credit Card' },
        { id: 3, date: 'May 5,2024, 18:00', paymentType: 'Credit Card' },
        { id: 3, date: 'May 5,2024, 18:00', paymentType: 'Credit Card' },
    ];

    const recenttrasanctiondata = [
        { paymentType: 'Credit Card', banknumber: '4732 .... .... .... 1923', time: '17 MAY 2024', budget: '350$' },
        { paymentType: 'Credit Card', banknumber: '4732 .... .... .... 1923', time: '17 MAY 2024', budget: '350$' },
        { paymentType: 'Credit Card', banknumber: '4732 .... .... .... 1923', time: '17 MAY 2024', budget: '350$' },
        { paymentType: 'Credit Card', banknumber: '4732 .... .... .... 1923', time: '17 MAY 2024', budget: '350$' },
        { paymentType: 'Credit Card', banknumber: '4732 .... .... .... 1923', time: '17 MAY 2024', budget: '350$' },
    ];

    const [dateTime, setDateTime] = useState(new Date());

    useEffect(() => {
        // Update the date and time every second
        const timer = setInterval(() => {
        setDateTime(new Date());
        }, 1000);

        // Cleanup the timer when the component unmounts
        return () => clearInterval(timer);
    }, []);
    const formattedDate = dateTime.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
    });
    const formattedTime = dateTime.toLocaleTimeString('en-US');

    const billData = [
        { price: '100', quantity: 0.25 },
        { price: '150', quantity: 0.50 },
        { price: '250', quantity: 0.75 },
        { price: '400', quantity: 1 },
    ];
    const totalPrice = billData.reduce((total, item) => total + (parseFloat(item.price) * item.quantity), 0);
    

    return (
        <main className="w-full bg-custom-purple pb-4">
            <section className="flex flex-col items-center justify-center mx-6">
                <h1 className="text-4xl font-bold text-white">BUY YOUR COFFEE</h1>
                <img src={coffeeimg} alt="Coffee" className="w-2/3 h-auto mb-4" />
                <div className="flex flex-col items-center mb-4">
                    <div className="flex items-center mb-4">
                    <button onClick={handleDecrease} className="p-2">
                        <img src={minusbutton} alt="Decrease" className="md:w-36 w-16 h-auto" />
                    </button>
                    <input
                        type="number"
                        value={quantity}
                        onChange={handleQuantityChange}
                        min="0"
                        max="99999"
                        readOnly
                        className="mx-4 text-white text-5xl border-b-2 border-white bg-transparent outline-none w-38 text-center"
                        style={{ 
                        WebkitAppearance: 'none', // Hide default spinner in Chrome/Safari
                        MozAppearance: 'textfield', // Hide default spinner in Firefox
                        appearance: 'none' // Hide default spinner in Edge
                        }}
                    />
                    <button onClick={handleIncrease} className="p-2">
                        <img src={plusbutton} alt="Increase" className="md:w-36 w-16 h-auto" />
                    </button>
                    </div>
                    <button onClick={handleBill} className="p-2 rounded-full">
                        <img
                            src={billbutton}
                            alt="Checkout"
                            className="w-1/2 h-auto mx-auto"
                            style={{ display: 'block' }} // Center horizontally
                        />
                    </button>
                </div>
            </section>

            <section className="flex flex-col items-center justify-center mx-6">
                <div className="flex items-center justify-center mb-8 text-xl md:text-5xl text-bold text-white">
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
            </section>

            <section className="flex flex-col md:flex-row h-100 bg-custom-purple2 rounded-md mx-6 mb-4">
                {/* Left Half */}
                <div className="flex-1 p-4">
                    <h2 className="text-2xl font-bold m-4 text-white">ACTIVE COFFEE CODE</h2>
                    <div className="relative custom-scrollbar overflow-y-scroll h-60 m-4">
                        <table className="min-w-full text-xl">
                            <thead className="sticky top-0 bg-custom-purple2 text-custom-white underline">
                            <tr>
                                <th className="p-2 text-left">ID</th>
                                <th className="p-2 text-left">DATE</th>
                                <th className="p-2 text-left">PAYMENT TYPE</th>
                            </tr>
                            </thead>
                            <tbody className="text-white">
                            {data.map((row) => (
                                <tr key={row.id}>
                                <td className="p-2">{row.id}</td>
                                <td className="p-2">{row.date}</td>
                                <td className="p-2 flex items-center space-x-2">
                                    {row.paymentType === 'Credit Card' && (
                                    <>
                                        <img src={billbutton} alt="Credit Card" className="w-auto h-8" />
                                        <span>Credit Card</span>
                                    </>
                                    )}
                                    {row.paymentType === 'PayPal' && (
                                    <>
                                        <img src={billbutton} alt="PayPal" className="w-6 h-auto" />
                                        <span>PayPal</span>
                                    </>
                                    )}
                                </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Right Half */}
                <div className="flex-1 p-4">
                    <h2 className="text-2xl font-bold m-4 text-white">Title</h2>
                    <div className="relative custom-scrollbar overflow-y-scroll h-60 m-4">
                        <table className="min-w-full text-xl">
                            <thead className="sticky top-0 bg-custom-purple2 text-custom-white underline">
                            <tr>
                                <th className="p-2 text-left">ID</th>
                                <th className="p-2 text-left">DATE</th>
                                <th className="p-2 text-left">PAYMENT TYPE</th>
                            </tr>
                            </thead>
                            <tbody className="text-white">
                            {data.map((row) => (
                                <tr key={row.id}>
                                <td className="p-2">{row.id}</td>
                                <td className="p-2">{row.date}</td>
                                <td className="p-2 flex items-center space-x-2">
                                    {row.paymentType === 'Credit Card' && (
                                    <>
                                        <img src={billbutton} alt="Credit Card" className="w-6 h-auto" />
                                        <span>Credit Card</span>
                                    </>
                                    )}
                                    {row.paymentType === 'PayPal' && (
                                    <>
                                        <img src={billbutton} alt="PayPal" className="w-6 h-auto" />
                                        <span>PayPal</span>
                                    </>
                                    )}
                                </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
           
            <section className="flex flex-col md:flex-row mx-6 mb-4">
                {/* Left Half */}
                <div className="flex-1 flex flex-col items-center justify-center bg-custom-purple2 rounded-md md:mr-16 mb-4 md:mb-0 pb-4 md:mb-0">
                    <h2 className="text-2xl font-bold m-4 text-white">
                        INVITE FRIEND TO JOIN & EARN FREE COFFEE
                    </h2>
                    <div className="flex items-center text-md md:text-xl">
                        <label className="p-2 rounded-l bg-custom-gray2 text-custom-gray3">
                        INVITATION LINK:
                        </label>
                        <label className="py-2 pr-4 bg-custom-gray2 text-custom-black">
                        www.5bucks.io/invite2413
                        </label>
                        <button 
                        type="button" 
                        className="flex items-center p-2 rounded-r bg-custom-green3 hover:bg-custom-green transition-colors"
                        >
                            <span className="text-custom-purple font-bold">COPY</span>
                        </button>
                    </div>
                </div>

                {/* Right Half */}
                <div className="flex-1 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-16">
                    <div className="flex flex-col bg-gradient-pink w-1/2 p-4 rounded-md">
                        <label className="text-3xl font-bold mb-4 text-white">
                            Invited:
                        </label>
                        <div className="flex flex-row items-center justify-between">
                            <label className="text-3xl font-bold text-white">
                                392
                            </label>
                            <img src={invited} alt="Invite" className="w-16 h-16" />
                        </div>
                    </div>

                    <div className="flex flex-col bg-gradient-green w-1/2 p-4 rounded-md">
                        <label className="text-3xl font-bold mb-4 text-white">
                            Active Placed:
                        </label>
                        <div className="flex flex-row items-center justify-between">
                            <label className="text-3xl font-bold text-white">
                                392
                            </label>
                            <img src={activeplaced} alt="Active Placed" className="w-16 h-16" />
                        </div>
                    </div>
                </div>

            </section>

            <section className="flex flex-col md:flex-row rounded-md mx-6 mb-4 bg-cover bg-center"
                style={{ backgroundImage: `url(${pozadina})` }}
                >
                <div className="md:w-3/4 flex flex-col justify-between text-white p-4">
                    <h1 className="text-4xl font-bold mb-4">Collaborate with us with our affiliate program</h1>
                    <h2 className="text-3xl font-bold mb-4">What is 5Bucks Affiliate Program?</h2>
                    <p className="text-xl mb-4">
                    Affiliate program is a platform for everyone to be a partner with us!
                    </p>
                    <p className="text-xl">
                    Agency, individual advertiser, marketing company, blogger, social influencer—if you have a way to spread the word, you have the chance to earn unlimited commissions and bonuses. Make money at home by spreading 5Bucks affiliate links. Isn’t it easy?
                    </p>
                </div>

                <div className="md:w-1/4 flex items-center justify-center">
                    <img src={app3dimg} alt="Affiliate Program" className="w-80 h-auto" />
                </div>
            </section>

            <section className="flex flex-col bg-gradient-purple-pink2 rounded-md mx-6 mb-4 pb-4">
             
                <div className="flex w-full items-center justify-between p-4 mb-4">
                    <div className="flex items-center">
                        <img src={logo} className="w-16 h-16 mr-4" />
                        <div className="text-white text-2xl">
                            <p className="underline mb-1">user@example.com</p>
                            <p>Affiliate ID: 123456</p>
                        </div>
                    </div>
                    <div className="text-right text-white text-2xl">
                        <p className="mb-1">{formattedDate}</p>
                        <p>{formattedTime}</p>
                    </div>
                </div>

                <h1 className="text-white text-3xl pb-1 border-b-2 border-custom-pink mx-6 mb-4">OVERVIEW</h1>

                <div className="flex flex-col lg:flex-row justify-between mx-6 mb-4">
                    <div className="flex items-center w-full lg:w-1/2 text-lg lg:text-xl">
                        <div className="flex w-full items-center bg-custom-gray2 rounded-md">
                            <label className="p-2 rounded-l bg-custom-gray2 text-custom-gray3 flex-shrink-0">
                                INVITATION LINK:
                            </label>
                            <label className="py-2 pr-2 bg-custom-gray2 text-custom-black w-full">
                                www.5bucks.io/invite2413
                            </label>
                            <button
                                type="button"
                                className="flex items-center p-2 rounded-r bg-custom-green3 hover:bg-custom-green transition-colors"
                            >
                                <span className="text-custom-purple font-bold">COPY</span>
                            </button>
                        </div>
                    </div>

                    {/* Second Child */}
                    <div className="flex items-center w-full lg:w-1/2 text-lg lg:text-xl mt-4 lg:mt-0 lg:ml-4">
                        <div className="flex w-full items-center bg-custom-gray2 rounded-md">
                            <label className="p-2 rounded-l bg-custom-gray2 text-custom-gray3 flex-shrink-0">
                                Email:
                            </label>
                            <label className="py-2 pr-2 bg-custom-gray2 text-custom-black w-full">
                                5bucks@gmail.com
                            </label>
                            <button
                                type="button"
                                className="flex items-center p-2 rounded-r bg-custom-green3 hover:bg-custom-green transition-colors"
                            >
                                <span className="text-custom-purple font-bold">COPY</span>
                            </button>
                            </div>
                        </div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-16 mx-6 mb-4">
                    <div className="flex flex-col bg-custom-purple border border-custom-pink w-full md:w-1/3 pl-4 py-4 rounded-md">
                        <div className="flex items-center">
                            <div className="w-1/3">
                                <img src={walletimg} className="w-30 h-24" />
                            </div>
                            <div className="w-2/3 ">
                                <p className="text-xl text-custom-white mb-2">WALLET
                                </p>
                                <p className="text-4xl text-white pl-1">$17.500</p>
                            </div>
                        </div>
                    </div>  

                    <div className="flex flex-col bg-custom-purple border border-custom-pink w-full md:w-1/3 pl-4 py-4 rounded-md">
                        <div className="flex items-center">
                            <div className="w-1/3">
                                <img src={incomingimg} className="w-30 h-24" />
                            </div>
                            <div className="w-2/3 ">
                                <p className="text-xl text-custom-white mb-2">INCOMING
                                </p>
                                <p className="text-4xl text-white pl-1">$3720</p>
                            </div>
                        </div>
                    </div>  

                    <div className="flex flex-col bg-custom-purple border border-custom-pink w-full md:w-1/3 pl-4 py-4 rounded-md">
                        <div className="flex items-center">
                            <div className="w-1/3">
                                <img src={withdrawlimg} className="w-30 h-24" />
                            </div>
                            <div className="w-2/3 ">
                                <p className="text-xl text-custom-white mb-2">WITHDRAWL
                                </p>
                                <p className="text-4xl text-white pl-1">$75.500</p>
                            </div>
                        </div>
                    </div>  
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-16 mx-6 mb-4">
                    <div className="text-center bg-gradient-pink2 border border-custom-pink w-full md:w-1/3 p-4 rounded-xl">
                        <label className="text-3xl font-bold mb-4 text-white">
                            Summary
                        </label>
                    </div>
                    <div className="text-center bg-custom-green3 shadow-inner-top-left border border-custom-pink w-full md:w-1/3 p-4 rounded-xl">
                        <label className="text-3xl font-bold mb-4 text-white">
                            INCOMING
                        </label>
                    </div>
                    <div className="text-center bg-gradient-pink2  border border-custom-pink w-full md:w-1/3 p-4 rounded-xl">
                        <label className="text-3xl font-bold mb-4 text-white">
                            TRANSFER
                        </label>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-stretch space-y-4 md:space-y-0 md:space-x-16 mx-6 mb-4">
                    <div className="bg-custom-black flex-1 p-6 rounded-md flex justify-center items-center">
                        <div className="w-full max-w-xs">
                        <Calendar
                            className="react-calendar" // Add custom class for calendar styling
                        />
                        </div>
                    </div>

                    <div className="bg-custom-black flex-1 p-6 rounded-md">
                        <div className="w-full max-w-lg mx-auto text-white">
                        <div className="text-lg mb-4">
                            <span>August 22, 2024</span> 
                        </div>

                        <div className="space-y-2">
                            {billData.map((item, index) => {
                            const itemTotal = parseFloat(item.price) * item.quantity;
                            return (
                                <div key={index} className="flex justify-between items-center pb-2">
                                {/* Description */}
                                <div className="flex-1 flex items-center space-x-4">
                                    <span className="font-medium">{item.price}</span>
                                    <span className="font-medium">COFFEE</span>
                                    <span className="text-gray-400">X</span>
                                    <span>{item.quantity.toFixed(2)}</span>
                                </div>

                                <div className="flex items-center space-x-4 text-right">
                                    <span>${itemTotal.toFixed(2)}</span>
                                </div>
                                </div>
                            );
                            })}
                        </div>

                        <div className="mt-4 border-t border-custom-pink pt-2">
                            <div className="flex justify-between text-lg">
                            <span>Summary:</span>
                            <span>${totalPrice.toFixed(2)}</span>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div className="bg-custom-black flex-1 p-6 rounded-md">
                        <h1 className="mb-4 text-left text-white text-lg">RECENT TRANSACTION</h1>
                        <table className="min-w-full text-white text-lg">
                        <tbody className="text-white">
                            {recenttrasanctiondata.map((row, index) => (
                            <tr key={index}>
                                <td className="p-2 flex items-center space-x-2">
                                <div className="flex-shrink-0">
                                    <img src={billbutton} alt="PayPal" className="w-8 h-auto" />
                                </div>
                                <div className="flex flex-col ml-2 text-left">
                                    <label>{row.banknumber}</label>
                                    <label>{row.time}</label>
                                </div>
                                </td>
                                <td className="p-2">{row.budget}</td>
                            </tr>
                            ))}
                        </tbody>
                        </table>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-center mx-6">
                    <div className="flex flex-col items-start space-y-2 text-white text-semibold text-3xl">
                        <p>1 - 100 coffee you earn</p>
                        <p className="pb-4">0.25 cents per coffee</p>
                        <p>101 - 250 coffee you earn</p>
                        <p>0.50 cents per coffee</p> 
                    </div>

                    <div className="flex items-center justify-center">
                        <img src={coffeesmile} alt="Center Image" className="w-100 h-auto object-cover" />
                    </div>

                    <div className="flex flex-col items-start space-y-2 text-white text-semibold text-3xl">
                        <p>251 - 500 coffee you earn</p>
                        <p className="pb-4">0.75 cents per coffee</p>
                        <p>over 500 coffee you earn</p>
                        <p>1 dollar per coffee</p> 
                    </div>
                </div>


            </section>
        </main>
    );
};

export default Main;