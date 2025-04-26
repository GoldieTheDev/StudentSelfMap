import React, { useState } from 'react';
import { Clock, Calendar } from 'lucide-react';

interface ScheduleProps {
  theme: string;
  language: string;
}

const Schedule: React.FC<ScheduleProps> = ({ theme, language }) => {
  const [selectedDay, setSelectedDay] = useState('monday');
  
  // Mock schedule data
  const scheduleDays = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];
  const scheduleData = {
    monday: [
      { time: '08:00 - 09:30', course: 'Mathematics 101', location: 'Building A, Room 302' },
      { time: '10:00 - 11:30', course: 'Physics Lab', location: 'Science Building, Lab 5' },
      { time: '12:30 - 14:00', course: 'English Literature', location: 'Arts Building, Room 210' },
    ],
    tuesday: [
      { time: '09:00 - 10:30', course: 'Computer Science', location: 'IT Building, Room 105' },
      { time: '11:00 - 12:30', course: 'History', location: 'Humanities Building, Room 401' },
    ],
    wednesday: [
      { time: '08:00 - 09:30', course: 'Mathematics 101', location: 'Building A, Room 302' },
      { time: '10:00 - 11:30', course: 'Chemistry', location: 'Science Building, Room 208' },
    ],
    thursday: [
      { time: '09:00 - 10:30', course: 'Computer Science', location: 'IT Building, Room 105' },
      { time: '11:00 - 12:30', course: 'Physics', location: 'Science Building, Room 301' },
      { time: '14:00 - 15:30', course: 'Art History', location: 'Arts Building, Room 112' },
    ],
    friday: [
      { time: '10:00 - 11:30', course: 'Research Seminar', location: 'Main Building, Room 501' },
    ],
  };

  return (
    <div className="animate-slideUp">
      <h2 className={`text-2xl font-bold mb-6 flex items-center gap-2 ${theme === 'light' ? 'text-primary-600' : 'text-primary-400'}`}>
        <Calendar size={24} />
        <span>{language === 'en' ? 'Class Schedule' : 'جدول الحصص'}</span>
      </h2>
      
      <div className="mb-6 flex flex-wrap gap-2">
        {scheduleDays.map(day => (
          <button
            key={day}
            onClick={() => setSelectedDay(day)}
            className={`
              px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 capitalize
              ${selectedDay === day 
                ? `bg-primary-500 text-white transform scale-105 shadow-md` 
                : `bg-${theme === 'light' ? 'gray-200 hover:bg-gray-300' : 'gray-700 hover:bg-gray-600'}`
              }
            `}
          >
            {language === 'en' ? day : {
              'monday': 'الإثنين',
              'tuesday': 'الثلاثاء',
              'wednesday': 'الأربعاء',
              'thursday': 'الخميس',
              'friday': 'الجمعة'
            }[day]}
          </button>
        ))}
      </div>
      
      <div className={`rounded-xl p-5 transition-colors duration-500 ${theme === 'light' ? 'bg-white shadow-md' : 'bg-gray-800 shadow-md shadow-gray-900/20'}`}>
        {scheduleData[selectedDay as keyof typeof scheduleData].length > 0 ? (
          <div className="divide-y divide-gray-200 dark:divide-gray-700">
            {scheduleData[selectedDay as keyof typeof scheduleData].map((item, index) => (
              <div 
                key={index} 
                className={`py-4 transition-all duration-300 hover:bg-${theme === 'light' ? 'gray-50' : 'gray-700/50'} rounded-lg px-3 animate-fadeIn`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <Clock size={18} className="text-primary-500" />
                    <span className="font-medium">{item.time}</span>
                  </div>
                  <div className="md:text-right">
                    <h3 className="font-semibold">{item.course}</h3>
                    <p className={`text-sm ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
                      {item.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-8 text-center">
            <p className="text-gray-500 dark:text-gray-400">
              {language === 'en' ? 'No classes scheduled for this day.' : 'لا توجد حصص مجدولة لهذا اليوم.'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Schedule;