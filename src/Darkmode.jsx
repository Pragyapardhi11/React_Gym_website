import { useEffect, useState } from 'react';
import { BiSolidMoon, BiSolidSun } from 'react-icons/bi';

// Get the initial theme from localStorage or default to 'light'
const getInitialTheme = () => localStorage.getItem("theme") || "light";

const Darkmode = () => {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    const element = document.documentElement;

    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
    <div>
      {theme === "dark" ? 
        <BiSolidSun className='text-xl cursor-pointer sm:text-2xl' onClick={() => setTheme("light")} /> 
        : 
        <BiSolidMoon className='text-xl cursor-pointer sm:text-2xl' onClick={() => setTheme("dark")} />
      }
    </div>
  );
}

export default Darkmode;
