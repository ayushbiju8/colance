
// Blinking Animation :)

const words = ["money the Problem.","HomeWork Tiresome.","class BORING.","time the Problem.","writing record a HELL."]
const dynamicText = document.querySelector(".bigcontainer span")
let wordIndex = 0;
let charIndex = 0;
isDeleting = false;
const typeEffect = ()=>{
    currentWord = words[wordIndex];    
    currentChar = currentWord.substring(0,charIndex)
    dynamicText.textContent=currentChar;
    dynamicText.classList.add("stop-blinking");
    if (!isDeleting && charIndex < currentWord.length){
        charIndex++;
        setTimeout(typeEffect,100);
    }else if (isDeleting && charIndex  > 0){
        charIndex--;
        setTimeout(typeEffect,50);
    }else{
        isDeleting = !isDeleting;
        setTimeout(typeEffect,2000);
        dynamicText.classList.remove("stop-blinking");
        wordIndex = !isDeleting ? (wordIndex +1)% words.length : wordIndex;
    }
}
typeEffect()

// Blinking Animation End :)