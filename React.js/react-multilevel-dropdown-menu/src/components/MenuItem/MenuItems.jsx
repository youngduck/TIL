import Dropdown from "../Dropdown/Dropdown";
import { useState } from "react";

const MenuItems = ({ items, depthLevel }) => {
  const [dropdown, setDropdown] = useState(false);
  return (
    <li className="menu-items">
      {items.submenu ? (
        <div
          onMouseEnter={() => setDropdown((prev) => !prev)}
          onMouseLeave={() => setDropdown((prev) => !prev)}
        >
          <button
            type="button"
            aria-haspopup="menu"
            // aria-expanded={dropdown ? "true" : "false"}
            onClick={() => setDropdown((prev) => !prev)}
          >
            {items.title}
            {depthLevel > 0 ? <span>&raquo;</span> : <span className="arrow" />}
          </button>
          <Dropdown
            submenus={items.submenu}
            dropdown={dropdown}
            depthLevel={depthLevel}
          />
        </div>
      ) : (
        <a href={items.url}>{items.title}</a>
      )}
    </li>
  );
};

export default MenuItems;
