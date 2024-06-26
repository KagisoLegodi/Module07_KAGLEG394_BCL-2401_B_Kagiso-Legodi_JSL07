document.addEventListener('DOMContentLoaded', function () {
    const cardForm = document.getElementById('cardForm');
    const modal = document.getElementById('modal');
    const certificateContent = document.getElementById('certificateContent');
    const closeModal = document.querySelector('.close');
  
    // Hide the modal initially
    modal.style.display = 'none';
  
    cardForm.addEventListener('submit', function (e) {
        e.preventDefault();
  
        // 🚨 Get input values
        const studentNameInput = document.getElementById('studentName');
        const personalMessageInput = document.getElementById('personalMessage');
        const courseNameInput = document.getElementById('courseName'); // Move this line to before it's being accessed
  
        const studentName = studentNameInput.value.trim();
        const personalMessage = personalMessageInput.value.trim();
        const courseName = courseNameInput && courseNameInput.value.trim()? courseNameInput.value.trim() : "a course"; // Fallback to "a course" if no input
  
        if (studentName === '' || personalMessage === '' || courseName === '') {
            errorMessage.textContent = 'Please fill in all fields';
            errorMessage.style.display = 'block';
            return;    
        }
  
        // 🚨 Generate certificate content dynamically
        certificateContent.innerHTML = `
            <h2>Certificate of Achievemnt</h2>
            <p> This is to certify that</p>
            <h3>${studentName}</h3>
            <p>has almost completed the</p>
            <h4>${courseName} course!</h4>
            <p>with legendary perservance and world-class bad-assery for never giving up🏆</p>
              <img src="./logo.png" alt="logo" style="margin-top: 20px; max-height: 100px;">
              <p>${personalMessage}</p>
        `;
  
        //  Display the modal
        modal.style.display = 'block';
  
        // Clear the form inputs
        studentNameInput.value = '';
        personalMessageInput.value = '';
        if (courseNameInput) courseNameInput.value = '';
    });
  
    //  🚨 Close the modal when the close button is clicked
    closeModal.addEventListener('click', function () {
        modal.style.display = 'none';
    });
  
    // Close the modal when the user clicks outside of it
    window.addEventListener('click', function (e) {
        if (e.target == modal &&!e.target.closest('#modalContent')) {
            modal.style.display = 'none';
        }
    });
    closeModal.style.cursor ='pointer';
}); 