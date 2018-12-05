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
    //alert("Hello! I am an alert box!!");
    const confirmationDiv = document.createElement('div');
    confirmationDiv.setAttribute('id','div1');
    confirmationDiv.style.marginTop = "20px";
   //get elements
    const form = document.querySelector('#myForm1');
    const button = document.querySelector('#btn1');

    //Add class
    confirmationDiv.className = 'alert alert-primary';
    //create text node and append div
    confirmationDiv.appendChild(document.createTextNode("Twój Email został wysłany"));

    //insert message under submit button
    //form.insertBefore(confirmationDiv,button);
    document.getElementById('myForm1').appendChild(confirmationDiv);
    //Clear error after 2seconds
    setTimeout(clearConfirmation,2000);
  }
  //clear confirmation function
  function clearConfirmation(){
    document.querySelector('#div1').remove();
  }


