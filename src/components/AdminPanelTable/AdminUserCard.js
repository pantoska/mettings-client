import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import { TableRow, TableCell, IconButton } from "@material-ui/core";

const AdminUserCard = ({ ...props }) => {
  return (
    <TableRow key={props.event.id}>
      <TableCell>{props.event.firstName}</TableCell>
      <TableCell>{props.event.lastName}</TableCell>
      <TableCell>{props.event.email}</TableCell>
      {props.handleRemoveUser && (
        <TableCell>
          <IconButton aria-label="delete" onClick={props.handleRemoveUser}>
            <DeleteIcon />
          </IconButton>
        </TableCell>
      )}
    </TableRow>
  );
};

export default AdminUserCard;
