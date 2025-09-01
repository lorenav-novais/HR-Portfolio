import React, { useRef, useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Packages from './components/Packages';
import Info from './components/Info';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import EditModeToggle from './components/EditModeToggle';
import WhatsAppButton from './components/WhatsAppButton';

const App: React.FC = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const packagesRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);

  const [isEditing, setIsEditing] = useState(false);
  const [heroImage, setHeroImage] = useState('https://picsum.photos/id/1027/500/600');
  const [aboutImage, setAboutImage] = useState('https://images.pexels.com/photos/7176319/pexels-photo-7176319.jpeg?auto=compress&cs=tinysrgb&w=800');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('edit') === 'true') {
      setIsEditing(true);
    }

    const savedHeroImage = localStorage.getItem('heroImage');
    if (savedHeroImage) {
      setHeroImage(savedHeroImage);
    }

    const savedAboutImage = localStorage.getItem('aboutImage');
    if (savedAboutImage) {
      setAboutImage(savedAboutImage);
    }
  }, []);


  const handleScrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleHeroImageChange = (newImage: string) => {
    setHeroImage(newImage);
    localStorage.setItem('heroImage', newImage);
  };

  const handleAboutImageChange = (newImage: string) => {
    setAboutImage(newImage);
    localStorage.setItem('aboutImage', newImage);
  };

  const handleToggleEditing = () => {
    setIsEditing(prev => !prev);
  };

  return (
    <div className="bg-[#FEFBF9] min-h-screen text-[#4A4A4A]">
      <Header 
        aboutRef={aboutRef}
        servicesRef={servicesRef}
        packagesRef={packagesRef}
        contactRef={contactRef}
        faqRef={faqRef}
      />
      <main>
        <Hero 
          onScrollClick={handleScrollToServices} 
          imageUrl={heroImage}
          isEditing={isEditing}
          onImageChange={handleHeroImageChange}
        />
        <div ref={aboutRef}>
          <About 
            imageUrl={aboutImage}
            isEditing={isEditing}
            onImageChange={handleAboutImageChange}
          />
        </div>
        <Services ref={servicesRef} />
        <div ref={packagesRef}>
          <Packages />
        </div>
        <div ref={contactRef}>
          <Info />
        </div>
        <div ref={faqRef}>
          <FAQ />
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
      <EditModeToggle isEditing={isEditing} onToggle={handleToggleEditing} />
    </div>
  );
};

export default App;