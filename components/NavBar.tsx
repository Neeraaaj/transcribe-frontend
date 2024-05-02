import React from 'react';
import { FloatingNav } from './ui/floating-navbar';
import {IconHome, IconUser, IconMessage} from '@tabler/icons-react'

const NavBar = () => {
    const navItems = [
        {
          name: "Home",
          link: "/",
          icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
        },
        {
          name: "About",
          link: "/about",
          icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
        },
       
      ];
  return (
    <FloatingNav navItems={navItems} />
  );
};

export default NavBar;
