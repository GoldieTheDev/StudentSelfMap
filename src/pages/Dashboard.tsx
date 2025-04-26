import React from 'react';
import { useParams } from 'react-router-dom';
import { useAuthStore } from '../stores/authStore';
import { useThemeStore } from '../stores/themeStore';
import { Book, Clock, Bell } from 'lucide-react';

const Dashboard = () => {
  const { type } = useParams<{ type?: string }>();
  const { studentId, username } = useAuthStore();
  const { language } = useThemeStore();

  const internationalSteps = [
    'الحصول على رقم جامعي من عمادة القبول والتسجيل',
    'الحصول على هوية المقيم',
    'الحصول على رقم هاتف سعودي',
    'التسجيل في نظام سبل والعنوان الوطني وتوكلنا ونفاذ',
    'الحصول على حساب بنكي',
    'الدخول البوابة الرئيسية للتسجيل رقم الحساب البنكي ورقم الهاتف السعودي (إذا كنت طالب منحة دولية يمكنك إدخال هذه البيانات لنظام سبل)',
    'التسجيل للمقررات الفصلية عن طريق البوابة الرئيسية لجامعة الملك سعود'
  ];

  const studentInfo = {
    major: 'Computer Science',
    gpa: '3.85',
    completedHours: '95',
    currentSemester: '7th',
    advisor: 'Dr. Mohammed Al-Rashid',
    upcomingAssignments: [
      { id: 1, course: 'CS 380', title: 'Neural Networks Project', dueDate: '2024-02-20' },
      { id: 2, course: 'CS 340', title: 'Database Design', dueDate: '2024-02-22' },
    ],
    currentCourses: [
      { code: 'CS 380', name: 'Artificial Intelligence', grade: 'A' },
      { code: 'CS 340', name: 'Database Systems', grade: 'A-' },
      { code: 'CS 360', name: 'Software Engineering', grade: 'B+' },
    ]
  };

  if (type === 'international') {
    return (
      <div className="p-6 space-y-6 animate-fadeIn">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
          <h2 className="text-2xl font-bold mb-6">
            {language === 'en' ? 'International Student Requirements' : 'متطلبات الطلاب الدوليين'}
          </h2>
          <div className="space-y-4">
            {internationalSteps.map((step, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 p-4 rounded-lg bg-gray-50 dark:bg-gray-700"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center text-primary-600 dark:text-primary-400 font-medium">
                  {index + 1}
                </div>
                <p className="text-right font-arabic">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6 animate-fadeIn">
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
        <div className="flex items-center space-x-4">
          <div className="w-20 h-20 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
            <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">
              {username?.[0].toUpperCase()}
            </span>
          </div>
          <div>
            <h1 className="text-2xl font-bold">
              {language === 'en' ? `Welcome, ${username}` : `مرحباً، ${username}`}
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              {language === 'en' ? `Student ID: ${studentId}` : `الرقم الجامعي: ${studentId}`}
            </p>
            <p className="text-purple-600 dark:text-purple-400 font-medium">
              {language === 'en' ? studentInfo.major : 'علوم الحاسب'}
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Book className="text-purple-600 dark:text-purple-400" />
            {language === 'en' ? 'Academic Progress' : 'التقدم الأكاديمي'}
          </h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600 dark:text-gray-400">
                {language === 'en' ? 'GPA' : 'المعدل التراكمي'}
              </span>
              <span className="font-bold text-purple-600 dark:text-purple-400">{studentInfo.gpa}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600 dark:text-gray-400">
                {language === 'en' ? 'Completed Hours' : 'الساعات المكتملة'}
              </span>
              <span className="font-bold">{studentInfo.completedHours}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600 dark:text-gray-400">
                {language === 'en' ? 'Current Semester' : 'الفصل الحالي'}
              </span>
              <span className="font-bold">{studentInfo.currentSemester}</span>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Clock className="text-purple-600 dark:text-purple-400" />
            {language === 'en' ? 'Current Courses' : 'المقررات الحالية'}
          </h2>
          <div className="space-y-3">
            {studentInfo.currentCourses.map(course => (
              <div key={course.code} className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div>
                  <p className="font-medium">{course.code}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{course.name}</p>
                </div>
                <span className="font-bold text-purple-600 dark:text-purple-400">{course.grade}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md md:col-span-2">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Bell className="text-purple-600 dark:text-purple-400" />
            {language === 'en' ? 'Upcoming Assignments' : 'الواجبات القادمة'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {studentInfo.upcomingAssignments.map(assignment => (
              <div key={assignment.id} className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-medium">{assignment.course}</p>
                    <p className="text-gray-600 dark:text-gray-400">{assignment.title}</p>
                  </div>
                  <span className="text-sm text-purple-600 dark:text-purple-400 font-medium">
                    {language === 'en' ? 'Due: ' : 'تاريخ التسليم: '}
                    {new Date(assignment.dueDate).toLocaleDateString()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;