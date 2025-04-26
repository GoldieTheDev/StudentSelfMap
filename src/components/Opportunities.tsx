import React from 'react';
import { Briefcase, ExternalLink } from 'lucide-react';

interface OpportunitiesProps {
  theme: string;
  language: string;
}

const Opportunities: React.FC<OpportunitiesProps> = ({ theme, language }) => {
  const opportunities = [
    {
      id: 1,
      title: { en: 'Summer Internship Program', ar: 'برنامج التدريب الصيفي' },
      company: { en: 'Saudi Aramco', ar: 'أرامكو السعودية' },
      location: { en: 'Dhahran, Saudi Arabia', ar: 'الظهران، المملكة العربية السعودية' },
      type: { en: 'Internship', ar: 'تدريب' },
      deadline: '2024-03-15',
      description: {
        en: 'Join our summer internship program and gain hands-on experience in the energy sector.',
        ar: 'انضم إلى برنامج التدريب الصيفي واكتسب خبرة عملية في قطاع الطاقة.'
      }
    },
    {
      id: 2,
      title: { en: 'Graduate Development Program', ar: 'برنامج تطوير الخريجين' },
      company: { en: 'SABIC', ar: 'سابك' },
      location: { en: 'Riyadh, Saudi Arabia', ar: 'الرياض، المملكة العربية السعودية' },
      type: { en: 'Full-time', ar: 'دوام كامل' },
      deadline: '2024-04-01',
      description: {
        en: 'Two-year rotational program designed for fresh graduates in engineering and technical fields.',
        ar: 'برنامج تدريبي لمدة عامين مصمم للخريجين الجدد في المجالات الهندسية والتقنية.'
      }
    },
    {
      id: 3,
      title: { en: 'Research Assistant Position', ar: 'وظيفة مساعد باحث' },
      company: { en: 'KAUST', ar: 'جامعة الملك عبدالله للعلوم والتقنية' },
      location: { en: 'Thuwal, Saudi Arabia', ar: 'ثول، المملكة العربية السعودية' },
      type: { en: 'Research', ar: 'بحث' },
      deadline: '2024-03-30',
      description: {
        en: 'Join cutting-edge research projects in artificial intelligence and machine learning.',
        ar: 'انضم إلى مشاريع بحثية متطورة في مجال الذكاء الاصطناعي وتعلم الآلة.'
      }
    }
  ];

  return (
    <div className="animate-slideUp">
      <h2 className={`text-2xl font-bold mb-6 flex items-center gap-2 ${theme === 'light' ? 'text-primary-600' : 'text-primary-400'}`}>
        <Briefcase size={24} />
        <span>{language === 'en' ? 'External Opportunities' : 'الفرص الخارجية'}</span>
      </h2>

      <div className="grid grid-cols-1 gap-6">
        {opportunities.map((opportunity) => (
          <div
            key={opportunity.id}
            className={`
              rounded-xl overflow-hidden transition-all duration-500
              ${theme === 'light' ? 'bg-white shadow-md' : 'bg-gray-800 shadow-md'}
            `}
          >
            <div className="p-6">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    {opportunity.title[language]}
                  </h3>
                  <p className="text-primary-600 dark:text-primary-400 font-medium">
                    {opportunity.company[language]}
                  </p>
                </div>
                <div className={`
                  px-4 py-2 rounded-full text-sm font-medium
                  ${theme === 'light' ? 'bg-primary-50 text-primary-700' : 'bg-primary-900/30 text-primary-400'}
                `}>
                  {opportunity.type[language]}
                </div>
              </div>

              <div className="mt-4 space-y-3">
                <p className="text-gray-600 dark:text-gray-300">
                  {opportunity.description[language]}
                </p>
                
                <div className="flex flex-wrap gap-4 text-sm">
                  <span className="text-gray-600 dark:text-gray-400">
                    📍 {opportunity.location[language]}
                  </span>
                  <span className="text-gray-600 dark:text-gray-400">
                    📅 {language === 'en' ? 'Deadline: ' : 'الموعد النهائي: '}
                    {new Date(opportunity.deadline).toLocaleDateString(language === 'en' ? 'en-US' : 'ar-SA')}
                  </span>
                </div>
              </div>

              <div className="mt-6 flex gap-4">
                <button className={`
                  px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-medium transition-all duration-300
                  ${theme === 'light'
                    ? 'bg-primary-500 text-white hover:bg-primary-600'
                    : 'bg-primary-600 text-white hover:bg-primary-700'
                  }
                `}>
                  {language === 'en' ? 'Apply Now' : 'تقدم الآن'}
                  <ExternalLink size={16} />
                </button>
                
                <button className={`
                  px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300
                  ${theme === 'light'
                    ? 'border border-primary-500 text-primary-500 hover:bg-primary-50'
                    : 'border border-primary-400 text-primary-400 hover:bg-gray-700'
                  }
                `}>
                  {language === 'en' ? 'Learn More' : 'اعرف المزيد'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Opportunities;