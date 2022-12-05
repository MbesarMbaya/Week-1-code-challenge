const prompt=require("prompt-sync")();
let speed=prompt("Enter speed of the car");
function points(){
    if(speed < 70){
        console.log("Ok")
    }
    else if(speed > 70){
        const penaltypoints=((speed-70)/5)
        console.log(Math.ceil(penaltypoints));
        if(penaltypoints >=12){
            console.log('License suspended')
        }
    }
}