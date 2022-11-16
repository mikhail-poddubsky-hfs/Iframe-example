/* eslint-disable */
window.addEventListener("message", function (event) {
  const data = JSON.parse(event.data);

  // event will be triggered after submit 'Borrower Information' page
  if (data.type === "LoanInformation") {
    // handle data
    // see types.ts file for LoanInformation data interface
    alert(event.data.data);
  }

  // event will be triggered after submit 'Contractor Information' page
  if (data.type === "UnderwritingResult") {
    // handle data
    // see types.ts file for UnderwritingResult data interface
    alert(event.data.data);
  }
});
