//addEventListeners to clear form and display a message

document.getElementById('btn1').addEventListener('click',clearForm);
document.getElementById('btn1').addEventListener('click',showConfirmation);

//function to clrear input fields in form "myForm1"
function clearForm(event){
  document.querySelector('#myForm1').reset();

  event.preventDefault();
  };

  // create message with a confirmation
  function showConfirmation(){
    alert("Hello! I am an alert box!!");
    const confirmationDiv = document.createElement('div');
    confirmationDiv.style.background = "black";
    confirmationDiv.style.padding = "10px";
    confirmationDiv.style.margin = "1%";
   //get elements
    // const form = document.querySelector('#myForm1');
    // const button = document.querySelector('#btn1');

    //Add class
    confirmationDiv.classname = 'alert alert-primary';
    //create text node and append div
    confirmationDiv.appendChild(document.createTextNode("dynamic created text"));

    //insert message under submit button
    //form.insertBefore('confirmationDiv,null');
    document.getElementsByTagName('form')[0].appendChild(confirmationDiv);
  }


