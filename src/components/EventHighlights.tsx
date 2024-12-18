
import { Code2, Download, UtensilsCrossed } from 'lucide-react';

const EventHighlights = () => {
  const handleDownloadPDF = () => {
    const pdfUrl = './public/Problem-Statement.pdf'; // Replace with the correct file path
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Problem-Statement.pdf'; // Set the file name for download
    link.click();
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <div className="inline-flex p-3 bg-purple-100 rounded-full mb-4">
          <Code2 className="h-6 w-6 text-purple-600" />
        </div>
        <h3 className="text-xl font-semibold mb-2">24 Hours of Coding</h3>
        <p className="text-gray-600">
          Push your limits in this intensive coding marathon
        </p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <div className="inline-flex p-3 bg-purple-100 rounded-full mb-4">
          <UtensilsCrossed className="h-6 w-6 text-purple-600" />
        </div>
        <h3 className="text-xl font-semibold mb-2">Meals Provided</h3>
        <p className="text-gray-600">
          Snacks and dinner will be provided to keep you energized
        </p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <div className="inline-flex p-3 bg-purple-100 rounded-full mb-4">
          <Download className="h-6 w-6 text-purple-600" />
        </div>
        <h3 className="text-xl font-semibold mb-2">Problem Statement</h3>
        <button className="text-purple-600 hover:text-purple-700 font-medium"
        onClick={handleDownloadPDF}>
          Download Problem Statement
        </button>
      </div>
    </div>
  );
};

export default EventHighlights;