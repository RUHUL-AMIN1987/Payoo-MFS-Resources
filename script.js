

// Logging button funclity
document.getElementById('loggingButton')
    .addEventListener('click', function(e){
        e.preventDefault()
        const mobileNumber = '01714237145'
        const pinNumber = 7145
        const mobileNumberValue = document.getElementById('mobile-number').value
        const mobileNumberValueConverted = mobileNumberValue


        const pinNumberValue = document.getElementById('pin-number').value
        const pinNumberValueConverted = parseInt(pinNumberValue)

        if(mobileNumberValueConverted === mobileNumber && pinNumberValueConverted === pinNumber){
            console.log('all values matched')
        }
        else{
            console.log('Invalid')
        }
    })