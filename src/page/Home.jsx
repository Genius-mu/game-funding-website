import { useState, useEffect } from "react";
import { ChevronDown, ChevronRight, Play } from "lucide-react";

const PixelPledge = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [scrollPosition, setScrollPosition] = useState(0);
  const [visibleCards, setVisibleCards] = useState(new Set());

  useEffect(() => {
    const handleScroll = () => setScrollPosition(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  const trendingProjects = [
    {
      id: 1,
      title: "Neon Prophecy",
      image: "linear-gradient(135deg, #9b4dff 0%, #7b2cbf 100%)",
      category: "Action RPG",
      funded: 250000,
      goal: 400000,
    },
    {
      id: 2,
      title: "Fortnite Arena",
      image: "linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%)",
      category: "Battle Royale",
      funded: 180000,
      goal: 400000,
    },
    {
      id: 3,
      title: "Cyber Nexus",
      image: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
      category: "Puzzle Game",
      funded: 180000,
      goal: 250000,
    },
  ];

  const whyChooseUs = [
    {
      title: "Smart Funding Boost",
      description:
        "Get smart AI-powered project recommendations and boost your visibility by improving your data.",
    },
    {
      title: "Community Management",
      description:
        "Connect with fans, run community challenges, and keep players engaged during development.",
    },
    {
      title: "Analytics Engine",
      description:
        "Deep insights into player behavior with analytics tools and detailed reports on user engagement.",
    },
  ];

  const testimonials = [
    {
      name: "JeffR Studios",
      title: "CEO",
      image: "JR",
      comment:
        "Pixel Pledge helped us fund our indie project in just 3 weeks. The platform is intuitive and supportive.",
    },
    {
      name: "Mavs Studios",
      title: "Lead Dev",
      image: "MS",
      comment:
        "The community tools are amazing. We built a dedicated fanbase even before launch.",
    },
    {
      name: "Neva Studios",
      title: "Producer",
      image: "NS",
      comment:
        "Best decision for indie devs. The funding insights helped us optimize our campaign perfectly.",
    },
  ];

  const discoverProjects = [
    {
      title: "Neon Prophecy",
      image: "linear-gradient(135deg, #9b4dff 0%, #7b2cbf 100%)",
    },
    {
      title: "Fortnite Arena",
      image: "linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%)",
    },
    {
      title: "Cyber Nexus",
      image: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
    },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden relative">
      {/* Background System */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Base background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50" />

        {/* Grid */}
        {/* <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: `
        linear-gradient(to right, rgba(59,130,246,0.25) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(59,130,246,0.25) 1px, transparent 1px)
      `,
            backgroundSize: "40px 40px",
          }}
        /> */}
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

      {/* Content Container */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="mt-20 mb-10 flex items-center justify-center">
          <div className="w-[90%] flex flex-col gap-y-4 items-center justify-center">
            <h2 className="text-5xl font-bold bg-gradient-to-b from-black via-[#00202d] to-[#015060] bg-clip-text text-transparent">
              Turn Your Game Idea Into Reality
            </h2>
            <h2 className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent text-7xl font-bold">
              Pixel Pledge
            </h2>
            <p className="text-gray-800 max-w-[450px] text-center font-medium">
              An innovative puzzle world blending retro charm and modern twists.
              Pledge to make it real-every dollar counts.
            </p>
            <div className="flex justify-center items-center gap-x-4 w-full">
              <a
                href=""
                className="
    inline-flex items-center justify-center
    px-7 py-3
    rounded-full
    text-white font-semibold tracking-wide

    bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700
    shadow-lg shadow-blue-900/40

    border border-white/10
    backdrop-blur-md

    transition-all duration-300 ease-out
    hover:scale-105
    hover:shadow-xl hover:shadow-blue-500/40
    hover:from-blue-400 hover:to-blue-600

    active:scale-95
  "
              >
                Pledge Now
              </a>
              <a
                href=""
                className="px-7 py-3 border-2 border-violet-600 rounded-4xl shadow-[0_6px_20px_#999]  text-violet-600 flex justify-center items-center gap-x-2 bg-white hover:text-white hover:bg-violet-600 group transition duration-300 ease-in-out"
              >
                <span className="w-fit h-fit p-1 rounded-2xl bg-violet-600 hover:scale-105 transform transition duration-300 ease-in-out group-hover:bg-white">
                  <Play
                    size={10}
                    strokeWidth={3}
                    className="text-white transition duration-300 ease-in-out group-hover:text-violet-600"
                  />
                </span>
                Watch Trailer
              </a>
            </div>
          </div>
        </section>

        {/* Featured Game Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-b from-transparent via-white to-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Featured Game Card */}
              <div
                data-animate
                className={`transform transition duration-1000 ${visibleCards.has("featured") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                id="featured"
              >
                <div className="relative flex justify-center items-center group">
                  {/* Glow Effect */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 via-blue-500 to-purple-400 rounded-3xl opacity-30 blur-2xl group-hover:opacity-50 transition duration-500"></div>

                  {/* Game Card */}
                  <div className="relative bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-6 shadow-2xl w-64 h-72 flex flex-col items-center justify-center text-white text-center transform group-hover:scale-105 transition duration-500">
                    {/* Game Icon/Image */}
                    <div className="w-full h-48 flex items-center justify-center mb-4">
                      <span className="text-7xl">🍄</span>
                    </div>

                    {/* Game Name */}
                    <h3 className="text-xl font-bold mb-1">Mario</h3>
                    <p className="text-sm text-blue-100 mb-4">Kingdom battle</p>
                  </div>
                </div>
              </div>

              {/* Game Details */}
              <div
                data-animate
                className={`transform transition duration-1000 delay-200 ${visibleCards.has("details") ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
                id="details"
              >
                <div className="flex flex-col space-y-6">
                  {/* Developer Info */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-xs font-bold">
                      NS
                    </div>
                    <span className="text-sm font-medium text-slate-900">
                      By Nova Studios
                    </span>
                  </div>

                  {/* Game Title */}
                  <div>
                    <h2 className="text-4xl font-bold text-slate-900 mb-2">
                      MARIO KART - KINGDOM BATTLE
                    </h2>
                    <p className="text-slate-600 text-base">
                      Drift, dodge, and dominate the track.
                    </p>
                  </div>

                  {/* Stats Row */}
                  <div className="flex items-center gap-8 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-slate-900">Raised</span>
                      <span className="font-semibold text-slate-700 text-base">
                        $260
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-slate-900">Backers</span>
                      <span className="font-semibold text-slate-700 text-base">
                        45%
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-slate-900">
                        Days left
                      </span>
                      <span className="font-semibold text-slate-700 text-base">
                        14 days
                      </span>
                    </div>
                  </div>

                  {/* Support Button */}
                  <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-3 rounded-full hover:shadow-lg hover:shadow-blue-200 transition transform hover:scale-105 text-base">
                    Support this game
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-24 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold bg-gradient-to-b from-black via-[#00202d] to-[#015060] bg-clip-text text-transparent mb-4">
                Why choose us
              </h2>
              <p className="text-slate-600">
                For AI teams. Scale Data Engine organize your models by
                improving your data.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              {whyChooseUs.map((item, idx) => (
                <div
                  key={idx}
                  data-animate
                  className={`flex group flex-col justify-center items-center`}
                  id={`why-${idx}`}
                >
                  <div className="bg-blue-700 ease-in-out group-hover:-translate-y-2.5 transition duration-300 border-4 border-blue-200 py-2 rounded-t-3xl h-[13em] w-full">
                    <h2 className="text-white font-medium text-xl text-center">
                      {item.title}
                    </h2>
                  </div>
                  <div className="flex ease-in-out group-hover:translate-y-1.5 transition duration-300 justify-center items-center bg-white shadow h-[15em] w-[calc(100%-6px)] px-10 rounded-3xl -mt-41">
                    <p className="text-center">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trending Projects */}
        <section className="px-4 sm:px-6 lg:px-8 py-24 bg-gradient-to-b from-white via-white to-transparent">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-4xl font-bold text-slate-900 mb-2">
                  Trending Projects{" "}
                  <span className="text-blue-600">this week</span>
                </h2>
              </div>
              <button className="text-blue-600 hover:text-blue-700 flex items-center gap-2">
                <span className="text-sm font-semibold">Browse</span>
                <ChevronDown size={20} />
              </button>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {trendingProjects.map((project, idx) => (
                <div
                  key={idx}
                  data-animate
                  className={`transform transition duration-1000 group cursor-pointer bg-white shadow-xl p-2 h-[30em] rounded-3xl border-2 border-gray-200`}
                  id={`trend-${idx}`}
                >
                  <div className="relative overflow-hidden rounded-2xl mb-4 h-[60%] group-hover:scale-102 transition duration-500">
                    <div
                      className="w-full h-full"
                      style={{ background: project.image }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-300"></div>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-600 mb-2">
                    {project.category}
                  </p>

                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="font-semibold text-slate-900">
                        {Math.round((project.funded / project.goal) * 100)}%
                      </span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-4">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-blue-600 h-4 rounded-full transition-all duration-500"
                        style={{
                          width: `${(project.funded / project.goal) * 100}%`,
                        }}
                      ></div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600"></div>
                    <span className="text-sm text-slate-600">Alex Studios</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">
                Testimonials
              </h2>
              <p className="text-slate-600">
                For AI teams. Scale Data Engine organize your models by
                improving your data.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((test, idx) => (
                <div
                  key={idx}
                  data-animate
                  className={`transform transition duration-1000 p-6 rounded-2xl bg-white border border-slate-200 hover:shadow-xl hover:scale-105 ${
                    visibleCards.has(`test-${idx}`)
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  id={`test-${idx}`}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 text-white flex items-center justify-center font-bold text-sm">
                      {test.image}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">{test.name}</h4>
                      <p className="text-sm text-slate-500">{test.title}</p>
                    </div>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    {test.comment}
                  </p>
                  <div className="mt-4 flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400">
                        ⭐
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Join Funders Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-24 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
          <div className="max-w-6xl mx-auto text-center">
            <div
              data-animate
              className={`transform transition duration-1000 ${visibleCards.has("join") ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
              id="join"
            >
              <h2 className="text-5xl font-bold mb-6">Join 10k+ funders</h2>
              <p className="text-blue-100 mb-12 text-lg max-w-2xl mx-auto">
                Support innovative game developers and be part of the next
                gaming revolution. Your funding helps bring amazing games to
                life.
              </p>
              <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition transform hover:scale-105">
                Get Started Now
              </button>
            </div>
          </div>
        </section>

        {/* Discover Projects */}
        <section className="px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-sm text-slate-500 uppercase tracking-widest mb-2">
                Explore
              </p>
              <h2 className="text-4xl font-bold text-slate-900 mb-4">
                Discover Projects
              </h2>
              <p className="text-slate-600">
                For AI teams. Scale Data Engine organize your models by
                improving your data.
              </p>
            </div>

            {/* Category Tabs */}
            <div className="flex justify-center gap-3 mb-12 flex-wrap">
              {[
                "All",
                "Trending",
                "New",
                "Multiplayer",
                "Top",
                "Indie",
                "Fashion",
                "Art",
              ].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab.toLowerCase())}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                    activeTab === tab.toLowerCase()
                      ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Project Grid */}
            <div className="grid md:grid-cols-3 gap-8">
              {discoverProjects.map((project, idx) => (
                <div
                  key={idx}
                  data-animate
                  className={`transform transition duration-1000 group cursor-pointer ${
                    visibleCards.has(`discover-${idx}`)
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  id={`discover-${idx}`}
                >
                  <div className="relative overflow-hidden rounded-2xl aspect-square group-hover:scale-110 transition duration-500">
                    <div
                      className="w-full h-full flex items-center justify-center"
                      style={{ background: project.image }}
                    >
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition duration-300"></div>
                      <div className="relative text-white text-center z-10">
                        <div className="text-5xl mb-4">🎮</div>
                        <p className="font-bold text-lg">{project.title}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <button className="text-blue-600 hover:text-blue-700 font-semibold flex items-center justify-center gap-2 mx-auto">
                <span>View all projects</span>
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PixelPledge;
