import React from "react";
import "./Sidebar.css";
import { DonutLarge, MoreVert, Chat } from "@mui/icons-material";
import { Avatar, IconButton } from "@mui/material";
//import avatar.png from photos;
import { SearchOutlined } from "@mui/icons-material";
import SidebarChat from "./SidebarChat";


function Sidebar() {
    return(
        <div className="sidebar">
            <div className="sidebar_header">
                <Avatar src="https://c.neh.tw/thumb/f/720/m2i8b1Z5Z5H7m2d3.jpg"/>      
                <div className="sidebar_headerRight">
                    <IconButton>
                        <DonutLarge />
                    </IconButton>
                    <IconButton>
                        <Chat />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>
            <div className="sidebar_search">
             <div className="sidebar_searchContainer">
             <SearchOutlined />
             <input placeholder="Search or Start new chat" type="text" />
             </div>
            </div>

            <div className="sidebar_chats">
                <SidebarChat />
            </div>
        </div>
    );
}

export default Sidebar;