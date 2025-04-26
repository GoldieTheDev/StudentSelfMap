import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../stores/authStore';
import { GraduationCap } from 'lucide-react';
import { useThemeStore } from '../stores/themeStore';

const SignIn = () => {
  const [studentId, setStudentId] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const login = useAuthStore(state => state.login);
  const { language } = useThemeStore();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentId) {
      setError(language === 'en' ? 'Please enter your student ID/ Personal ID' : 'الرجاء إدخال الرقم الجامعي أو الهوية');
      return;
    }

    login(studentId, studentId);
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center p-4">
      <div className={`max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 space-y-6 ${language === 'ar' ? 'font-arabic' : ''}`}>
        <div className="text-center">
          <div className="inline-block p-3 rounded-full bg-purple-100 dark:bg-purple-900 mb-4">
            <GraduationCap size={32} className="text-purple-600 dark:text-purple-400" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            {language === 'en' ? 'Welcome to KSU Portal' : 'مرحباً بك في بوابة جامعة الملك سعود'}
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            {language === 'en' ? 'Sign in with your student ID/ Personal ID' : 'تسجيل الدخول باستخدام الرقم الجامعي أو الهوية'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="studentId" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              {language === 'en' ? 'Student ID/ Personal ID' : 'الرقم الجامعي أو الهوية'}
            </label>
            <input
              type="text"
              id="studentId"
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
              className="mt-1 block w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
              placeholder={language === 'en' ? 'Enter your student ID/ Personal ID' : 'أدخل الرقم الجامعي'}
              dir={language === 'ar' ? 'rtl' : 'ltr'}
            />
          </div>

          {error && (
            <p className="text-red-500 text-sm">{error}</p>
          )}

          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-3 px-4 rounded-lg hover:bg-purple-700 transition-colors duration-300 font-medium"
          >
            {language === 'en' ? 'Sign In' : 'تسجيل الدخول'}
          </button>
        </form>

        <div className="text-center text-sm text-gray-600 dark:text-gray-400">
          <p>{language === 'en' ? 'Need help? Contact the IT Support Center' : 'تحتاج مساعدة؟ تواصل مع مركز الدعم التقني'}</p>
          <p className="mt-1">+966-11-XXX-XXXX</p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;