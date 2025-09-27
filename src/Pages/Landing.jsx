import React from "react";
import Header from "../assets/components/header";
import Footer from "../assets/components/footer";
import {
  ChevronDown,
  Plus,
  Search,
  Heart,
  MessageCircle,
  Share2,
  MoreHorizontal,
  Bookmark,
  TrendingUp,
  Briefcase,
  Users,
  LayoutGrid,
} from "lucide-react";

// --- Mock Data (Kept from original code) ---
const posts = [
  {
    id: 1,
    user: "Tech India",
    worksAt: "Deloitte",
    time: "2mo",
    avatar: "https://i.pravatar.cc/40?img=1",
    content: (
      <>
        DM if need ref in{" "}
        <span className="font-semibold text-[#00b656]">Deloitte USI</span>
      </>
    ),
    comments: 1071,
    reactions: "💚🤯🤣😍 1246",
    replyUser: "Web Development Engineer 1",
    replyText: "Yes I want",
  },
  {
    id: 2,
    user: "Consulting India",
    worksAt: "Tata Consultancy",
    time: "1mo",
    avatar: "https://i.pravatar.cc/40?img=2",
    content:
      "Got released from TCS in last week. HR mail said get allocated in 5 days or resign. What has TCS become...",
    comments: 95,
    reactions: "💔😮🙄 361",
    replyUser: "Tata Consultancy 1",
    replyText: "Did they call you to war room?",
  },
  {
    id: 3,
    user: "Finance India",
    worksAt: "Capgemini",
    time: "2w",
    avatar: "https://i.pravatar.cc/40?img=3",
    content:
      "Hey fishes, I have referrals at Big 4. If interested, please share your resume.",
    comments: 99,
    reactions: "💼👍 19",
    replyUser: "Graduate Accountant (Audit) 1",
    replyText: "Hey need referral",
  },
  {
    id: 4,
    user: "Engineer Talk",
    worksAt: "Accenture",
    time: "1w",
    avatar: "https://i.pravatar.cc/40?img=4",
    content:
      "Anyone here working on GenAI projects in Accenture? Would love to connect.",
    comments: 45,
    reactions: "🔥🤖👏 88",
    replyUser: "AI Developer",
    replyText: "Yes, currently in BFSI domain.",
  },
];

// --- Left Sidebar Components ---

const PostAsCard = () => (
  <div className="rounded-xl bg-white shadow-lg border border-gray-100 p-4 transition-all hover:shadow-xl">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-50 border border-gray-200 text-lg">
          👓
        </div>
        <div>
          <p className="text-xs text-gray-500 font-medium">
            Post anonymously as
          </p>
          <p className="text-sm font-semibold text-gray-800">
            attends IET Davv
          </p>
        </div>
      </div>
      <ChevronDown className="w-4 h-4 text-gray-400 cursor-pointer hover:text-gray-600" />
    </div>

    <button className="mt-4 w-full bg-black text-white font-semibold py-2.5 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors shadow-lg shadow-black/20">
      <Plus className="w-4 h-4" />
      <span className="text-sm">Create post</span>
    </button>
  </div>
);

const MyBowlsCard = () => (
  <div className="mt-6 rounded-xl bg-white shadow-lg border border-gray-100 p-4 transition-all hover:shadow-xl">
    <h2 className="text-sm font-semibold text-gray-700 mb-3">My Bowls</h2>

    <div className="space-y-3">
      <a
        href="#"
        className="flex items-center gap-2 text-sm text-gray-700 hover:text-black transition-colors"
      >
        <Bookmark className="w-4 h-4 text-gray-500" />
        <span className="truncate font-medium">Referral and Opportunities</span>
      </a>
      <a
        href="#"
        className="flex items-center gap-2 text-sm text-gray-700 hover:text-black transition-colors"
      >
        <TrendingUp className="w-4 h-4 text-gray-500" />
        <span className="truncate font-medium">
          Career Advice for Students in I...
        </span>
      </a>
    </div>

    <button className="flex items-center gap-2 mt-4 border border-gray-200 rounded-xl px-3 py-2 w-full text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors">
      <Search className="w-4 h-4 text-gray-500" />
      <span>Explore Bowls</span>
      <span
        className="w-2 h-2 bg-red-500 rounded-full ml-auto animate-pulse"
        title="New Bowls Available"
      ></span>
    </button>
  </div>
);

