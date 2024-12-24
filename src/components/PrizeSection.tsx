import { Trophy } from 'lucide-react';
import { PRIZES } from '../utils/constants';

const PrizeSection = () => {
  const prizes = [
    { place: '1st', amount: PRIZES.FIRST, color: 'bg-amber-500' },
    { place: '2nd', amount: PRIZES.SECOND, color: 'bg-gray-400' },
    { place: '3rd', amount: PRIZES.THIRD, color: 'bg-amber-700' },
  ];

  return (
    <div className="space-y-8">
      {/* Prizes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {prizes.map((prize) => (
          <div
            key={prize.place}
            className="bg-white rounded-lg p-6 text-center shadow-lg transform hover:scale-105 transition-transform"
          >
            <div className={`inline-flex p-3 rounded-full ${prize.color} text-white mb-4`}>
              <Trophy className="h-8 w-8" />
            </div>
            <h3 className="text-2xl font-bold mb-2">{prize.place} Prize</h3>
            <p className="text-3xl font-bold text-purple-600">{prize.amount}</p>
            <p className="text-gray-700">(Amazon Voucher)</p>
          </div>
        ))}
      </div>

      {/* Additional Recognition Section */}
      <div className="relative bg-gradient-to-r from-purple-500 to-purple-600 p-8 rounded-lg shadow-lg text-center">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-white to-purple-50 opacity-20 rounded-lg pointer-events-none"></div>
        <h4 className="text-2xl font-semibold text-white mb-3">Additional Recognition</h4>
        <p className="text-lg text-purple-50 mb-4">
          Selected participants will get a chance to attend the <span className="font-bold">IOI-sponsored 5-Day School of Startups Workshop</span> in Noida—
          <span className="font-extrabold text-yellow-300"> absolutely FREE!</span>
        </p>
        
      </div>
    </div>
  );
};

export default PrizeSection;
