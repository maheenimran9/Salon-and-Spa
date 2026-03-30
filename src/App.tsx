/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Scissors, 
  Sparkles, 
  Leaf, 
  Wind, 
  Droplets, 
  Clock, 
  MapPin, 
  Phone, 
  Instagram, 
  Facebook, 
  Twitter,
  Menu,
  X,
  ChevronRight,
  Calendar,
  Coffee,
  CheckCircle2,
  Mail,
  Send,
  Plus,
  Minus,
  Star,
  User,
  ShieldCheck,
  Cloud,
  FlaskConical,
  Thermometer,
  Palette,
  Shirt,
  Bath,
  Target,
  Hand
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

const serviceCategories = [
  {
    id: "signature-hair",
    title: "Signature Hair",
    icon: <Scissors className="w-6 h-6" />,
    items: [
      { name: "Haircut", desc: "Precision cut tailored to your face shape and style.", price: "£45", icon: <Scissors className="w-4 h-4" /> },
      { name: "Styling", desc: "Professional hair styling using premium products.", price: "£20", icon: <Wind className="w-4 h-4" /> },
      { name: "Beard Grooming", desc: "Sculpting, trimming, and premium oil conditioning.", price: "£35", icon: <User className="w-4 h-4" /> }
    ]
  },
  {
    id: "facial-suite",
    title: "Tea Tree Facial Suite",
    subtitle: "The Signature Experience",
    icon: <Leaf className="w-6 h-6" />,
    items: [
      { name: "Cleansing", desc: "Gentle surface purification.", price: "£20", icon: <Droplets className="w-4 h-4" /> },
      { name: "Scrubbing", desc: "Deep exfoliation for smooth skin.", price: "£25", icon: <Sparkles className="w-4 h-4" /> },
      { name: "Massage", desc: "Relaxing facial massage for circulation.", price: "£30", icon: <Hand className="w-4 h-4" /> },
      { name: "Blackhead Removal", desc: "Professional pore extraction.", price: "£35", icon: <Target className="w-4 h-4" /> },
      { name: "Steam", desc: "Deep pore opening and hydration.", price: "£15", icon: <Cloud className="w-4 h-4" /> },
      { name: "Gold Mask", desc: "Luxury rejuvenation with 24k gold infusion.", price: "£55", icon: <ShieldCheck className="w-4 h-4" /> },
      { name: "Serums", desc: "Customized skin nutrient infusion.", price: "£40", icon: <FlaskConical className="w-4 h-4" /> }
    ]
  },
  {
    id: "extras",
    title: "Extras",
    icon: <Sparkles className="w-6 h-6" />,
    items: [
      { name: "Hot Towel", desc: "Traditional aromatic steam refresh.", price: "£15", icon: <Thermometer className="w-4 h-4" /> },
      { name: "Makeup", desc: "Subtle grooming for media or special events.", price: "£35", icon: <Palette className="w-4 h-4" /> },
      { name: "Manicure", desc: "Complete hand and nail care.", price: "£30", icon: <Hand className="w-4 h-4" /> },
      { name: "Dress Setting", desc: "Final wardrobe adjustments and lint removal.", price: "£15", icon: <Shirt className="w-4 h-4" /> },
      { name: "Shower Facility", desc: "Private luxury refresh post-service.", price: "£10", icon: <Bath className="w-4 h-4" /> }
    ]
  }
];

