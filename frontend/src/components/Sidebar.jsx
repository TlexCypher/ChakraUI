import { AtSignIcon, CalendarIcon, EditIcon } from "@chakra-ui/icons";
import { List, ListIcon, ListItem } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <List fontSize={"1.2em"} spacing={4} p={"20px"} mt={"20px"}>
      <ListItem color={"blue.600"}>
        <ListIcon as={CalendarIcon} color={"blue.700"} />
        <NavLink to="/">Dashboard</NavLink>
      </ListItem>

      <ListItem color={"blue.600"}>
        <ListIcon as={EditIcon} color={"blue.700"} />
        <NavLink to="/create">New Task</NavLink>
      </ListItem>

      <ListItem color={"blue.600"}>
        <ListIcon as={AtSignIcon} color={"blue.700"} />
        <NavLink to="/profile">Profile</NavLink>
      </ListItem>
    </List>
  )
}
