import React, { useState } from 'react';
import { MapPin, Search } from 'lucide-react';

interface CampusMapProps {
  theme: string;
}

const CampusMap: React.FC<CampusMapProps> = ({ theme }) => {
  const [activeLocation, setActiveLocation] = useState<string | null>(null);

  // Mock campus locations
  const campusLocations = [
    { id: 'admin', name: 'Administration Building', description: 'Main administrative offices and services' },
    { id: 'science', name: 'Science Complex', description: 'Departments of Physics, Chemistry, and Biology' },
    { id: 'engineering', name: 'Engineering Buildings', description: 'College of Engineering facilities' },
    { id: 'business', name: 'Business School', description: 'College of Business Administration' },
    { id: 'library', name: 'Central Library', description: '24/7 study spaces and research collections' },
    { id: 'sports', name: 'Sports Center', description: 'Gymnasium, swimming pool, and sports fields' },
    { id: 'dorms', name: 'Student Dormitories', description: 'On-campus housing facilities' },
    { id: 'cafeteria', name: 'Main Cafeteria', description: 'Food court and dining options' }
  ];

  return (
    <div className="animate-slideUp">
      <h2 className={`text-2xl font-bold mb-6 flex items-center gap-2 ${theme === 'light' ? 'text-primary-600' : 'text-primary-400'}`}>
        <MapPin size={24} />
        <span>Campus Map</span>
      </h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 order-2 lg:order-1">
          <div className={`p-4 rounded-xl ${theme === 'light' ? 'bg-white shadow-md' : 'bg-gray-800 shadow-md'}`}>
            <div className="relative mb-4">
              <input
                type="text"
                placeholder="Search locations..."
                className={`
                  w-full pl-10 pr-4 py-3 rounded-lg transition-colors duration-300
                  focus:outline-none focus:ring-2 focus:ring-primary-500
                  ${theme === 'light' 
                    ? 'bg-gray-100 border border-gray-200 focus:bg-white' 
                    : 'bg-gray-700 border border-gray-600 focus:bg-gray-600'
                  }
                `}
              />
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>
            
            <div className="space-y-2 max-h-[400px] overflow-y-auto pr-2">
              {campusLocations.map(location => (
                <button
                  key={location.id}
                  onClick={() => setActiveLocation(location.id)}
                  className={`
                    w-full text-left p-3 rounded-lg transition-all duration-300
                    ${activeLocation === location.id 
                      ? `${theme === 'light' ? 'bg-primary-100 border-l-4 border-primary-500' : 'bg-primary-900/30 border-l-4 border-primary-500'}` 
                      : `hover:bg-${theme === 'light' ? 'gray-100' : 'gray-700'}`
                    }
                  `}
                >
                  <div className="flex items-start">
                    <MapPin 
                      size={18} 
                      className={`mt-0.5 mr-2 ${activeLocation === location.id ? 'text-primary-500' : 'text-gray-500'}`} 
                    />
                    <div>
                      <h3 className="font-medium">{location.name}</h3>
                      <p className={`text-sm ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
                        {location.description}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-2 order-1 lg:order-2">
          <div className={`
            relative rounded-xl overflow-hidden ${theme === 'light' ? 'shadow-md' : 'shadow-md shadow-gray-900/20'}
            aspect-[4/3] min-h-[400px] animate-fadeIn
          `}>
            {/* Placeholder for an actual map integration */}
            <div className={`
              absolute inset-0 flex items-center justify-center
              ${theme === 'light' ? 'bg-gray-200' : 'bg-gray-700'}
              text-center p-8
            `}>
              <div>
                <p className="text-lg mb-2">Interactive Campus Map</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  This is a placeholder for an interactive campus map that would be integrated with a mapping service.
                </p>
                {activeLocation && (
                  <div className={`
                    mt-4 py-3 px-4 rounded-lg animate-fadeIn
                    ${theme === 'light' ? 'bg-white shadow-md' : 'bg-gray-800 shadow-md'}
                  `}>
                    <p>
                      Selected location: <span className="font-medium">{campusLocations.find(l => l.id === activeLocation)?.name}</span>
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          <div className={`
            mt-4 p-4 rounded-xl transition-colors duration-500
            ${theme === 'light' ? 'bg-white shadow-md' : 'bg-gray-800 shadow-md shadow-gray-900/20'}
          `}>
            <h3 className="font-medium mb-2">Getting Around Campus</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
              <div className={`p-3 rounded-lg ${theme === 'light' ? 'bg-green-50' : 'bg-green-900/20'}`}>
                <div className="font-medium text-green-600 dark:text-green-400 mb-1">Shuttle Service</div>
                <p className={theme === 'light' ? 'text-gray-700' : 'text-gray-300'}>
                  Free campus shuttles every 15 minutes
                </p>
              </div>
              
              <div className={`p-3 rounded-lg ${theme === 'light' ? 'bg-blue-50' : 'bg-blue-900/20'}`}>
                <div className="font-medium text-blue-600 dark:text-blue-400 mb-1">Bike Sharing</div>
                <p className={theme === 'light' ? 'text-gray-700' : 'text-gray-300'}>
                  Over 20 stations across campus
                </p>
              </div>
              
              <div className={`p-3 rounded-lg ${theme === 'light' ? 'bg-amber-50' : 'bg-amber-900/20'}`}>
                <div className="font-medium text-amber-600 dark:text-amber-400 mb-1">Walking Paths</div>
                <p className={theme === 'light' ? 'text-gray-700' : 'text-gray-300'}>
                  Scenic routes connecting all buildings
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampusMap;