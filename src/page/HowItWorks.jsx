import React, { useState, useEffect } from "react";
import {
  ChevronDown,
  CheckCircle,
  Users,
  Zap,
  Target,
  TrendingUp,
  ArrowRight,
  Play,
} from "lucide-react";

const HowItWorks = () => {
  const [visibleCards, setVisibleCards] = useState(new Set());
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.1 },
    );

    document.querySelectorAll("[data-animate]").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      number: "01",
      title: "Create Your Game Project",
      description:
        "Start by creating your game project profile. Share your game concept, visuals, and development roadmap. Upload artwork, gameplay videos, and detailed information about your game.",
      icon: "🎮",
      details: [
        "Write compelling game description",
        "Upload game assets and screenshots",
        "Set your funding goal",
        "Define reward tiers for backers",
      ],
    },
    {
      number: "02",
      title: "Set Your Funding Goal",
      description:
        "Determine how much money you need to bring your game to life. Consider development costs, marketing, and team salaries. Our platform helps you set realistic goals based on similar projects.",
      icon: "💰",
      details: [
        "Calculate your budget needs",
        "Research comparable projects",
        "Set achievable milestones",
        "Plan funding timeline",
      ],
    },
    {
      number: "03",
      title: "Launch Your Campaign",
      description:
        "Go live with your campaign and start reaching potential backers. Use our marketing tools to promote your game across social media, email, and our community platform.",
      icon: "🚀",
      details: [
        "Activate campaign visibility",
        "Share on social platforms",
        "Send announcement emails",
        "Engage with community",
      ],
    },
    {
      number: "04",
      title: "Receive Pledges",
      description:
        "Backers from around the world can pledge money to support your project. Each backer receives rewards based on their pledge tier. Track pledges in real-time on your dashboard.",
      icon: "📊",
      details: [
        "Accept global payments",
        "Manage backer rewards",
        "Send updates to backers",
        "Build community engagement",
      ],
    },
    {
      number: "05",
      title: "Hit Your Goal",
      description:
        "When you reach your funding goal, your campaign is successful! The money goes directly to your development. If you don't reach your goal, backers aren't charged.",
      icon: "🎯",
      details: [
        "Celebrate campaign success",
        "Access funding immediately",
        "Prepare production phase",
        "Thank your backers",
      ],
    },
    {
      number: "06",
      title: "Develop & Deliver",
      description:
        "Use the funds to develop your game and fulfill backer rewards. Keep your community updated with regular progress reports and build anticipation for launch day.",
      icon: "⚙️",
      details: [
        "Execute development plan",
        "Post regular updates",
        "Deliver backer rewards",
        "Prepare game for release",
      ],
    },
  ];

  const benefits = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Global Community",
      description:
        "Connect with millions of gamers worldwide who are passionate about supporting indie games.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Quick Launch",
      description:
        "Get your game funded in as little as 30 days with our streamlined platform and marketing support.",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Targeted Marketing",
      description:
        "Our AI-powered tools help you reach the right audience for your specific game genre.",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Analytics Dashboard",
      description:
        "Track campaign performance, backer demographics, and funding trends in real-time.",
    },
  ];

  const faqs = [
    {
      question: "What percentage do you take from my campaign?",
      answer:
        "We take 5% of the funded amount plus payment processing fees. This is one of the lowest rates in the industry. We also offer special rates for student projects.",
    },
    {
      question: "What if I don't reach my funding goal?",
      answer:
        "Don't worry! If you don't reach your goal by the deadline, no money is charged to backers and you don't receive any funds. You can always relaunch your campaign.",
    },
    {
      question: "How long does a campaign last?",
      answer:
        "Most campaigns run for 30-45 days. However, you can choose any duration between 14 to 90 days. Shorter campaigns create urgency, while longer ones give more time to reach your goal.",
    },
    {
      question: "Can I edit my campaign after launching?",
      answer:
        "Yes! You can update your campaign details, add new stretch goals, post updates to backers, and adjust reward tiers. However, you cannot change your funding goal or deadline.",
    },
    {
      question: "How do I get paid?",
      answer:
        "Once your campaign succeeds, funds are transferred to your bank account within 5-10 business days. We support payments to bank accounts in 150+ countries.",
    },
  ];

  const [expandedFaq, setExpandedFaq] = useState(0);

  return (
    <div className="min-h-screen overflow-x-hidden relative pt-20">
      {/* Background System */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Base background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50" />

        <div
          className="absolute inset-0 opacity-[0.9]"
          style={{
            backgroundImage: `
      linear-gradient(to right, rgba(139, 139, 139, 0.25) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(183, 183, 183, 0.25) 1px, transparent 1px)
    `,
            backgroundSize: "100px 100px",
          }}
        />

        {/* Radial fade (THIS is what you were missing) */}
        <div
          className="absolute inset-0"
          style={{
            maskImage:
              "radial-gradient(circle at center, black 40%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(circle at center, black 40%, transparent 100%)",
          }}
        />

        {/* Soft glow accents */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(110, 110, 110, 0.8),transparent_40%),radial-gradient(circle_at_80%_60%,rgba(79, 79, 79, 0.459),transparent_40%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-b from-transparent via-white to-white">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900">
              How{" "}
              <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                It Works
              </span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
              Launch your game funding campaign in 6 simple steps. From project
              creation to successful delivery, we guide you every step of the
              way.
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-200 transition transform hover:scale-105 inline-flex items-center gap-2">
              <Play size={20} />
              Watch Demo Video
            </button>
          </div>
        </section>

        {/* Main Steps Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-24 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Step Selector */}
              <div
                data-animate
                className={`transform transition duration-1000 ${visibleCards.has("steps-left") ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
                id="steps-left"
              >
                <div className="space-y-4">
                  {steps.map((step, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveStep(idx)}
                      className={`w-full text-left p-6 rounded-2xl transition-all duration-300 transform hover:scale-105 ${
                        activeStep === idx
                          ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg"
                          : "bg-white border border-slate-200 text-slate-900 hover:border-blue-300"
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className={`text-3xl font-bold flex-shrink-0 ${activeStep === idx ? "text-blue-100" : "text-blue-600"}`}
                        >
                          {step.number}
                        </div>
                        <div>
                          <h3
                            className={`font-bold text-lg mb-1 ${activeStep === idx ? "text-white" : "text-slate-900"}`}
                          >
                            {step.title}
                          </h3>
                          <p
                            className={`text-sm ${activeStep === idx ? "text-blue-100" : "text-slate-600"}`}
                          >
                            {step.description.substring(0, 60)}...
                          </p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step Details */}
              <div
                data-animate
                className={`transform transition duration-1000 delay-200 ${visibleCards.has("steps-right") ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
                id="steps-right"
              >
                <div className="relative">
                  {/* Glow Effect */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-3xl opacity-20 blur-2xl"></div>

                  {/* Card */}
                  <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="text-6xl">{steps[activeStep].icon}</div>
                      <div>
                        <div className="text-sm font-semibold text-blue-600">
                          Step {parseInt(steps[activeStep].number)}
                        </div>
                        <h2 className="text-3xl font-bold text-slate-900">
                          {steps[activeStep].title}
                        </h2>
                      </div>
                    </div>

                    <p className="text-slate-600 leading-relaxed mb-8">
                      {steps[activeStep].description}
                    </p>

                    <div className="border-t border-slate-200 pt-8">
                      <h3 className="font-bold text-slate-900 mb-4">
                        What you'll do:
                      </h3>
                      <ul className="space-y-3">
                        {steps[activeStep].details.map((detail, idx) => (
                          <li key={idx} className="flex items-center gap-3">
                            <CheckCircle
                              size={20}
                              className="text-green-500 flex-shrink-0"
                            />
                            <span className="text-slate-700">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-8 flex gap-3">
                      <button
                        onClick={() =>
                          setActiveStep(Math.max(0, activeStep - 1))
                        }
                        disabled={activeStep === 0}
                        className="flex-1 py-3 rounded-full border border-slate-300 text-slate-900 font-semibold hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition"
                      >
                        ← Previous
                      </button>
                      <button
                        onClick={() =>
                          setActiveStep(
                            Math.min(steps.length - 1, activeStep + 1),
                          )
                        }
                        disabled={activeStep === steps.length - 1}
                        className="flex-1 py-3 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition"
                      >
                        Next →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-24 bg-white/40 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">
                Why Choose Pixel Pledge?
              </h2>
              <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                Everything you need to fund your game successfully
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {benefits.map((benefit, idx) => (
                <div
                  key={idx}
                  data-animate
                  className={`transform transition duration-1000 p-8 rounded-2xl bg-white border border-slate-200 hover:shadow-xl hover:scale-105 ${
                    visibleCards.has(`benefit-${idx}`)
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  id={`benefit-${idx}`}
                >
                  <div className="text-blue-600 mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-24 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">
                Campaign Timeline
              </h2>
              <p className="text-slate-600 text-lg">
                Here's what happens from start to finish
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 to-purple-600"></div>

                {/* Timeline Events */}
                <div className="space-y-8">
                  {[
                    {
                      time: "Day 1",
                      label: "Campaign Launches",
                      description: "Your game goes live to the community",
                    },
                    {
                      time: "Day 1-30",
                      label: "Active Promotion",
                      description: "Marketing push and community engagement",
                    },
                    {
                      time: "Day 30",
                      label: "Goal Reached",
                      description: "Success! Funding is confirmed",
                    },
                    {
                      time: "Day 31+",
                      label: "Development Begins",
                      description: "Start creating and updating backers",
                    },
                    {
                      time: "6-12 Months",
                      label: "Game Ready",
                      description: "Complete development and fulfill rewards",
                    },
                  ].map((event, idx) => (
                    <div
                      key={idx}
                      data-animate
                      className={`transform transition duration-1000 relative pl-32 ${
                        visibleCards.has(`timeline-${idx}`)
                          ? "opacity-100 translate-x-0"
                          : "opacity-0 -translate-x-10"
                      }`}
                      id={`timeline-${idx}`}
                    >
                      <div className="absolute left-0 w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center text-white font-bold shadow-lg">
                        {idx + 1}
                      </div>
                      <div className="bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-lg transition">
                        <div className="text-sm font-semibold text-blue-600 mb-1">
                          {event.time}
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">
                          {event.label}
                        </h3>
                        <p className="text-slate-600">{event.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-24 bg-gradient-to-b from-white via-white to-transparent backdrop-blur-sm">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-slate-600">
                Get answers to common questions about launching your campaign
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  data-animate
                  className={`transform transition duration-1000 ${
                    visibleCards.has(`faq-${idx}`)
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  id={`faq-${idx}`}
                >
                  <button
                    onClick={() =>
                      setExpandedFaq(expandedFaq === idx ? -1 : idx)
                    }
                    className="w-full bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-lg transition text-left"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-bold text-slate-900">
                        {faq.question}
                      </h3>
                      <ChevronDown
                        size={24}
                        className={`text-blue-600 transition-transform duration-300 flex-shrink-0 ${
                          expandedFaq === idx ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                    {expandedFaq === idx && (
                      <p className="text-slate-600 mt-4 leading-relaxed">
                        {faq.answer}
                      </p>
                    )}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
              Ready to{" "}
              <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                launch your game
              </span>
              ?
            </h2>
            <p className="text-xl text-slate-600 mb-8">
              Join thousands of game developers who have successfully funded
              their projects on Pixel Pledge.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-200 transition transform hover:scale-105 inline-flex items-center justify-center gap-2">
                Start Your Campaign
                <ArrowRight size={20} />
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition">
                Schedule a Demo
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HowItWorks;