// --- Right Sidebar Components ---

const BowlsForYouCard = () => {
  const bowlData = [
    {
      icon: <Briefcase className="w-5 h-5 text-blue-500" />,
      title: "Referral and Opportunities",
      desc: "9L members",
    },
    {
      icon: <TrendingUp className="w-5 h-5 text-green-500" />,
      title: "Tech India",
      desc: "25L members",
    },
    {
      icon: <Users className="w-5 h-5 text-purple-500" />,
      title: "Consulting India",
      desc: "12L members",
    },
  ];

  return (
    <div className="rounded-xl bg-white shadow-lg border border-gray-100 p-5">
      <h2 className="text-lg font-bold text-gray-800">Bowls for you</h2>
      <a
        href="#"
        className="text-[#00b656] text-sm font-semibold flex items-center gap-1 mt-1 mb-4 hover:underline transition-colors"
      >
        Explore all Bowls →
      </a>

      {bowlData.map((bowl, idx) => (
        <div
          key={idx}
          className="flex items-center justify-between py-3 border-t border-gray-100 first:border-t-0"
        >
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-50/70 border border-gray-200 flex-shrink-0">
              {bowl.icon}
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-800">
                {bowl.title}
              </p>
              <p className="text-xs text-gray-500 leading-snug mt-0.5">
                {bowl.desc}
              </p>
            </div>
          </div>

          <button className="text-xs font-semibold text-[#00b656] border border-[#00b656] rounded-full px-3 py-1 hover:bg-[#e6fff2] transition-colors flex-shrink-0">
            Follow
          </button>
        </div>
      ))}
    </div>
  );
};

// --- Main Post Card Component ---

const PostCard = ({ post }) => (
  <div className="rounded-xl bg-white shadow-lg border border-gray-100 mb-4 overflow-hidden transition-all hover:shadow-xl">
    {/* Post as Header */}
    <div className="flex items-center justify-between border-b border-gray-100 px-5 py-3 bg-gray-50/50">
      <div className="flex items-center gap-3">
        <div className="w-7 h-7 flex items-center justify-center rounded-full bg-gray-100 text-lg">
          👓
        </div>
        <p className="text-xs text-gray-600">
          Post as{" "}
          <span className="font-semibold text-gray-800">
            “attends IET Davv”
          </span>
        </p>
      </div>
      <p className="text-xs text-gray-400">{post.time}</p>
    </div>

    {/* Post Content */}
    <div className="p-5">
      <p className="text-xs text-gray-400 font-medium mb-2">
        Discover new communities
      </p>

      <div className="flex items-start justify-between">
        <div className="flex items-start gap-3">
          <img
            src={post.avatar}
            alt={post.user}
            className="w-10 h-10 rounded-full shadow-md"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = `https://placehold.co/40x40/00b656/ffffff?text=${post.user[0]}`;
            }}
          />
          <div className="flex-1">
            <p className="text-sm font-bold text-gray-800">{post.user}</p>
            <p className="text-xs text-gray-500">works at {post.worksAt}</p>
            <p className="mt-3 text-sm text-gray-700 leading-relaxed whitespace-pre-wrap">
              {post.content}
            </p>
          </div>
        </div>
        <MoreHorizontal className="w-5 h-5 text-gray-400 cursor-pointer hover:text-gray-600" />
      </div>

      {/* Reactions and Actions */}
      <div className="flex items-center justify-between text-sm text-gray-600 mt-4 pt-4 border-t border-gray-100">
        <div className="flex items-center gap-5">
          <button className="flex items-center gap-1 font-medium hover:text-red-500 transition-colors group">
            <Heart className="w-4 h-4 text-gray-400 group-hover:text-red-500 transition-colors" />{" "}
            Like
          </button>
          <button className="flex items-center gap-1 font-medium hover:text-blue-500 transition-colors group">
            <MessageCircle className="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-colors" />{" "}
            <span className="text-sm font-semibold">{post.comments}</span>{" "}
            Comments
          </button>
          <button className="flex items-center gap-1 font-medium hover:text-[#00b656] transition-colors group">
            <Share2 className="w-4 h-4 text-gray-400 group-hover:text-[#00b656] transition-colors" />{" "}
            Share
          </button>
        </div>
        <span className="flex items-center gap-1 text-xs text-gray-500 font-semibold">
          {post.reactions}
        </span>
      </div>

      {/* Comment Preview */}
      <div className="mt-4 p-3 bg-gray-50 rounded-lg">
        <p className="text-xs text-gray-500 mb-1">Top Comment</p>
        <p className="text-sm font-semibold text-gray-800">{post.replyUser}</p>
        <p className="text-sm text-gray-600 mt-0.5">{post.replyText}</p>
      </div>
    </div>
  </div>
);

