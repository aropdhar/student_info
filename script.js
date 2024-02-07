let input_box_name    =   document.querySelector(".inputbox1");
let input_box_email   =  document.querySelector(".inputbox2");
let input_box_number  =  document.querySelector(".inputbox3");
let input_box_address = document.querySelector(".inputbox4");
let input_box_image   = document.querySelector(".inputbox5");
let id_img = document.querySelector(".id_img");
let input_result_main = document.querySelector(".input_result_main");

let btn_submit =   document.querySelector(".btn_submit");
let btn_reset  =   document.querySelector(".btn_reset");
let copy_btn   =   document.querySelector("#copy_btn");

let input_result = document.querySelector(".input_result");
let result_name  = document.querySelector(".result_name");
let result_phone_number = document.querySelector(".result_phone_number");
let result_email = document.querySelector(".result_email");
let result_address = document.querySelector(".result_address");


let name_err = document.querySelector(".name_err");
let email_err = document.querySelector(".email_err");
let number_err = document.querySelector(".number_err");
let address_err = document.querySelector(".Address_err");
let images_err = document.querySelector(".images_err");


let name_regex = /^[a-zA-Z]+ [a-zA-Z]+$/;
let email_regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ ;
let number_regex = /(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/;
let address_regex = '/\d{1,}(\s{1}\w{1,})(\s{1}?\w{1,})+)/g';

let input_result_name_card = document.querySelector(".input_result_name_card");
let input_result_email_card = document.querySelector(".input_result_email_card");
let input_result_num_card = document.querySelector(".input_result_num_card");
let input_result_address_card = document.querySelector(".input_result_address_card");
let input_result_images = document.querySelector(".input_result_images");






btn_submit.addEventListener("click" , function(){
    
    if ( input_box_name.value == "" ){

        name_err.innerHTML = "Please Enter Your Name";
        name_err.style.marginTop = "10px";
        name_err.style.color = "orange";
    }

    else if ( !(input_box_name.value.match(name_regex))){

        name_err.innerHTML = "Please Enter Your valid Name";
        name_err.style.marginTop = "10px";
        name_err.style.color = "orange";
    }


    else if ( input_box_email.value == "" ) {

        email_err.innerHTML = "Please Enter Your Email";
        email_err.style.marginTop = "10px";
        email_err.style.color = "orange";
        name_err.innerHTML = " ";
        
    }

    else if( !(input_box_email.value.match(email_regex)) ){

        email_err.innerHTML = "Please Enter Your Valid Email";
        email_err.style.marginTop = "10px";
        email_err.style.color = "orange";
    }

    else if( input_box_number.value == "" ){

        number_err.innerHTML = "Please Enter Your Phone Number";
        number_err.style.marginTop = "10px";
        number_err.style.color = "orange";
        email_err.innerHTML = " ";
        
    }
    
    else if( !(input_box_number.value.match(number_regex)) ){

        number_err.innerHTML = "Please Enter Your Valid Phone Number";
        number_err.style.marginTop = "10px";
        number_err.style.color = "orange";
    }

    else if ( input_box_address.value == "" ){

        address_err.innerHTML = "Please Enter Your Address";
        address_err.style.marginTop = "10px";
        address_err.style.color = "orange";
        number_err.innerHTML = " ";
    }


    else{
        name_err.innerHTML = " ";
        email_err.innerHTML = " ";
        number_err.innerHTML = " ";
        address_err.innerHTML = " ";
        result_name.innerHTML = input_box_name.value;
        result_email.innerHTML = input_box_email.value;
        result_phone_number.innerHTML = input_box_number.value;
        result_address.innerHTML = input_box_address.value;


        input_result_name_card.style.display = "flex";
        input_result_name_card.style.alignItems = "center";
        input_result_name_card.style.fontSize = "16px";
        result_name.style.marginLeft = "20px";
        result_name.style.textTransform = "capitalize";


        input_result_email_card.style.display = "flex";
        input_result_email_card.style.alignItems = "center";
        input_result_email_card.style.fontSize = "16px";
        result_email.style.marginLeft = "20px";

        input_result_num_card.style.display = "flex";
        input_result_num_card.style.alignItems = "center";
        input_result_num_card.style.fontSize = "16px";
        result_phone_number.style.marginLeft = "20px";

        input_result_address_card.style.display = "flex";
        input_result_address_card.style.alignItems = "center";
        input_result_address_card.style.fontSize = "16px";
        result_address.style.marginLeft = "20px";
        
        id_img.src = URL.createObjectURL(input_box_image.files[0]);
        
        input_result_main.style.opacity = "1";
        
    }
});



btn_reset.addEventListener("click" , function(){
    
    input_box_name.value = location.reload();
    input_box_email.value = location.reload();
    input_box_number.value = location.reload();
    input_box_address.value = location.reload();
    input_box_image.value = location.reload();
    location.reload();

});


copy_btn.addEventListener("click" , function(){

    let copy_store = "Your Name: " + input_box_name.value + " " + "Your Email: " + input_box_email.value + "Your Phone Number: " + input_box_number.value + "Your Phone Address: " + input_box_address.value ;
   
   navigator.clipboard.writeText(copy_store);


  alert( "Copied: " + copy_store );

});

