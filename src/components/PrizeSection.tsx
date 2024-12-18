
import { Trophy } from 'lucide-react';
import { PRIZES } from '../utils/constants';

const PrizeSection = () => {
  const prizes = [
    { place: '1st', amount: PRIZES.FIRST, color: 'bg-amber-500' },
    { place: '2nd', amount: PRIZES.SECOND, color: 'bg-gray-400' },
    { place: '3rd', amount: PRIZES.THIRD, color: 'bg-amber-700' },
  ];

  return (
    <div className="space-y-6">
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
      
      <div className="text-center bg-purple-50 p-6 rounded-lg">
        <h4 className="text-xl font-semibold mb-2">Additional Recognition</h4>
        <p className="text-gray-700">
        Selected participants will get a chance to attend the IOI-sponsored 5-Day School of Startups Workshop in Noida—absolutely FREE!
        </p>
      </div>
    </div>
  );
};

export default PrizeSection;