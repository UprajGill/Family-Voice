function identify(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/Sc8Z2-_Pr/model.json',modelLoaded);
    }
    function modelLoaded(){
    classifier.classify(gotResults);
    }
    function gotResults(error,results){
    if(error){
    console.error(error);
    }
    
    else{
    console.log(results);
    randomr=Math.floor(Math.random()*255)+1;
    randomg=Math.floor(Math.random()*255)+1;
    randomb=Math.floor(Math.random()*255)+1;
    document.getElementById("result").style.color="rgb("+randomr+","+randomg+","+randomb+")";
    document.getElementById("confidence").style.color="rgb("+randomr+","+randomg+","+randomb+")";
    document.getElementById("confidence").innerHTML='Accuracy - '+(results[0].confidence*100).toFixed(2)+' %';
    document.getElementById("result").innerHTML='I Hear - '+results[0].label;
    
    img=document.getElementById('img');
    
    if(results[0].label=="Upraj"){
    img.src="graduation_photo.jpg";
 
    }
    else if(results[0].label=="Upraj's Mother"){
        img.src="muma.png";
    }
    else{
        img.src="reet.png";
    }
    }
    }
    