// utils/dateUtils.js
export const parseDate = (dateString, fallback = new Date()) => {
    try {
      const date = new Date(dateString);
      if (isNaN(date.getTime())) throw new Error('Invalid Date');
      return date;
    } catch (error) {
      console.warn(`Invalid date string "${dateString}" - using fallback`, error);
      return fallback;
    }
  };
  