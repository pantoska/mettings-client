import React, { useEffect, useMemo } from "react";
import {
  makeStyles,
  Paper,
  TableHead,
  TableRow,
  TableCell,
  Table,
  TableBody,
  TableContainer,
} from "@material-ui/core";

import { compose } from "recompose";
import { connect } from "react-redux";
import { getEvents, deleteEvent } from "../../core/redux/events/eventsAction";
import { getAllUsers, deleteUser } from "../../core/redux/auth/userActions";

import {
  AdminEventCard,
  AdminUserCard,
} from "../../components/AdminPanelTable";

const useStyles = makeStyles(
  (theme) => ({
    root: {
      margin: "20px",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      alignContent: "flex-start",
      justifyContent: "flex-start",
    },
    media: {
      height: "300px",
      width: "350px",
    },
    containers: {
      margin: "20px",
    },
  }),
  {
    name: "AdminPanel",
  }
);

const mapStateToProps = (state) => ({
  events: state.events.allEvents,
  users: state.user.users,
});

const mapDispatchToProps = {
  getEvents,
  getAllUsers,
  deleteEvent,
  deleteUser,
};

const enhance = compose(connect(mapStateToProps, mapDispatchToProps));

const AdminPanel = ({
  events,
  users,
  getEvents,
  getAllUsers,
  deleteEvent,
  deleteUser,
  ...props
}) => {
  const classes = useStyles();

  useEffect(() => {
    getEvents();
    getAllUsers();
  }, [getAllUsers, getEvents]);

  const eventHeaders = useMemo(() => {
    return ["title", "description", "type", "place", "user", "remove"];
  }, []);

  const userHeaders = useMemo(() => {
    return ["name", "surname", "email", "remove"];
  }, []);

  return (
    <div className={classes.table}>
      <TableContainer component={Paper} className={classes.containers}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              {eventHeaders.map((row) => (
                <TableCell key={row}>{row}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {events.map((event) => (
              <AdminEventCard
                key={event.id}
                event={event}
                handleRemoveEvent={() => deleteEvent(event.id)}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TableContainer component={Paper} className={classes.containers}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              {userHeaders.map((row) => (
                <TableCell key={row}>{row}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <AdminUserCard
                key={user.id}
                event={user}
                handleRemoveUser={() => deleteUser(user.id)}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default enhance(AdminPanel);
