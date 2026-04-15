import React, { useState, useEffect } from "react";
import {
  Heart,
  Zap,
  Users,
  Target,
  ArrowRight,
  Star,
  CheckCircle,
  Lightbulb,
} from "lucide-react";

const About = () => {
  const [visibleCards, setVisibleCards] = useState(new Set());

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

  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Passion for Gaming",
      description:
        "We love games and the creative minds behind them. Our mission is to support indie developers who are pushing the boundaries of interactive entertainment.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Innovation First",
      description:
        "We constantly innovate to make game funding easier, faster, and more accessible to creators worldwide. Technology drives everything we do.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community Driven",
      description:
        "Our community of gamers and developers is the heart of Pixel Pledge. We believe in building together, supporting each other, and celebrating success.",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Transparency",
      description:
        "We believe in complete transparency. From our fees to our platform tools, everything is designed with honesty and clarity in mind.",
    },
  ];

  const milestones = [
    {
      year: "2020",
      title: "Founded",
      description:
        "Pixel Pledge was born from a passion to democratize game funding and support indie developers worldwide.",
    },
    {
      year: "2021",
      title: "500+ Games Funded",
      description:
        "Our platform helped over 500 games reach their funding goals, generating over $50M in total pledges.",
    },
    {
      year: "2022",
      title: "100K+ Community Members",
      description:
        "We grew to 100,000 active community members passionate about indie games and supporting creators.",
    },
    {
      year: "2023",
      title: "$200M Milestones",
      description:
        "Pixel Pledge crossed $200M in total funding, making us the leading indie game funding platform.",
    },
    {
      year: "2024",
      title: "1M+ Users",
      description:
        "We celebrated reaching 1 million users and helped launch 2,000+ successful games to the world.",
    },
  ];

  const team = [
    {
      name: "Sarah Chen",
      role: "Founder & CEO",
      bio: "Former game developer with 10+ years experience. Sarah founded Pixel Pledge after seeing how hard it was for indie devs to fund their dreams.",
      image: "👩‍💼",
    },
    {
      name: "Marcus Rodriguez",
      role: "CTO & Co-Founder",
      bio: "Tech visionary who built our platform from the ground up. Marcus ensures we stay on the cutting edge of technology.",
      image: "👨‍💻",
    },
    {
      name: "Emily Watson",
      role: "Head of Community",
      bio: "Community builder and gaming enthusiast. Emily ensures our community thrives and feels supported every day.",
      image: "👩‍🦰",
    },
    {
      name: "James Park",
      role: "VP of Operations",
      bio: "Operations expert who keeps everything running smoothly. James is obsessed with efficiency and user experience.",
      image: "👨‍💼",
    },
    {
      name: "Lisa Anderson",
      role: "Head of Creator Relations",
      bio: "Dedicated to supporting our creators. Lisa works directly with developers to ensure they have everything they need.",
      image: "👩‍🎨",
    },
    {
      name: "David Kim",
      role: "Lead Designer",
      bio: "Design perfectionist who makes sure every pixel is perfect. David is passionate about beautiful, intuitive interfaces.",
      image: "👨‍🎨",
    },
  ];

  const stats = [
    {
      number: "1M+",
      label: "Active Users",
    },
    {
      number: "2K+",
      label: "Games Funded",
    },
    {
      number: "$200M+",
      label: "Total Funding",
    },
    {
      number: "150+",
      label: "Countries",
    },
  ];

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

        {/* Radial fade */}
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
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
              About{" "}
              <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                Pixel Pledge
              </span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
              We're on a mission to empower indie game developers and connect
              them with a global community of supporters. Since 2020, we've
              helped bring thousands of amazing games to life.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  data-animate
                  className={`transform transition duration-1000 text-center ${
                    visibleCards.has(`stat-${idx}`)
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-95"
                  }`}
                  id={`stat-${idx}`}
                >
                  <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-slate-600 font-semibold">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left */}
              <div
                data-animate
                className={`transform transition duration-1000 ${
                  visibleCards.has("story-left")
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-10"
                }`}
                id="story-left"
              >
                <div className="space-y-6">
                  <h2 className="text-4xl font-bold text-slate-900">
                    Our Story
                  </h2>

                  <p className="text-lg text-slate-600 leading-relaxed">
                    In 2020, Sarah Chen was working as a game developer when she
                    realized a critical problem: amazing indie games were
                    struggling to find funding. Traditional funding sources
                    weren't accessible, and crowdfunding platforms didn't
                    understand game developers' unique needs.
                  </p>

                  <p className="text-lg text-slate-600 leading-relaxed">
                    With co-founder Marcus Rodriguez, Sarah decided to build a
                    platform specifically designed for game developers. They
                    wanted to create a space where creativity could thrive,
                    where backers could support the games they loved, and where
                    innovation could flourish.
                  </p>

                  <p className="text-lg text-slate-600 leading-relaxed">
                    Today, Pixel Pledge is the leading platform for indie game
                    funding, with over 1 million users and $200 million in total
                    funding across 2,000+ successful games.
                  </p>

                  <button className="mt-4 flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition">
                    Read our full story <ArrowRight size={20} />
                  </button>
                </div>
              </div>

              {/* Right */}
              <div
                data-animate
                className={`transform transition duration-1000 delay-200 ${
                  visibleCards.has("story-right")
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-10"
                }`}
                id="story-right"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-violet-400 rounded-3xl opacity-20 blur-2xl"></div>
                  <div className="relative bg-white rounded-3xl p-8 border border-slate-200 shadow-xl">
                    <div className="text-6xl mb-4">🎮</div>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      "We started Pixel Pledge because we believed every
                      creative person deserves the opportunity to bring their
                      vision to life. That belief drives everything we do
                      today."
                    </p>
                    <p className="mt-6 font-bold text-slate-900">Sarah Chen</p>
                    <p className="text-sm text-slate-600">Founder & CEO</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-24 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">
                Our Core Values
              </h2>
              <p className="text-lg text-slate-600">
                What drives us every single day
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, idx) => (
                <div
                  key={idx}
                  data-animate
                  className={`transform transition duration-1000 p-8 rounded-2xl bg-slate-50 border border-slate-200 hover:shadow-lg hover:scale-105 ${
                    visibleCards.has(`value-${idx}`)
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  id={`value-${idx}`}
                >
                  <div className="text-blue-600 mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Milestones Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">
                Our Journey
              </h2>
              <p className="text-lg text-slate-600">
                Key moments in our growth
              </p>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 to-violet-600 transform -translate-x-1/2"></div>

              {/* Timeline Events */}
              <div className="space-y-12">
                {milestones.map((milestone, idx) => (
                  <div
                    key={idx}
                    data-animate
                    className={`transform transition duration-1000 ${
                      visibleCards.has(`milestone-${idx}`)
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-10"
                    }`}
                    id={`milestone-${idx}`}
                  >
                    <div
                      className={`grid md:grid-cols-2 gap-8 ${idx % 2 === 1 ? "md:direction-rtl" : ""}`}
                    >
                      {/* Content */}
                      <div className={idx % 2 === 1 ? "md:order-2" : ""}>
                        <div className="bg-white rounded-2xl p-8 border border-slate-200 hover:shadow-lg transition">
                          <div className="text-3xl font-bold text-blue-600 mb-2">
                            {milestone.year}
                          </div>
                          <h3 className="text-2xl font-bold text-slate-900 mb-3">
                            {milestone.title}
                          </h3>
                          <p className="text-slate-600 leading-relaxed">
                            {milestone.description}
                          </p>
                        </div>
                      </div>

                      {/* Timeline Dot */}
                      <div className="hidden md:flex items-center justify-center">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-violet-600 rounded-full border-4 border-white shadow-lg flex items-center justify-center text-white font-bold">
                          {idx + 1}
                        </div>
                      </div>

                      {/* Empty Space */}
                      <div className="hidden md:block"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-24 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">
                Meet Our Team
              </h2>
              <p className="text-lg text-slate-600">
                The passionate people behind Pixel Pledge
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, idx) => (
                <div
                  key={idx}
                  data-animate
                  className={`transform transition duration-1000 bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:shadow-lg hover:scale-105 ${
                    visibleCards.has(`team-${idx}`)
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  id={`team-${idx}`}
                >
                  <div className="text-6xl mb-4 text-center">
                    {member.image}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 text-center mb-1">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-semibold text-center mb-4">
                    {member.role}
                  </p>
                  <p className="text-slate-600 text-center text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <div
              data-animate
              className={`transform transition duration-1000 ${
                visibleCards.has("mission")
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-95"
              }`}
              id="mission"
            >
              <div className="inline-block mb-6">
                <div className="flex items-center gap-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full font-semibold">
                  <Lightbulb size={20} />
                  Our Mission
                </div>
              </div>

              <h2 className="text-5xl font-bold text-slate-900 mb-8">
                Democratizing Game Funding for{" "}
                <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                  Everyone
                </span>
              </h2>

              <p className="text-xl text-slate-600 leading-relaxed mb-8">
                We believe every talented game developer deserves the
                opportunity to bring their vision to life, regardless of their
                background or access to traditional funding. Our mission is to
                break down barriers, connect creators with supporters, and build
                the future of gaming together.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition flex items-center justify-center gap-2">
                  Support a Creator
                  <ArrowRight size={20} />
                </button>
                <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition">
                  Become a Creator
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Careers Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-24 bg-white">
          <div className="max-w-4xl mx-auto">
            <div
              data-animate
              className={`transform transition duration-1000 text-center rounded-3xl bg-gradient-to-r from-blue-50 to-violet-50 p-12 border border-blue-200 ${
                visibleCards.has("careers")
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              id="careers"
            >
              <h2 className="text-4xl font-bold text-slate-900 mb-4">
                Join Our Team
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                We're always looking for passionate people who want to help
                bring indie games to the world. Join us in our mission to
                revolutionize game funding.
              </p>
              <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition inline-flex items-center gap-2">
                View Open Positions
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Ready to be part of the{" "}
              <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                gaming revolution
              </span>
              ?
            </h2>
            <p className="text-xl text-slate-600 mb-8">
              Whether you're a creator looking to fund your game or a gamer
              wanting to support indie devs, Pixel Pledge is your home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition">
                Explore Games
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition">
                Start Your Campaign
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
