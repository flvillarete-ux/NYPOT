export default function Navigation() {
  return (
    <header className="w-full fixed top-0 z-50 bg-white/80 backdrop-blur-md border-b border-black/5">
      {/* Top Announcement Bar - Sage Green */}
      <div className="w-full bg-[#355E3B] text-white text-xs font-semibold tracking-widest uppercase py-2 text-center">
    APRIL STRESS AWARENESS: 15% OFF Everything with code <span className="border border-white/50 px-2 py-0.5 rounded mx-1">BREATHE15</span>
      </div>
      
      {/* Main Navigation - Minimalist Serif */}
      <nav className="w-full max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex-1">
          <a href="#hero" className="font-playfair text-2xl font-black text-primary tracking-tight">
  NYPOT
</a>
        </div>

        <ul className="hidden md:flex flex-1 items-center justify-center gap-10 font-playfair text-lg text-primary">
          <li><a href="https://shop.nypot.live/collection" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Shop</a></li>
          <li><a href="#reviews" className="hover:text-accent transition-colors">Reviews</a></li>
          <li><a href="#offers" className="hover:text-accent transition-colors">Offers</a></li>
          <li><a href="https://shop.nypot.live/contact" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Support</a></li>
        </ul>

        <div className="flex-1 flex justify-end">
          <a href="#ergonomic-range" className="text-xs uppercase tracking-widest font-semibold border border-primary text-primary px-5 py-2 hover:bg-primary hover:text-white transition-colors duration-300">
  Find Your Chair
</a>
        </div>
      </nav>
    </header>
  );
}
