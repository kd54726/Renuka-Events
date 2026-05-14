import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MessageCircle, CheckCircle, Calendar, Users, Sparkles } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const WHATSAPP_NUMBER = '919876543210';
const WHATSAPP_MSG = encodeURIComponent("Hi Renuka! I'm getting married and would love to discuss wedding planning with you. Could we schedule a consultation?");

export default function ConversionCTA() {
  const [formData, setFormData] = useState({
    name: '', phone: '', email: '', date: '', guests: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/images/gallery3.jpg"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/85 backdrop-blur-sm" />
      </div>


      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col gap-16 lg:flex-row lg:gap-20 items-center">
          {/* Left: Emotional copy */}
          <AnimatedSection direction="left" className="w-full lg:w-1/2">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-champagne" />
              <span className="font-sans text-xs font-medium tracking-[0.3em] uppercase text-champagne-light">
                Begin Your Journey
              </span>
            </div>

            <h2 className="font-heading text-4xl font-semibold text-white sm:text-5xl lg:text-6xl leading-tight">
              Your Dream Wedding
              <br />
              <span className="font-serif italic text-champagne-light">Starts Here</span>
            </h2>

            <p className="mt-6 font-sans text-base leading-relaxed text-white/55 max-w-lg">
              Every legendary celebration begins with a single conversation. Tell us about your 
              vision, and let us show you how we can transform it into the most magnificent day of your life.
            </p>

            {/* Benefits */}
            <div className="mt-10 space-y-4">
              {[
                { icon: Calendar, text: 'Free 30-minute consultation call' },
                { icon: Users, text: 'Personalized proposal within 48 hours' },
                { icon: Sparkles, text: 'No obligation, just inspiration' },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-champagne/15">
                    <item.icon size={18} className="text-champagne" />
                  </div>
                  <span className="font-sans text-sm text-white/70">{item.text}</span>
                </div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <div className="mt-10">
              <p className="mb-3 font-sans text-xs font-medium tracking-wider uppercase text-white/40">
                Prefer to chat? We're on WhatsApp
              </p>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full bg-green-600 px-8 py-4 font-sans text-sm font-semibold text-white transition-all duration-300 hover:bg-green-700 hover:shadow-lg hover:shadow-green-600/30"
              >
                <MessageCircle size={20} />
                Chat on WhatsApp
              </a>
            </div>
          </AnimatedSection>

          {/* Right: Form */}
          <AnimatedSection direction="right" className="w-full lg:w-1/2">
            <div className="rounded-2xl bg-white/[0.07] backdrop-blur-xl border border-white/10 p-8 lg:p-10">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-champagne/20 mb-6">
                    <CheckCircle size={32} className="text-champagne" />
                  </div>
                  <h3 className="font-heading text-3xl font-semibold text-white">Thank You!</h3>
                  <p className="mt-3 font-sans text-sm text-white/60">
                    We'll be in touch within 24 hours to discuss your dream wedding.
                  </p>
                </motion.div>
              ) : (
                <>
                  <h3 className="font-heading text-2xl font-semibold text-white mb-2">
                    Schedule Your Consultation
                  </h3>
                  <p className="font-sans text-sm text-white/50 mb-8">
                    Fill in the details below and we'll reach out to you personally.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label className="mb-1.5 block font-sans text-[10px] font-medium tracking-[0.2em] uppercase text-white/40">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3 font-sans text-sm text-white placeholder-white/25 outline-none transition-all focus:border-champagne/50 focus:bg-white/[0.08]"
                          placeholder="Full name"
                        />
                      </div>
                      <div>
                        <label className="mb-1.5 block font-sans text-[10px] font-medium tracking-[0.2em] uppercase text-white/40">
                          Phone *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3 font-sans text-sm text-white placeholder-white/25 outline-none transition-all focus:border-champagne/50 focus:bg-white/[0.08]"
                          placeholder="+91 XXXXX XXXXX"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="mb-1.5 block font-sans text-[10px] font-medium tracking-[0.2em] uppercase text-white/40">
                        Email
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3 font-sans text-sm text-white placeholder-white/25 outline-none transition-all focus:border-champagne/50 focus:bg-white/[0.08]"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label className="mb-1.5 block font-sans text-[10px] font-medium tracking-[0.2em] uppercase text-white/40">
                          Wedding Date
                        </label>
                        <input
                          type="date"
                          value={formData.date}
                          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                          className="w-full rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3 font-sans text-sm text-white placeholder-white/25 outline-none transition-all focus:border-champagne/50 focus:bg-white/[0.08] [color-scheme:dark]"
                        />
                      </div>
                      <div>
                        <label className="mb-1.5 block font-sans text-[10px] font-medium tracking-[0.2em] uppercase text-white/40">
                          Approx. Guests
                        </label>
                        <select
                          value={formData.guests}
                          onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                          className="w-full rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3 font-sans text-sm text-white outline-none transition-all focus:border-champagne/50 focus:bg-white/[0.08] appearance-none"
                        >
                          <option value="" className="bg-charcoal">Select</option>
                          <option value="under-100" className="bg-charcoal">Under 100</option>
                          <option value="100-300" className="bg-charcoal">100 – 300</option>
                          <option value="300-500" className="bg-charcoal">300 – 500</option>
                          <option value="500+" className="bg-charcoal">500+</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="mb-1.5 block font-sans text-[10px] font-medium tracking-[0.2em] uppercase text-white/40">
                        Tell Us About Your Dream Wedding
                      </label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3 font-sans text-sm text-white placeholder-white/25 outline-none transition-all focus:border-champagne/50 focus:bg-white/[0.08] resize-none"
                        placeholder="Share your wedding vision, preferred city, style, or any special requests..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-3 rounded-xl bg-champagne px-8 py-4 font-sans text-xs font-bold tracking-[0.15em] uppercase text-white transition-all duration-500 hover:bg-champagne-dark hover:shadow-lg hover:shadow-champagne/30"
                    >
                      <Send size={16} />
                      Send Inquiry
                    </button>
                  </form>
                </>
              )}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
