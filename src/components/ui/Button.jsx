import { motion } from 'framer-motion';

function Button({ children, variant = 'primary', ...props }) {
  const variants = {
    primary: 'bg-white text-black',
    secondary: 'border border-white text-white',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      className={`px-6 py-2 rounded-full ${variants[variant]}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}

export default Button;