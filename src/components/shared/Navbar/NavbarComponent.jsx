"use client";

import {
  Avatar,
  AvatarImage,
  Dropdown,
  DropdownAction,
  DropdownContent,
  DropdownItem,
  DropdownList,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarCollapseBtn,
  NavbarContainer,
  NavbarItem,
  NavbarList,
} from "keep-react";
import Logo from "../Logo/Logo";

export const NavbarComponent = () => {
  return (
    <>
      <Navbar className="border-none">
        <NavbarContainer>
          <NavbarBrand>
            {/* logo */}
            <Logo />
            {/* logo */}
          </NavbarBrand>
          <NavbarList>
            <NavbarItem className="text-cyan-500">Find Your Path</NavbarItem>
            <NavbarItem className="text-cyan-500">Search Mentor</NavbarItem>
            <NavbarItem className="text-cyan-500">About Us</NavbarItem>
          </NavbarList>
          <NavbarList>
            <Dropdown placement="bottom-end ">
              <DropdownAction asChild>
                <Avatar className="cursor-pointer border-none">
                  <AvatarImage src="/avater.png" />
                </Avatar>
              </DropdownAction>
              <DropdownContent className="border border-cyan-300">
                <DropdownList>
                  <DropdownItem>Dashboard</DropdownItem>
                  <DropdownItem>Profile</DropdownItem>
                  <DropdownItem>Account</DropdownItem>
                  <DropdownItem>Logout</DropdownItem>
                </DropdownList>
              </DropdownContent>
            </Dropdown>
          </NavbarList>
          <NavbarCollapseBtn />
          <NavbarCollapse>
            <NavbarItem>Projects</NavbarItem>
            <NavbarItem>Research</NavbarItem>
            <NavbarItem>Contact</NavbarItem>
            <NavbarItem>Sign In</NavbarItem>
            <NavbarItem active={true}>Sign Up</NavbarItem>
          </NavbarCollapse>
        </NavbarContainer>
      </Navbar>
    </>
  );
};
