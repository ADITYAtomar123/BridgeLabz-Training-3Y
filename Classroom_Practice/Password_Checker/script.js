let pass= "Adi@21233"
function checkpassword(pass){
    let checkpassword=pass.trim();
    if(pass.length<8) return false;
    let upper=false;
    let lower=false;
    let special=false;
    let digit=false;
    for(let i=0;i<checkpassword.length;i++){
        let ch = checkpassword.charAt(i)
        if(ch>="A" && ch<="Z"){
            upper=true
        }
        else if(ch>="0" && ch<="9") digit=true;
        else if(ch>="a" && ch<="z") lower=true;
        else special=true;
    }
    
        if(lower && upper && digit && special){
            return true;
        }
        return false;
}
console.log(checkpassword(pass))