import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 px-8 py-5 bg-white/60 backdrop-blur-xl border-b border-primary/10">
    <div className="flex justify-between items-center max-w-7xl mx-auto">
      <Link to="/" className="text-2xl font-extrabold tracking-tighter text-primary">Ethereal Software</Link>
      <div className="hidden md:flex items-center space-x-10 font-headline font-bold tracking-tight">
        <Link to="/" className="text-on-surface-variant hover:text-primary transition-colors duration-300">Home</Link>
        <Link to="/blog" className="text-primary border-b-2 border-primary pb-1">Blog</Link>
        <a href="#" className="text-on-surface-variant hover:text-primary transition-colors duration-300">About</a>
      </div>
      <div className="flex items-center space-x-6">
        <div className="relative hidden sm:block">
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant/50 text-lg">search</span>
          <input className="bg-surface-container border-none rounded-full py-2.5 pl-12 pr-6 text-sm focus:ring-2 focus:ring-primary w-64 transition-all" placeholder="Search trends..." type="text"/>
        </div>
        <button className="bg-primary text-white px-8 py-2.5 rounded-full font-bold hover:shadow-lg hover:shadow-primary/20 active:scale-95 transition-all">Subscribe</button>
      </div>
    </div>
  </nav>
);

const Footer = () => (
  <footer className="bg-white border-t border-primary/10 py-16 px-8 text-sm font-medium mt-20">
    <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 max-w-7xl mx-auto">
      <div className="text-2xl font-black text-primary">Ethereal Interface</div>
      <div className="text-on-surface-variant/70">© 2024 Ethereal Interface. Crafted for clarity.</div>
      <div className="flex space-x-10">
        <Link className="text-on-surface-variant hover:text-primary transition-all font-bold" to="/sitemap">Project Sitemap</Link>
        <a className="text-on-surface-variant hover:text-primary transition-all" href="#">Privacy Policy</a>
        <a className="text-on-surface-variant hover:text-primary transition-all" href="#">Terms of Service</a>
      </div>
    </div>
  </footer>
);

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-surface">
      <Navbar />
      <main className="pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
