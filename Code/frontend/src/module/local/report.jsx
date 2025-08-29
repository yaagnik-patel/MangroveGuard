import React, { useState } from 'react';
import Layout from './Layout';

const ReportIncident = () => {
  const [formData, setFormData] = useState({
    incidentType: '',
    location: '',
    dateTime: new Date().toISOString().slice(0, 16),
    description: '',
    photos: []
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [incidentId, setIncidentId] = useState('');

  const incidentTypes = [
    { value: 'illegal-logging', label: '🌳 Illegal Logging', icon: '🪓' },
    { value: 'fire', label: '🔥 Fire Damage', icon: '🔥' },
    { value: 'water-pollution', label: '💧 Water Pollution', icon: '☢️' },
    { value: 'habitat-loss', label: '🏠 Habitat Destruction', icon: '💥' },
    { value: 'waste-dumping', label: '🗑️ Waste Dumping', icon: '🗑️' },
    { value: 'construction', label: '🏗️ Illegal Construction', icon: '🚧' },
    { value: 'other', label: '⚠️ Other', icon: '❓' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setFormData(prev => ({
      ...prev,
      photos: files
    }));
  };

  const generateIncidentId = () => {
    return 'MG' + Date.now().toString().slice(-6) + Math.random().toString(36).substr(2, 3).toUpperCase();
  };

  const handleSubmit = () => {
    if (!formData.incidentType || !formData.location || !formData.description) {
      alert('Please fill in all required fields!');
      return;
    }
    
    const newIncidentId = generateIncidentId();
    setIncidentId(newIncidentId);
    setIsSubmitted(true);
    
    // Here you would normally send to backend
    console.log('Report submitted:', { ...formData, incidentId: newIncidentId });
  };

  const resetForm = () => {
    setFormData({
      incidentType: '',
      location: '',
      dateTime: new Date().toISOString().slice(0, 16),
      description: '',
      photos: []
    });
    setIsSubmitted(false);
    setIncidentId('');
  };

  if (isSubmitted) {
    return (
      <Layout>
        <div className="min-h-screen bg-amber-50 pb-20 lg:pt-20">
          <div className="max-w-4xl mx-auto px-6 py-8">
            {/* Success Message */}
            <div className="text-center mb-8">
              <div className="text-8xl mb-4">✅</div>
              <h1 className="text-4xl font-black text-gray-800 mb-4">Report Submitted!</h1>
              <p className="text-xl text-gray-600 mb-6">
                Thank you for helping protect our mangroves!
              </p>
            </div>

            {/* Success Details */}
            <div className="bg-white border-4 border-black p-8 shadow-[10px_10px_0px_0px_#000] mb-8">
              <h2 className="text-2xl font-black text-gray-800 mb-6 text-center">📋 Report Details</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-100 border-2 border-black p-4">
                  <div className="text-2xl mb-2">🆔</div>
                  <h3 className="font-bold text-gray-800">Incident ID</h3>
                  <p className="text-lg font-black text-green-600">{incidentId}</p>
                </div>

                <div className="bg-yellow-100 border-2 border-black p-4">
                  <div className="text-2xl mb-2">🏆</div>
                  <h3 className="font-bold text-gray-800">Points Earned</h3>
                  <p className="text-lg font-black text-orange-600">+50 Points</p>
                </div>

                <div className="bg-blue-100 border-2 border-black p-4">
                  <div className="text-2xl mb-2">⏰</div>
                  <h3 className="font-bold text-gray-800">Status</h3>
                  <p className="text-lg font-black text-blue-600">Under Review</p>
                </div>

                <div className="bg-purple-100 border-2 border-black p-4">
                  <div className="text-2xl mb-2">📱</div>
                  <h3 className="font-bold text-gray-800">Next Steps</h3>
                  <p className="text-sm text-gray-600">We'll notify you of updates</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={resetForm}
                className="bg-green-200 border-4 border-black px-8 py-4 shadow-[6px_6px_0px_0px_#000] active:shadow-[3px_3px_0px_0px_#000] active:translate-x-1 active:translate-y-1 transition-all hover:bg-green-300"
              >
                <span className="text-2xl mr-2">📢</span>
                <span className="text-xl font-black text-gray-800">Report Another Incident</span>
              </button>

              <button className="bg-blue-200 border-4 border-black px-8 py-4 shadow-[6px_6px_0px_0px_#000] active:shadow-[3px_3px_0px_0px_#000] active:translate-x-1 active:translate-y-1 transition-all hover:bg-blue-300">
                <span className="text-2xl mr-2">🔍</span>
                <span className="text-xl font-black text-gray-800">View My Reports</span>
              </button>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="min-h-screen bg-amber-50 pb-20 lg:pt-20">
        <div className="max-w-7xl mx-auto px-6 py-8">
          
          {/* Header */}
          <header className="text-center mb-8">
            <div className="text-8xl mb-4">📢</div>
            <h1 className="text-5xl font-black text-gray-800 mb-4">Report an Incident</h1>
            <p className="text-2xl font-medium text-gray-600">
              Help protect mangroves by reporting incidents in your area
            </p>
          </header>

          {/* Main Form */}
          <div className="lg:col-span-8">
            <div className="bg-white border-4 border-black p-8 shadow-[10px_10px_0px_0px_#000]">
              <h2 className="text-3xl font-black text-gray-800 mb-8 text-center">🚨 Incident Details</h2>
              
              {/* Incident Type */}
              <div className="mb-6">
                <label className="block text-xl font-black text-gray-800 mb-4">
                  🏷️ Type of Incident *
                </label>
                <select 
                  name="incidentType"
                  value={formData.incidentType}
                  onChange={handleInputChange}
                  required
                  className="w-full p-4 border-4 border-black text-lg font-bold focus:bg-yellow-100 transition-colors"
                >
                  <option value="">Select incident type...</option>
                  {incidentTypes.map(type => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Location */}
              <div className="mb-6">
                <label className="block text-xl font-black text-gray-800 mb-4">
                  📍 Location *
                </label>
                <input 
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  placeholder="e.g., Mangrove Bay, Near Fishing Dock, GPS coordinates..."
                  required
                  className="w-full p-4 border-4 border-black text-lg font-bold focus:bg-blue-100 transition-colors"
                />
              </div>

              {/* Date & Time */}
              <div className="mb-6">
                <label className="block text-xl font-black text-gray-800 mb-4">
                  ⏰ Date & Time *
                </label>
                <input 
                  type="datetime-local"
                  name="dateTime"
                  value={formData.dateTime}
                  onChange={handleInputChange}
                  required
                  className="w-full p-4 border-4 border-black text-lg font-bold focus:bg-purple-100 transition-colors"
                />
              </div>

              {/* Description */}
              <div className="mb-6">
                <label className="block text-xl font-black text-gray-800 mb-4">
                  📝 Description *
                </label>
                <textarea 
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Provide detailed information about the incident. What did you see? How severe is it? Any other relevant details..."
                  rows={5}
                  required
                  className="w-full p-4 border-4 border-black text-lg font-bold focus:bg-green-100 transition-colors resize-none"
                />
              </div>

              {/* Photo Upload */}
              <div className="mb-8">
                <label className="block text-xl font-black text-gray-800 mb-4">
                  📸 Upload Photos (Optional)
                </label>
                <div className="border-4 border-dashed border-black p-6 text-center bg-gray-50 hover:bg-pink-100 transition-colors">
                  <input 
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden"
                    id="photo-upload"
                  />
                  <label htmlFor="photo-upload" className="cursor-pointer">
                    <div className="text-4xl mb-2">📷</div>
                    <p className="text-lg font-bold text-gray-600">Click to upload photos</p>
                    <p className="text-sm text-gray-500 mt-2">Multiple files allowed (JPG, PNG)</p>
                  </label>
                  {formData.photos.length > 0 && (
                    <div className="mt-4">
                      <p className="font-bold text-green-600">
                        {formData.photos.length} file(s) selected
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <button 
                onClick={handleSubmit}
                className="w-full bg-red-200 border-4 border-black p-6 shadow-[8px_8px_0px_0px_#000] active:shadow-[4px_4px_0px_0px_#000] active:translate-x-1 active:translate-y-1 transition-all hover:bg-red-300"
              >
                <div className="flex items-center justify-center space-x-3">
                  <span className="text-3xl">🚀</span>
                  <span className="text-2xl font-black text-gray-800">Submit Report</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ReportIncident;
