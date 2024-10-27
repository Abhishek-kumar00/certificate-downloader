import React from 'react';
import html2canvas from 'html2canvas';
// Import the images
import stripImage from './assets/images/strip.png';
import learningImage from './assets/images/Learning.png';
import signatureImage from './assets/images/signature-image.jpeg';

export default function Logo({ firstName, lastName, courseName, completeDate, durationDate }) {
  const downloadImage = () => {
    const element = document.getElementById('certificate-wrapper');

    html2canvas(element)
      .then((canvas) => {
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        link.download = 'certificate.png';
        link.click();
      })
      .catch((error) => {
        console.error('Error converting to image:', error);
      });
  };

  return (
    <div className="flex flex-col h-screen bg-white text-gray-800" id="certificate-wrapper">
      <div className="flex-grow w-full flex">
        {/* Left strip */}
        <div className="w-1/4 h-full">
          <img src={stripImage} alt="Linkedin-strip" className="h-full w-full object-cover" />
        </div>

        {/* Main content */}
        <div className="w-5/6 p-8 flex flex-col justify-between main-content">
          <div className="flex flex-col items-center">
            <div className="mb-8">
              <img src={learningImage} alt="linkedin-image" className="h-10 mr-72" />
            </div>
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold mb-11 mr-72">Certificate of Completion</h2>
              <h3 className="text-xl mr-72">Congratulations, {firstName} {lastName}</h3>
            </div>
            <div className="text-center mb-8 mr-72">
              <div className="text-base ">
                <h1 className="text-5xl font-semibold mb-2 text-gray-600 ">{courseName}</h1>
                <h3>Course completed on {completeDate} • {durationDate}</h3>
              </div>
            </div>
            <div className="text-center max-w-2xl mb-12 mr-72">
              <h2 className="text-base">
                By continuing to learn, you have expanded your perspective, sharpened your
                skills, and made yourself even more in demand.
              </h2>
            </div>
          </div>

          <div className="flex justify-between items-end">
            <div className="flex flex-col items-start">
              <img src={signatureImage} alt="Signature" className="h-16 mb-2" />
              <h3 className="text-base">VP, Learning Content at LinkedIn</h3>
            </div>
            <div className=" vl h-16 w-px bg-gray-300 mx-8"></div>
            <div className="text-right mr-64">
              <h3 className="text-sm">LinkedIn Learning</h3>
              <h3 className="text-sm">1000 W Maude Ave</h3>
              <h3 className="text-sm">Sunnyvale, CA 94085</h3>
            </div>
          </div>

          <div className="text-xs text-gray-500 mt-4 text-left">
            Certificate Id: AU6IZ5a5rPeUmO_IE6R60L6ac5sN
          </div>
        </div>
      </div>

      {/* Download button */}
      <br />
      <div className="w-full p-4 bg-gray-100">
        <button 
          onClick={downloadImage}
          className="w-full py-1 px-1 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        >
          Download Certificate
        </button>
      </div>
    </div>
  );
}