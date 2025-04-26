import React, { useState } from 'react';
import { HelpCircle, Send, CheckCircle } from 'lucide-react';

interface InquiriesProps {
  theme: string;
  language: string;
}

const Inquiries: React.FC<InquiriesProps> = ({ theme, language }) => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    studentId: '',
    department: '',
    subject: '',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const departments = [
    'Computer Science',
    'Engineering',
    'Business Administration',
    'Medical Sciences',
    'Arts & Humanities',
    'Law',
    'Education',
    'Sciences'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setFormSubmitted(true);
    }, 1500);
  };

  const departmentTranslations: Record<string, string> = {
    'Computer Science': 'علوم الحاسب',
    'Engineering': 'الهندسة',
    'Business Administration': 'إدارة الأعمال',
    'Medical Sciences': 'العلوم الطبية',
    'Arts & Humanities': 'الآداب والعلوم الإنسانية',
    'Law': 'القانون',
    'Education': 'التربية',
    'Sciences': 'العلوم'
  };

  if (formSubmitted) {
    return (
      <div className="animate-slideUp flex flex-col items-center text-center py-12">
        <div className={`
          rounded-full p-4 mb-6 animate-scaleIn
          ${theme === 'light' ? 'bg-green-100' : 'bg-green-900/30'}
        `}>
          <CheckCircle size={48} className="text-green-500" />
        </div>
        <h2 className="text-2xl font-bold mb-2">
          {language === 'en' ? 'Inquiry Submitted Successfully!' : 'تم إرسال الاستفسار بنجاح!'}
        </h2>
        <p className="mb-6 max-w-md text-gray-600 dark:text-gray-300">
          {language === 'en' 
            ? 'Thank you for your inquiry. A member of our team will respond to you shortly.' 
            : 'شكرا لاستفسارك. سيرد عليك أحد أعضاء فريقنا قريبًا.'}
        </p>
        <button 
          onClick={() => setFormSubmitted(false)}
          className={`
            px-5 py-2.5 rounded-lg transition-all duration-300
            ${theme === 'light'
              ? 'bg-primary-500 text-white hover:bg-primary-600'
              : 'bg-primary-600 text-white hover:bg-primary-700'
            } hover:shadow-md
          `}
        >
          {language === 'en' ? 'Submit Another Inquiry' : 'إرسال استفسار آخر'}
        </button>
      </div>
    );
  }

  return (
    <div className="animate-slideUp">
      <h2 className={`text-2xl font-bold mb-6 flex items-center gap-2 ${theme === 'light' ? 'text-primary-600' : 'text-primary-400'}`}>
        <HelpCircle size={24} />
        <span>{language === 'en' ? 'Submit an Inquiry' : 'إرسال استفسار'}</span>
      </h2>
      
      <div className={`rounded-xl p-6 transition-colors duration-500 ${theme === 'light' ? 'bg-white shadow-md' : 'bg-gray-800 shadow-md shadow-gray-900/20'}`}>
        <p className="mb-6 text-gray-600 dark:text-gray-300">
          {language === 'en' 
            ? 'Have a question? Fill out the form below to submit your inquiry to the appropriate department.' 
            : 'هل لديك سؤال؟ املأ النموذج أدناه لإرسال استفسارك إلى القسم المناسب.'}
        </p>
        
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 text-sm font-medium">
                {language === 'en' ? 'Full Name' : 'الاسم الكامل'} *
              </label>
              <input 
                type="text" 
                name="name"
                value={formState.name}
                onChange={handleChange}
                required
                className={`
                  w-full px-4 py-3 rounded-lg transition-colors duration-300
                  focus:outline-none focus:ring-2 focus:ring-primary-500
                  ${theme === 'light' 
                    ? 'bg-gray-50 border border-gray-300 focus:bg-white' 
                    : 'bg-gray-700 border border-gray-600 focus:bg-gray-600'
                  }
                `}
              />
            </div>
            
            <div>
              <label className="block mb-2 text-sm font-medium">
                {language === 'en' ? 'Email Address' : 'البريد الإلكتروني'} *
              </label>
              <input 
                type="email" 
                name="email"
                value={formState.email}
                onChange={handleChange}
                required
                className={`
                  w-full px-4 py-3 rounded-lg transition-colors duration-300
                  focus:outline-none focus:ring-2 focus:ring-primary-500
                  ${theme === 'light' 
                    ? 'bg-gray-50 border border-gray-300 focus:bg-white' 
                    : 'bg-gray-700 border border-gray-600 focus:bg-gray-600'
                  }
                `}
              />
            </div>
            
            <div>
              <label className="block mb-2 text-sm font-medium">
                {language === 'en' ? 'Student ID' : 'الرقم الجامعي'} *
              </label>
              <input 
                type="text" 
                name="studentId"
                value={formState.studentId}
                onChange={handleChange}
                required
                className={`
                  w-full px-4 py-3 rounded-lg transition-colors duration-300
                  focus:outline-none focus:ring-2 focus:ring-primary-500
                  ${theme === 'light' 
                    ? 'bg-gray-50 border border-gray-300 focus:bg-white' 
                    : 'bg-gray-700 border border-gray-600 focus:bg-gray-600'
                  }
                `}
              />
            </div>
            
            <div>
              <label className="block mb-2 text-sm font-medium">
                {language === 'en' ? 'Department' : 'القسم'} *
              </label>
              <select 
                name="department"
                value={formState.department}
                onChange={handleChange}
                required
                className={`
                  w-full px-4 py-3 rounded-lg transition-colors duration-300
                  focus:outline-none focus:ring-2 focus:ring-primary-500
                  ${theme === 'light' 
                    ? 'bg-gray-50 border border-gray-300 focus:bg-white' 
                    : 'bg-gray-700 border border-gray-600 focus:bg-gray-600'
                  }
                `}
              >
                <option value="">{language === 'en' ? '-- Select Department --' : '-- اختر القسم --'}</option>
                {departments.map(dept => (
                  <option key={dept} value={dept}>
                    {language === 'en' ? dept : departmentTranslations[dept]}
                  </option>
                ))}
              </select>
            </div>
            
            <div className="md:col-span-2">
              <label className="block mb-2 text-sm font-medium">
                {language === 'en' ? 'Subject' : 'الموضوع'} *
              </label>
              <input 
                type="text" 
                name="subject"
                value={formState.subject}
                onChange={handleChange}
                required
                className={`
                  w-full px-4 py-3 rounded-lg transition-colors duration-300
                  focus:outline-none focus:ring-2 focus:ring-primary-500
                  ${theme === 'light' 
                    ? 'bg-gray-50 border border-gray-300 focus:bg-white' 
                    : 'bg-gray-700 border border-gray-600 focus:bg-gray-600'
                  }
                `}
              />
            </div>
            
            <div className="md:col-span-2">
              <label className="block mb-2 text-sm font-medium">
                {language === 'en' ? 'Your Message' : 'رسالتك'} *
              </label>
              <textarea 
                name="message"
                value={formState.message}
                onChange={handleChange}
                required
                rows={5}
                className={`
                  w-full px-4 py-3 rounded-lg transition-colors duration-300
                  focus:outline-none focus:ring-2 focus:ring-primary-500
                  ${theme === 'light' 
                    ? 'bg-gray-50 border border-gray-300 focus:bg-white' 
                    : 'bg-gray-700 border border-gray-600 focus:bg-gray-600'
                  }
                `}
              ></textarea>
            </div>
          </div>
          
          <div className="mt-8">
            <button 
              type="submit"
              disabled={loading}
              className={`
                px-6 py-3 rounded-lg font-medium flex items-center justify-center min-w-[150px]
                transition-all duration-300 
                ${theme === 'light'
                  ? 'bg-primary-500 text-white hover:bg-primary-600'
                  : 'bg-primary-600 text-white hover:bg-primary-700'
                } hover:shadow-md hover:scale-105
                ${loading ? 'opacity-70 cursor-not-allowed' : ''}
              `}
            >
              {loading ? (
                <span className="inline-block h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span>
              ) : (
                <Send size={18} className="mr-2" />
              )}
              <span>
                {language === 'en' ? 'Submit Inquiry' : 'إرسال الاستفسار'}
              </span>
            </button>
          </div>
        </form>
      </div>
      
      <div className={`
        mt-6 rounded-xl p-5 transition-colors duration-500
        ${theme === 'light' ? 'bg-blue-50 border border-blue-100' : 'bg-blue-900/20 border border-blue-800/30'}
      `}>
        <h3 className={`font-medium flex items-center gap-2 ${theme === 'light' ? 'text-blue-700' : 'text-blue-400'}`}>
          <HelpCircle size={18} />
          <span>{language === 'en' ? 'Need Immediate Assistance?' : 'تحتاج مساعدة فورية؟'}</span>
        </h3>
        <p className="mt-2 text-sm">
          {language === 'en' 
            ? 'For urgent matters, please contact the Student Services Center at +966-11-XXX-XXXX or visit the Administration Building during working hours (8:00 AM - 4:00 PM).' 
            : 'للأمور العاجلة، يرجى الاتصال بمركز خدمات الطلاب على الرقم +966-11-XXX-XXXX أو زيارة مبنى الإدارة خلال ساعات العمل (8:00 صباحًا - 4:00 مساءً).'}
        </p>
      </div>
    </div>
  );
};

export default Inquiries;