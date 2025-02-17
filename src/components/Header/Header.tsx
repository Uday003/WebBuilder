import React from 'react'
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"

const Header = () => {
  return (
    <div>
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>Home</MenubarTrigger>
          <MenubarTrigger>Dashboard</MenubarTrigger>
          <MenubarTrigger>About</MenubarTrigger>
          <MenubarTrigger>Profile</MenubarTrigger>
        </MenubarMenu>
      </Menubar>
    </div>
  )
}

export default Header