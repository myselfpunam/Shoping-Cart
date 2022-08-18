function totalPhonePrice(previous){
  const phonePrice = document.getElementById('phone-price')
  const phonePriceString = phonePrice.innerText
  const previousphoneTotal = parseInt(phonePriceString)
  const newPhoneTotal = previous * 1219
  if(isNaN(newPhoneTotal)){
    alert ('You can not select less then 0 item')
    return}
  phonePrice.innerText = newPhoneTotal
 
}

document.getElementById('btn-phone-plus').addEventListener('click', function(){
  const phoneTotalAmount = getinputValuePlus('btn-phone-input')
   totalPhonePrice(phoneTotalAmount)
  setSubtotal()
})

document.getElementById('btn-phone-minus').addEventListener('click', function(){
  const phoneTotalAmount = getinputValueMinus('btn-phone-input')
   totalPhonePrice(phoneTotalAmount)
  setSubtotal()
})