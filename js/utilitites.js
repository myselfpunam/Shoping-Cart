 
 function getinputValuePlus(inputPlus){
  let inputFieldValue = document.getElementById(inputPlus);
  const inputFieldValueString = inputFieldValue.value;
  const inputField = parseInt(inputFieldValueString);
  const newInputField = inputField + 1;
  inputFieldValue.value = newInputField
  return inputFieldValue.value
 }
 
 function getinputValueMinus(inputMinus){
  const inputFieldValue = document.getElementById(inputMinus);
  const inputFieldValueString = inputFieldValue.value;
  const inputField = parseInt(inputFieldValueString);
  const newInputField = inputField - 1;
  if(newInputField < 0 ){
    return
  }
  inputFieldValue.value = newInputField
  return inputFieldValue.value
 }
 function getTextElementValueById(element){
  const phonePriceForSub = document.getElementById(element)
  const phonePriceForSubString = phonePriceForSub.innerText
  const phonePriceForSubValue = parseInt(phonePriceForSubString)
  return phonePriceForSubValue
 }
 function setTextElementById( elementID , value){
  const subTotalPrices = document.getElementById(elementID) 
  subTotalPrices.innerText = value
 }
 function setSubtotal(){
  const phonePrices = getTextElementValueById ('phone-price')
  const casePrices = getTextElementValueById ('case-price')
  const totalSubtotal = phonePrices + casePrices
  setTextElementById('sub-total', totalSubtotal)
  const taxString = (totalSubtotal * 0.02).toFixed(2)
  const tax = parseFloat(taxString) 
  setTextElementById ('tax',tax)
  const finalTotal = totalSubtotal + tax
  setTextElementById('total',finalTotal)
  
 }