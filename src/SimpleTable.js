import React from "react";
import Table, {
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from "material-ui/Table";
import Paper from "material-ui/Paper";
import { getFormValues } from "redux-form";
import { connect } from "react-redux";

const SimpleTable = ({ values = { members: [] } }) => (
  <Paper>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>First name</TableCell>
          <TableCell>Last name</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {values.members.map(n => {
          return (
            <TableRow key={`${n.firstName}-${n.lastName}`}>
              <TableCell>{n.firstName}</TableCell>
              <TableCell>{n.lastName}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  </Paper>
);

export default connect(state => ({
  values: getFormValues("MyForm")(state)
}))(SimpleTable);
