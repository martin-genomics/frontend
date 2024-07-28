import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Button,
    Avatar,
    Badge,
  } from "@material-tailwind/react";

import userPhoto from '@/public/user.jpg'
import Link from "next/link";

   
export default function ProfileMenu() {
    return (
     <Menu>
        <MenuHandler>
            <Button  className="normal-case bg-white"  variant='text'>

                
            <Avatar  
             size='lg'
                                
                                alt={userPhoto.src}
                                src={userPhoto.src}
                                width={100}
                                height={100}
                                title=' User profile'
                            />

            </Button>
        </MenuHandler>
        <MenuList>
          <MenuItem>
          <Badge color='blue' content={<span className="">freelancer</span>}>
            <span>
                Martin Tembo
            </span>
          </Badge>
  
          </MenuItem>
          <MenuItem><Link href={'/'}>Data</Link></MenuItem>
          <MenuItem><Link href={{
            pathname: '/dashboard/profile'
          }}>Account</Link></MenuItem>
          <hr className="my-3" />
          <MenuItem>Settings</MenuItem>
        </MenuList>
      </Menu>
    );
  }