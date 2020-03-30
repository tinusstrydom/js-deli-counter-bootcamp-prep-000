//var katzDeliLine = [];
function takeANumber(katzDeliLine, name){
<<<<<<< HEAD
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}
function nowServing(katzDeliLine){
  if(katzDeliLine == 0){
    return "There is nobody waiting to be served!"
  }
  return `Currently serving ${katzDeliLine.shift()}.`;
}
function currentLine(katzDeliLine){
  if(katzDeliLine.length==0){
    return("The line is currently empty.");
  }
  else{
    var text = "The line is currently: ";
    for (let i=1; i <= katzDeliLine.length; i++){
      if(i >= katzDeliLine.length){
          text += i+". "+katzDeliLine[i-1];
      }else{
          text += i+". "+katzDeliLine[i-1]+', ';
      }
    }
    return text;
  }
}
=======

  for(let i = 1; i < katzDeliLine.length; i++){
    return "Welcome, ${name}. You are number 1 in line.";
  }
}
takeANumber(katzDeliLine, "Ada");
>>>>>>> fb81c38e59113abf312f3528947e0e1cfea6e1bd
