

Certificate Generator Application
Goals
The goal of this application is to create a simple certificate generator that allows users to input a student's name, personal message, and course name, and then generates a dynamic certificate of achievement.

Goals Reached
The following goals have been reached:

A form has been created to accept user input for the student's name, personal message, and course name.
The form has been set up to prevent the default form submission behavior and instead trigger a function to generate the certificate content dynamically.
The certificate content is generated using the user input and is displayed in a modal.
The modal is displayed when the form is submitted and is hidden when the close button is clicked or when the user clicks outside of the modal.
The form inputs are cleared after the form is submitted.
Lessons Learned
During the development of this application, the following lessons were learned:

The importance of preventing the default form submission behavior to allow for custom functionality.
The use of the trim() method to remove any leading or trailing white space from user input.
The use of the conditional (ternary) operator to provide a fallback value if a variable is null or undefined.
The use of the display property in CSS to show and hide elements.
The use of the value property to set and get the value of form inputs.
The use of the innerHTML property to dynamically generate and display HTML content.
Challenges and Solutions
The following challenges were encountered during the development of this application and the solutions implemented:

Challenge: Preventing the default form submission behavior.
Solution: The preventDefault() method was used to prevent the default form submission behavior and instead trigger a custom function to generate the certificate content.
Challenge: Providing a fallback value for the course name if it is not provided by the user.
Solution: A conditional (ternary) operator was used to check if the courseName variable is null or undefined, and if so, to provide a fallback value of "a course".
Challenge: Displaying and hiding the modal.
Solution: The display property in CSS was used to show and hide the modal. The style property was used to set the display property to "block" when the form is submitted and to "none" when the close button is clicked or when the user clicks outside of the modal.
Challenge: Clearing the form inputs after the form is submitted.
Solution: The value property was used to set the value of each form input to an empty string after the form is submitted.
Challenge: Handling user clicks outside of the modal.
Solution: The window object was used to listen for a click event, and the event.target property was used to check if the click occurred outside of the modal. If the click occurred outside of the modal, the display property of the modal was set to "none" to hide it.
