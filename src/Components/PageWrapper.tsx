// components/PageWrapper.jsx
import { motion } from 'framer-motion';

const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: -30 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 20 }}
    transition={{ duration:0.6 }}
  >
    {children}
  </motion.div>
);

export default PageWrapper;
