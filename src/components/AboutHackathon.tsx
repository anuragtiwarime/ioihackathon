import React from 'react';
import { Calendar, Clock, MapPin, Users, Trophy, AlertCircle } from 'lucide-react';
import { SCHEDULE } from '../utils/constants';

const TimelineEvent = ({ time, date, description }: { time: string; date: string; description: string }) => (
  <div className="flex gap-4 items-start">
    <div className="bg-purple-100 p-2 rounded-full">
      <Clock className="h-5 w-5 text-purple-600" />
    </div>
    <div>
      <div className="font-semibold">{time}</div>
      <div className="text-sm text-gray-600">{date}</div>
      <div className="text-gray-700">{description}</div>
    </div>
  </div>
);

const AboutHackathon = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column - Key Details */}
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="bg-purple-100 p-2 rounded-full">
              <Calendar className="h-5 w-5 text-purple-600" />
            </div>
            <div>
              <h4 className="font-semibold">Event Date</h4>
              <p className="text-gray-700">27th December 2024</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-purple-100 p-2 rounded-full">
              <MapPin className="h-5 w-5 text-purple-600" />
            </div>
            <div>
              <h4 className="font-semibold">Venue</h4>
              <p className="text-gray-700">PW Institute of Innovation Campus</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-purple-100 p-2 rounded-full">
              <Users className="h-5 w-5 text-purple-600" />
            </div>
            <div>
              <h4 className="font-semibold">Team Composition</h4>
              <ul className="text-gray-700 list-disc list-inside">
                <li>5 Students from SOT</li>
                <li>1 Student from SOM</li>
                <li>Faculty mentor assigned to each team</li>
              </ul>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-purple-100 p-2 rounded-full">
              <Trophy className="h-5 w-5 text-purple-600" />
            </div>
            <div>
              <h4 className="font-semibold">Contact Information</h4>
              <p className="text-gray-700">For queries, reach out to:</p>
              <ul className="text-gray-700 list-disc list-inside">
                <li>Himanshu Sir</li>
                <li>Raghav Sir</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Column - Timeline */}
        <div className="space-y-6">
          {/* <h4 className="font-semibold text-lg mb-4">Event Timeline</h4> */}
          
          {SCHEDULE.map((event, index) => (
            <TimelineEvent
              key={index}
              time={event.time}
              date={event.date}
              description={event.description}
            />
          ))}

          <div className="mt-6 flex items-start gap-4 bg-amber-50 p-4 rounded-lg">
            <AlertCircle className="h-5 w-5 text-amber-600 flex-shrink-0" />
            <p className="text-sm text-amber-700">
              The problem statement will be released on-site during the event. Teams must register by
              23rd December 2024 to participate.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHackathon;