"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import FadeUp from "./FadeUp";

const faqs = [
  {
    question: "Why is the platform being sold?",
    answer: "The platform was developed as an independent product and technology asset. The goal is to find a buyer who can commercialize, scale, and fully realize its potential in the HealthTech and AI wellness market."
  },
  {
    question: "What is included in the acquisition?",
    answer: "The acquisition includes the complete Android source code, backend infrastructure, database schema, AI coaching systems, automation workflows, technical documentation, architecture assets, acquisition website, product trailer, branding assets, and presentation materials."
  },
  {
    question: "Is the source code included?",
    answer: "Yes. Buyers receive the complete codebase, including the Android application, backend services, AI orchestration components, and deployment configurations."
  },
  {
    question: "Is the backend infrastructure included?",
    answer: "Yes. The backend architecture, database structure, automation systems, cloud functions, and related configurations are included as part of the acquisition."
  },
  {
    question: "What technologies power the platform?",
    answer: "The platform is built using Kotlin, Jetpack Compose, Supabase, PostgreSQL, Firebase Cloud Messaging, Deno Edge Functions, and modern cloud-native automation systems."
  },
  {
    question: "Is the platform generating revenue?",
    answer: "The platform is currently pre-revenue. The focus has been on building a high-quality product and technical foundation rather than pursuing monetization."
  },
  {
    question: "What monetization opportunities exist?",
    answer: "Potential opportunities include premium subscriptions, AI coaching plans, advanced analytics, corporate wellness programs, white-label licensing, and strategic partnerships within the health and wellness industry."
  },
  {
    question: "Can the platform be white-labeled?",
    answer: "Yes. The architecture is suitable for white-label deployment, making it attractive for wellness brands, fitness companies, and organizations seeking a customized health platform."
  },
  {
    question: "What are the estimated monthly operating costs?",
    answer: "Operating costs depend on usage and scale. The cloud-native architecture was intentionally designed to remain cost-efficient during early-stage growth while supporting future scalability."
  },
  {
    question: "Is a product demo available?",
    answer: "Yes. Serious buyers can request a walkthrough, product demonstration, or additional technical information during acquisition discussions."
  }
];

function FAQItem({ 
  faq, 
  isOpen, 
  onToggle 
}: { 
  faq: { question: string, answer: string }, 
  isOpen: boolean, 
  onToggle: () => void 
}) {
  return (
    <div className={`border transition-all duration-300 rounded-2xl overflow-hidden group relative bg-white/[0.02] backdrop-blur-sm ${isOpen ? 'border-blue-500/30 shadow-[0_0_30px_rgba(59,130,246,0.1)]' : 'border-white/10 hover:border-blue-500/20'}`}>
      {/* Background Hover Glow */}
      <div className={`absolute inset-0 bg-gradient-to-r transition-all duration-500 ${isOpen ? 'from-blue-500/10 via-transparent to-transparent' : 'from-blue-500/0 via-transparent to-transparent group-hover:from-blue-500/5'}`} />
      
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-6 sm:p-8 text-left relative z-10"
      >
        <span className={`text-lg sm:text-xl font-medium transition-colors ${isOpen ? 'text-white' : 'text-white/80 group-hover:text-white'}`}>
          {faq.question}
        </span>
        <div className={`shrink-0 ml-6 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-blue-500/20 text-blue-400 rotate-180' : 'bg-white/5 text-white/50 group-hover:bg-blue-500/10 group-hover:text-blue-400'}`}>
          <ChevronDown className="w-5 h-5" />
        </div>
      </button>
      
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-0 text-white/50 text-base sm:text-lg leading-relaxed relative z-10">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 md:py-32 relative" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        <FadeUp>
          <div className="text-center mb-16 md:mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/10 mb-6">
              <HelpCircle className="w-4 h-4 text-blue-400" />
              <span className="text-blue-400 text-xs tracking-wider font-semibold uppercase">FAQ</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-white/50 text-lg md:text-xl max-w-2xl mx-auto font-light">
              Everything potential buyers need to know before starting a conversation.
            </p>
          </div>
        </FadeUp>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <FadeUp key={index} delay={index * 0.05}>
              <FAQItem 
                faq={faq} 
                isOpen={openIndex === index} 
                onToggle={() => setOpenIndex(openIndex === index ? null : index)} 
              />
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
