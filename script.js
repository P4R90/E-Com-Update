// Asign Variables
const loadText = document.querySelector('.loadingText');
const bg = document.querySelector('.background');

let load = 0;
let int = setInterval(blurring, 30);


/* Blurring is a function used to increase the value of a loading counter
   As the counter loads, the opacity of the counter declines, along with
   blur level of the background image */
function blurring() {
    // Add 1 to load every 30 ms
    load++
    
    // Once load reaches above 99 (100) stop calling function.
    if(load > 99) {
        clearInterval(int);
    }
    
    //Within Load text display the current value of load
    loadText.innerText =  `${load}%`
    loadText.style.opacity = scale(load, 0, 100, 1, 0)
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}


// Allows for the mapping of numbers. We can map opacity, and image blur to the loading time.
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}


// newsletter button 

// Get the button element
var openDialog = document.getElementById("openDialog");

// Get the dialog and overlay elements
var dialog = document.getElementById("dialog");
var overlay = document.getElementById("overlay");

// Get the close button element
var closeDialog = document.getElementById("closeDialog");

// Add a click event listener to the button
openDialog.addEventListener("click", function() {
  // Show the dialog and overlay
  dialog.style.display = "block";
  overlay.style.display = "block";
});

// Add a click event listener to the close button to close the dialog
closeDialog.addEventListener("click", function() {
  // Hide the dialog and overlay
  dialog.style.display = "none";
  overlay.style.display = "none";
});


// Submit form

function handleSubmit(event) {
    event.preventDefault(); // Prevent the form from submitting
  
    // Get the form values
    var name = document.getElementById("name").value;
    var lastname = document.getElementById("lastname").value;
    var email = document.getElementById("email").value;
  
    // Create a FileWriter object
    var fileWriter = new FileWriter("data.txt");
  
    // Write the form values to the file
    fileWriter.write(name + "\n");
    fileWriter.write(lastname + "\n");
    fileWriter.write(email + "\n");

    // Close the file
    fileWriter.close();
    
    // Reset the form
    document.getElementById("myForm").reset();
  
    // Show a success message
    alert("Form submitted successfully!");
  }

var form = document.getElementById("myForm");
form.addEventListener("submit", handleSubmit);