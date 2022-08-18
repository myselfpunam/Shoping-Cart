
function totalCasePrice(previousCaseAmount){
  const casePrice = document.getElementById('case-price')
  const casePriceString = casePrice.innerText
  const previousCaseTotal = parseInt(casePriceString)
  const newCaseTotal = previousCaseAmount * 59
  if (isNaN(newCaseTotal)){
    alert ('you can not select less then 0 item')
    return
  }
  casePrice.innerText = newCaseTotal
  
  
}

document.getElementById('btn-case-plus').addEventListener('click', function(){
  const caseTotalAmount =  getinputValuePlus('btn-case-input')
  totalCasePrice(caseTotalAmount)
  setSubtotal()
  
 
})
document.getElementById('btn-case-minus').addEventListener('click',function(){
 const caseTotalAmount = getinputValueMinus('btn-case-input')
 totalCasePrice(caseTotalAmount)
 setSubtotal()
  
})

