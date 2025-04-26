import React, { useState } from 'react';
import { Users, Search, Mail, Phone } from 'lucide-react';

interface SupportProps {
  theme: string;
  language: string;
}

const Support: React.FC<SupportProps> = ({ theme, language }) => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Mock mentors data
  const mentorsData = [
    { 
      id: 1, 
      name: 'Dr. Ahmed Hassan', 
      department: 'Computer Science', 
      email: 'ahmed.h@ksu.edu',
      phone: '+966 11 123 4567',
      officeHours: 'Monday & Wednesday: 10:00 - 12:00',
      imageUrl: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    { 
      id: 2, 
      name: 'Dr. Sarah Johnson', 
      department: 'Mathematics', 
      email: 'sarah.j@ksu.edu',
      phone: '+966 11 123 4568',
      officeHours: 'Tuesday & Thursday: 13:00 - 15:00',
      imageUrl: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    { 
      id: 3, 
      name: 'Prof. Mohammed Al-Qahtani', 
      department: 'Physics', 
      email: 'mohammed.q@ksu.edu',
      phone: '+966 11 123 4569',
      officeHours: 'Sunday & Tuesday: 09:00 - 11:00',
      imageUrl: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    { 
      id: 4, 
      name: 'Dr. Fatima Al-Sulaiman', 
      department: 'Engineering', 
      email: 'fatima.s@ksu.edu',
      phone: '+966 11 123 4570',
      officeHours: 'Monday & Wednesday: 14:00 - 16:00',
      imageUrl: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
  ];

  const filteredMentors = mentorsData.filter(mentor => 
    mentor.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    mentor.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="animate-slideUp">
      <h2 className={`text-2xl font-bold mb-6 flex items-center gap-2 ${theme === 'light' ? 'text-primary-600' : 'text-primary-400'}`}>
        <Users size={24} />
        <span>{language === 'en' ? 'Academic Support' : 'الدعم الأكاديمي'}</span>
      </h2>
      
      <div className={`mb-6 relative ${theme === 'light' ? 'text-gray-800' : 'text-gray-200'}`}>
        <input
          type="text"
          placeholder={language === 'en' ? 'Search for mentors or departments...' : 'البحث عن مرشدين أو أقسام...'}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={`
            w-full pl-10 pr-4 py-3 rounded-lg transition-colors duration-300
            focus:outline-none focus:ring-2 focus:ring-primary-500
            ${theme === 'light' 
              ? 'bg-white border border-gray-300 focus:bg-gray-50' 
              : 'bg-gray-800 border border-gray-700 focus:bg-gray-700'
            }
          `}
        />
        <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredMentors.map((mentor, index) => (
          <div 
            key={mentor.id}
            className={`
              rounded-xl overflow-hidden transition-all duration-500 animate-fadeIn hover:shadow-lg
              ${theme === 'light' ? 'bg-white shadow-md' : 'bg-gray-800 shadow-md shadow-gray-900/20'}
            `}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex flex-col sm:flex-row">
              <div className="sm:w-1/3">
                <img 
                  src={mentor.imageUrl} 
                  alt={mentor.name} 
                  className="w-full h-48 sm:h-full object-cover"
                />
              </div>
              <div className="sm:w-2/3 p-5">
                <h3 className="font-bold text-lg mb-1">{mentor.name}</h3>
                <p className={`text-sm mb-3 ${theme === 'light' ? 'text-primary-600' : 'text-primary-400'} font-medium`}>
                  {mentor.department}
                </p>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Mail size={16} className="text-gray-500" />
                    <a href={`mailto:${mentor.email}`} className="text-sm hover:underline">
                      {mentor.email}
                    </a>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Phone size={16} className="text-gray-500" />
                    <a href={`tel:${mentor.phone.replace(/\s+/g, '')}`} className="text-sm hover:underline">
                      {mentor.phone}
                    </a>
                  </div>
                  
                  <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
                    <p className="text-sm font-medium">{language === 'en' ? 'Office Hours:' : 'ساعات المكتب:'}</p>
                    <p className="text-sm mt-1">{mentor.officeHours}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {filteredMentors.length === 0 && (
        <div className={`rounded-xl p-8 text-center ${theme === 'light' ? 'bg-white shadow-md' : 'bg-gray-800 shadow-md'}`}>
          <p className="text-gray-500 dark:text-gray-400">
            {language === 'en' 
              ? 'No mentors found matching your search criteria.' 
              : 'لم يتم العثور على مرشدين مطابقين لمعايير البحث الخاصة بك.'}
          </p>
        </div>
      )}
    </div>
  );
};

export default Support;