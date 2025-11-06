// utils/getNextDays.js
export const getNextDays = (numDays = 7) => {
  const days = [];
  const today = new Date();

  for (let i = 0; i < numDays; i++) {
    const nextDay = new Date(today);
    nextDay.setDate(today.getDate() + i);

    const dayName = nextDay.toLocaleDateString('en-US', { weekday: 'short' });
    const date = nextDay.getDate();
    const month = nextDay.toLocaleDateString('en-US', { month: 'short' });
    const year = nextDay.getFullYear();

    days.push({ dayName, date, month, year });
  }
  return days;
};
