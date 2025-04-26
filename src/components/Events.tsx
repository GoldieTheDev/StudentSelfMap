import React, { useState } from 'react';
import { Calendar, MapPin, Clock, Users, Filter } from 'lucide-react';

interface EventsProps {
  theme: string;
  language: string;
}

const Events: React.FC<EventsProps> = ({ theme, language }) => {
  const [filter, setFilter] = useState('all');
  
  // Mock events data
  const eventsData = [
    { 
      id: 1, 
      title: 'AI Research Symposium', 
      date: '2025-02-15',
      time: '09:00 - 16:00',
      location: 'Conference Center, Hall A',
      type: 'academic',
      description: 'A day-long symposium featuring the latest research in artificial intelligence and machine learning.',
      image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    { 
      id: 2, 
      title: 'Annual Sports Tournament', 
      date: '2025-03-10',
      time: '10:00 - 18:00',
      location: 'University Stadium',
      type: 'sports',
      description: 'The annual inter-college sports tournament with competitions in football, basketball, and athletics.',
      image: 'https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    { 
      id: 3, 
      title: 'Cultural Festival', 
      date: '2025-04-05',
      time: '12:00 - 22:00',
      location: 'University Square',
      type: 'cultural',
      description: 'A celebration of diverse cultures with music, dance, food, and traditional performances.',
      image: 'https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    { 
      id: 4, 
      title: 'Career Fair 2025', 
      date: '2025-05-20',
      time: '10:00 - 16:00',
      location: 'Business School, Main Hall',
      type: 'career',
      description: 'Connect with over 50 companies and organizations offering internships and job opportunities.',
      image: 'https://images.pexels.com/photos/1181435/pexels-photo-1181435.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
  ];

  const filteredEvents = filter === 'all' 
    ? eventsData 
    : eventsData.filter(event => event.type === filter);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(language === 'en' ? 'en-US' : 'ar-SA', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="animate-slideUp">
      <h2 className={`text-2xl font-bold mb-6 flex items-center gap-2 ${theme === 'light' ? 'text-primary-600' : 'text-primary-400'}`}>
        <Calendar size={24} />
        <span>{language === 'en' ? 'University Events' : 'فعاليات الجامعة'}</span>
      </h2>
      
      <div className="mb-6 flex flex-wrap items-center gap-2">
        <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
          <Filter size={18} />
          <span className="text-sm">{language === 'en' ? 'Filter:' : 'تصفية:'}</span>
        </div>
        {['all', 'academic', 'sports', 'cultural', 'career'].map(filterType => (
          <button
            key={filterType}
            onClick={() => setFilter(filterType)}
            className={`
              px-3 py-1.5 rounded-full text-sm transition-all duration-300 capitalize
              ${filter === filterType 
                ? `bg-primary-500 text-white transform scale-105 shadow-sm` 
                : `bg-${theme === 'light' ? 'gray-200 hover:bg-gray-300' : 'gray-700 hover:bg-gray-600'}`
              }
            `}
          >
            {language === 'en' ? filterType : {
              'all': 'الكل',
              'academic': 'أكاديمي',
              'sports': 'رياضي',
              'cultural': 'ثقافي',
              'career': 'وظيفي'
            }[filterType]}
          </button>
        ))}
      </div>
      
      <div className="grid grid-cols-1 gap-6">
        {filteredEvents.map((event, index) => (
          <div 
            key={event.id}
            className={`
              rounded-xl overflow-hidden transition-all duration-500 animate-fadeIn hover:shadow-lg
              ${theme === 'light' ? 'bg-white shadow-md' : 'bg-gray-800 shadow-md shadow-gray-900/20'}
            `}
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <div className="flex flex-col md:flex-row">
              <div className="md:w-2/5 lg:w-1/3 relative overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-48 md:h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className={`
                  absolute top-3 left-3 px-2 py-1 rounded-full text-xs font-medium
                  ${event.type === 'academic' ? 'bg-blue-500' : 
                    event.type === 'sports' ? 'bg-green-500' : 
                    event.type === 'cultural' ? 'bg-purple-500' : 'bg-orange-500'} text-white
                `}>
                  {language === 'en' ? event.type : {
                    'academic': 'أكاديمي',
                    'sports': 'رياضي',
                    'cultural': 'ثقافي',
                    'career': 'وظيفي'
                  }[event.type]}
                </div>
              </div>
              <div className="md:w-3/5 lg:w-2/3 p-5">
                <h3 className="font-bold text-xl mb-2">{event.title}</h3>
                <p className="mb-4">{event.description}</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} className="text-primary-500" />
                    <span>{formatDate(event.date)}</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Clock size={16} className="text-primary-500" />
                    <span>{event.time}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 sm:col-span-2">
                    <MapPin size={16} className="text-primary-500" />
                    <span>{event.location}</span>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 flex justify-between">
                  <button className={`
                    px-4 py-2 rounded-md text-sm font-medium transition-all duration-300
                    ${theme === 'light'
                      ? 'bg-primary-500 text-white hover:bg-primary-600'
                      : 'bg-primary-600 text-white hover:bg-primary-700'
                    } hover:shadow-md hover:scale-105
                  `}>
                    {language === 'en' ? 'View Details' : 'عرض التفاصيل'}
                  </button>
                  
                  <button className={`
                    px-4 py-2 rounded-md text-sm font-medium transition-all duration-300
                    ${theme === 'light'
                      ? 'border border-primary-500 text-primary-500 hover:bg-primary-50'
                      : 'border border-primary-400 text-primary-400 hover:bg-gray-700'
                    } hover:shadow-md
                  `}>
                    {language === 'en' ? 'Add to Calendar' : 'إضافة إلى التقويم'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {filteredEvents.length === 0 && (
        <div className={`rounded-xl p-8 text-center ${theme === 'light' ? 'bg-white shadow-md' : 'bg-gray-800 shadow-md'}`}>
          <p className="text-gray-500 dark:text-gray-400">
            {language === 'en' 
              ? 'No events found for the selected category.' 
              : 'لم يتم العثور على فعاليات للفئة المحددة.'}
          </p>
        </div>
      )}
    </div>
  );
};

export default Events;