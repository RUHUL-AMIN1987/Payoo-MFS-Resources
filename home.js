

    // add money
    const validPinNumber = 1234

    // function get input value access
    function getInputValueNumber (id){
        const inputField = document.getElementById(id)
        const inputFieldValue = inputField.value
        const inputFieldValueNumber = parseInt(inputFieldValue)
        return inputFieldValueNumber
    }
    
    function getInputNumber(id){
       const inputField = document.getElementById(id)
       const inputFieldValue = inputField.value 
       return inputFieldValue 
    }

    // function get innerText
    function getInnerText (id){
        const element = document.getElementById(id)
        const elementValue = element.innerText
        const elementValueNumber = parseFloat(elementValue)
        return elementValueNumber
    }

    // function set to innerText
    function setInnerText(value){
        const availableBalanceElement = document.getElementById('available-balance')
       availableBalanceElement.innerText = value

    }



    document.getElementById('add-money-btn')
        .addEventListener('click', function(e){
            e.preventDefault();
            const bank = getInputNumber('bank')
            const bankAccountNumber = document.getElementById('account-number').value
            const amount = getInputValueNumber('amount-to-add')
            const pinNumber = getInputValueNumber('pin-number')
            const availableBalance = getInnerText('available-balance')
            if(bankAccountNumber.length <11){
                alert('Please Provide Valid Account Number')
                return;
            }
            if(pinNumber != validPinNumber){
                alert('Please Provide Valid Pin Number');
                return;
            }
            const totalBalance = amount + availableBalance
            setInnerText(totalBalance)
        })
        // Cash Out
         const transferPinNumber = 1234
        document.getElementById('withdraw-btn')
        .addEventListener('click', function(e){
            e.preventDefault();
            const amountTransfer = getInputValueNumber('amount-to-withdraw')
            const availableTransferBalance = getInnerText('available-balance')
            const agentNumber = getInputNumber('agent-number')
            const tPinNumber = document.getElementById('transfer-pin-number').value
            if(agentNumber.length <11){
                alert('Please Provide Valid Agent Number')
                 return;
            }
            if(transferPinNumber != tPinNumber){
                alert('Please Provide Valid Pin Number')
                return;
            }
            const totalWithdraw = availableTransferBalance - amountTransfer;
            setInnerText(totalWithdraw)
        })
        // Transfer Money

            // function to toggling 
            function handelToggling(id){
                 const forms = document.getElementsByClassName('form')            
              for(const form of forms){
                form.style.display ="none"
              }
              document.getElementById(id).style.display = 'block'
            }


        // toggling-button Add money

         document.getElementById('add-button')
            .addEventListener('click', function(e){
                e.preventDefault();
             
              handelToggling('add-money-parent')

            //    // Click Background Change

            // const clickButton = document.getElementsByClassName('click-btn');
            //     for (const btn of clickButton) {
            //         btn.classList.remove('border-1 border-[#08080880]');
            //     }

            //     // document.getElementById('add-button').classList.remove('border-gray-400');
            //     document.getElementById('add-button').classList.add('border-[#0874f2]', 'bg-[#0874f20d]');
            })

            // Cash Out

         document.getElementById('cash-button')
            .addEventListener('click', function(e){
                e.preventDefault();
               handelToggling('cash-out-parent')
            })

            // Transfer Money

         document.getElementById('transfer-btn')
            .addEventListener('click', function(e){
                e.preventDefault();
              handelToggling('transfer-parent')  
            });

            // Get Bonus

         document.getElementById('get-bonus-btn')
            .addEventListener('click', function(e){
                e.preventDefault();
              handelToggling('get-bonus-parent')   
            });

            // Pay Bill

        document.getElementById('pay-bill-button')
            .addEventListener('click', function(e){
                e.preventDefault();
              handelToggling('pay-bill-parent')  
            });