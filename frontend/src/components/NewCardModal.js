import React, { useState } from 'react';

const NewCardModal = ({ handleNewCardRequest }) => {
  const [cardtype, setCardType] = useState('');
  const [cardnumber, setCardNumber] = useState('');
  const [cardname, setCardName] = useState('');
  const [MM, setMM] = useState('');
  const [YY, setYY] = useState('');
  const [CVV, setCVV] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    handleNewCardRequest(
        cardtype,
        cardnumber,
        cardname,
        MM,
        YY,
        CVV
    );
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded shadow-lg w-full max-w-md">
        <h2 className="text-xl font-bold mb-2">ADD NEW CARD</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Card Type"
              value={cardtype}
              onChange={(e) => setCardType(e.target.value)}
              required
              className="mt-1 block w-full border border-custom-purple rounded py-2 px-3 text-custom-black text-semibold focus:ring-blue-500 focus:border-custom-black"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Card Number"
              value={cardnumber}
              onChange={(e) => setCardNumber(e.target.value)}
              required
              className="mt-1 block w-full border border-custom-purple rounded py-2 px-3 text-custom-black text-semibold focus:ring-blue-500 focus:border-custom-black"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="NAME ON CARD"
              value={cardname}
              onChange={(e) => setCardName(e.target.value)}
              required
              className="mt-1 block w-full border border-custom-purple rounded py-2 px-3 text-custom-black text-semibold focus:ring-blue-500 focus:border-custom-black"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="MM"
              value={MM}
              onChange={(e) => setMM(e.target.value)}
              required
              className="mt-1 block w-full border border-custom-purple rounded py-2 px-3 text-custom-black text-semibold focus:ring-blue-500 focus:border-custom-black"
            />
            <input
              type="text"
              placeholder="YY"
              value={YY}
              onChange={(e) => setYY(e.target.value)}
              required
              className="mt-1 block w-full border border-custom-purple rounded py-2 px-3 text-custom-black text-semibold focus:ring-blue-500 focus:border-custom-black"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="CVV"
              value={CVV}
              onChange={(e) => setCVV(e.target.value)}
              required
              className="mt-1 block w-full border border-custom-purple rounded py-2 px-3 text-custom-black text-semibold focus:ring-blue-500 focus:border-custom-black"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-custom-purple text-white rounded-3xl hover:bg-custom-purple2 transition-colors"
          >
           SAVE
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewCardModal;
