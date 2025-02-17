import React from 'react'
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar"
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>
            <Link to='/'>Home</Link>
          </MenubarTrigger>
          <MenubarTrigger>
            <Link to='/drag-drop'>Drag Drop</Link>
          </MenubarTrigger>
          <MenubarTrigger>About</MenubarTrigger>
          <MenubarTrigger>Profile</MenubarTrigger>
        </MenubarMenu>
      </Menubar>
    </div>
  )
}

export default Header