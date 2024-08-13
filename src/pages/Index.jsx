import React, { useRef, useEffect } from 'react';
import PortfolioCompany from '@/components/PortfolioCompany';
import { toPng } from 'html-to-image';

const portfolioCompanies = [
  {
    name: "Supermusic",
    logo: "assets/images/wordmark-master-4054x768.webp",
    description: "Music you won't hear anywhere else",
    link: "https://supermusic.ai/"
  },
  {
    name: "Motorica",
    logo: "assets/images/fulllogo-300x61.webp",
    description: "Generative AI for animation",
    link: "https://www.motorica.ai/"
  },
  // Add more portfolio companies here
];

const jointInvestments = [
  {
    name: "BotGuard",
    logo: "assets/images/01-botguard-logo-rgb-596x226.webp",
    description: "Protect your website in minutes",
    link: "https://botguard.net/"
  },
  // Add more joint investments here
];

const Index = () => {
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      toPng(contentRef.current)
        .then((dataUrl) => {
          console.log('Image generated successfully:', dataUrl);
        })
        .catch((error) => {
          console.error('Error generating image:', error);
        });
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <img src="assets/images/further-logo-black-1338x256.webp" alt="Further Logo" className="h-12" />
        </div>
      </header>

      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div ref={contentRef} className="border-4 border-dashed border-gray-200 rounded-lg p-4">
              <h2 className="text-2xl font-semibold text-center mb-4">With experience and commitment we take you further than capital!</h2>
              
              <section className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Portfolio companies</h3>
                <p className="text-sm text-gray-600 mb-4">Not a comprehensive list</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {portfolioCompanies.map((company, index) => (
                    <PortfolioCompany key={index} {...company} />
                  ))}
                </div>
              </section>

              <section className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Joint investments</h3>
                <p className="text-sm text-gray-600 mb-4">Through other vehicles</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {jointInvestments.map((investment, index) => (
                    <PortfolioCompany key={index} {...investment} />
                  ))}
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-4">Who are we?</h3>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
                  <div className="text-center">
                    <a href="https://www.linkedin.com/in/stefanlindeberg/" target="_blank" rel="noopener noreferrer">
                      <img src="path/to/linkedin-icon.svg" alt="LinkedIn" className="w-8 h-8 mx-auto mb-2" />
                    </a>
                    <h4 className="font-semibold">Stefan Lindeberg</h4>
                  </div>
                  <div className="text-center">
                    <a href="https://www.linkedin.com/in/perbjorklund/" target="_blank" rel="noopener noreferrer">
                      <img src="path/to/linkedin-icon.svg" alt="LinkedIn" className="w-8 h-8 mx-auto mb-2" />
                    </a>
                    <h4 className="font-semibold">Per Björklund</h4>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
