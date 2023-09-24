function isSmartphone() {
    const userAgent = navigator.userAgent;
    const isMobile = /iPhone|iPad|iPod|Android|Windows Phone/.test(userAgent);
    return isMobile;
}
if (isSmartphone()) {
    $('.click_me').attr("href", "#");
    $('.remove-prank').html('')
} else {
    console.log("This is not a smartphone (e.g., desktop or tablet).");
}

count = 0

// Eventlistner for uploading file 
$(document).on('click', '.click_me', function() {
    if(count==3){
        alert("Stop clicking me I dont want to work right now ")
    }else if(count==4){
        alert("Stop it man. ")
    }else if(count==5){
        alert("Stop wasting your time bro. ")
    }else if(count==6){
        alert("Really?")
    }else if(count==7){
        alert("I am going to sleep...")
    }else if(count>8){
        alert("Zzzzzz")
    }
    count++;
});