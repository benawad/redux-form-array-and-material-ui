import React from "react";
import MyForm from "./MyForm";
import SimpleTable from "./SimpleTable";

const App = () => (
  <div>
    <MyForm onSubmit={values => console.log(values)} />
    <SimpleTable />
  </div>
);

export default App;
