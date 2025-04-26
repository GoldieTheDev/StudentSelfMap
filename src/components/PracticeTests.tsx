import React, { useState } from 'react';
import { BookOpen, Search, Clock } from 'lucide-react';
import { useThemeStore } from '../stores/themeStore';
import toast from 'react-hot-toast';

const PracticeTests = () => {
  const { theme, language } = useThemeStore();
  const [selectedSubject, setSelectedSubject] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const subjects = [
    { id: 'math', name: { en: 'PenTesting', ar: 'اختبار الاختراقات' } },
    { id: 'physics', name: { en: 'EH tools', ar: 'أدوات الإختراق' } },
    { id: 'chemistry', name: { en: 'Chemistry', ar: 'الكيمياء' } },
    { id: 'biology', name: { en: 'Biology', ar: 'الأحياء' } },
    { id: 'cs', name: { en: 'Computer Science', ar: 'علوم الحاسب' } }
  ];

  const handleGenerateTest = () => {
    if (!selectedSubject) {
      toast.error(language === 'en' ? 'Please select a subject' : 'الرجاء اختيار مادة');
      return;
    }
    toast.success(
      language === 'en' 
        ? 'Generating practice test...' 
        : 'جاري إنشاء الاختبار التجريبي...'
    );
  };

  const filteredSubjects = subjects.filter(subject => 
    subject.name[language].toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="animate-slideUp">
      <h2 className={`text-2xl font-bold mb-6 flex items-center gap-2 ${theme === 'light' ? 'text-primary-600' : 'text-primary-400'}`}>
        <BookOpen size={24} />
        <span>{language === 'en' ? 'Practice Tests' : 'الاختبارات التجريبية'}</span>
      </h2>

      <div className={`rounded-xl p-6 ${theme === 'light' ? 'bg-white' : 'bg-gray-800'} shadow-md`}>
        <div className="mb-6">
          <div className="relative">
            <input
              type="text"
              placeholder={language === 'en' ? 'Search subjects...' : 'البحث عن المواد...'}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`
                w-full pl-10 pr-4 py-3 rounded-lg transition-colors duration-300
                focus:outline-none focus:ring-2 focus:ring-primary-500
                ${theme === 'light' 
                  ? 'bg-gray-50 border border-gray-200' 
                  : 'bg-gray-700 border border-gray-600'
                }
              `}
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {filteredSubjects.map(subject => (
            <button
              key={subject.id}
              onClick={() => setSelectedSubject(subject.id)}
              className={`
                p-4 rounded-lg transition-all duration-300 text-left
                ${selectedSubject === subject.id
                  ? theme === 'light'
                    ? 'bg-primary-50 border-2 border-primary-500'
                    : 'bg-primary-900/30 border-2 border-primary-500'
                  : theme === 'light'
                    ? 'bg-gray-50 border border-gray-200 hover:bg-gray-100'
                    : 'bg-gray-700 border border-gray-600 hover:bg-gray-600'
                }
              `}
            >
              <h3 className="font-medium mb-2">{subject.name[language]}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {language === 'en' 
                  ? 'Generate practice questions based on your curriculum' 
                  : 'إنشاء أسئلة تدريبية بناءً على منهجك الدراسي'}
              </p>
            </button>
          ))}
        </div>

        {selectedSubject && (
          <div className={`
            p-4 rounded-lg mb-6
            ${theme === 'light' ? 'bg-gray-50' : 'bg-gray-700'}
          `}>
            <div className="flex items-center gap-2 mb-2">
              <Clock size={18} className="text-primary-500" />
              <span className="text-sm">
                {language === 'en' ? 'Estimated time: 30-45 minutes' : 'الوقت المقدر: 30-45 دقيقة'}
              </span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {language === 'en'
                ? 'This test will cover recent topics from your selected subject.'
                : 'سيغطي هذا الاختبار المواضيع الحديثة من المادة المختارة.'}
            </p>
          </div>
        )}

        <button
          onClick={handleGenerateTest}
          disabled={!selectedSubject}
          className={`
            w-full py-3 rounded-lg font-medium transition-all duration-300
            ${!selectedSubject
              ? 'bg-gray-300 dark:bg-gray-600 cursor-not-allowed'
              : theme === 'light'
                ? 'bg-primary-500 text-white hover:bg-primary-600'
                : 'bg-primary-600 text-white hover:bg-primary-700'
            }
          `}
        >
          {language === 'en' ? 'Generate Practice Test' : 'إنشاء اختبار تجريبي'}
        </button>
      </div>
    </div>
  );
};

export default PracticeTests;