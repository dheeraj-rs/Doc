import { KeyboardArrowDown, Search } from "@mui/icons-material";
import { motion } from "framer-motion";
import { useState } from "react";
import "./ProductsNavbar.css";

const Navbar2 = () => {
  const [open, setOpen] = useState(false);

  const toggleDropdown = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <div className="navbarr-containeer">
      <div className="navbar-content">
        <h1 className="navbar-title">{"Trending Items"}</h1>

        <div className="filter-bar">
          <form className="filter-input">
            <input
              type="text"
              placeholder="Search for furniture..."
              className="product-search-input"
            />
            <Search className="fsearch-icon" />
            <button className="search-button">Search</button>
          </form>
          <span></span>
          <div className="filter-options">
            <DropdownMenu open={open} toggleDropdown={toggleDropdown} />
          </div>
        </div>
      </div>
    </div>
  );
};

const DropdownMenu = ({ open, toggleDropdown }) => {
  return (
    <motion.div animate={open ? "open" : "closed"} className="relative">
      <div onClick={toggleDropdown}>
        <button className="">Filter</button>
        <motion.span variants={iconVariants}>
          <KeyboardArrowDown />
        </motion.span>
      </div>

      <motion.ul
        initial={wrapperVariants.closed}
        variants={wrapperVariants}
        style={{ originY: "top", translateX: "-50%" }}
        className="filter-items "
      >
        <Option setOpen={toggleDropdown} Icon={KeyboardArrowDown} text="Edit" />
        <Option
          setOpen={toggleDropdown}
          Icon={KeyboardArrowDown}
          text="Duplicate"
        />
        <Option
          setOpen={toggleDropdown}
          Icon={KeyboardArrowDown}
          text="Share"
        />
        <Option
          setOpen={toggleDropdown}
          Icon={KeyboardArrowDown}
          text="Remove"
        />
      </motion.ul>
    </motion.div>
  );
};

const Option = ({ text, Icon, setOpen }) => {
  return (
    <motion.li
      variants={itemVariants}
      onClick={() => setOpen(false)}
      className="flex items-center gap-2 w-full p-2 text-xs font-medium whitespace-nowrap rounded-md hover:bg-indigo-100 text-slate-700 hover:text-indigo-500 transition-colors cursor-pointer"
    >
      <motion.span variants={actionIconVariants}>
        <Icon />
      </motion.span>
      <span>{text}</span>
    </motion.li>
  );
};

DropdownMenu.propTypes = {
  open: false,
  toggleDropdown: null,
};

Option.propTypes = {
  text: "",
  Icon: null,
  setOpen: null,
};

export default Navbar2;

const wrapperVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
};

const iconVariants = {
  open: { rotate: 180 },
  closed: { rotate: 0 },
};

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
    },
  },
  closed: {
    opacity: 0,
    y: -15,
    transition: {
      when: "afterChildren",
    },
  },
};

const actionIconVariants = {
  open: { scale: 1, y: 0 },
  closed: { scale: 0, y: -7 },
};
