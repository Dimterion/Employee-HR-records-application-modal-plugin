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
