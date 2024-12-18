
import { FileText, Download, CheckCircle } from 'lucide-react';

const RulesSection = () => {
  const rules = [
    'Teams must consist of 6 members (5 SOT + 1 SOM)',
    'All team members must be currently enrolled students',
    
    'Code plagiarism will result in immediate disqualification',
    'Teams must present their solution within the given time frame',
    'All code must be original and created during the hackathon'
  ];

  const handleDownload = () => {
    // In a real application, this would be a real PDF URL
    const brochureUrl = '#';
    window.open(brochureUrl, '_blank');
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          {/* <FileText className="h-6 w-6 text-purple-600" /> */}
          {/* <h3 className="text-2xl font-bold">Rules & Guidelines</h3> */}
        </div>
        {/* <button
          onClick={handleDownload}
          className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
        >
          <Download className="h-5 w-5" />
          Download Brochure
        </button> */}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {rules.map((rule, index) => (
          <div key={index} className="flex items-start gap-3">
            <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
            <p className="text-gray-700">{rule}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 bg-purple-50 p-4 rounded-lg">
        <p className="text-sm text-purple-700">
          For complete details and guidelines, please download the comprehensive brochure above.
        </p>
      </div>
    </div>
  );
};

export default RulesSection;