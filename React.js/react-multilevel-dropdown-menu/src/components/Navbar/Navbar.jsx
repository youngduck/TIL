import React from "react";
import { menuItemsData } from "../../menuItemsData";
import MenuItems from "../MenuItem/MenuItems";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="desktop-nav">
      <ul className="menus">
        {menuItemsData.map((menu, index) => {
          return <MenuItems items={menu} key={index} depthLevel={0} />;
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
