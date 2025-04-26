import { useEffect } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { useThemeStore } from '../stores/themeStore';
import { useNotificationStore } from '../stores/notificationStore';
import { useAuthStore } from '../stores/authStore';

const Notifications = () => {
  const { theme, language } = useThemeStore();
  const { notifications } = useNotificationStore();
  const { isAuthenticated } = useAuthStore();
  
  useEffect(() => {
    if (isAuthenticated) {
      notifications.forEach((notification) => {
        toast(notification.message[language], {
          duration: 5000,
          icon: notification.type === 'warning' ? '⚠️' : 'ℹ️',
          style: {
            background: theme === 'dark' ? '#374151' : '#fff',
            color: theme === 'dark' ? '#fff' : '#000',
            borderLeft: `4px solid ${notification.type === 'warning' ? '#f59e0b' : '#3b82f6'}`,
          },
        });
      });
    }
  }, [isAuthenticated, language]);
  
  return (
    <Toaster
      position="top-right"
      toastOptions={{
        style: {
          background: theme === 'dark' ? '#374151' : '#fff',
          color: theme === 'dark' ? '#fff' : '#000',
        },
      }}
    />
  );
};

export default Notifications;