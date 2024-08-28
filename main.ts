#! /usr/bin/env node

import { number } from "@inquirer/prompts"
import {differenceInSeconds} from "date-fns"

console.log("\nWelcome to my Countdown Timer\n");

function* countdownTimer(second: any){
    while (second > 0){
        yield second;
        second--;
    }
}

const num = await number({
    message: "Enter the number for Countdown Timer"
})

let timer = countdownTimer(num)

function displayCountdown (){

    let result = timer.next()

    if (!result.done){
        const now = new Date();

        const countdownTime = new Date(now.getTime() + (result.value * 1000))

        const remainingSeconds = differenceInSeconds (countdownTime , now)

        console.log(`Remaining Seconds: ${remainingSeconds}`);
    
        setTimeout(displayCountdown, 1000)
    }

    else {
        console.log("Countdown Complete!");
        
    }
}

displayCountdown()