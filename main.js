var speechRecognition=window.webkitSpeechRecognition;

var recognition=new speechRecognition();
function start()
{
    document.getElementById("textBox").innerHTML="";
    recognition.start();

}
recognition.onresult=function(event){
    console.log(event);
    var content=event.results[0][0].transcript;
    console.log(content);
    document.getElementById("textBox").innerHTML=content;
    speak();
}

function speak()
{
    var synth=window.speechSynthesis;
    speak_data=document.getElementById("texBox").value;
    var utter=new SpeechSynthesisUtterance(speak_data);

    synth.speak(utter);
Webcam.attach(camera);
}
camera=document.getElementById("camera");
Webcam.set({
    width:360,
    height:250,
    Image_format:'png',
    png_quality:90
});