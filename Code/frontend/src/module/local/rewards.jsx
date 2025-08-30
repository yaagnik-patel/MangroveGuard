import React, { useState } from 'react';

const Rewards = () => {
  // Mock user data - in real app this would come from props/context/API
  const [userStats, setUserStats] = useState({
    totalReports: 12,
    totalPoints: 150
  });
  
  const [showRedeemPopup, setShowRedeemPopup] = useState(false);
  
  const redeemThreshold = 100;
  const canRedeem = userStats.totalPoints >= redeemThreshold;
  
  const handleRedeem = () => {
    if (canRedeem) {
      setShowRedeemPopup(true);
      // In real app, you'd also update the user's points
      setUserStats(prev => ({ ...prev, totalPoints: prev.totalPoints - 100 }));
      
      // Hide popup after 3 seconds
      setTimeout(() => {
        setShowRedeemPopup(false);
      }, 3000);
    }
  };

  return (
    <div className="min-h-screen bg-white p-4 md:p-8">
      {/* Header */}
      <header className="py-8 text-center border-b-4 border-black mb-8">
        <div className="text-6xl mb-3">🏆</div>
        <h1 className="text-4xl font-black text-gray-800 mb-2">Your Rewards</h1>
        <p className="text-xl font-medium text-gray-600">
          "Every action counts. Every point matters."
        </p>
      </header>

      {/* Main Content - Centered Column Layout */}
      <div className="max-w-2xl mx-auto space-y-8">
        
        {/* Stats Section */}
        <div className="space-y-6">
          <h2 className="text-3xl font-black text-gray-800 text-center border-b-2 border-black pb-2 mb-6">
            📊 Your Impact
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Total Reports Card */}
            <div className="bg-blue-100 border-4 border-black p-6 shadow-[8px_8px_0px_0px_#000]">
              <div className="text-center">
                <div className="text-5xl mb-4">📢</div>
                <div className="text-3xl font-black text-gray-800 mb-2">{userStats.totalReports}</div>
                <div className="text-lg font-bold text-gray-600">Total Reports</div>
                <div className="text-sm text-gray-500 mt-1">Incidents Reported</div>
              </div>
            </div>

            {/* Total Points Card */}
            <div className="bg-yellow-100 border-4 border-black p-6 shadow-[8px_8px_0px_0px_#000]">
              <div className="text-center">
                <div className="text-5xl mb-4">⭐</div>
                <div className="text-3xl font-black text-gray-800 mb-2">{userStats.totalPoints}</div>
                <div className="text-lg font-bold text-gray-600">Total Points</div>
                <div className="text-sm text-gray-500 mt-1">Rewards Balance</div>
              </div>
            </div>
          </div>
        </div>

        {/* Redeem Section */}
        <div className="border-4 border-black bg-white p-8 shadow-[10px_10px_0px_0px_#000]">
          <h2 className="text-3xl font-black text-gray-800 mb-6 text-center">🎁 Redeem Rewards</h2>
          
          {/* Available Rewards */}
          <div className="space-y-4 mb-8">
            <div className="bg-green-50 border-2 border-black p-4 rounded-none">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🌱</span>
                  <div>
                    <h3 className="font-bold text-gray-800">Plant a Tree Certificate</h3>
                    <p className="text-sm text-gray-600">Digital certificate for tree planting</p>
                  </div>
                </div>
                <div className="text-lg font-black text-gray-800">100 pts</div>
              </div>
            </div>

            <div className="bg-purple-50 border-2 border-black p-4 rounded-none">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">📱</span>
                  <div>
                    <h3 className="font-bold text-gray-800">Premium Features</h3>
                    <p className="text-sm text-gray-600">Unlock advanced reporting tools</p>
                  </div>
                </div>
                <div className="text-lg font-black text-gray-800">250 pts</div>
              </div>
            </div>

            <div className="bg-orange-50 border-2 border-black p-4 rounded-none">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🎽</span>
                  <div>
                    <h3 className="font-bold text-gray-800">Eco-Warrior T-Shirt</h3>
                    <p className="text-sm text-gray-600">Official MangroveGuard merchandise</p>
                  </div>
                </div>
                <div className="text-lg font-black text-gray-800">500 pts</div>
              </div>
            </div>
          </div>

          {/* Points Status */}
          <div className="text-center mb-6">
            <div className="text-lg font-bold text-gray-700">
              {canRedeem 
                ? `You have ${userStats.totalPoints} points available!` 
                : `You need ${redeemThreshold - userStats.totalPoints} more points to redeem.`
              }
            </div>
            {!canRedeem && (
              <div className="text-sm text-gray-500 mt-1">
                Keep reporting incidents to earn more points!
              </div>
            )}
          </div>

          {/* Redeem Button */}
          <div className="text-center">
            <button
              onClick={handleRedeem}
              disabled={!canRedeem}
              className={`px-8 py-4 border-4 border-black font-black text-xl transition-all shadow-[6px_6px_0px_0px_#000] ${
                canRedeem
                  ? 'bg-green-200 hover:bg-green-300 active:shadow-[3px_3px_0px_0px_#000] active:translate-x-1 active:translate-y-1 cursor-pointer text-gray-800'
                  : 'bg-gray-200 text-gray-500 cursor-not-allowed'
              }`}
            >
              {canRedeem ? '🎁 Redeem Tree Certificate (100 pts)' : '🔒 Not Enough Points'}
            </button>
          </div>
        </div>

        {/* How to Earn More Points */}
        <div className="bg-pink-50 border-4 border-black p-6 shadow-[8px_8px_0px_0px_#000]">
          <h3 className="text-2xl font-black text-gray-800 mb-4 text-center">💡 Earn More Points</h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <span className="text-xl">📢</span>
              <span className="text-sm font-bold text-gray-700">Report incidents: +10 points each</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-xl">✅</span>
              <span className="text-sm font-bold text-gray-700">Verified reports: +5 bonus points</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-xl">📅</span>
              <span className="text-sm font-bold text-gray-700">Daily check-in: +2 points</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-xl">👥</span>
              <span className="text-sm font-bold text-gray-700">Invite friends: +20 points</span>
            </div>
          </div>
        </div>

      </div>

      {/* Success Popup */}
      {showRedeemPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white border-4 border-black p-8 shadow-[10px_10px_0px_0px_#000] max-w-md w-full text-center">
            <div className="text-6xl mb-4">🎉</div>
            <h3 className="text-2xl font-black text-gray-800 mb-2">Reward Redeemed Successfully!</h3>
            <p className="text-lg text-gray-600 mb-4">Your tree certificate is on its way!</p>
            <div className="text-sm text-gray-500">
              Check your email for details • Remaining points: {userStats.totalPoints}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Rewards;