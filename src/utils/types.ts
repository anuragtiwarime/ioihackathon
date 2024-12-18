export type TeamMember = {
  name: string;
  email: string;
  phone: string;
  school: 'SOT' | 'SOM';
};

export type Team = {
  teamName: string;
  members: TeamMember[];
  registrationDate: string;
};