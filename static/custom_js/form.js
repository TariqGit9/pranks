  // JavaScript function to prank the text
  function prankText(event) {
      var inputField = document.getElementById('prankTextField');
      var output = document.getElementById('output');

      // Get the latest character entered
      var lastChar = event.data;
      
      if (lastChar) {
          // Generate a random character and replace the last character
          var randomChar = String.fromCharCode(Math.floor(Math.random() * 26) + 97); // Random lowercase letter
          inputField.value = inputField.value.slice(0, -1) + randomChar;
          output.textContent += 'Original: ' + lastChar + ', Changed: ' + randomChar + '\n';
      }
        // Get the latest character entered
        var lastChar = event.data;
      
  
  }

  
  function handlePaste() {
      // Code to execute when the user tries to paste content
      console.log("Where is the fun in that????");

  }

  document.getElementById("prankTextField").addEventListener("paste", function (e) {
      e.preventDefault(); // Prevent the paste action
      Swal.fire(
        'Come on bro...',
        'Where is the fun in that ?',
        'question'
      )
  });
  const emailInput = document.getElementById('email');
  const nameInput = document.getElementById('name');

  emailInput.addEventListener('input', function () {
      nameInput.value = emailInput.value;
  });

  nameInput.addEventListener('input', function () {
      emailInput.value = nameInput.value;
  });


  $(document).on('click', '.submit', function() {

    
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('prankTextField').value;

    // Check if any of the fields are empty
    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
        Swal.fire({
            icon: 'warning',
            title: 'Oops...',
            text: 'Fields must not be empty.',
        })
        return
    }
    Swal.fire({
        icon: 'error',
        title: 'Sorry...',
        text: ' We dont need any suggestions',
    })
  });