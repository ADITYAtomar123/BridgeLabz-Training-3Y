// Q8. Movie Ticket Booking System (Inheritance + Prototype Chain)

class MovieTicket {
    constructor(movieName, seatNo, price) {
        this.movieName = movieName;
        this.seatNo = seatNo;
        this.price = price;
    }
}

MovieTicket.prototype.printTicket = function () {
    console.log("----- MOVIE TICKET -----");
    console.log("Movie:", this.movieName);
    console.log("Seat:", this.seatNo);
    console.log("Ticket price: Rs.", this.price);
};

class OnlineTicket extends MovieTicket {
    constructor(movieName, seatNo, price, convenienceFee) {
        super(movieName, seatNo, price);
        this.convenienceFee = convenienceFee;
    }

    getTotalAmount() {
        return this.price + this.convenienceFee;
    }
}

const onlineTicket1 = new OnlineTicket("3 Idiots", "A12", 200, 30);
const onlineTicket2 = new OnlineTicket("Dangal", "B08", 180, 25);

onlineTicket1.printTicket();
console.log("Convenience fee: Rs.", onlineTicket1.convenienceFee);
console.log("Total amount: Rs.", onlineTicket1.getTotalAmount());

console.log("------------------------");

onlineTicket2.printTicket();
console.log("Convenience fee: Rs.", onlineTicket2.convenienceFee);
console.log("Total amount: Rs.", onlineTicket2.getTotalAmount());

// printTicket is found through the prototype chain:
// onlineTicket -> OnlineTicket.prototype -> MovieTicket.prototype.
