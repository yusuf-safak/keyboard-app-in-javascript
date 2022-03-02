function Enter(text)
{
    var textboxes = document.getElementById("textboxes")
    var textElement = document.createElement("div")
    textElement.textContent = text
    textElement.setAttribute("id","text")
    textboxes.append(textElement)
}
var Keys = [
    "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P","Ğ", "Ü", "DELETE", 
    "CAPS", "A", "S", "D", "F", "G", "H", "J", "K","L", "Ş", "İ", "ENTER",
    "aa", "aa", "Z", "X", "C", "V", "B", "N", "M", "Ö", "Ç", "aa","aa",
    "aa", "aa", "aa", "aa", "SPACE"
]
function capsLock(bool)
{
    if(bool==false)
    {
        Keys = [
            "q", "w", "e", "r", "t", "y", "u", "ı", "o", "p","ğ", "ü", "DELETE", 
            "CAPS", "a", "s", "d", "f", "g", "h", "j", "k","l", "ş", "i", "ENTER",
            "aa", "aa", "z", "x", "c", "v", "b", "n", "m", "ö", "ç", "aa", "aa",
                    "aa", "aa", "aa", "aa", "SPACE"
        ]
    }
    if(bool==true)
    {
        Keys = [
            "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P","Ğ", "Ü", "DELETE", 
            "CAPS", "A", "S", "D", "F", "G", "H", "J", "K","L", "Ş", "İ", "ENTER",
            "aa", "aa", "Z", "X", "C", "V", "B", "N", "M", "Ö", "Ç", "aa","aa",
                    "aa", "aa", "aa", "aa", "SPACE"
        ]
    }  
    var buttonElements = document.getElementsByClassName("keyButton")
    for(var i = 0; i < buttonElements.length; i++)
        buttonElements[i].style.display = "none" 
    Keyboard(Keys)
}
var totalText = ""
var capsClick = 0;
function Keyboard(keys)
{
    var keyboard = document.getElementById("keyboard")
    var text = document.getElementById("textarea")
    var i = 0
    keys.forEach(key=>{
        const buttonElement = document.createElement("button")
        buttonElement.textContent = key
        buttonElement.className = "keyButton"
        buttonElement.setAttribute("id",key)
        if(key == "aa")
        {
            buttonElement.style.visibility="hidden"
        }
        buttonElement.addEventListener("click",function handleClick(){
            if(key=="ENTER")
            {
                Enter(totalText)
                totalText = ""
                text.innerHTML = totalText
                i = 0
            }
            else if(key=="CAPS")
            {
                if(capsClick%2==0) 
                    capsLock(false)
                else
                    capsLock(true)
                capsClick += 1
                totalText = totalText
                text.innerHTML = totalText
            }
            else if(key=="DELETE")
            {
                totalText = totalText.slice(0,i-1)
                text.innerHTML = totalText
                i--
            }
            else if(key=="SPACE")
            {
                totalText += " "
                text.innerHTML = totalText
                i++
            }
            else
            {
                totalText += key 
                text.innerHTML = totalText
                i++
            }
        })
        keyboard.append(buttonElement)
    })
}
window.onload =  function()
{
    Keyboard(Keys)
}