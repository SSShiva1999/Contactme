import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form from "./main/pages/DynamicFrom/Form";
import ContactData from "./main/pages/Datatable/tableView";

function App() {
  return (
    <Router>
      <div className="App">
        {/* Define the routes */}
        <Routes>
          {/* Main page renders the Form component */}
          <Route path="/" element={<Form />} />
          <Route path="contactdata" element={<ContactData />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
