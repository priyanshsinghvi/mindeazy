import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, Trophy, Clock, BarChart, Footprints, Moon, 
  Flame, BookHeart, Smartphone, Wind, Droplets, Share2, Award
} from 'lucide-react';

const ChallengesPage = () => {
  const navigate = useNavigate();
  const [userProgress, setUserProgress] = useState({
    completedChallenges: 3,
    totalChallenges: 7,
    currentStreak: 5
  });

  const challenges = [
    {
      id: 'steps',
      title: "10,000 Steps Challenge",
      description: "Walk 10,000 steps daily for better physical and mental health",
      duration: "7 Days",
      difficulty: "Moderate",
      icon: Footprints,
      progress: 65,
      type: "activity",
      connected: true,
      currentValue: 7532
    },
    {
      id: 'sleep',
      title: "Sleep Optimization",
      description: "Improve your sleep quality with consistent sleep patterns",
      duration: "7 Days",
      difficulty: "Easy",
      icon: Moon,
      progress: 40,
      type: "wellness",
      connected: true,
      currentValue: "6h 45m"
    },
    {
      id: 'calories',
      title: "Calorie Burn Challenge",
      description: "Burn 300+ active calories daily through any activity",
      duration: "14 Days",
      icon: Flame,
      difficulty: "Hard",
      progress: 25,
      type: "activity",
      connected: true,
      currentValue: 210
    },
    {
      id: 'gratitude',
      title: "Gratitude Journal",
      description: "Write three things you're grateful for each day",
      duration: "21 Days",
      icon: BookHeart,
      difficulty: "Easy",
      progress: 80,
      type: "mindfulness",
      connected: false
    },
    {
      id: 'digital-detox',
      title: "Digital Detox",
      description: "Reduce screen time and practice mindful technology use",
      duration: "14 Days",
      icon: Smartphone,
      difficulty: "Moderate",
      progress: 30,
      type: "wellness",
      connected: true,
      currentValue: "2h 15m"
    },
    {
      id: 'breathing',
      title: "Yoga & Breathing",
      description: "Daily breathing exercises and gentle yoga movements",
      duration: "10 Days",
      icon: Wind,
      difficulty: "Easy",
      progress: 50,
      type: "mindfulness",
      connected: true,
      currentValue: "85 BPM"
    },
    {
      id: 'hydration',
      title: "Hydration Hero",
      description: "Drink 2-3L of water daily for optimal wellness",
      duration: "7 Days",
      icon: Droplets,
      difficulty: "Easy",
      progress: 90,
      type: "wellness",
      connected: true,
      currentValue: "2.1L"
    }
  ];

  const [selectedType, setSelectedType] = useState('all');

  const filteredChallenges = selectedType === 'all' 
    ? challenges 
    : challenges.filter(challenge => challenge.type === selectedType);

  const connectGoogleFit = () => {
    // Simulated Google Fit connection
    console.log('Connecting to Google Fit...');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#A8DADC] via-[#D5C6E0] to-[#F1FAEE]">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm py-4 sticky top-0 z-10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <button
                onClick={() => navigate('/')}
                className="flex items-center text-[#1D3557] hover:text-[#457B9D] transition-colors"
              >
                <ArrowLeft className="w-6 h-6 mr-2" />
                Back to Home
              </button>
              <h1 className="text-xl font-semibold text-[#1D3557] ml-4">Wellness Challenges</h1>
            </div>
            <button
              onClick={connectGoogleFit}
              className="flex items-center gap-2 bg-[#1D3557] text-white px-4 py-2 rounded-full hover:bg-[#457B9D] transition-colors"
            >
              <Trophy className="w-4 h-4" />
              Connect Wearable
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-[#2C3E50] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Transform Your Well-being</h2>
            <p className="text-xl mb-8 text-gray-300">
              "Small steps today lead to big changes tomorrow."
            </p>
            <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto">
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-2xl font-bold">{userProgress.completedChallenges}</div>
                <div className="text-sm text-gray-300">Completed</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-2xl font-bold">{userProgress.currentStreak}</div>
                <div className="text-sm text-gray-300">Day Streak</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-2xl font-bold">
                  {Math.round((userProgress.completedChallenges / userProgress.totalChallenges) * 100)}%
                </div>
                <div className="text-sm text-gray-300">Progress</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap gap-4 mb-8 justify-center">
          {['all', 'activity', 'wellness', 'mindfulness'].map(type => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`px-6 py-2 rounded-full transition-colors ${
                selectedType === type
                  ? 'bg-[#1D3557] text-white'
                  : 'bg-white text-[#1D3557] hover:bg-[#A8DADC]'
              }`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>

        {/* Challenges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredChallenges.map((challenge) => (
            <div
              key={challenge.id}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 bg-[#A8DADC]/20 rounded-full flex items-center justify-center">
                  <challenge.icon className="w-6 h-6 text-[#457B9D]" />
                </div>
                {challenge.connected && (
                  <span className="text-sm px-3 py-1 bg-[#F1FAEE] rounded-full text-[#457B9D] flex items-center gap-1">
                    <Award className="w-4 h-4" />
                    Connected
                  </span>
                )}
              </div>
              
              <h3 className="text-xl font-semibold text-[#1D3557] mb-2">{challenge.title}</h3>
              <p className="text-[#457B9D] mb-4">{challenge.description}</p>
              
              {challenge.currentValue && (
                <div className="mb-4 bg-[#F1FAEE] rounded-lg p-3">
                  <div className="text-sm text-[#457B9D]">Current Progress</div>
                  <div className="text-lg font-semibold text-[#1D3557]">{challenge.currentValue}</div>
                </div>
              )}

              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-[#1D3557]">{challenge.duration}</span>
                  <span className="px-3 py-1 bg-[#F1FAEE] rounded-full text-[#457B9D]">
                    {challenge.difficulty}
                  </span>
                </div>
                
                <div className="relative h-2 bg-[#F1FAEE] rounded-full overflow-hidden">
                  <div 
                    className="absolute top-0 left-0 h-full bg-[#1ABC9C] transition-all duration-500"
                    style={{ width: `${challenge.progress}%` }}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <button className="flex-1 bg-[#1D3557] text-white py-2 rounded-lg hover:bg-[#457B9D] transition-colors mr-2">
                    {challenge.progress > 0 ? 'Continue' : 'Start Challenge'}
                  </button>
                  <button className="p-2 bg-[#F1FAEE] text-[#1D3557] rounded-lg hover:bg-[#A8DADC] transition-colors">
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChallengesPage;