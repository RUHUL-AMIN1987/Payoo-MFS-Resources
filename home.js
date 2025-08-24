
    const validPinNumber = 1234
    document.getElementById('add-money-btn')
        .addEventListener('click', function(e){
            e.preventDefault();
            const bank = document.getElementById('bank').value
            const bankAccountNumber = document.getElementById('account-number').value
            const amount = parseInt(document.getElementById('amount-to-add').value)
            const pinNumber = parseInt(document.getElementById('pin-number').value)
            const availableBalance = parseInt(document.getElementById('available-balance').innerText)
            if(bankAccountNumber.length <11){
                alert('Please Provide Valid Account Number')
                return;
            }
            if(pinNumber != validPinNumber){
                alert('Please Provide Valid Pin Number');
                return;
            }
            const totalBalance = amount + availableBalance
            document.getElementById('available-balance').innerText = totalBalance
        })