import React, { createContext, useState, useEffect } from 'react';
import toastEmitter from '../utils/toastEmitter';
import { toast } from 'react-toastify';

const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
  useEffect(() => {
    const handleToastEvent = (message, type = 'default') => {
      const toastConfig = { message, type };

      // Show toast with built-in dark theme and customize based on type
      switch (type) {
        case 'success':
          toast.success(message, {
            theme: 'dark',  // Enable dark theme for success toasts
            style: {
              backgroundColor: '#1E2938', // Dark green background
              color: 'white',
            },
          });
          break;
        case 'error':
          toast.error(message, {
            theme: 'dark',  // Enable dark theme for error toasts
            style: {
              backgroundColor: '#f44336', // Red background for error
              color: 'white',
            },
          });
          break;
        case 'info':
          toast.info(message, {
            theme: 'dark',  // Enable dark theme for info toasts
            style: {
              backgroundColor: '#2196f3', // Blue background
              color: 'white',
            },
          });
          break;
        case 'warning':
          toast.warning(message, {
            theme: 'dark',  // Enable dark theme for warning toasts
            style: {
              backgroundColor: '#ff9800', // Orange background
              color: 'white',
            },
          });
          break;
        default:
          toast(message, {
            theme: 'dark',  // Enable dark theme for default toast
            style: {
              backgroundColor: '#333', // Dark gray background
              color: 'white',
            },
          });
      }
    };

    // Subscribe to the event
    toastEmitter.on('toast', handleToastEvent);

    // Cleanup on unmount
    return () => {
      toastEmitter.off('toast', handleToastEvent);
    };
  }, []);

  return (
    <ToastContext.Provider value={{ notify: (message, type) => toastEmitter.emit('toast', message, type) }}>
      {children}
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  return {
    notify: (message, type) => {
      toastEmitter.emit('toast', message, type);
    },
  };
};
