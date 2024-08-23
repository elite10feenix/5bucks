import React, { useState, useEffect } from 'react';
import axios from 'axios';

const User = ({ token, username, fullname, cards, updateToken, handleLogout, handleNewCard, fetchAllCards, handleRemoveCard }) => {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const [newUsername, setNewUsername] = useState(username);
    const [newFullname, setNewFullname] = useState(fullname);
    
    useEffect(() => {
        fetchAllCards(); // Fetch user details when the component mounts
    }, [fetchAllCards]);

    const handleUpdateInfo = async (e) => {
        e.preventDefault();

        if (username === newUsername) {
          setErrorMessage('Same username.');
          return;
        }
        try {
            const response = await axios.post('/user/updateinfo',
                {
                    newUsername,
                    newFullname,
                },
                {
                headers: {
                    Authorization: token,
                },
            });
            const newToken = response.data.token;
            updateToken(newToken, newUsername, newFullname);

            setSuccessMessage('Update username and full name successfully.');
            setErrorMessage('');
        } catch (error) {
            if (error.response && error.response.data) {
                const { error: errorMessage } = error.response.data;
                setErrorMessage(errorMessage);
                setSuccessMessage('');
            }
        }
    };

    const handleChangePassword = async (e) => {
        e.preventDefault();

        if (newPassword !== repeatPassword) {
          setErrorMessage('New password and confirmation do not match.');
          return;
        }
        try {
            const response = await axios.post('/api/changepassword',
                {
                    currentPassword,
                    newPassword,
                },
                {
                headers: {
                    Authorization: token,
                },
            });
            setSuccessMessage('Password changed successfully.');
            setErrorMessage('');
        } catch (error) {
            if (error.response && error.response.data) {
                const { error: errorMessage } = error.response.data;
                setErrorMessage(errorMessage);
                setSuccessMessage('');
            }
        }
    };

    return (
        <main className="w-full pb-4">
            <section className="flex flex-col md:flex-row mx-6 mb-4">
                {/* Left Half */}
                <div className="flex-1 p-4">
                    <h2 className="text-3xl font-bold mx-6 mb-4 text-custom-purple">Profile Settings</h2>
                    <button onClick={handleLogout} className="p-2 mx-6 mb-4 bg-custom-purple text-custom-gray rounded-md">Logout</button>

                    <form onSubmit={handleUpdateInfo} className="mx-6">
                        <h2 className="text-2xl mb-4 text-custom-purple2">Personal Information</h2>
                        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                        {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
                        <label className="text-xl mb-4 text-custom-gray2">Full Name</label>
                        <input
                            type="text"
                            value={username}
                            readOnly
                            className="w-full py-2 px-3 mb-4 border border-custom-black bg-custom-gray2"
                        />
                        <label className="text-xl mb-4 text-custom-gray2">Username</label>
                        <input
                            type="text"
                            placeholder="Username"
                            value={newUsername}
                            onChange={(e) => setNewUsername(e.target.value)}
                            className="w-full py-2 px-3 mb-4 border border-custom-black"
                        />
                        <label className="text-xl mb-4 text-custom-gray2">Full Name</label>
                        <input
                            type="text"
                            placeholder="Fullname"
                            value={newFullname}
                            onChange={(e) => setNewFullname(e.target.value)}
                            className="w-full py-2 px-3 mb-4 border border-custom-black"
                            />
                        <button type="submit" className="p-2 mb-4 bg-custom-purple text-custom-gray rounded-md">Save Changes</button>
                    </form>
                    <form onSubmit={handleChangePassword} className="mx-6">
                        <h2 className="text-2xl mb-4 text-custom-purple2">Change Password</h2>
                        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                        {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
                        <label className="text-xl mb-4 text-custom-gray2">Current Password</label>
                        <input
                        type="text"
                        placeholder="Current Password"
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                        className="w-full py-2 px-3 mb-4 border border-custom-black"
                        />
                        <label className="text-xl mb-4 text-custom-gray2">New Password</label>
                        <input
                        type="text"
                        placeholder="New Password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        className="w-full py-2 px-3 mb-4 border border-custom-black"
                        />
                        <label className="text-xl mb-4 text-custom-gray2">Repeat Password</label>
                        <input
                        type="text"
                        placeholder="Repeat Password"
                        value={repeatPassword}
                        onChange={(e) => setRepeatPassword(e.target.value)}
                        className="w-full py-2 px-3 mb-4 border border-custom-black"
                        />
                        <button type="submit" className="p-2 mb-4 bg-custom-purple text-custom-gray rounded-md">Change Password</button>
                    </form>
                </div>

                {/* Right Half */}
                <div className="flex-1 p-4">
                    <h2 className="text-3xl font-bold mx-6 mb-4 text-custom-purple">Payment</h2>
                    <h2 className="text-2xl mb-4 text-custom-purple2">CARDS</h2>

                    <button onClick={handleNewCard} className="p-2 mx-6 mb-4 bg-custom-purple text-custom-gray rounded-md">ADD NEW CARD</button>

                    {cards.length > 0 ? (
                        <ul>
                        {cards.map((card, index) => (
                            <li key={index}>
                            <p>Type: {card.cardtype}</p>
                            <p>Number: {card.cardnumber}</p>
                            <p>Name: {card.cardname}</p>
                            <p>MM/YY: {card.mm}/{card.yy}</p>
                            <p>CVV: {card.cvv}</p>
                            <button onClick={() => handleRemoveCard(card.ID)} className="p-5">Remove Card</button>
                            </li>
                        ))}
                        </ul>
                    ) : (
                        <p>No cards found.</p>
                    )}
                   
                </div>
            </section>
        </main>
    );
};

export default User;
