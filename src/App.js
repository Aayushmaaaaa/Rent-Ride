// import React from "react";
// import { BrowserRouter as Router } from "react-router-dom";
// import NavigationHandler from "./NavigationHandler"; // Assuming NavigationHandler.js is in the same directory

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <NavigationHandler />
//       </div>
//     </Router>
//   );
// }

// export default App;


import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import NavigationHandler from "./components/NavigationHandler";
function App() {
  return (
    <Router>
      <div className="App">
        <NavigationHandler />
      </div>
    </Router>
  );
}

export default App;
