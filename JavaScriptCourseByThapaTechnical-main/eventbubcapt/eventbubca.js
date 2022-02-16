

// event bubbling is used as  default if u dont pass 3rd argument

document.querySelector("#grandparent")
  .addEventListener('click', () => {
    console.log("Grandparent Clicked!");
    // e.stopPropagation();
  },true);

  document.querySelector("#parent")
  .addEventListener('click', (e) => {
    console.log("Parent Clicked!");
        // e.stopPropagation(); 
  },true);

  document.querySelector("#child")
  .addEventListener('click', () => {
    console.log("Child Clicked!");
  },true);