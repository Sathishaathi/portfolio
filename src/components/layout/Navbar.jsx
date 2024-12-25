import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Logo } from '../ui/Logo';

function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full py-6 px-8 flex justify-between items-center z-50 bg-black/50 backdrop-blur-md"
    >
      <Link to="/">
        <Logo />
      </Link>
      
      <div className="flex items-center gap-12">
        <NavLink to="/design">Design</NavLink>
        <NavLink to="/photography">Photography</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-black px-8 py-3 rounded-full font-medium"
        >
          Let's talk↗
        </motion.a>
      </div>
    </motion.nav>
  );
}

function NavLink({ to, children }) {
  return (
    <Link 
      to={to}
      className="text-lg hover:text-gray-300 transition-colors relative group"
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full" />
    </Link>
  );
}

export default Navbar;