import { BiPhoneCall } from "react-icons/bi";
import Darkmode from "./Darkmode";

export const Navlinks = [
  {
    
    id: 1,
    Name: 'Home',
    Link: '/home',
  },
  {
    id: 2,
    Name: 'Services',
    Link: '/services',
  },
  {
    id: 3,
    Name: 'Join Us',
    Link: '/join',
  },
];


const Navbar = () => {
  return (
    <>
      <nav className='w-full shadow-md dark:bg-black dark:text-white'>
        <div className='container mx-auto'>
          <div className='flex items-center justify-between py-4'>

            {/* Phone Contact Section */}
            <div className='flex items-center gap-2 font-bold text-slate-600'>
              <BiPhoneCall className='text-2xl duration-200 text-primary animate-pulse' />
              <span>+91 6268086288</span>
            </div>

            {/* Logo Section */}
            <div className='flex justify-center'>
              <img
                src='https://gym-tcj.netlify.app/assets/logo-tsOiz05y.png'
                alt='Logo'
                className='w-16 sm:w-20'
              />
            </div>

            {/* Navigation Links and Dark Mode Toggle */}
            <div className="items-center hidden gap-8 sm:flex">
              <ul className='flex items-center gap-6'>
                {Navlinks.map(({ id, Name, Link }) => (
                  <li key={id}>
                    <a
                      href={Link}
                      className='text-lg font-semibold duration-200 hover:text-primary'
                    >
                      {Name}
                    </a>
                  </li>
                ))}
              </ul>
              <Darkmode />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
