import { Code2, Download, UtensilsCrossed } from 'lucide-react';

const EventHighlights = () => {
  const handleDownloadPDF = () => {
    const pdfUrl = 'https://docs.google.com/document/d/1YcRWtUqXy0ydjrxTsFZ9efO43pPoiWAcDsqH0G8mxFc/edit?usp=sharing';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Problem-Statement.pdf';
    link.click();
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center overflow-hidden">
        <div className="relative h-48 -mx-6 -mt-6 mb-4">
          <img 
            src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800"
            alt="Coding"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent"></div>
        </div>
        <div className="inline-flex p-3 bg-purple-100 rounded-full mb-4">
          <Code2 className="h-6 w-6 text-purple-600" />
        </div>
        <h3 className="text-xl font-semibold mb-2">24 Hours of Coding</h3>
        <p className="text-gray-600">
          Push your limits in this intensive coding marathon
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg text-center overflow-hidden">
        <div className="relative h-48 -mx-6 -mt-6 mb-4">
          <img 
            src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&q=80&w=800"
            alt="Food"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent"></div>
        </div>
        <div className="inline-flex p-3 bg-purple-100 rounded-full mb-4">
          <UtensilsCrossed className="h-6 w-6 text-purple-600" />
        </div>
        <h3 className="text-xl font-semibold mb-2">Meals Provided</h3>
        <p className="text-gray-600">
          Snacks and dinner will be provided to keep you energized
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg text-center overflow-hidden" id="event-details">
        <div className="relative h-48 -mx-6 -mt-6 mb-4">
          <img 
            src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=800"
            alt="Documents"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent"></div>
        </div>
        <div className="inline-flex p-3 bg-purple-100 rounded-full mb-4">
          <Download className="h-6 w-6 text-purple-600" />
        </div>
        <h3 className="text-xl font-semibold mb-2">Problem Statement</h3>
        <button 
          className="text-purple-600 hover:text-purple-700 font-medium transition-colors duration-200"
          onClick={handleDownloadPDF}
        >
          Download Problem Statement
        </button>
      </div>
    </div>
  );
};

export default EventHighlights;