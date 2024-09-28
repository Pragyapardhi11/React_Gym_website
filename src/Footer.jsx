import {
    FaFacebook,
    FaInstagram,
    FaLinkedin
} from "react-icons/fa";
  
  export const Navlinks = [
    {
      id: 1,
      name: "SERVICES",
      link: "/#services",
    },
    {
      id: 2,
      name: "ABOUT",
      link: "/#about",
    },
    {
      id: 3,
      name: "JOIN",
      link: "/#join",
    },
  ];
  
  const Footer = () => {
    return (
      <div className="w-full py-10 bg-gray-100 dark:bg-dark dark:text-white">
        <div className="container px-4 mx-auto">
          <div className="grid items-center grid-cols-1 gap-6 sm:grid-cols-3">
            
            {/* Logo Section */}
            <div className="flex items-center justify-center sm:justify-start">
              <img
                src="https://gym-tcj.netlify.app/assets/logo-tsOiz05y.png"
                alt="Logo"
                className="w-16"
              />
            </div>
  
            {/* Navigation Links Section */}
            <nav className="hidden sm:block">
              <ul className="flex items-center justify-center gap-8 sm:justify-start">
                {Navlinks.map(({ id, name, link }) => (
                  <li key={id} className="py-2">
                    <a
                      href={link}
                      className="inline-block text-lg font-semibold transition-colors duration-300 hover:text-primary"
                    >
                      {name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
  
            {/* Social Links Section */}
            <div className="flex items-center justify-center gap-4 sm:justify-end">
              <a href="#">
                <FaInstagram className="text-2xl duration-300 hover:text-primary" />
              </a>
              <a href="#">
                <FaFacebook className="text-2xl duration-300 hover:text-primary" />
              </a>
              <a href="#">
                <FaLinkedin className="text-2xl duration-300 hover:text-primary" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Footer;
  