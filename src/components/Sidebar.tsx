import React from 'react';
import { Calendar, Users, GraduationCap, Map, HelpCircle, BookOpen, Calendar as CalendarIcon, Briefcase } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useThemeStore } from '../stores/themeStore';

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { language } = useThemeStore();

  const menuItems = [
    { 
      id: 'dashboard', 
      icon: <GraduationCap size={20} />, 
      label: language === 'en' ? 'Dashboard' : 'الرئيسية'
    },
    { 
      id: 'student-type',
      icon: <Users size={20} />,
      label: language === 'en' ? 'Student Type' : 'نوع الطالب',
      subItems: [
        { id: 'saudi', label: language === 'en' ? 'Saudi Student' : 'طالب سعودي' },
        { id: 'international', label: language === 'en' ? 'International Student' : 'طالب دولي' }
      ]
    },
    { 
      id: 'academic-counseling',
      icon: <BookOpen size={20} />,
      label: language === 'en' ? 'Academic Counseling' : 'الإرشاد الأكاديمي',
      subItems: [
        { id: 'schedule', label: language === 'en' ? 'Course Schedule' : 'جدول المقررات' },
        { id: 'practice-tests', label: language === 'en' ? 'Practice Tests' : 'اختبارات تجريبية' }
      ]
    },
    { 
      id: 'booking', 
      icon: <CalendarIcon size={20} />, 
      label: language === 'en' ? 'Book a Session' : 'حجز جلسة',
      subItems: [
        { id: 'advisor', label: language === 'en' ? 'Academic Advisor' : 'المرشد الأكاديمي' },
        { id: 'therapist', label: language === 'en' ? 'University Therapist' : 'المعالج النفسي' }
      ]
    },
    { 
      id: 'opportunities', 
      icon: <Briefcase size={20} />, 
      label: language === 'en' ? 'Opportunities' : 'الفرص الخارجية'
    },
    { 
      id: 'map', 
      icon: <Map size={20} />, 
      label: language === 'en' ? 'Campus Map' : 'خريطة الحرم الجامعي'
    },
    { 
      id: 'help', 
      icon: <HelpCircle size={20} />, 
      label: language === 'en' ? 'Help & Support' : 'المساعدة والدعم'
    }
  ];

  const isActive = (path: string) => location.pathname.includes(path);

  return (
    <nav className={`w-64 bg-white dark:bg-gray-800 shadow-md min-h-screen`}>
      <div className="py-6">
        {menuItems.map((item) => (
          <div key={item.id} className="px-3 mb-2">
            <button
              className={`
                w-full text-right px-4 py-3 rounded-lg transition-colors duration-200 
                flex items-center gap-3
                ${isActive(item.id)
                  ? 'bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400'
                  : 'hover:bg-purple-50 dark:hover:bg-gray-700'
                }
              `}
              onClick={() => navigate(`/${item.id}`)}
            >
              <span className={`
                ${isActive(item.id)
                  ? 'text-purple-600 dark:text-purple-400'
                  : 'text-gray-500 dark:text-gray-400'
                }
              `}>
                {item.icon}
              </span>
              <span className="font-medium">{item.label}</span>
            </button>
            {item.subItems && (
              <div className="mt-1 mr-4 space-y-1">
                {item.subItems.map((subItem) => (
                  <button
                    key={subItem.id}
                    className={`
                      w-full text-right px-4 py-2 text-sm rounded-md transition-colors duration-200
                      ${isActive(`${item.id}/${subItem.id}`)
                        ? 'text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/20'
                        : 'text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-50/50 dark:hover:bg-gray-700/50'
                      }
                    `}
                    onClick={() => navigate(`/${item.id}/${subItem.id}`)}
                  >
                    {subItem.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Sidebar;