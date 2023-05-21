import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok } from 'react-icons/fa';


const SideBar = () => {
  return (
    <div className="fixed top-0 h-screen w-16 flex flex-col
     bg-primary text-secondary shadow">
      <SideBarIcon link={'test'} icon={<FaFacebook size={26}/>}/>
      <SideBarIcon link={'test'} icon={<FaInstagram size={26}/>}/>
      <SideBarIcon link={'test'} icon={<FaLinkedin size={26}/>}/>
      <SideBarIcon link={'test'} icon={<FaTiktok size={26}/>}/>
    </div>
  );
};

const SideBarIcon =({ icon , link }) => (
    <div className="sidebar-icon">
        <a href={link} target="_blank" rel="noreferrer">
            {icon}
        </a>
    </div>
)

export default SideBar;
