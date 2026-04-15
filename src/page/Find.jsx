import React, { useState, useEffect } from "react";
import {
  Search as SearchIcon,
  X,
  ChevronDown,
  Filter,
  Grid,
  List,
  Star,
  Users,
  Calendar,
} from "lucide-react";

const Search = () => {
  const [visibleCards, setVisibleCards] = useState(new Set());
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [selectedSort, setSelectedSort] = useState("trending");
  const [viewMode, setViewMode] = useState("grid");
  const [priceRange, setPriceRange] = useState([0, 1000000]);

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

  // Sample game data
  const allGames = [
    {
      id: 1,
      title: "Neon Prophecy",
      category: "action-rpg",
      status: "active",
      image: "linear-gradient(135deg, #9b4dff 0%, #7b2cbf 100%)",
      funded: 245000,
      goal: 300000,
      backers: 1250,
      rating: 4.8,
      daysLeft: 14,
      team: "Studio Games",
      description:
        "An epic action RPG with stunning visuals and immersive gameplay.",
    },
    {
      id: 2,
      title: "Fortnite Arena",
      category: "battle-royale",
      status: "active",
      image: "linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%)",
      funded: 450000,
      goal: 400000,
      backers: 3200,
      rating: 4.9,
      daysLeft: 8,
      team: "Epic Play Studios",
      description:
        "Intense multiplayer battle royale with cutting-edge graphics.",
    },
    {
      id: 3,
      title: "Cyber Nexus",
      category: "puzzle",
      status: "active",
      image: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
      funded: 180000,
      goal: 250000,
      backers: 890,
      rating: 4.6,
      daysLeft: 22,
      team: "Mind Games Inc",
      description: "Brain-bending puzzle game with mind-twisting challenges.",
    },
    {
      id: 4,
      title: "Shadow Quest",
      category: "adventure",
      status: "completed",
      image: "linear-gradient(135deg, #1f2937 0%, #374151 100%)",
      funded: 500000,
      goal: 200000,
      backers: 4100,
      rating: 4.7,
      daysLeft: 0,
      team: "Dark Knight Studios",
      description:
        "Epic adventure across mystical lands and dangerous dungeons.",
    },
    {
      id: 5,
      title: "Pixel Paradise",
      category: "platformer",
      status: "active",
      image: "linear-gradient(135deg, #ec4899 0%, #f43f5e 100%)",
      funded: 120000,
      goal: 180000,
      backers: 620,
      rating: 4.5,
      daysLeft: 18,
      team: "Retro Games Studio",
      description: "Charming pixel-art platformer with addictive gameplay.",
    },
    {
      id: 6,
      title: "Space Explorer",
      category: "strategy",
      status: "active",
      image: "linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%)",
      funded: 380000,
      goal: 350000,
      backers: 2100,
      rating: 4.8,
      daysLeft: 12,
      team: "Cosmic Games",
      description: "Strategic space exploration with resource management.",
    },
    {
      id: 7,
      title: "Horror Manor",
      category: "horror",
      status: "active",
      image: "linear-gradient(135deg, #7c2d12 0%, #92400e 100%)",
      funded: 95000,
      goal: 150000,
      backers: 520,
      rating: 4.9,
      daysLeft: 25,
      team: "Scare Studios",
      description: "Terrifying horror experience with immersive atmosphere.",
    },
    {
      id: 8,
      title: "Racing Legends",
      category: "racing",
      status: "active",
      image: "linear-gradient(135deg, #dc2626 0%, #991b1b 100%)",
      funded: 310000,
      goal: 300000,
      backers: 1800,
      rating: 4.7,
      daysLeft: 10,
      team: "Speed Games",
      description: "High-speed racing action with realistic physics.",
    },
    {
      id: 9,
      title: "Music Beats",
      category: "music",
      status: "completed",
      image: "linear-gradient(135deg, #059669 0%, #047857 100%)",
      funded: 280000,
      goal: 200000,
      backers: 1400,
      rating: 4.6,
      daysLeft: 0,
      team: "Melody Games",
      description: "Rhythm game with amazing soundtracks.",
    },
    {
      id: 10,
      title: "Fantasy Kingdoms",
      category: "fantasy",
      status: "active",
      image: "linear-gradient(135deg, #8b5cf6 0%, #a78bfa 100%)",
      funded: 420000,
      goal: 400000,
      backers: 2900,
      rating: 4.8,
      daysLeft: 15,
      team: "Kingdom Studios",
      description: "Immersive fantasy world with epic quests.",
    },
    {
      id: 11,
      title: "Indie Maker",
      category: "simulation",
      status: "active",
      image: "linear-gradient(135deg, #f59e0b 0%, #f97316 100%)",
      funded: 150000,
      goal: 200000,
      backers: 750,
      rating: 4.5,
      daysLeft: 20,
      team: "Sim Games Pro",
      description: "Create and manage your own game development studio.",
    },
    {
      id: 12,
      title: "Mystical Dreams",
      category: "adventure",
      status: "active",
      image: "linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)",
      funded: 200000,
      goal: 280000,
      backers: 980,
      rating: 4.7,
      daysLeft: 19,
      team: "Dream Studios",
      description: "Surreal adventure through magical dreamscapes.",
    },
  ];

  const categories = [
    { value: "all", label: "All Categories" },
    { value: "action-rpg", label: "Action RPG" },
    { value: "battle-royale", label: "Battle Royale" },
    { value: "puzzle", label: "Puzzle" },
    { value: "adventure", label: "Adventure" },
    { value: "platformer", label: "Platformer" },
    { value: "strategy", label: "Strategy" },
    { value: "horror", label: "Horror" },
    { value: "racing", label: "Racing" },
    { value: "music", label: "Music" },
    { value: "fantasy", label: "Fantasy" },
    { value: "simulation", label: "Simulation" },
  ];

  const statuses = [
    { value: "all", label: "All Status" },
    { value: "active", label: "Active Campaign" },
    { value: "completed", label: "Completed" },
  ];

  const sortOptions = [
    { value: "trending", label: "Trending" },
    { value: "newest", label: "Newest" },
    { value: "most-funded", label: "Most Funded" },
    { value: "highest-rated", label: "Highest Rated" },
    { value: "ending-soon", label: "Ending Soon" },
  ];

  // Filter games based on search and filters
  const filteredGames = allGames.filter((game) => {
    const matchesSearch =
      game.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      game.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || game.category === selectedCategory;
    const matchesStatus =
      selectedStatus === "all" || game.status === selectedStatus;

    return matchesSearch && matchesCategory && matchesStatus;
  });

  // Sort games
  const sortedGames = [...filteredGames].sort((a, b) => {
    switch (selectedSort) {
      case "trending":
        return b.backers - a.backers;
      case "newest":
        return b.id - a.id;
      case "most-funded":
        return b.funded - a.funded;
      case "highest-rated":
        return b.rating - a.rating;
      case "ending-soon":
        return a.daysLeft - b.daysLeft;
      default:
        return 0;
    }
  });

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
        {/* Search Header */}
        <section className="px-4 sm:px-6 lg:px-8 py-12 bg-gradient-to-b from-transparent via-white to-white">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">
              Discover Amazing{" "}
              <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                Games
              </span>
            </h1>

            {/* Search Bar */}
            <div className="relative mb-8">
              <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search games by name, genre, or developer..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-full border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <X size={20} />
                </button>
              )}
            </div>

            {/* Filter and View Controls */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="flex flex-wrap gap-3">
                <div className="relative">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="appearance-none pl-4 pr-10 py-2 rounded-full border border-slate-300 bg-white text-sm font-medium text-slate-900 hover:border-blue-400 transition cursor-pointer"
                  >
                    {categories.map((cat) => (
                      <option key={cat.value} value={cat.value}>
                        {cat.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                </div>

                <div className="relative">
                  <select
                    value={selectedStatus}
                    onChange={(e) => setSelectedStatus(e.target.value)}
                    className="appearance-none pl-4 pr-10 py-2 rounded-full border border-slate-300 bg-white text-sm font-medium text-slate-900 hover:border-blue-400 transition cursor-pointer"
                  >
                    {statuses.map((status) => (
                      <option key={status.value} value={status.value}>
                        {status.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                </div>

                <div className="relative">
                  <select
                    value={selectedSort}
                    onChange={(e) => setSelectedSort(e.target.value)}
                    className="appearance-none pl-4 pr-10 py-2 rounded-full border border-slate-300 bg-white text-sm font-medium text-slate-900 hover:border-blue-400 transition cursor-pointer"
                  >
                    {sortOptions.map((sort) => (
                      <option key={sort.value} value={sort.value}>
                        {sort.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                </div>
              </div>

              {/* View Toggle */}
              <div className="flex gap-2">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded-lg transition ${
                    viewMode === "grid"
                      ? "bg-blue-600 text-white"
                      : "bg-white border border-slate-300 text-slate-600 hover:border-blue-400"
                  }`}
                >
                  <Grid size={20} />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded-lg transition ${
                    viewMode === "list"
                      ? "bg-blue-600 text-white"
                      : "bg-white border border-slate-300 text-slate-600 hover:border-blue-400"
                  }`}
                >
                  <List size={20} />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Results Count */}
        <section className="px-4 sm:px-6 lg:px-8 py-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <p className="text-slate-600 text-sm">
              Showing{" "}
              <span className="font-bold text-slate-900">
                {sortedGames.length}
              </span>{" "}
              games
              {searchQuery && ` matching "${searchQuery}"`}
            </p>
          </div>
        </section>

        {/* Games Grid/List */}
        <section className="px-4 bg-white sm:px-6 lg:px-8 py-12">
          <div className="max-w-6xl mx-auto">
            {sortedGames.length > 0 ? (
              <div
                className={
                  viewMode === "grid"
                    ? "grid md:grid-cols-3 gap-8"
                    : "space-y-4"
                }
              >
                {sortedGames.map((game, idx) => (
                  <div
                    key={game.id}
                    data-animate
                    className={`transform transition duration-1000 ${
                      visibleCards.has(`game-${game.id}`)
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-10"
                    }`}
                    id={`game-${game.id}`}
                  >
                    {viewMode === "grid" ? (
                      // Grid View
                      <div className="group cursor-pointer">
                        <div className="relative overflow-hidden rounded-2xl mb-4 h-56 group-hover:scale-110 transition duration-500">
                          <div
                            className="w-full h-full"
                            style={{ background: game.image }}
                          ></div>
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-4">
                            <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
                              View Details
                            </button>
                          </div>
                          {game.status === "completed" && (
                            <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                              Completed
                            </div>
                          )}
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 mb-2">
                          {game.title}
                        </h3>
                        <p className="text-sm text-slate-600 mb-3">
                          {game.team}
                        </p>

                        {/* Stats */}
                        <div className="space-y-2 mb-4">
                          <div className="flex justify-between text-sm">
                            <span className="text-slate-600">Progress</span>
                            <span className="font-semibold text-slate-900">
                              {Math.round((game.funded / game.goal) * 100)}%
                            </span>
                          </div>
                          <div className="w-full bg-slate-200 rounded-full h-2">
                            <div
                              className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-500"
                              style={{
                                width: `${Math.min((game.funded / game.goal) * 100, 100)}%`,
                              }}
                            ></div>
                          </div>
                        </div>

                        {/* Game Info */}
                        <div className="flex flex-wrap gap-3 text-xs text-slate-600">
                          <div className="flex items-center gap-1">
                            <Users size={14} />
                            <span>{game.backers} backers</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Star size={14} className="text-yellow-400" />
                            <span>{game.rating}</span>
                          </div>
                          {game.daysLeft > 0 && (
                            <div className="flex items-center gap-1">
                              <Calendar size={14} />
                              <span>{game.daysLeft} days left</span>
                            </div>
                          )}
                        </div>
                      </div>
                    ) : (
                      // List View
                      <div className="bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-lg transition flex gap-6">
                        <div
                          className="w-40 h-40 rounded-xl flex-shrink-0"
                          style={{ background: game.image }}
                        ></div>
                        <div className="flex-1 flex flex-col justify-between">
                          <div>
                            <div className="flex items-start justify-between mb-3">
                              <div>
                                <h3 className="text-xl font-bold text-slate-900">
                                  {game.title}
                                </h3>
                                <p className="text-sm text-slate-600">
                                  {game.team}
                                </p>
                              </div>
                              {game.status === "completed" && (
                                <div className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                                  Completed
                                </div>
                              )}
                            </div>
                            <p className="text-slate-600 text-sm mb-4">
                              {game.description}
                            </p>
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="flex flex-wrap gap-4 text-sm text-slate-600">
                              <div className="flex items-center gap-1">
                                <Users size={16} />
                                <span>{game.backers} backers</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Star size={16} className="text-yellow-400" />
                                <span>{game.rating}</span>
                              </div>
                              {game.daysLeft > 0 && (
                                <div className="flex items-center gap-1">
                                  <Calendar size={16} />
                                  <span>{game.daysLeft} days left</span>
                                </div>
                              )}
                            </div>
                            <div className="text-right">
                              <div className="text-sm text-slate-600 mb-1">
                                {Math.round((game.funded / game.goal) * 100)}%
                                funded
                              </div>
                              <div className="w-32 bg-slate-200 rounded-full h-2">
                                <div
                                  className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full"
                                  style={{
                                    width: `${Math.min((game.funded / game.goal) * 100, 100)}%`,
                                  }}
                                ></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              // No Results
              <div className="text-center py-20">
                <SearchIcon className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  No games found
                </h3>
                <p className="text-slate-600 mb-6">
                  Try adjusting your search filters or keywords
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("all");
                    setSelectedStatus("all");
                  }}
                  className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Search;
