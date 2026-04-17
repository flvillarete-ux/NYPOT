"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ProductCanvas from "@/components/ProductCanvas";
import Testimonials from "@/components/Testimonials";
import TrustBanner from "@/components/TrustBanner";
import { ArrowDown, CheckCircle2,} from "lucide-react";
import Image from "next/image";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // BEAT A: 0 - 15% (fades out at 15%)
  const opacityA = useTransform(scrollYProgress, [0, 0.1, 0.15, 1], [1, 1, 0, 0]);
  const yA = useTransform(scrollYProgress, [0, 0.15, 1], [0, -50, -50]);

  // BEAT B (Previously C - Built for motion): 30 - 85%
  const opacityC = useTransform(scrollYProgress, [0, 0.3, 0.35, 0.8, 0.85, 1], [0, 0, 1, 1, 0, 0]);
  const yC = useTransform(scrollYProgress, [0, 0.3, 0.35, 1], [50, 50, 0, 0]);

  return (
  <main id="hero" className="bg-gradient-scrolly min-h-screen">
      
      {/* Scroll Sequence Section */}
      <section ref={containerRef} className="h-[400vh] relative w-full">
          {/* Sticky Canvas Container */}
        <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
          {/* Restored to full size, using multiply to blend the background seamlessly */}
          <div className="w-full h-full contrast-[1.15] mix-blend-multiply">
            <ProductCanvas progress={scrollYProgress} />
          </div>

          {/* Texts overlays absolute positioned relative to screen */}
          
          {/* BEAT A Overlays */}
          <motion.div 
            style={{ opacity: opacityA, y: yA }} 
            className="absolute top-[15%] md:top-[20%] w-full px-6 flex flex-col items-center text-center z-20 pointer-events-none"
          >
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-primary mb-4 text-balance">
            REDISCOVER YOUR <span className="text-[#355E3B]">POSTURE.</span>
            </h1>
            <p className="inline-block px-6 py-3 bg-accent/20 text-[#b25138] backdrop-blur-md rounded-full text-xs md:text-sm font-bold tracking-widest uppercase mt-6 text-center max-w-2xl border border-accent/30">
              The NYPOT Kneeling Chair. Engineered for active sitting and deep focus.
            </p>
          </motion.div>

          {/* Scroll to Explore moved below */}

          {/* Removed Stress Awareness Overlay */}

          {/* BEAT C Overlays */}
          <motion.div 
            style={{ opacity: opacityC, y: yC }} 
            className="absolute top-1/2 -translate-y-1/2 right-6 md:right-[10%] max-w-md z-20 pointer-events-none"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-primary mb-6">
              BUILT FOR MOTION.<br/>
              <span className="text-accent">ENGINEERED FOR RELIEF.</span>
            </h2>
            <p className="text-lg text-secondary leading-relaxed mb-8">
              Unlike static office chairs, our dynamic rocking base encourages micro-movements.
            </p>
            <ul className="space-y-4">
              {[
                "Aligns the natural curve of the spine",
                "Reduces lower back pressure",
                "Boosts circulation and focus"
              ].map((bullet, i) => (
                <li key={i} className="flex items-center gap-3 text-primary font-medium text-lg">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />
                  {bullet}
                </li>
              ))}
            </ul>
          </motion.div>
          
        </div>
      </section>
<section id="offers" className="relative z-20 w-full bg-sage/5 py-24 border-y border-black/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="inline-block px-4 py-1 border border-accent bg-accent/10 text-accent rounded-full text-xs font-bold tracking-widest uppercase mb-6 shadow-sm">
            Stress Awareness Month
          </span>
          <h2 className="text-3xl md:text-5xl font-playfair font-black tracking-tight text-primary mb-6">
            Stress Awareness: How physical alignment improves mental focus.
          </h2>
          <p className="text-lg text-secondary leading-relaxed mb-10 max-w-2xl mx-auto">
  Physical tension and mental stress are deeply connected. By dropping your hips into a natural posture, you instantly release the physical strain that drains your focus. <strong>Breathe deeper.</strong> Work lighter. Apply code <strong>BREATHE15</strong> at checkout.
</p>
<a
  href="https://shop.nypot.live/collection"
  target="_blank" 
  rel="noopener noreferrer"
  className="inline-block bg-white text-[#355E3B] px-8 py-4 rounded-xl border border-black/10 shadow-lg font-bold text-lg cursor-pointer hover:shadow-xl hover:scale-[1.01] transition text-center"
>
  Unlock 15% Off with BREATHE15
</a>
        </div>
      </section>
      {/* New Product Range Section */}
      <section id="ergonomic-range" className="relative z-20 w-full max-w-7xl mx-auto px-6 py-24 pb-32">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-primary">
            Our Full Ergonomic Range
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          <a href="https://shop.nypot.live/product/nypot-kneeling-chair" target="_blank" rel="noopener noreferrer" className="flex flex-col group cursor-pointer">
            <div className="border border-black/5 rounded-3xl overflow-hidden aspect-[4/5] relative mb-6 shadow-sm">
              <Image 
                src="/products/original.jpg" 
                alt="Original Kneeling Chair" 
                fill 
                quality={100}
                sizes="100vw"
                unoptimized={true}
                className="object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
            <h3 className="text-xl font-bold tracking-tight text-accent mb-1 transition group-hover:text-[#d68a5c]">NYPOT Kneeling Chair</h3>
            <p className="text-secondary leading-relaxed text-sm mb-4">An innovative ergonomic kneeling chair built to encourage active sitting and improve your daily posture.</p>
            <p className="text-2xl font-black tracking-tight text-primary mt-auto">$169.99</p>
            <div className="opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition duration-300 mt-4">
  <button className="bg-[#7FA37F] text-white px-6 py-3 rounded-full font-medium">
    Quick Shop
  </button>
</div>
          </a>

          <a href="https://shop.nypot.live/product/nypot-two-pad-kneeling-chair" target="_blank" rel="noopener noreferrer" className="flex flex-col group cursor-pointer">
            <div className="border border-black/5 rounded-3xl overflow-hidden aspect-[4/5] relative mb-6 shadow-sm">
              <Image 
                src="/products/twopads.jpg" 
                alt="Two Pads Modern Kneeling Chair" 
                fill 
                quality={100}
                sizes="100vw"
                unoptimized={true}
                className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-in-out" 
              />
            </div>
            <h3 className="text-xl font-bold tracking-tight text-accent mb-1">NYPOT Two-Pad Kneeling Chair</h3>
            <p className="text-secondary leading-relaxed text-sm mb-4">Maximize your comfort with this ergonomic kneeling chair, featuring dual pads for balanced knee support.</p>
            <p className="text-2xl font-black tracking-tight text-primary mt-auto">$169.99</p>
  <div className="opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition duration-300 mt-4">
    <button className="bg-[#7FA37F] text-white px-6 py-3 rounded-full font-medium">
      Quick Shop
    </button>
  </div>
          </a>

          <a href="https://shop.nypot.live/product/nypot-criss-cross-chair" target="_blank" rel="noopener noreferrer" className="flex flex-col group cursor-pointer">
             <div className="border border-black/5 rounded-3xl overflow-hidden aspect-[4/5] relative mb-6 shadow-sm">
              <Image 
                src="/products/crosslegged.jpg" 
                alt="3 Cross-Legged Chair" 
                fill 
                quality={100}
                sizes="100vw"
                unoptimized={true}
                className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-in-out" 
              />
            </div>
            <h3 className="text-xl font-bold tracking-tight text-accent mb-1">NYPOT Criss Cross Chair</h3>
            <p className="text-secondary leading-relaxed text-sm mb-4">A versatile cross-legged office chair that supports over six sitting positions with a fully adjustable backrest and knee pads.</p>
            <p className="text-2xl font-black tracking-tight text-primary mt-auto">$179.99</p>
  <div className="opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition duration-300 mt-4">
    <button className="bg-[#7FA37F] text-white px-6 py-3 rounded-full font-medium">
      Quick Shop
    </button>
  </div>
          </a>
        </div>

        <div className="flex flex-col items-center gap-2 text-secondary pt-8">
          <span className="text-sm font-semibold tracking-widest uppercase animate-pulse">Scroll to Explore</span>
          <ArrowDown className="w-5 h-5 animate-bounce" />
        </div>
      </section>

      {/* Dedicated Stress Awareness Section (Sage Green Tint) */}


      {/* Trust Banner injection */}
      <TrustBanner />

      {/* Narrative Section 4: Testimonials */}
<section id="reviews" className="relative z-30 bg-white">
  <Testimonials />
</section>

      {/* Narrative Section 5: CTA */}
      <section className="relative z-30 bg-white border-t border-black/5 py-24 md:py-32 flex flex-col items-center justify-center text-center px-6">
        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-primary mb-8 text-balance">
          Transform the way you work today.
        </h2>
        
        <motion.a
  href="https://shop.nypot.live/collection"
  target="_blank"
  rel="noopener noreferrer"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="inline-block bg-accent text-white px-10 py-5 rounded-full font-bold text-lg md:text-xl tracking-wide shadow-2xl hover:shadow-accent/40 transition-shadow duration-300 ring-4 ring-black/5 text-center"
>
  UPGRADE YOUR POSTURE
</motion.a>
        <p className="mt-6 text-secondary text-sm font-medium tracking-wide">
          Free shipping & 30-day risk-free trial.
        </p>
      </section>
      
    </main>
  );
}
