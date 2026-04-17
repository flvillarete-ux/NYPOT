"use client";

import { Star } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Linda",
    role: "Verified Amazon Buyer",
    title: "Back chair",
    text: "If you have lower back issues, this chair will help. I bought one in the 80's and although chairs were provided, I always brought my own. It may surprise you especially if you're behind a desk 8 hours a day. Now, I use it sewing and playing my keyboard.",
  },
  {
    name: "Michelle",
    role: "Verified Amazon Buyer",
    title: "Great Chair to Avoid Back or Hip Pain",
    text: "Great chair if you have back or hip pain. Just got this yesterday and already seeing a difference. Definitely recommend vs a traditional “sit with legs at 90 degrees” chair.",
  },
  {
    name: "David",
    role: "Verified Amazon Buyer",
    title: "Well-built and sturdy. Looks good! Love the rocker",
    text: "Nice, well-built product! Easy to put together. Nicely packaged with all parts accounted for - and a couple of extras just in case. Two surprise gifts - a phone holder and a notebook with pen and extra ink refill. Very happy with product.",
  },
];

export default function Testimonials() {
  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-20">
      <div className="mb-16 text-center">
        <h2 className="text-sm uppercase tracking-widest text-secondary font-semibold mb-4">The Verdict</h2>
        <h3 className="text-3xl md:text-5xl font-medium tracking-tight text-primary">
          Join thousands of relieved <br className="hidden md:block"/> active sitters.
        </h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className="p-8 bg-black/5 rounded-2xl border border-black/5 backdrop-blur-sm shadow-sm flex flex-col"
          >
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, idx) => (
                <Star key={idx} className="w-4 h-4 fill-[#FFA41C] text-[#FFA41C]" />
              ))}
            </div>
            <h4 className="font-bold text-primary mb-3 leading-snug">
              {t.title}
            </h4>
            <p className="text-base leading-relaxed text-secondary mb-8 flex-grow">
              &quot;{t.text}&quot;
            </p>
            <div className="mt-auto">
              <p className="font-semibold text-primary">{t.name}</p>
              <p className="text-secondary text-sm font-medium">{t.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
