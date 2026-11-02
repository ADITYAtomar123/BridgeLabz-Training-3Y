// Create a rondom OTP generator func
function generateOtp(){
    let min=1000;
    let max=9999;
    let num=Math.floor(Math.random()*(max-min))+min;
    console.log(num);
}
generateOtp();
