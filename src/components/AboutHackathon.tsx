import React from 'react';
import { Calendar, Clock, MapPin, Users, Trophy, AlertCircle } from 'lucide-react';
import { SCHEDULE } from '../utils/constants';

const TimelineEvent = ({ time, date, description }: { time: string; date: string; description: string }) => (
  <div className="flex gap-4 items-start">
    <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-2 rounded-full shadow-md">
      <Clock className="h-5 w-5 text-white" />
    </div>
    <div>
      <div className="font-semibold text-gray-900">{time}</div>
      <div className="text-sm text-gray-600">{date}</div>
      <div className="text-gray-700">{description}</div>
    </div>
  </div>
);

const AboutHackathon = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 lg:p-12">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
        About the Hackathon
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column - Key Details */}
        <div className="space-y-8">
          <div className="flex items-start gap-4">
            <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-2 rounded-full shadow-md">
              <Calendar className="h-6 w-6 text-white" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">Event Date</h4>
              <p className="text-gray-700">27th December 2024</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-2 rounded-full shadow-md">
              <MapPin className="h-6 w-6 text-white" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">Venue</h4>
              <p className="text-gray-700">PW Institute of Innovation Campus</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-2 rounded-full shadow-md">
              <Users className="h-6 w-6 text-white" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">Team Composition</h4>
              <ul className="text-gray-700 list-disc list-inside">
                <li>5 Students from SOT</li>
                <li>1 Student from SOM</li>
                <li>Faculty mentor assigned to each team</li>
              </ul>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-2 rounded-full shadow-md">
              <Trophy className="h-6 w-6 text-white" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">Contact Information</h4>
              <p className="text-gray-700">For queries, reach out to:</p>
              <ul className="text-gray-700 list-disc list-inside">
                <li>himanshu.shekhar@pw.live</li>
                <li>raghav.gupta@pw.live</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Column - Timeline */}
        <div className="space-y-8">
          <h4 className="text-lg font-semibold text-gray-900">Event Timeline</h4>
          {SCHEDULE.map((event, index) => (
            <TimelineEvent
              key={index}
              time={event.time}
              date={event.date}
              description={event.description}
            />
          ))}
        </div>
      </div>

      {/* Alert Section */}
      <div className="mt-10 flex items-start gap-4 bg-amber-100 border-l-4 border-amber-500 p-4 rounded-lg">
        <AlertCircle className="h-6 w-6 text-amber-600 flex-shrink-0" />
        <p className="text-sm text-amber-800">
          The problem statement will be released on-site during the event. Teams must register by
          <strong> 24th December 2024</strong> to participate.
        </p>
      </div>
    </div>
  );
};

export default AboutHackathon;
