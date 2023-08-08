/*var states = {
    'South Africa': ['Gauteng','Western Cape','Free State'],
    'India':['Maharashtra','Goa','Assam'],
    'USA':['ohio'],
    'UK':['drill'],
};

$('#country').on('change', function() {
    // Set selected option as variable
    var selectValue = $(this).val();
 
    // Empty the target field
    $('#state').empty();
    
    // For each chocie in the selected option
    for (i = 0; i < states[selectValue].length; i++) {
       // Output choice in the target field
       $('#state').append("<country value='" + states[selectValue][i] + "'>" + states[selectValue][i] + "</country>");
    }
 });
*/

function defaultSettings() {
    document.getElementById("EmailIcon").className = "fab fa-diaspora";
    document.getElementById("UserLockIcon").className = "fab fa-diaspora";
    document.getElementById("NameIcon").className = "fab fa-diaspora";
    document.getElementById("SurnameIcon").className = "fab fa-diaspora";
}

function validName() {
    let Textvalue = document.getElementById('fname').value;
    if ((/^[A-Za-z]+$/.test(Textvalue) == true) && (Textvalue.length >= 3)){
        document.getElementById("NameIcon").className = "fas fa-check";
    } else document.getElementById("NameIcon").className = "fas fa-times";

}

function validSurname() {
    let Textvalue = document.getElementById('lname').value;
    console.log(Textvalue.length);
    if ((/^[A-Za-z]+$/.test(Textvalue) == true) && (Textvalue.length >= 3)) {
        document.getElementById("SurnameIcon").className = "fas fa-check";
    } else document.getElementById("SurnameIcon").className = "fas fa-times";

}

function validEmail() {
    let email = (document.getElementById('email').value)
    let isValid = false;
    if (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email) == true) {
       isValid = true
       document.getElementById("EmailIcon").className = "fas fa-check";
     } else document.getElementById("EmailIcon").className = "fas fa-times";
}

function ValidUserCode(){
    let Textvalue = document.getElementById('userID').value;
if ((typeof(Textvalue) == 'string') && (Textvalue.length >= 3)) {
    document.getElementById("UserLockIcon").className = "fas fa-lock";
} else document.getElementById("UserLockIcon").className = "fas fa-times";
}
