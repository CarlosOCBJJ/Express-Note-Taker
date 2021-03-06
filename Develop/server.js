 const express = require("express");
 const apiRoutes = require("./routes/apiRoutes.js")
  const htmlRoutes = require("./routes/htmlRoutes.js")
  // Setting up Express App".
  const app = express();
  const PORT = process.env.PORT || 8000;
  



  // Sets up the Express app to handle data parsing
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(express.static('public'));
  app.use ("/api", apiRoutes)
  app.use ("/", htmlRoutes)
  // Starts the server to begin listening
  
  app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
