# Modal plugin for the Employees HR records application

Code for the modal window plugin created for the OpenClassrooms project. See Links section below.

## Built with

React, CSS, JavaScript.

## Links

[Main project](https://github.com/Dimterion/Employees-HR-records-application)

[Modal plugin](https://www.npmjs.com/package/employee-hr-records-application-modal-plugin)

## How to use the plugin

1. In the main project directory run the following command:

npm i react-data-table-component

2. In the component where plugin will be used import it as:

import ModalPlugin from "employee-hr-records-application-modal-plugin"

3. Use it as a standard component <ModalPlugin /> and pass the following props (setOpenModal must be defined using useState to add the functionality to open/close the modal):

showModal={setOpenModal}

modalText="Text of the modal is here"

4. By default the following styling is applied (name of each object is the name of the appropriate prop):

ModalPlugin.defaultProps = {

modalContainerStyle: {

position: "fixed",
width: "100vw",
height: "100vh",
top: "50%",
left: "50%",
zIndex: "2",
transform: "translate(-50%, -50%)",
backgroundColor: "rgba(0, 0, 0, 0.7)",

},

modalWindowStyle: {

position: "fixed",
top: "50%",
left: "50%",
transform: "translate(-50%, -50%)",

},

modalTextStyle: {

width: "200px",
zIndex: "3",
borderRadius: "10px",
boxShadow: "0 5px 20px 0 rgba(0, 0, 0, 0.5)",
padding: "20px",
backgroundColor: "#fff",
fontSize: "1.5rem",
textAlign: "center",

},

modalBtnStyle: {

cursor: "pointer",
position: "fixed",
top: "22%",
left: "98%",
transform: "translate(-50%, -50%)",
borderRadius: "50%",
backgroundColor: "#000",
color: "#fff",
padding: "5px 8px",
border: "1px solid #000",
fontWeight: "bold",

},

};

5. To change the style of any of the modal elements, use the appropriate prop (see above). Make sure to add all of the properties from the default values, then add/change those that need to be changed.
