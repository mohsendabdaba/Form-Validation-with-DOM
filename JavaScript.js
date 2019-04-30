

//Getting All   Elments 
var username = document.getElementById("exampleInputusername");
var Address = document.getElementById ("exampleInputAddress");
var email = document.getElementById ("exampleInputEmail1");
var Password = document.getElementById ("exampleInputPassword");
var Comments = document.getElementById ("exampleFormControlTextarea1");

//Setting All Event Listener
document.querySelector('.btn').addEventListener( "click" ,nameVerify);
document.querySelector('.btn').addEventListener( "click" ,AddressVerify);
document.querySelector('.btn').addEventListener( "click" , validate_email);
document.querySelector('.btn').addEventListener( "click" ,validatePassword);
document.querySelector('.btn').addEventListener( "click" ,CommentsVerify);




//Event Handler functions
function nameVerify(){
    if (username.value=="") {
        alert('Username is required')
        
    } else if (username.value.match(/[0-9]/g)){
        alert('You should not input number in username' );
    }
}

function AddressVerify(){
    if (Address.value==""){
        alert('Address is required')
        
    } 
}


    function validate_email (){
    with (email)
    {
        apos=value.indexOf("@");
        dotpos=value.lastIndexOf(".");

        if (email.value==""){
            alert('Please Enter Your Email !')
            
        }else if (apos<1||dotpos-apos<2){
            alert('Please input a valid email address!')
            return false;
        }
        else {
            return true;
        }
    }

    }

    

function validatePassword() {
    var error = "";
    var illegalChars = /[\W_]/; 
 
    if (Password.value == "") {
        Password.style.background = 'Yellow';
        error = "You didn't enter a password.\n";
        alert(error);
        return false;
       
    } else if (Password.value.length < 8)  {
        error = "The password is the wrong length. \n";
        Password.style.background = 'Yellow';
        alert(error);
        return false;
 
    } else if (illegalChars.test(Password.value)) {
        error = "The password contains illegal characters.\n";
        Password.style.background = 'Yellow';
        alert(error);
        return false;
 
    } else if ( (Password.value.search(/[a-zA-Z]+/)==-1) || (Password.value.search(/[0-9]+/)==-1) ) {
        error = "The password must contain at least one numeral.\n";
        Password.style.background = 'Yellow';
        alert(error);
        return false;
 
    } else {
        Password.style.background = 'White';
    }
   return true;
}















