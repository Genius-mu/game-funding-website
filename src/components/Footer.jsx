import { ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <>
      {/* Footer */}
      <footer className="bg-white relative border-t z-50 border-slate-200">
        <div className="max-w-6xl mx-auto px-4 z-50 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-4 z-50 gap-12 mb-12">
            {/* About Column */}
            <div className="z-50">
              <h3 className="text-lg font-bold text-slate-900 mb-4">About</h3>
              <div className="space-y-2 z-50">
                <a
                  href="#"
                  className="text-slate-600 group flex items-center hover:text-blue-600 transition text-sm"
                >
                  Experience Funding
                  <span className="flex justify-center group-hover:translate-x-2 transition ease-in-out duration-300 items-center mt-0.5 pl-2">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </a>
                <a
                  href="#"
                  className="text-slate-600 group flex items-center hover:text-blue-600 transition text-sm"
                >
                  Our Mission
                  <span className="flex justify-center group-hover:translate-x-2 transition ease-in-out duration-300 items-center mt-0.5 pl-2">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </a>
                <a
                  href="#"
                  className="text-slate-600 group flex items-center hover:text-blue-600 transition text-sm"
                >
                  Team
                  <span className="flex justify-center group-hover:translate-x-2 transition ease-in-out duration-300 items-center mt-0.5 pl-2">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </a>
              </div>
            </div>

            {/* Company Column */}
            <div className="z-50">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Company</h3>
              <div className="space-y-2">
                <a
                  href="#"
                  className="text-slate-600 group flex items-center hover:text-blue-600 transition text-sm"
                >
                  Press
                </a>
                <a
                  href="#"
                  className="text-slate-600 group flex items-center hover:text-blue-600 transition text-sm"
                >
                  Careers
                </a>
                <a
                  href="#"
                  className="text-slate-600 group flex items-center hover:text-blue-600 transition text-sm"
                >
                  Blog
                </a>
              </div>
            </div>

            {/* Press Column */}
            <div className="z-50">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Press</h3>
              <div className="space-y-2">
                <a
                  href="#"
                  className="text-slate-600 group flex items-center hover:text-blue-600 transition text-sm"
                >
                  Press Kit
                  <span className="flex justify-center group-hover:translate-x-2 transition ease-in-out duration-300 items-center mt-0.5 pl-2">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </a>
                <a
                  href="#"
                  className="text-slate-600 group flex items-center hover:text-blue-600 transition text-sm"
                >
                  Media
                  <span className="flex justify-center group-hover:translate-x-2 transition ease-in-out duration-300 items-center mt-0.5 pl-2">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </a>
                <a
                  href="#"
                  className="text-slate-600 group flex items-center hover:text-blue-600 transition text-sm"
                >
                  Updates
                  <span className="flex justify-center group-hover:translate-x-2 transition ease-in-out duration-300 items-center mt-0.5 pl-2">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </a>
              </div>
            </div>

            {/* Follow Us Column */}
            <div className="z-50">
              <h3 className="text-lg font-bold text-slate-900 mb-4">
                Follow us
              </h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center hover:bg-blue-600 transition transform hover:scale-110 duration-300"
                >
                  <span className="text-sm font-bold">f</span>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center hover:bg-blue-600 transition transform hover:scale-110 duration-300"
                >
                  <span className="text-sm font-bold">𝕏</span>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center hover:bg-blue-600 transition transform hover:scale-110 duration-300"
                >
                  <span className="text-sm font-bold">in</span>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t z-50 border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-slate-600 z-50 text-sm">
              Built with passion by the Pledge Team
            </p>
            <div className="flex z-50 flex-col sm:flex-row gap-6">
              <a
                href="#"
                className="text-slate-600 group flex items-center hover:text-blue-600 transition text-sm"
              >
                Privacy Policy
                <span className="flex justify-center group-hover:translate-x-2 transition ease-in-out duration-300 items-center mt-0.5 pl-2">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </a>
              <a
                href="#"
                className="text-slate-600 group flex items-center hover:text-blue-600 transition text-sm"
              >
                Terms of Service
                <span className="flex justify-center group-hover:translate-x-2 transition ease-in-out duration-300 items-center mt-0.5 pl-2">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </a>
              <a
                href="#"
                className="text-slate-600 group flex items-center hover:text-blue-600 transition text-sm"
              >
                Cookies
                <span className="flex justify-center group-hover:translate-x-2 transition ease-in-out duration-300 items-center mt-0.5 pl-2">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
