import { create } from 'zustand';

interface Notification {
  id: string;
  message: {
    en: string;
    ar: string;
  };
  type: 'info' | 'warning' | 'success';
}

interface NotificationState {
  notifications: Notification[];
  addNotification: (notification: Notification) => void;
  removeNotification: (id: string) => void;
}

export const useNotificationStore = create<NotificationState>((set) => ({
  notifications: [
    {
      id: '1',
      message: {
        en: "Hello! Just a reminder that you have a Mathematics midterm exam in 5 days. Make sure to prepare well!",
        ar: "مرحباً! تذكير بأن لديك اختبار منتصف الفصل في مادة الرياضيات خلال 5 أيام. تأكد من الاستعداد جيداً!"
      },
      type: 'warning'
    },
    {
      id: '2',
      message: {
        en: "Your Computer Science project deadline is approaching in 3 days. Don't forget to submit!",
        ar: "موعد تسليم مشروع علوم الحاسب يقترب خلال 3 أيام. لا تنسى التسليم!"
      },
      type: 'info'
    },
    {
      id: '3',
      message: {
        en: "Registration for next semester's courses starts next week. Plan your schedule!",
        ar: "يبدأ التسجيل لمقررات الفصل القادم الأسبوع المقبل. قم بتخطيط جدولك!"
      },
      type: 'info'
    }
  ],
  addNotification: (notification) =>
    set((state) => ({
      notifications: [...state.notifications, notification],
    })),
  removeNotification: (id) =>
    set((state) => ({
      notifications: state.notifications.filter((n) => n.id !== id),
    })),
}));