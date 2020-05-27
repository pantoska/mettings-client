import React, { useEffect } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import { TableRow, TableCell, IconButton } from "@material-ui/core";

import { compose } from "recompose";
import { connect } from "react-redux";
import { getUserById } from "../../core/redux/auth/userActions";

const mapStateToProps = (state) => ({
  name: state.user.name,
  surname: state.user.surname,
});

const mapDispatchToProps = {
  getUserById,
};

const enhance = compose(connect(mapStateToProps, mapDispatchToProps));

const AdminEventCard = ({
  event,
  handleRemoveEvent,
  getUserById,
  ...props
}) => {
  useEffect(() => {
    getUserById(event.userId);
  }, [event.userId, getUserById]);

  return (
    <TableRow key={event.id}>
      <TableCell>{event.title}</TableCell>
      <TableCell>{event.description}</TableCell>
      <TableCell>{event.type}</TableCell>
      <TableCell>{event.place}</TableCell>
      <TableCell>{props.name + " " + props.surname}</TableCell>
      {handleRemoveEvent && (
        <TableCell>
          <IconButton aria-label="delete" onClick={handleRemoveEvent}>
            <DeleteIcon />
          </IconButton>
        </TableCell>
      )}
    </TableRow>
  );
};

export default enhance(AdminEventCard);
