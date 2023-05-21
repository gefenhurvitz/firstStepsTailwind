import React from "react";
import { FaBeer } from 'react-icons/fa';


const SideBar = () => {
  return (
    <div className="fixed top-0 h-screen w-16 flex flex-col
     bg-primary text-secondary shadow">
      <SideBarIcon icon={<FaBeer size={26}/>}/>
      <SideBarIcon icon={<FaBeer size={26}/>}/>
      <SideBarIcon icon={<FaBeer size={26}/>}/>
      <SideBarIcon icon={<FaBeer size={26}/>}/>
    </div>
  );
};

const SideBarIcon =({ icon }) => (
    <div className="sidebar-icon">
        {icon}
    </div>
)

export default SideBar;
