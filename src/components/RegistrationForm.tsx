import React, { useState } from 'react';
import { AlertCircle } from 'lucide-react';
import { TeamMember, Team } from '../utils/types';
import { submitRegistration } from '../utils/api';
import { REGISTRATION_DEADLINE } from '../utils/constants';

const RegistrationForm = () => {
  const [teamName, setTeamName] = useState('');
  const [members, setMembers] = useState<TeamMember[]>(Array(6).fill({
    name: '',
    email: '',
    phone: '',
    school: 'SOT'
  }));
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage(null);

    // Validate team composition
    const sotMembers = members.filter(m => m.school === 'SOT');
    const somMembers = members.filter(m => m.school === 'SOM');

    if (sotMembers.length !== 5 || somMembers.length !== 1) {
      setMessage({
        type: 'error',
        text: 'Team must have exactly 5 SOT members and 1 SOM member.'
      });
      setIsSubmitting(false);
      return;
    }

    // Check registration deadline
    if (new Date() > REGISTRATION_DEADLINE) {
      setMessage({
        type: 'error',
        text: 'Registration deadline has passed.'
      });
      setIsSubmitting(false);
      return;
    }

    const team: Team = {
      teamName,
      members,
      registrationDate: new Date().toISOString()
    };

    const result = await submitRegistration(team);
    
    setMessage({
      type: result.success ? 'success' : 'error',
      text: result.message
    });
    
    if (result.success) {
      // Reset form on success
      setTeamName('');
      setMembers(Array(6).fill({
        name: '',
        email: '',
        phone: '',
        school: 'SOT'
      }));
    }
    
    setIsSubmitting(false);
  };

  const updateMember = (index: number, field: keyof TeamMember, value: string) => {
    const newMembers = [...members];
    newMembers[index] = { ...newMembers[index], [field]: value };
    setMembers(newMembers);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {message && (
        <div className={`p-4 rounded-lg ${
          message.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
        }`}>
          <p className="flex items-center gap-2">
            <AlertCircle className="h-5 w-5" />
            {message.text}
          </p>
        </div>
      )}

      <div>
        <label htmlFor="teamName" className="block text-sm font-medium text-gray-700">
          Team Name
        </label>
        <input
          type="text"
          id="teamName"
          value={teamName}
          onChange={(e) => setTeamName(e.target.value)}
          className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
          required
        />
      </div>

      <div className="space-y-4">
        {members.map((member, index) => (
          <div key={index} className="border rounded-lg p-4 bg-white">
            <h3 className="text-lg font-medium mb-2">
              Member {index + 1} ({index < 5 ? 'SOT' : 'SOM'})
            </h3>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  value={member.name}
                  onChange={(e) => updateMember(index, 'name', e.target.value)}
                  className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  value={member.email}
                  onChange={(e) => updateMember(index, 'email', e.target.value)}
                  className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone</label>
                <input
                  type="tel"
                  value={member.phone}
                  onChange={(e) => updateMember(index, 'phone', e.target.value)}
                  className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                  required
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      

      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full bg-purple-600 text-white py-3 px-6 rounded-lg transition-colors ${
          isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-purple-700'
        }`}
      >
        {isSubmitting ? 'Registering...' : 'Register Team'}
      </button>
    </form>
  );
};

export default RegistrationForm;