import { Team } from './types';

// In a real application, this would be an API endpoint
export const submitRegistration = async (team: Team): Promise<{ success: boolean; message: string }> => {
  try {
    // Store in localStorage for demo purposes
    // In production, this would be a POST request to your backend
    const existingTeams = JSON.parse(localStorage.getItem('registeredTeams') || '[]');
    
    // Check for duplicate team names
    if (existingTeams.some((t: Team) => t.teamName === team.teamName)) {
      return {
        success: false,
        message: 'Team name already exists. Please choose a different name.'
      };
    }

    // Check for duplicate email addresses
    const emails = team.members.map(member => member.email);
    const existingEmails = existingTeams.flatMap((t: Team) => t.members.map((m: any) => m.email));
    const duplicateEmail = emails.find(email => existingEmails.includes(email));
    
    if (duplicateEmail) {
      return {
        success: false,
        message: `Email ${duplicateEmail} is already registered with another team.`
      };
    }

    // Store the new team
    existingTeams.push(team);
    localStorage.setItem('registeredTeams', JSON.stringify(existingTeams));

    return {
      success: true,
      message: 'Team registration successful! You will receive a confirmation email shortly.'
    };
  } catch (error) {
    console.error('Registration error:', error);
    return {
      success: false,
      message: 'An error occurred during registration. Please try again.'
    };
  }
};