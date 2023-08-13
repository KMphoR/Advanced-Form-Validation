//DISPLAYING OUTPUT
function details()
{
    var pName = document.getElementById("fname").value;
    var pLastname = document.getElementById("lname").value;
    var pEmail = document.getElementById("email").value;
    var puserId = document.getElementById("userID").value;
    var pCountry = document.getElementById("country").value;
    var pState = document.getElementById("state").value;
    var pCity = document.getElementById("city").value;
    var pPhone = document.getElementById("phoneNum").value;
    var pReference = document.getElementById("refrenceCode").value;

    if (
        pName &&
        pLastname &&
        pEmail &&
        puserId &&
        pCountry &&
        pState &&
        pCity &&
        pPhone &&
        pReference
    ) {
        //ALL FIELDS ARE FILLED, CONTINUE WITH DISPLAYING OUTPUT
        document.getElementById("Background").style.display = "none";
        var fileSizeOutput = document.getElementById("fileSizeOutput");
        fileSizeOutput.style.display = "block";
        calculateFileSize();

    var outName = document.getElementById("outName"); 
    var outSurname = document.getElementById("outSurname");
    var outEmail = document.getElementById("outEmail");
    var outUserId = document.getElementById("outUserId");
    var outCountry = document.getElementById("outCountry");
    var outState = document.getElementById("outState");
    var outCity = document.getElementById("outCity");
    var outNumber = document.getElementById("outNumber");
    var outReferernce = document.getElementById("outReference");


    //USER DETAILS IN OUTPUT
    outName.textContent = "Name: " + pName;
    outSurname.textContent = "Surname: " + pLastname;
    outEmail.textContent = "Email: " +  pEmail;
    outUserId.textContent = "UserID: " +  puserId;
    outCountry.textContent = "Country: " +  pCountry;
    outState.textContent = "State: " +  pState;
    outCity.textContent = "City: " +  pCity;
    outNumber.textContent = "Number: " +  pPhone;
    outReferernce.textContent = "Reference code: " +  pReference;
        
    } else {
        // SHOW AN ERROR MESSAGE TO PREVENT FURTHER ACTION
        alert("Please fill in all required fields before continuing.");
    }
}

//VALIDATIONS
function defaultSettings() {
    document.getElementById("EmailIcon").className = "fab fa-diaspora";
    document.getElementById("UserLockIcon").className = "fab fa-diaspora";
    document.getElementById("NameIcon").className = "fab fa-diaspora";
    document.getElementById("SurnameIcon").className = "fab fa-diaspora";
    document.getElementById("PhoneNumIcon").className = "fab fa-diaspora";
    document.getElementById("RefrenceCodeIcon").className = "fab fa-diaspora";
}

function validName() {
    let inputname = document.getElementById('fname').value;
    if ((/^[A-Za-z]+$/.test(inputname) == true) && (inputname.length >= 3)){
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

function ValidRefrenceCode(){
    let Textvalue = document.getElementById('refrenceCode').value;
if ((typeof(Textvalue) == 'string') && (Textvalue.length >= 3)) {
    document.getElementById("RefrenceCodeIcon").className = "fas fa-lock";
} else document.getElementById("RefrenceCodeIcon").className = "fas fa-times";
}

function ValidPhoneNum(){
    let Textvalue = document.getElementById('phoneNum').value;
if (/^([0-9]{3})[-]([0-9]{3})[-]([0-9]{4})$/.test(Textvalue)==true) {
    document.getElementById("PhoneNumIcon").className = "fas fa-check";
} else document.getElementById("PhoneNumIcon").className = "fas fa-times";
}

//ADAPTIVE CHANGES TO THE DROPDOWN MENU 
const countrySelect = document.getElementById("country");
const stateSelect = document.getElementById("state");
const citySelect = document.getElementById("city");
const form = document.getElementById("form");

const stateOptions = {
    India: ["Maharashtra", "Karnataka", "Delhi", "Punjab"],
    USA: ["California", "New York", "Texas", "Ohio"],
    "South Africa": ["Free State", "Gauteng", "KwaZulu-Natal", "Limpopo"],
    Canada: ["Ontario", "Manitoba", "Alberta", "New Brunswick"]
  };
  
  const cityOptions = {
    Maharashtra: ["Mumbai", "Pune", "Nagpur", "Aurangabad"],
    Karnataka: ["Bangalore", "Mysore", "Mangaluru","Hubballi"],
    Delhi: ["New Delhi", "Karala", "Bhalswa", "Chilla",],
    Punjab: ["Amritsar","Kapurthala","Bathinda","jalandhar"],
  
    California: ["Los Angeles", "San Francisco", "San Diego" , "San Jose"],
    "New York": ["New York City", "Hempstead", "Brookhaven", "Middletown"],
    Texas: ["Houston", "Austin", "Dallas","San Antonio"],
    Ohio: ["Columbus","Cleveland","Cincinnati","Dayton"],
  
    "Free State": ["Winburg","Senekal","Brandfort","Clocolan"],
    Gauteng: ["Johannesburg", "Pretoria", "Heidelberg","Vereeniging"],
    "KwaZulu-Natal": ["Durban","KwaDukuza","Umkomaas","Adams Mission"],
    Limpopo: ["Polokwane","Mokopane","Phalaborwa","Louis Trichardt"],
  
    Ontario: ["Toronto","Hamilton","Windsor","Kingston"],
    Manitoba: ["Winnipeg","Dauphin","Brandon","Steinbach"],
    Alberta: ["Edmonton","Calgary","Lethbridge","Airdrie"],
    "New Brunswick": ["Moncton","Bathurt","Campbellton","Saint John"]
  };

function updateStates() {
  const selectedCountry = countrySelect.value;
  stateSelect.innerHTML = "<option value=''>Select State</option>";
  citySelect.innerHTML = "<option value=''>Select City</option>";
  if (selectedCountry) {
    const states = stateOptions[selectedCountry];
    states.forEach(state => {
      const option = document.createElement("option");
      option.value = state;
      option.textContent = state;
      stateSelect.appendChild(option);
    });
  }
}

function updateCities() {
  const selectedState = stateSelect.value;
  citySelect.innerHTML = "<option value=''>Select City</option>";
  if (selectedState) {
    const cities = cityOptions[selectedState];
    cities.forEach(city => {
      const option = document.createElement("option");
      option.value = city;
      option.textContent = city;
      citySelect.appendChild(option);
    });
  }
}
//CALCULATION OF THE FILE SIZE
function calculateFileSize()
{
    const fileInput = document.getElementById("fileInput");
    const result= document.getElementById("result");
                            
    if (fileInput.files.length > 0)
    {
                            
        const file = fileInput.files[0];
        const fileSizeBytes = file.size;
        let fileSizeKB = fileSizeBytes/1024;
        let fileSizeMB = fileSizeKB / 1024;
                            
        if (fileSizeMB>=1){
        result.textContent = "FileSize "+ fileSizeMB.toFixed(2)+"MB";
        }
        else if (fileSizeKB>=1){
        result.textContent = `File Size: ${fileSizeKB.toFixed(2)} KB`;
        }
        else result.textContent = "FileSize "+ fileSizeBytes+"Bytes";
        }
        else
        {
        result.textContent="Please select a file.";
        }
}

//TERMINATION OF THE PROGRAM
function closePage() 
{
    window.close();
}