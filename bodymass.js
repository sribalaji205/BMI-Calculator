function bmical(){
var men=document.getElementById("men");
var women=document.getElementById("women");
var heightm=document.getElementById("height").value;
var weightw=document.getElementById("weight").value;
var age=document.getElementById("age").value;
var bodymass=document.getElementById("BMI");
var indicator=document.getElementById("indicator");
var bodyfat=document.getElementById("bfat");
if(heightm<=0 || weightw<=0 || age<=0){
bodymass.innerHTML="Enter Value";
}
else{
if(men.checked===true){
var sex,bfat;
sex=1;
heightm=heightm/100;
bmi=weightw/(heightm*heightm);
bmi=bmi.toFixed(1);
var range=range1(bmi);
document.getElementById("result").innerHTML="RESULTS:";
bodymass.innerHTML="Your BMI is "+ bmi+ " ("+range+")";
bfat=fatpercent(age,bmi,sex);
indicator.innerHTML="<strong>&#8659;</strong>";
bodyfat.innerHTML="Your Body Fat is "+bfat;
var indi=(bmi/48)*72;
if(bmi<=13){
indi=13.5;
}
else if(bmi>52){
indi=82;
}
else{
indi=indi;
}
indicator.style.marginLeft=indi+"%";
document.getElementById("image").style.visibility="visible";
document.getElementById("res").style.border="thick solid grey";
document.getElementById("res").style.borderRadius="5px";

}
if(women.checked===true){
var sex,bfat;
sex=0;
heightm=heightm/100;
bmi=weightw/(heightm*heightm);
bmi=bmi.toFixed(1);
var range=range1(bmi);
document.getElementById("result").innerHTML="RESULTS:";
bodymass.innerHTML="Your BMI is "+ bmi+ " ("+range+")";
bfat=fatpercent(age,bmi,sex);
indicator.innerHTML="<strong>&#8659;</strong>";
bodyfat.innerHTML="Your Body Fat is "+bfat;
var indi=(bmi/48)*72;
if(bmi<=13){
indi=13.5;
}
else if(bmi>52){
indi=82;
}
else{
indi=indi;
}
indicator.style.marginLeft=indi+"%";
document.getElementById("image").style.visibility="visible";
document.getElementById("res").style.border="thick solid grey";
document.getElementById("res").style.borderRadius="5px";
}
}
}

function fatpercent(age,bmi,sex){
var bodyfat;
if(age<=19){
bodyfat=(1.51*bmi)-(0.70*age)-(3.6*sex)+1.4;
if(bodyfat<0){
bodyfat=0;
}
return bodyfat;
}
if(age>=20){
bodyfat=(1.39*bmi)-(0.16*age)-(10.34*sex)-9;
if(bodyfat<0){
bodyfat=0;
}
return bodyfat.toFixed(1);
}
}
function range1(bmi){
var rangeb;
if(bmi<16){
rangeb="Severe Thinness";
}
else if(bmi>16 && bmi<=17){
rangeb="Moderate Thinness";
}
else if(bmi>17 && bmi<=18.5){
rangeb="Mild Thinness";
}
else if(bmi>18.5 && bmi<=25){
rangeb="Normal";
}
else if(bmi>25 && bmi<=30){
rangeb="Overweight";
}
else if(bmi>30 && bmi<=35){
rangeb="Obese Class I";
}
else if(bmi>35 && bmi<=40){
rangeb="Obese Class II";
}
else{
rangeb="Obese Class III";
}
return rangeb;
}
function clearall(){
document.getElementById("BMI").innerHTML="";
document.getElementById("indicator").innerHTML="";
document.getElementById("bfat").innerHTML="";
document.getElementById("image").style.visibility="hidden";
document.getElementById("res").style.border="thick solid white";
document.getElementById("result").innerHTML="";
}
