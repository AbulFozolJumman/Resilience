import icon from "../../assets/internet-icon.png";
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-10 pb-5">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Contact Information */}
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h4 className="text-2xl font-bold mb-4">Contact Us</h4>
            <p className="mb-2">Email: abulfozoljumman@gmail.com</p>
            <p className="mb-2">Phone: +8801677949565</p>
            <p className="mb-2">
              Address: 106/5, Monesshor Road, Zigatola, Dhaka
            </p>
          </div>

          {/* Social Media Links */}
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h4 className="text-2xl font-bold mb-4">Follow Us</h4>
            <div className="flex space-x-4 items-center">
              <a
                href="https://www.facebook.com/abulfozoljumman/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <svg
                  className="h-6 w-6 fill-current hover:text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12a12 12 0 1 0-13.87 11.87v-8.41h-2.9V12h2.9V9.42c0-2.85 1.7-4.42 4.3-4.42 1.25 0 2.55.23 2.55.23v2.8h-1.44c-1.42 0-1.85.88-1.85 1.77V12h3.16l-.51 3.46h-2.65v8.41A12 12 0 0 0 24 12z" />
                </svg>
              </a>
              <a
                href="https://github.com/AbulFozolJumman/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <svg
                  className="h-6 w-6 fill-current hover:text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 .297C5.373.297 0 5.67 0 12.297c0 5.302 3.438 9.8 8.205 11.387.6.111.82-.261.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.612-4.042-1.612-.546-1.387-1.333-1.757-1.333-1.757-1.09-.746.083-.73.083-.73 1.205.085 1.838 1.236 1.838 1.236 1.07 1.834 2.809 1.304 3.495.998.108-.775.418-1.305.76-1.605-2.665-.3-5.466-1.335-5.466-5.933 0-1.312.47-2.383 1.236-3.222-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.98-.399 3-.405 1.02.006 2.043.139 3 .405 2.29-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.839 1.234 1.91 1.234 3.222 0 4.61-2.803 5.628-5.475 5.922.43.372.813 1.102.813 2.222 0 1.606-.014 2.898-.014 3.293 0 .319.217.694.825.576C20.565 22.092 24 17.592 24 12.297 24 5.67 18.627.297 12 .297z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/abul-fozol-jumman-414734279/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <svg
                  className="h-6 w-6 fill-current hover:text-blue-700"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.23 0H1.77C.79 0 0 .77 0 1.72v20.56c0 .95.79 1.72 1.77 1.72h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.23 0zM7.12 20.45H3.56V9.03h3.56v11.42zm-1.78-13A2.07 2.07 0 1 1 7.4 5.35a2.07 2.07 0 0 1-2.06 2.1zm15.56 13H17.9v-5.55c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.15 1.45-2.15 2.95v5.64h-3.56V9.03h3.42v1.56h.05c.48-.92 1.64-1.88 3.38-1.88 3.61 0 4.28 2.38 4.28 5.47v6.27z" />
                </svg>
              </a>
              <a
                href="https://abul-fozol-jumman.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Portfolio"
                className="w-8"
              >
                <img src={icon} alt="" />
              </a>
            </div>
          </div>

          {/* Relevant Resources */}
          <div className="w-full md:w-1/3">
            <h4 className="text-2xl font-bold mb-4">Resources</h4>
            <ul className="text-gray-400">
              <li className="mb-2">
                <a href="#!" className="hover:text-white">
                  Disaster Preparedness Guide
                </a>
              </li>
              <li className="mb-2">
                <a href="#!" className="hover:text-white">
                  Community Health Resources
                </a>
              </li>
              <li className="mb-2">
                <a href="#!" className="hover:text-white">
                  Volunteer Opportunities
                </a>
              </li>
              <li className="mb-2">
                <a href="#!" className="hover:text-white">
                  Support Us
                </a>
              </li>
              <li className="mb-2">
                <a href="#!" className="hover:text-white">
                  FAQs
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 text-center text-gray-500">
          <p>
            &copy; 2024, Resilience - Connecting Communities to Vital Supplies.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
