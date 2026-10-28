function showEndMessage(){
    console.log("Welcome to the Course!");
}
 function greetUser(name,callback){
    console.log("Hello "+name);
    callback();
 }
 greetUser("Aditya",showEndMessage);