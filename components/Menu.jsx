import {motion} from 'framer-motion'
import Link from 'next/link';
import { AiFillCloseCircle } from 'react-icons/ai';

const Menu = ({setOpen}) => {
  return (
    <motion.div
      initial={{ x: '-110%' }}
      animate={{ x: '0%' }}
      exti={{ x: '-110%' }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="absolute inset-0 z-30 h-screen bg-gray-900/90"
    >
      <AiFillCloseCircle
        className="absolute top-10 left-4 h-16 w-16 text-white"
        onClick={() => setOpen(false)}
      />
      <nav className="mx-auto flex max-w-6xl flex-col h-full items-center justify-between py-32">
        <Link href="/">
          <a
            className="text-xl font-bold text-white"
            onClick={() => setOpen(false)}
          >
            Home
          </a>
        </Link>
        <Link href="/about">
          <a
            className="text-xl font-bold text-white"
            onClick={() => setOpen(false)}
          >
            About
          </a>
        </Link>
        <Link href="/contact">
          <a
            className="text-xl font-bold text-white"
            onClick={() => setOpen(false)}
          >
            Contact
          </a>
        </Link>
        <Link href="/gallery">
          <a
            className="text-xl font-bold text-white"
            onClick={() => setOpen(false)}
          >
            Gallery
          </a>
        </Link>
        <Link href="/services">
          <a
            className="text-xl font-bold text-white"
            onClick={() => setOpen(false)}
          >
            Services
          </a>
        </Link>
      </nav>
    </motion.div>
  )
};
export default Menu;
