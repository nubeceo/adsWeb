import React, { useState, useEffect } from 'react';

function AccountPage() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Fetch user data from the backend API (replace with your actual API endpoint)
    fetch('your_backend_api_endpoint')
      .then((response) => response.json())
      .then((data) => setUserData(data))
      .catch((error) => console.error('Error fetching user data: ', error));
  }, []);

  const handleWithdraw = () => {
    // Implement the logic for the withdrawal process here
    // This can involve making another API request to process the withdrawal
    // and updating the user's coin balance accordingly
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h1 className="text-4xl font-semibold text-blue-600 mb-6">Account Information</h1>
        <p className="text-xl text-gray-800 mb-6">
          <strong>Username:</strong> {userData ? userData.name : 'Loading...'}
        </p>
        <div className="flex items-center">
          <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center text-2xl">
            {userData ? userData.coins : '...'}
          </div>
          <p className="text-xl text-gray-800 ml-6">
            <strong>Number of Coins:</strong>
          </p>
        </div>
        <button
          onClick={handleWithdraw}
          className="bg-green-500 text-white font-semibold rounded-md px-6 py-3 hover:bg-green-600 mt-6 text-2xl"
        >
          Withdraw
        </button>
      </div>
    </div>
  );
}

export default AccountPage;
