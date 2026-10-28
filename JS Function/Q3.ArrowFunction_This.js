let user={
    name:"Aditya",

    // Arrow Function
    showName:()=>{
        console.log(this.name);
    },

    // Normal func
    function(){
        console.log(this.name);
    }

}

user.showName();
user.function();