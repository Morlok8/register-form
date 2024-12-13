document.addEventListener("DOMContentLoaded", () => {
    var form = new Form(document.getElementById("first-name"), 
                    document.getElementById("last-name"), 
                    document.getElementById("email"), 
                    document.getElementById("password"), 
                    document.getElementById("password-confirm"), 
                    document.getElementById("birth-day"),
                    document.getElementById("form-button"));

    var formInputs = document.getElementsByClassName("form-control");
   
    //console.log(document.getElementById("first-name"));

    Array.from(formInputs).forEach(function(input) {
        console.log(input);
        input.addEventListener('input', (evt) => {
            validate_form(form); 
          });
    });

    document.getElementById("last-name").addEventListener('input', (evt) => {
        validate_form(form);
      });;

      function validate_form(form){
        form.validate();
        let alertDiv = document.getElementById("alert");
        console.log(alertDiv);
        if(form.error !== ""){
            alertDiv.innerText = form.error;
            console.log(form.error);
            alertDiv.style.display = "block";
            form.set_error("");
        }
        else{
            alertDiv.style.display = "none"; 
        }
    }

    document.getElementById("form-button").addEventListener('click', (event) =>{
        document.getElementById("alert-info").style.display = "block";
    });
  });
  
                        
    
