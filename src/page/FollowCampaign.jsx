import React, { useState, useEffect } from "react";
import {
  Bell,
  Heart,
  Share2,
  Clock,
  TrendingUp,
  Users,
  Star,
  CheckCircle,
  X,
  ArrowRight,
  Eye,
  EyeOff,
} from "lucide-react";

const FollowCampaign = () => {
  const [visibleCards, setVisibleCards] = useState(new Set());
  const [followedCampaigns, setFollowedCampaigns] = useState([]);
  const [notificationSettings, setNotificationSettings] = useState({
    updates: true,
    goalReached: true,
    newRewards: true,
    livestream: true,
    dailyEmail: false,
    weeklyDigest: true,
  });
  const [selectedTab, setSelectedTab] = useState("active");
  const [showAllNotifications, setShowAllNotifications] = useState(false);

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

  // Sample campaign data
  const campaigns = [
    {
      id: 1,
      title: "Neon Prophecy",
      category: "Action RPG",
      image: "linear-gradient(135deg, #9b4dff 0%, #7b2cbf 100%)",
      developer: "Studio Games",
      status: "active",
      funded: 245000,
      goal: 300000,
      backers: 1250,
      rating: 4.8,
      daysLeft: 14,
      description:
        "An epic action RPG with stunning visuals and immersive gameplay.",
      updates: 24,
      followers: 3420,
      isFollowed: true,
    },
    {
      id: 2,
      title: "Fortnite Arena",
      category: "Battle Royale",
      image: "linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%)",
      developer: "Epic Play Studios",
      status: "active",
      funded: 450000,
      goal: 400000,
      backers: 3200,
      rating: 4.9,
      daysLeft: 8,
      description:
        "Intense multiplayer battle royale with cutting-edge graphics.",
      updates: 38,
      followers: 5890,
      isFollowed: true,
    },
    {
      id: 3,
      title: "Cyber Nexus",
      category: "Puzzle",
      image: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
      developer: "Mind Games Inc",
      status: "active",
      funded: 180000,
      goal: 250000,
      backers: 890,
      rating: 4.6,
      daysLeft: 22,
      description: "Brain-bending puzzle game with mind-twisting challenges.",
      updates: 19,
      followers: 2150,
      isFollowed: true,
    },
    {
      id: 4,
      title: "Shadow Quest",
      category: "Adventure",
      image: "linear-gradient(135deg, #1f2937 0%, #374151 100%)",
      developer: "Dark Knight Studios",
      status: "completed",
      funded: 500000,
      goal: 200000,
      backers: 4100,
      rating: 4.7,
      daysLeft: 0,
      description:
        "Epic adventure across mystical lands and dangerous dungeons.",
      updates: 42,
      followers: 7230,
      isFollowed: true,
    },
    {
      id: 5,
      title: "Fantasy Kingdoms",
      category: "Fantasy",
      image: "linear-gradient(135deg, #8b5cf6 0%, #a78bfa 100%)",
      developer: "Kingdom Studios",
      status: "active",
      funded: 420000,
      goal: 400000,
      backers: 2900,
      rating: 4.8,
      daysLeft: 15,
      description: "Immersive fantasy world with epic quests.",
      updates: 31,
      followers: 6100,
      isFollowed: true,
    },
  ];

  const recentUpdates = [
    {
      id: 1,
      campaign: "Fortnite Arena",
      title: "We've reached $400K! 🎉",
      description:
        "Our funding goal has been achieved! Thank you to all our amazing backers.",
      timestamp: "2 hours ago",
      type: "milestone",
    },
    {
      id: 2,
      campaign: "Neon Prophecy",
      title: "New Stretch Goal Unlocked",
      description:
        "We've unlocked the soundtrack expansion pack as a bonus reward!",
      timestamp: "5 hours ago",
      type: "update",
    },
    {
      id: 3,
      campaign: "Cyber Nexus",
      title: "Behind the Scenes Video",
      description:
        "Check out our latest development progress in this exclusive video.",
      timestamp: "1 day ago",
      type: "media",
    },
    {
      id: 4,
      campaign: "Fantasy Kingdoms",
      title: "Live Stream Tomorrow at 3 PM PST",
      description:
        "Join us for a live gameplay demo and Q&A session with the dev team.",
      timestamp: "2 days ago",
      type: "event",
    },
    {
      id: 5,
      campaign: "Shadow Quest",
      title: "Game Release Date Announced",
      description: "Mark your calendars - Shadow Quest launches on Q3 2024!",
      timestamp: "3 days ago",
      type: "announcement",
    },
  ];

  const handleToggleNotification = (key) => {
    setNotificationSettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleUnfollowCampaign = (campaignId) => {
    setFollowedCampaigns((prev) => prev.filter((id) => id !== campaignId));
  };

  const filteredCampaigns = campaigns.filter((campaign) => {
    if (selectedTab === "active") return campaign.status === "active";
    if (selectedTab === "completed") return campaign.status === "completed";
    return true;
  });

  const getUpdateIcon = (type) => {
    switch (type) {
      case "milestone":
        return "🎉";
      case "update":
        return "📝";
      case "media":
        return "🎬";
      case "event":
        return "📅";
      case "announcement":
        return "📢";
      default:
        return "✨";
    }
  };

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
        <section className="px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Your{" "}
              <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                Followed Campaigns
              </span>
            </h1>
            <p className="text-xl text-slate-600">
              Stay updated with all your favorite game projects in one place
            </p>
          </div>
        </section>

        {/* Main Grid */}
        <section className="px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            {/* Left Sidebar - Campaign List */}
            <div
              data-animate
              className={`transform transition duration-1000 ${visibleCards.has("campaigns-list") ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
              id="campaigns-list"
            >
              <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
                {/* Tabs */}
                <div className="flex border-b border-slate-200">
                  <button
                    onClick={() => setSelectedTab("active")}
                    className={`flex-1 px-4 py-4 font-semibold transition ${
                      selectedTab === "active"
                        ? "bg-blue-50 text-blue-600 border-b-2 border-blue-600"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    Active
                  </button>
                  <button
                    onClick={() => setSelectedTab("completed")}
                    className={`flex-1 px-4 py-4 font-semibold transition ${
                      selectedTab === "completed"
                        ? "bg-blue-50 text-blue-600 border-b-2 border-blue-600"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    Completed
                  </button>
                </div>

                {/* Campaign List */}
                <div className="divide-y divide-slate-200 max-h-[600px] overflow-y-auto">
                  {filteredCampaigns.map((campaign) => (
                    <button
                      key={campaign.id}
                      className="w-full p-4 hover:bg-slate-50 transition text-left border-l-4 border-transparent hover:border-blue-600"
                    >
                      <div className="flex gap-3">
                        <div
                          className="w-12 h-12 rounded-lg flex-shrink-0"
                          style={{ background: campaign.image }}
                        ></div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-bold text-slate-900 truncate text-sm">
                            {campaign.title}
                          </h3>
                          <p className="text-xs text-slate-600">
                            {campaign.developer}
                          </p>
                          <div className="text-xs text-blue-600 font-semibold mt-1">
                            {Math.round(
                              (campaign.funded / campaign.goal) * 100,
                            )}
                            % funded
                          </div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Middle Column - Updates Feed */}
            <div
              data-animate
              className={`transform transition duration-1000 delay-100 ${visibleCards.has("updates-feed") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              id="updates-feed"
            >
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-slate-900 px-4">
                  Latest Updates
                </h2>

                {recentUpdates
                  .slice(0, showAllNotifications ? undefined : 3)
                  .map((update) => (
                    <div
                      key={update.id}
                      className="bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-lg transition group cursor-pointer"
                    >
                      <div className="flex gap-4">
                        <div className="text-3xl flex-shrink-0">
                          {getUpdateIcon(update.type)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs text-blue-600 font-semibold mb-1">
                            {update.campaign}
                          </p>
                          <h3 className="font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition">
                            {update.title}
                          </h3>
                          <p className="text-sm text-slate-600 mb-3">
                            {update.description}
                          </p>
                          <p className="text-xs text-slate-500">
                            {update.timestamp}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}

                {!showAllNotifications && recentUpdates.length > 3 && (
                  <button
                    onClick={() => setShowAllNotifications(true)}
                    className="w-full py-3 text-blue-600 font-semibold hover:text-blue-700 transition"
                  >
                    View All Updates →
                  </button>
                )}

                {showAllNotifications && (
                  <button
                    onClick={() => setShowAllNotifications(false)}
                    className="w-full py-3 text-slate-600 font-semibold hover:text-slate-700 transition"
                  >
                    Show Less ↑
                  </button>
                )}
              </div>
            </div>

            {/* Right Column - Notifications Settings */}
            <div
              data-animate
              className={`transform transition duration-1000 delay-200 ${visibleCards.has("settings") ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
              id="settings"
            >
              <div className="bg-white rounded-2xl border border-slate-200 p-6 sticky top-24">
                <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <Bell className="w-5 h-5 text-blue-600" />
                  Notifications
                </h2>

                <div className="space-y-4">
                  {/* Campaign Updates */}
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={notificationSettings.updates}
                      onChange={() => handleToggleNotification("updates")}
                      className="w-5 h-5 rounded border-slate-300 text-blue-600 cursor-pointer"
                    />
                    <div className="flex-1">
                      <p className="font-semibold text-slate-900 group-hover:text-blue-600 transition">
                        Campaign Updates
                      </p>
                      <p className="text-xs text-slate-600">
                        New posts from creators
                      </p>
                    </div>
                  </label>

                  {/* Goal Reached */}
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={notificationSettings.goalReached}
                      onChange={() => handleToggleNotification("goalReached")}
                      className="w-5 h-5 rounded border-slate-300 text-blue-600 cursor-pointer"
                    />
                    <div className="flex-1">
                      <p className="font-semibold text-slate-900 group-hover:text-blue-600 transition">
                        Goal Reached
                      </p>
                      <p className="text-xs text-slate-600">
                        When campaigns hit their goal
                      </p>
                    </div>
                  </label>

                  {/* New Rewards */}
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={notificationSettings.newRewards}
                      onChange={() => handleToggleNotification("newRewards")}
                      className="w-5 h-5 rounded border-slate-300 text-blue-600 cursor-pointer"
                    />
                    <div className="flex-1">
                      <p className="font-semibold text-slate-900 group-hover:text-blue-600 transition">
                        New Rewards
                      </p>
                      <p className="text-xs text-slate-600">
                        Stretch goals unlocked
                      </p>
                    </div>
                  </label>

                  {/* Live Streams */}
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={notificationSettings.livestream}
                      onChange={() => handleToggleNotification("livestream")}
                      className="w-5 h-5 rounded border-slate-300 text-blue-600 cursor-pointer"
                    />
                    <div className="flex-1">
                      <p className="font-semibold text-slate-900 group-hover:text-blue-600 transition">
                        Live Streams
                      </p>
                      <p className="text-xs text-slate-600">
                        Scheduled streams & events
                      </p>
                    </div>
                  </label>

                  <div className="border-t border-slate-200 pt-4 mt-4">
                    {/* Daily Email */}
                    <label className="flex items-center gap-3 cursor-pointer group mb-4">
                      <input
                        type="checkbox"
                        checked={notificationSettings.dailyEmail}
                        onChange={() => handleToggleNotification("dailyEmail")}
                        className="w-5 h-5 rounded border-slate-300 text-blue-600 cursor-pointer"
                      />
                      <div className="flex-1">
                        <p className="font-semibold text-slate-900 group-hover:text-blue-600 transition">
                          Daily Digest
                        </p>
                        <p className="text-xs text-slate-600">Email at 8 AM</p>
                      </div>
                    </label>

                    {/* Weekly Digest */}
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={notificationSettings.weeklyDigest}
                        onChange={() =>
                          handleToggleNotification("weeklyDigest")
                        }
                        className="w-5 h-5 rounded border-slate-300 text-blue-600 cursor-pointer"
                      />
                      <div className="flex-1">
                        <p className="font-semibold text-slate-900 group-hover:text-blue-600 transition">
                          Weekly Digest
                        </p>
                        <p className="text-xs text-slate-600">Sunday at 6 PM</p>
                      </div>
                    </label>
                  </div>
                </div>

                <button className="w-full mt-6 bg-blue-600 text-white font-semibold py-3 rounded-full hover:bg-blue-700 transition">
                  Save Settings
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Campaign Metrics Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-24 bg-white/40 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-slate-900 mb-12">
              Your Followed Campaigns
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {campaigns.map((campaign, idx) => (
                <div
                  key={campaign.id}
                  data-animate
                  className={`transform transition duration-1000 ${
                    visibleCards.has(`campaign-card-${campaign.id}`)
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  id={`campaign-card-${campaign.id}`}
                >
                  <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl transition p-6">
                    {/* Campaign Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-slate-900 mb-1">
                          {campaign.title}
                        </h3>
                        <p className="text-sm text-slate-600">
                          {campaign.developer}
                        </p>
                      </div>
                      <button className="p-2 hover:bg-slate-100 rounded-lg transition">
                        <Heart className="w-6 h-6 text-red-500 fill-red-500" />
                      </button>
                    </div>

                    {/* Campaign Image */}
                    <div
                      className="w-full h-48 rounded-xl mb-4"
                      style={{ background: campaign.image }}
                    ></div>

                    {/* Description */}
                    <p className="text-slate-600 mb-4">
                      {campaign.description}
                    </p>

                    {/* Progress */}
                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-slate-600">Progress</span>
                        <span className="font-bold text-slate-900">
                          {Math.round((campaign.funded / campaign.goal) * 100)}%
                        </span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-3">
                        <div
                          className="bg-gradient-to-r from-blue-600 to-blue-700 h-3 rounded-full transition-all duration-500"
                          style={{
                            width: `${Math.min((campaign.funded / campaign.goal) * 100, 100)}%`,
                          }}
                        ></div>
                      </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-3 gap-4 mb-6 pb-6 border-b border-slate-200">
                      <div className="text-center">
                        <p className="text-2xl font-bold text-blue-600">
                          {campaign.backers.toLocaleString()}
                        </p>
                        <p className="text-xs text-slate-600 mt-1">Backers</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-yellow-500">
                          {campaign.rating}
                        </p>
                        <p className="text-xs text-slate-600 mt-1">Rating</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-green-600">
                          {campaign.daysLeft}
                        </p>
                        <p className="text-xs text-slate-600 mt-1">Days Left</p>
                      </div>
                    </div>

                    {/* Meta Info */}
                    <div className="space-y-2 mb-6 text-sm text-slate-600">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4" />
                        <span>{campaign.updates} updates posted</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        <span>
                          {campaign.followers.toLocaleString()} followers
                        </span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <button className="flex-1 bg-blue-600 text-white py-3 rounded-full font-semibold hover:bg-blue-700 transition flex items-center justify-center gap-2">
                        <Eye className="w-4 h-4" />
                        View Campaign
                      </button>
                      <button className="flex-1 border border-slate-300 text-slate-900 py-3 rounded-full font-semibold hover:bg-slate-50 transition flex items-center justify-center gap-2">
                        <Share2 className="w-4 h-4" />
                        Share
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tips Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-slate-900 mb-12">
              Pro Tips for Following Campaigns
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: "📧",
                  title: "Enable Email Digests",
                  description:
                    "Get weekly summaries of all campaign updates to stay informed without notification overload.",
                },
                {
                  icon: "⏰",
                  title: "Set Reminders",
                  description:
                    "Get notified when campaigns are about to end so you don't miss your chance to back.",
                },
                {
                  icon: "💬",
                  title: "Engage with Community",
                  description:
                    "Leave comments and questions in campaign discussions to show your support.",
                },
                {
                  icon: "🔔",
                  title: "Customize Notifications",
                  description:
                    "Choose which types of updates matter most to you to keep things relevant.",
                },
              ].map((tip, idx) => (
                <div
                  key={idx}
                  data-animate
                  className={`transform transition duration-1000 bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-lg ${
                    visibleCards.has(`tip-${idx}`)
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  id={`tip-${idx}`}
                >
                  <p className="text-4xl mb-4">{tip.icon}</p>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {tip.title}
                  </h3>
                  <p className="text-slate-600">{tip.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FollowCampaign;
