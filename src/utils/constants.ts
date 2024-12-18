// Date and time constants
export const HACKATHON_DATE = new Date('2024-12-27T11:00:00');
export const REGISTRATION_DEADLINE = new Date('2024-12-23T23:59:59');

// Prize amounts
export const PRIZES = {
  FIRST: '₹20,000',
  SECOND: '₹15,000',
  THIRD: '₹10,000'
} as const;

// Event schedule
export const SCHEDULE = [
  {
    time: '11:00 AM',
    date: '27th December 2024',
    description: 'Hackathon Begins'
  },
  {
    time: '10:00 AM',
    date: '28th December 2024',
    description: 'Submission Deadline'
  },
  {
    time: '12:00 PM',
    date: '28th December 2024',
    description: 'Shortlisted Teams Announcement'
  },
  {
    time: '12:00 PM - 2:00 PM',
    date: '28th December 2024',
    description: 'Selected Teams Presentation'
  },
  {
    time: '3:00 PM',
    date: '28th December 2024',
    description: 'Winners Announcement'
  }
] as const;