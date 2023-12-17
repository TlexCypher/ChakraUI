import { AtSignIcon, CalendarIcon, EditIcon } from "@chakra-ui/icons";
import { List, ListIcon, ListItem } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <List fontSize={"1.2em"} spacing={4} p={"20px"} mt={"20px"}>
      <ListItem color={"white"}>
        <ListIcon as={CalendarIcon} color={"white"} />
        <NavLink to="/">Dashboard</NavLink>
      </ListItem>

      <ListItem color={"white"}>
        <ListIcon as={EditIcon} color={"white"} />
        <NavLink to="/create">New Task</NavLink>
      </ListItem>

      <ListItem color={"white"}>
        <ListIcon as={AtSignIcon} color={"white"} />
        <NavLink to="/profile">Profile</NavLink>
      </ListItem>
    </List>
  )
}
