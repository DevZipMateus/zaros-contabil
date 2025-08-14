
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Instagram, MessageCircle, Menu, X } from 'lucide-react';
import { useIsMobile } from '../../hooks/use-mobile';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/95 backdrop-blur-md shadow-sm py-3 border-b border-border' : 'bg-background py-4'}`}>
      {/* Top Bar with Contact Info and Social Media */}
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:justify-between items-center mb-4 md:mb-2">
          {/* Contact Information */}
          <div className="flex flex-col md:flex-row md:space-x-6 text-sm text-foreground/70 mb-2 md:mb-0 items-center font-body">
            <a href="mailto:juliana@zarosassessoriacontabil.com.br" className="flex items-center hover:text-primary transition-colors duration-300 mb-1 md:mb-0">
              <Mail size={16} className="mr-2" />
              juliana@zarosassessoriacontabil.com.br
            </a>
            <a href="tel:+5544999677837" className="flex items-center hover:text-primary transition-colors duration-300 whitespace-nowrap">
              <Phone size={16} className="mr-2" />
              (44) 99967-7837
            </a>
          </div>
          
          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a href="https://www.instagram.com/zarosassessoriacontabil?igsh=ZjloZnI2dGc4NmV0" 
               target="_blank" 
               rel="noopener noreferrer"
               className="text-foreground/60 hover:text-primary transition-colors duration-300">
              <Instagram size={18} />
            </a>
            <a href="https://wa.me/5544999677837" 
               target="_blank" 
               rel="noopener noreferrer"
               className="text-foreground/60 hover:text-primary transition-colors duration-300">
              <MessageCircle size={18} />
            </a>
          </div>
        </div>
        
        {/* Main Navigation */}
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-2xl font-brand font-bold text-primary transition-all duration-300 transform hover:scale-[1.02]">
            ZAROS
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            <Link to="/" className="nav-link">Início</Link>
            <a href="#about" className="nav-link">Sobre</a>
            <a href="#services" className="nav-link">Serviços</a>
            <a href="#plans" className="nav-link">Planos</a>
            <a href="#testimonials" className="nav-link">Depoimentos</a>
            <a href="#contact" className="nav-link">Contato</a>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-muted-foreground hover:text-primary focus:outline-none"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      <div className={`md:hidden ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden transition-all duration-300 ease-in-out bg-background`}>
        <div className="container-custom py-4 flex flex-col space-y-3 border-t border-border mt-4">
          <Link to="/" className="px-4 py-2 text-foreground hover:text-primary hover:bg-accent rounded-md transition-colors font-heading" onClick={toggleMobileMenu}>Início</Link>
          <a href="#about" className="px-4 py-2 text-foreground hover:text-primary hover:bg-accent rounded-md transition-colors font-heading" onClick={toggleMobileMenu}>Sobre</a>
          <a href="#services" className="px-4 py-2 text-foreground hover:text-primary hover:bg-accent rounded-md transition-colors font-heading" onClick={toggleMobileMenu}>Serviços</a>
          <a href="#plans" className="px-4 py-2 text-foreground hover:text-primary hover:bg-accent rounded-md transition-colors font-heading" onClick={toggleMobileMenu}>Planos</a>
          <a href="#testimonials" className="px-4 py-2 text-foreground hover:text-primary hover:bg-accent rounded-md transition-colors font-heading" onClick={toggleMobileMenu}>Depoimentos</a>
          <a href="#contact" className="px-4 py-2 text-foreground hover:text-primary hover:bg-accent rounded-md transition-colors font-heading" onClick={toggleMobileMenu}>Contato</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
