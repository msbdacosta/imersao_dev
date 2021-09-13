const form = document.getElementById("grade-form");

form.addEventListener('submit', event => {
    event.preventDefault();
  
    let firstTerm = document.getElementById("firstTerm").value;
    let secondTerm = document.getElementById("secondTerm").value;
    let thirdTerm = document.getElementById("thirdTerm").value;
    let fourthTerm = document.getElementById("forthTerm").value;
  
    let totalGrade = parseFloat(firstTerm) + parseFloat(secondTerm) + parseFloat(thirdTerm) + parseFloat(fourthTerm);
    let averageGrade = totalGrade / 4;
    let fixedGrade = averageGrade.toFixed(1);
  
    if (fixedGrade >= 5) {
        isApproved();
    } 
  
    if (fixedGrade < 5) {
        isFailed();
    } 
 
    function isApproved() {
      const divResult = document.getElementById("result");
      divResult.insertAdjacentHTML('afterbegin', `<p>Your average grade is: <strong>${fixedGrade}</strong></p><p>You passed! <i class="fas fa-check-circle"></i></p>`);
      form.reset();
    }
  
    function isFailed() {
      const divResult = document.getElementById("result");
      divResult.insertAdjacentHTML('afterbegin', `<p>Your average grade is: <strong>${fixedGrade}</strong></p><p>You failed! <i class="fas fa-bomb"></i></p>`);
      form.reset();
    }
 
});

