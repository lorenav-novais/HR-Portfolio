import React, { useRef, useState, useEffect } from 'react';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import Services from './components/Services.tsx';
import Packages from './components/Packages.tsx';
import Info from './components/Info.tsx';
import FAQ from './components/FAQ.tsx';
import Footer from './components/Footer.tsx';
import EditModeToggle from './components/EditModeToggle.tsx';
import WhatsAppButton from './components/WhatsAppButton.tsx';

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
    <div className="bg-background min-h-screen text-text-main">
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