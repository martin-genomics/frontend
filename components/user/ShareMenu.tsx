import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Button,
    Avatar,
    Badge,
    IconButton,
  } from "@material-tailwind/react";

import userPhoto from '@/public/user.jpg'
import Link from "next/link";
import { Share2Icon } from "lucide-react";



type ShareMenuProps = {
    link: string
}
   
export default function ShareMenu({ link }: ShareMenuProps) {
    return (
     <Menu>
        <MenuHandler>
            <IconButton className="normal-case" size="sm" variant='text'>
                <Share2Icon />
            </IconButton>
        </MenuHandler>
        <MenuList>
          <MenuItem>
            <span>
                Facebook
            </span>
  
          </MenuItem>
          <MenuItem>
            WhatsApp
         </MenuItem>
          <MenuItem>
            X (Twitter)
          </MenuItem>
          <hr className="my-3" />
          <MenuItem>
            Link Share
          </MenuItem>
        </MenuList>
      </Menu>
    );
  }