// --- Professional Recommendation Card (Horizontal Scroll) ---
const ProRecommendations = () => {
  const pros = [
    {
      name: "Adam Grant ✅",
      title: "Organizational psychologist @Wharton. #1",
      img: "https://i.pravatar.cc/80?img=6",
    },
    {
      name: "Colin Rocker ✅",
      title: "On a mission to equip & inspire first-gen",
      img: "https://i.pravatar.cc/80?img=7",
    },
    {
      name: "Gloria Chan ✅",
      title: "Mental wellness educator • TED Speaker",
      img: "https://i.pravatar.cc/80?img=8",
    },
    {
      name: "Deepa Narayan",
      title: "Culture & Inclusion Expert",
      img: "https://i.pravatar.cc/80?img=9",
    },
  ];

  return (
    <div className="p-5 bg-white rounded-xl shadow-lg border border-gray-100 mt-6">
      <h2 className="text-lg font-bold text-gray-800">Worklife Pros for you</h2>
      <p className="text-sm text-gray-500 mb-4">
        Taking charge of your worklife? Talk to the experts.
      </p>

      <div className="flex overflow-x-auto gap-4 pb-2 px-5 scrollbar-thin scrollbar-thumb-[#00b656] scrollbar-track-gray-100">
        {pros.map((pro, index) => (
          <div
            key={index}
            className="min-w-[200px] flex flex-col items-center rounded-xl border border-gray-200 bg-white p-4 shadow-md flex-shrink-0"
          >
            <img
              src={pro.img}
              alt={pro.name}
              className="w-16 h-16 rounded-full mb-3 border-4 border-white ring-1 ring-gray-200"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = `https://placehold.co/64x64/2563eb/ffffff?text=${pro.name[0]}`;
              }}
            />
            <h3 className="font-semibold text-sm text-gray-900 truncate max-w-full">
              {pro.name}
            </h3>
            <p className="text-xs text-gray-500 text-center line-clamp-2 mt-0.5 h-8">
              {pro.title}
            </p>
            <button className="mt-3 w-full rounded-lg bg-[#00b656] text-white py-1.5 text-sm font-semibold hover:bg-[#009e4d] transition-colors shadow-md">
              Follow
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- Main Layout Component ---
function Landing() {
  // Use a custom font class and responsive spacing
  return (
    <div
      className="min-h-screen bg-gray-50 font-inter"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      {/* Removed AppHeader component call */}
      <Header />
      {/* Adjusted top position for sticky elements since the header is gone */}
      <main className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-center gap-6 py-6 px-4 sm:px-6 lg:px-8">
        {/* LEFT SIDEBAR (Hidden on small screens, fixed on desktop) */}
        <aside className="hidden lg:block w-full max-w-xs xl:max-w-sm sticky top-6 h-fit self-start space-y-6">
          <PostAsCard />
          <MyBowlsCard />
        </aside>

        {/* CENTER FEED */}
        <div className="flex-1 max-w-2xl">
          {/* Keeping the dedicated post search/filter visible for now */}
          <div className="mb-4">
            <input
              type="text"
              placeholder="Search for conversations in 'My Bowls'..."
              className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#00b656] focus:border-[#00b656] shadow-sm"
            />
          </div>

          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}

          {/* PROFESSIONAL RECOMMENDATIONS SECTION */}
          <ProRecommendations />

          {/* Placeholder to fill space */}
          <div className="h-20"></div>
        </div>

        {/* RIGHT SIDEBAR (Hidden on small screens, fixed on desktop) */}
        <aside className="hidden lg:block w-full max-w-xs xl:max-w-sm sticky top-6 h-fit self-start space-y-6">
          <BowlsForYouCard />
          {/* Removed Footer content */}
        </aside>
      </main>
      
          <Footer />
      
    </div>
  );
}

export default Landing;
