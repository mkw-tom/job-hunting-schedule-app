"use client";
import React, { useState } from "react";
import LoginIcon from "@mui/icons-material/Login";
import ListRoundedIcon from "@mui/icons-material/ListRounded";
import Link from "next/link";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  List,
  Box,
  Drawer,
  Button,
} from "@mui/material";
import { Login } from "@mui/icons-material";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const listItems = [
    { text: "ログイン", icon: <Login></Login> },
    { text: "ログイン", icon: <Login></Login> },
    { text: "ログイン", icon: <Login></Login> },
    { text: "ログイン", icon: <Login></Login> },
  ];
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <div className="flex flex-col items-center">
        <img src="" alt="" />
        <h2>{`user name`}</h2>
        <h3>{`user@email.com`}</h3>
        <div>
          <span>{`管理している企業:${'２'}社`}</span>
        </div>
      </div>
      <Divider />
      <List>
        {listItems.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>
        <ListRoundedIcon className="text-white text-3xl"></ListRoundedIcon>
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
};

export default Sidebar;