const faqs = [
  {
    question: "Do I need to book in advance?",
    answer: "While we welcome walk-ins based on availability, we highly recommend booking in advance to ensure your preferred time and specialist are available."
  },
  {
    question: "What products do you use?",
    answer: "We exclusively use professional-grade, luxury products including our signature Tea Tree suite and organic skin serums specifically formulated for men's skin."
  },
  {
    question: "Is there parking available?",
    answer: "Yes, we provide complimentary valet parking for all our clients at the main entrance of the lounge."
  },
  {
    question: "Can I book for a group or event?",
    answer: "Absolutely. We offer private bookings for wedding parties, corporate events, and group grooming sessions. Please contact our concierge for details."
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About Us', href: '#about' },
    { name: 'FAQs', href: '#faqs' }
  ];

  return (
    <div className="min-h-screen bg-cream selection:bg-sage/20 selection:text-sage-dark">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'glass-nav py-4 shadow-sm' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-3"
          >
            <div className="w-10 h-10 border border-sage flex items-center justify-center rounded-full">
              <span className="text-sage font-serif text-xl">G</span>
            </div>
            <span className="text-2xl font-serif tracking-[0.1em] text-warm-grey">THE GENTRY</span>
          </motion.div>

          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-[11px] uppercase tracking-[0.2em] text-warm-grey/70 hover:text-sage transition-colors duration-300 font-medium"
              >
                {link.name}
              </a>
            ))}
            <button className="px-8 py-3 bg-sage text-white hover:bg-sage-dark transition-all duration-300 text-[11px] uppercase tracking-[0.2em] font-semibold rounded-sm">
              Book Appointment
            </button>
          </div>

          <button className="md:hidden text-warm-grey" onClick={() => setIsMenuOpen(true)}>
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-cream p-8 flex flex-col"
          >
            <div className="flex justify-between items-center">
              <span className="text-xl font-serif tracking-[0.1em] text-warm-grey">THE GENTRY</span>
              <button onClick={() => setIsMenuOpen(false)}>
                <X className="w-8 h-8 text-sage" />
              </button>
            </div>
            <div className="flex flex-col gap-8 mt-20 text-center">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-4xl font-serif text-warm-grey hover:text-sage transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <button className="mt-8 px-10 py-5 bg-sage text-white font-semibold uppercase tracking-widest rounded-sm">
                Book Appointment
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="home" className="relative h-screen min-h-[600px] flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-cream/40 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=2000" 
            alt="Luxury Salon Interior" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="flex flex-col items-center justify-center"
          >
            <span className="text-sage uppercase tracking-[0.4em] text-xs font-bold mb-6 block">Premium Men's Grooming Lounge</span>
            <h1 className="text-5xl md:text-8xl font-serif mb-10 text-warm-grey leading-[1.1]">
              Redefine Your <br />
              <span className="italic font-light text-sage">Presence</span>
            </h1>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto">
              <button className="w-full sm:w-auto px-12 py-5 bg-sage text-white font-semibold uppercase tracking-[0.2em] text-xs hover:bg-sage-dark transition-all duration-500 rounded-sm shadow-xl shadow-sage/20 flex items-center justify-center gap-3 group">
                Book Appointment
                <Calendar className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4"
        >
          <span className="text-[10px] uppercase tracking-[0.4em] text-warm-grey-light">Scroll to explore</span>
          <div className="w-px h-16 bg-gradient-to-b from-sage/50 to-transparent" />
        </motion.div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-32 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12 lg:gap-20">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <span className="text-sage uppercase tracking-[0.3em] text-xs font-bold">Our Legacy</span>
            <h2 className="text-4xl md:text-6xl font-serif text-warm-grey leading-tight">
              15+ Years of <br />
              <span className="italic">Excellence</span>
            </h2>
            <p className="text-warm-grey-light text-lg font-light leading-relaxed">
              The Gentry is more than a salon; it's a sanctuary for the modern gentleman. For over 15 years, we have been dedicated to the art of grooming, combining traditional techniques with contemporary luxury.
            </p>
            <p className="text-warm-grey-light text-lg font-light leading-relaxed">
              Our serene environment is designed to offer a moment of quiet reflection amidst the bustle of daily life. Every detail, from our signature Tea Tree suite to our expert stylists, is curated for your ultimate comfort.
            </p>
            <div className="pt-4">
              <button className="text-sage font-semibold uppercase tracking-widest text-xs flex items-center gap-2 group">
                Learn More About Us
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=1000" 
                alt="Salon Experience" 
                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -top-10 -left-10 w-40 h-40 border border-sage/20 -z-10 rounded-2xl" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-sage/5 -z-10 rounded-2xl" />
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-32 px-4 sm:px-6 lg:px-8 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif text-warm-grey mb-6">Our Services</h2>
            <p className="text-warm-grey-light max-w-2xl mx-auto font-light text-lg">
              A curated selection of grooming and wellness treatments designed for the modern man.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {serviceCategories.map((category, idx) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-sage/5 transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-8">
                  <div className="w-12 h-12 bg-cream flex items-center justify-center text-sage rounded-full">
                    {category.icon}
                  </div>
                  {category.subtitle && (
                    <span className="text-[10px] uppercase tracking-widest text-sage font-bold italic">{category.subtitle}</span>
                  )}
                </div>
                
                <h3 className="text-2xl font-serif text-warm-grey mb-8">{category.title}</h3>
                
                <div className="space-y-8">
                  {category.items.map((item) => (
                    <div key={item.name} className="group">
                      <div className="flex justify-between items-baseline mb-2">
                        <div className="flex items-center gap-3">
                          <span className="text-sage opacity-50 group-hover:opacity-100 transition-opacity">
                            {item.icon}
                          </span>
                          <h4 className="text-sm font-semibold text-warm-grey group-hover:text-sage transition-colors">{item.name}</h4>
                        </div>
                        <span className="text-xs font-serif text-sage">{item.price}</span>
                      </div>
                      <p className="text-xs text-warm-grey-light font-light leading-relaxed pl-7">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faqs" className="py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif text-warm-grey mb-6">Frequently Asked Questions</h2>
            <p className="text-warm-grey-light font-light text-lg">Everything you need to know about your visit to The Gentry.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="border-b border-sage/10"
              >
                <button 
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full py-6 flex justify-between items-center text-left group"
                >
                  <span className="text-lg font-serif text-warm-grey group-hover:text-sage transition-colors">{faq.question}</span>
                  {activeFaq === idx ? (
                    <Minus className="w-5 h-5 text-sage" />
                  ) : (
                    <Plus className="w-5 h-5 text-warm-grey-light group-hover:text-sage transition-colors" />
                  )}
                </button>
                <AnimatePresence>
                  {activeFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="pb-8 text-warm-grey-light font-light leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-cream pt-24 pb-12 border-t border-sage/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-24">
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 border border-sage flex items-center justify-center rounded-full">
                  <span className="text-sage font-serif text-sm">G</span>
                </div>
                <span className="text-xl font-serif tracking-[0.1em] text-warm-grey">THE GENTRY</span>
              </div>
              <p className="text-warm-grey-light text-sm font-light leading-relaxed">
                A serene grooming sanctuary dedicated to the modern gentleman's wellness and style.
              </p>
              <div className="flex gap-6">
                <a href="#" className="text-warm-grey-light hover:text-sage transition-colors"><Instagram className="w-5 h-5" /></a>
                <a href="#" className="text-warm-grey-light hover:text-sage transition-colors"><Facebook className="w-5 h-5" /></a>
                <a href="#" className="text-warm-grey-light hover:text-sage transition-colors"><Twitter className="w-5 h-5" /></a>
              </div>
            </div>

            <div>
              <h4 className="font-serif text-lg text-warm-grey mb-8">Quick Links</h4>
              <ul className="space-y-4 text-sm text-warm-grey-light font-light">
                <li><a href="#home" className="hover:text-sage transition-colors">Home</a></li>
                <li><a href="#services" className="hover:text-sage transition-colors">Services</a></li>
                <li><a href="#about" className="hover:text-sage transition-colors">About Us</a></li>
                <li><a href="#faqs" className="hover:text-sage transition-colors">FAQs</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-serif text-lg text-warm-grey mb-8">Contact Us</h4>
              <ul className="space-y-6 text-sm text-warm-grey-light font-light">
                <li className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-sage shrink-0" />
                  <span>123 Luxury Lane, <br />Mayfair, London W1J</span>
                </li>
                <li className="flex items-center gap-4">
                  <Phone className="w-5 h-5 text-sage shrink-0" />
                  <span>+44 20 7946 0000</span>
                </li>
                <li className="flex items-center gap-4">
                  <Mail className="w-5 h-5 text-sage shrink-0" />
                  <span>concierge@thegentry.com</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-serif text-lg text-warm-grey mb-8">Opening Hours</h4>
              <ul className="space-y-4 text-sm text-warm-grey-light font-light">
                <li className="flex justify-between"><span>Mon - Fri</span> <span>10:00 - 20:00</span></li>
                <li className="flex justify-between"><span>Saturday</span> <span>09:00 - 19:00</span></li>
                <li className="flex justify-between"><span>Sunday</span> <span>11:00 - 17:00</span></li>
              </ul>
            </div>
          </div>

          <div className="pt-12 border-t border-sage/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-[0.3em] text-warm-grey-light text-center md:text-left">
            <p>© 2026 All Rights Reserved | Designed and Developed by Maheen</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-sage transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-sage transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
