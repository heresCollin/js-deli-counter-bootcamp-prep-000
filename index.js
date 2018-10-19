function takeANumber(katzDeliLine,newPerson){
  katzDeliLine.push(newPerson);
  return `Welcome, ${newPerson}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0){
    return "There is nobody waiting to be served!";
  } else {
    var number1 = katzDeliLine[0];
    katzDeliLine.shift()
    return `Currently serving ${number1}.`
  }
}

function currentLine(katzDeliLine){
  if (katzDeliLine.length === 0) {
    return ""
  }
}