//var katzDeliLine = [];
function takeANumber(katzDeliLine, name){
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
