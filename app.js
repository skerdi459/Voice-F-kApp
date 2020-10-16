const tok=document.querySelector('.talk')
const content=document.querySelector('.content')

const fjalet=[]

const Speech=window.SpeechRecognition ||window.webkitSpeechRecognition
const rec=new Speech()


rec.onstart=()=>{
    console.log('voice is actiated,you can speek')
    canIhelp();

   
}

rec.onresult=function(event) {
    console.log(event);
    const current=event.resultIndex
    console.log('bla bla'+current);
    const msg=(event.results[current][0].transcript)
    
    
    readonLoud(msg)
}
tok.addEventListener('click',()=>{
    rec.start();
   
})

function readonLoud(msg){
    console.log("jam ketu")
    const speech=new SpeechSynthesisUtterance()
    speech.text=msg
    speech.volume=1
    speech.rate=1
    if(msg.includes("yes")){
        speech.text="Send Nudes!"
        window.speechSynthesis.speak(speech)
        setTimeout(()=>{
            document.getElementById('ss').style.visibility="unset"
        },3000)
    
        
    } 
    else if(msg.includes("no")){
        speech.text="ok fuck you"
        // document.getElementsByClassName('tok')[0].innerHTML="";
        document.getElementsByTagName('body')[0].style.backgroundColor='black';

        creatBurnimg()

        setTimeout(()=>{
            window.speechSynthesis.speak(speech)
        },4000)

        
    }
    
    
  
    
   

    
}

function canIhelp(){
    const speech=new SpeechSynthesisUtterance()
    speech.text="Hello Rayonit can i help you?"
    speech.volume=1
    speech.rate=1
    
    window.speechSynthesis.speak(speech)
}

//krijojm imazhin e ferrit 
function creatBurnimg(){
    var img = document.createElement("img");
    img.src="programi.png"
 
    document.body.appendChild(img)

}


