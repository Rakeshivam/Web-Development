/**
 * ! Example-1
console.log("Start");

let count = 1;
let intervalId = setInterval(() => {
                                console.log(`Count-${count++}`);
                            }, 1000);


setTimeout(() => {
    console.log("Timeout....!")
    clearInterval(intervalId);    
}, 5500);


console.log("End");
 */


/**
 * ! Example-2

const startButton = document.getElementById("startBtn");
const stopButton = document.getElementById("stopBtn");
let count = 1;
let intervalId;

const startCount = () => {
   intervalId = setInterval(() => {
                            console.log(`Count-${count++}`);
                        }, 1000);
}

const stopCount = () => {
   clearInterval(intervalId);
}


startButton.addEventListener("click",startCount);
stopButton.addEventListener("click",stopCount);
 */


// Captcha Code = Alpha numeric number

// lowercase = abcdefghijklmnopqrstuvwxyz
// uppercase = ABCDEFGHIJKLMNOPQRSTUVWXYZ
// numbers = 0123456789
// symbol = @#$&=


const otpInput = document.getElementById("otpInput");
const displayTimer = document.querySelector(".displayTimer");
const verifyOtpButton = document.querySelector(".VerifyOtpBtn");
const resendOtpButton = document.querySelector(".resendOtpBtn");
const displayCaptchaCode = document.querySelector(".displayCaptcha");

let timer = 120;
let intervalId;

const startOtpTimer = () =>{
       intervalId = setInterval(() => {
            let minute = String(Math.floor( timer/60)) ;
            let second = String(timer % 60);  

            displayTimer.innerHTML = `${minute.padStart(2,"0")}:${second.padStart(2,"0")}`;

            if(timer === 0)
            {
                otpInput.disabled = true;
                verifyOtpButton.disabled = true;
                verifyOtpButton.style.cursor="not-allowed";
                otpInput.style.cursor="not-allowed";
                clearInterval(intervalId);
            }
            timer--;
        }, 1000);
}
startOtpTimer()




const createCaptchaCode = () =>{
    const code = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$&=";
    let captcha = "";
    for(let i = 0 ; i<6 ;i++)
    {
        let randomNumber = Math.random();
        let multiple = randomNumber * code.length;
        let findNumber = Math.floor( multiple);
        captcha = captcha + code[findNumber];
    }
    return captcha;
}


let captcha = createCaptchaCode();
displayCaptchaCode.innerHTML = captcha;

const verifyOtp = (typedCaptcha) =>{
    if( captcha === typedCaptcha){
        return true;
    }
    return false;
}


otpInput.addEventListener("change",(e)=>{
    const typedCaptcha = otpInput.value.trim();
    const isMatched = verifyOtp(typedCaptcha);
    if(!isMatched){
        alert("Captcha Code Miss matched..")
    }
    else{
        alert("Catcha code verified")
    }
})