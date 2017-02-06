
This is the browser based very simple frontend client demo application based on AngularJs1. This
application accesses the REST endpoint exposed by Akka Http server in the backend.

"var serviceBase " value in app.js needs to be changed to the running akka-http server address.

The comic ids that is fetched from frontend is defined at view/dashboardController.js as,

var data = [57245, 57163, 62605, 61308, 60293];


Running Instruction:

-Open the terminal path to the project folder and execute

npm start

The server in my machine is available at http://localhost:8000/
Please check the console to see yours.