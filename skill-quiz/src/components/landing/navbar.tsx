"use client";
import React from 'react';
import {useTheme} from "next-themes";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button, Switch } from '@heroui/react';
import { HiSun, HiMoon } from 'react-icons/hi';
export default () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const menuItems = [
    "Features",
    "Pricing",
    "Testimonials",
  ];
  const { theme, setTheme } = useTheme();
  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden text-black dark:text-white"
        />
        <NavbarBrand>
          <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">SQ</span>
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent pl-0.5 sm:inline hidden">
            Skill-Quiz
          </span>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem isActive key={`${index}`}>
            <Link aria-current="page" href="#">
              {item}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} radius='full' color="primary" href="#" >
            Sign Up
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Switch 
            defaultSelected 
            thumbIcon={({ isSelected }) => ((isSelected) ? <HiSun className='text-gray-600' /> : <HiMoon className='text-gray-600' />)} 
            onChange={() =>{
              console.log(theme);
              setTheme(theme === "dark" ? "light" : "dark");
            }}
          />
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
} 