
document.getElementById('blog-btn').addEventListener('click',function(event){
    console.log('blog-html-surfaced');
    window.location.href = './blog.html';
})


document.getElementById('donate-now-1-btn').addEventListener('click' , function(event){
    event.preventDefault();

    console.log('donate now button clicked');

    const donateMoney = getInputFieldValueById('enter-amount-1');
    const curAmount = getTextFieldValueById('current-amount-1');
    console.log('add money with parameter', donateMoney, curAmount);


    if(isNaN(donateMoney)){
        alert('Input a Valid Amount');
        return;
    }

    const balance = getTextFieldValueById('account-balance');

    if(donateMoney>balance){
        alert('You Do Not Have Enough Balance!');
        return;
    }
    
    const newBalance = balance - donateMoney;

    document.getElementById('account-balance').innerText= newBalance;

    document.getElementById('current-amount-1').innerText= donateMoney + curAmount;

    const date = new Date().toLocaleString();

    const eventName = document.getElementById('name-1-event').innerText;

    const div = document.createElement('div');
    div.classList.add('card','bg-base-100','py-10','shadow-xl','flex-col' ,'justify-items-center','text-center','space-y-1.5');
    div.innerHTML=`
        <h4 class = "lg:text-3xl text-base font-bold ">${donateMoney} Taka is Donated for ${eventName}</h4>
        <h2 class = "lg:text-xl text-xs text-stone-500">Date: ${date}</h2> 
    `

    document.getElementById('section-history').appendChild(div);

})


document.getElementById('donate-now-2-btn').addEventListener('click' , function(event){
    event.preventDefault();

    console.log('donate now button clicked');

    const donateMoney = getInputFieldValueById('enter-amount-2');
    const curAmount = getTextFieldValueById('current-amount-2');
    console.log('add money with parameter', donateMoney, curAmount);

    if(isNaN(donateMoney)){
        alert('Input a Valid Amount');
        return;
    }


   
    const balance = getTextFieldValueById('account-balance');

    if(donateMoney>balance){
        alert('You Do Not Have Enough Balance!');
        return;
    }

    const newBalance = balance - donateMoney;

    document.getElementById('account-balance').innerText= newBalance;

    document.getElementById('current-amount-2').innerText= donateMoney + curAmount;

    const date = new Date().toLocaleString();

    const eventName = document.getElementById('name-2-event').innerText;

    const div = document.createElement('div');
    div.classList.add('card','bg-base-100','py-10','shadow-xl','flex-col' ,'justify-items-center','text-center','space-y-1.5');
    div.innerHTML=`
        <h4 class = "lg:text-3xl text-base font-bold ">${donateMoney} Taka is Donated for ${eventName}</h4>
        <h2 class = "lg:text-xl text-xs text-stone-500">Date: ${date}</h2> 
    `
    document.getElementById('section-history').appendChild(div);

})



document.getElementById('donate-now-3-btn').addEventListener('click' , function(event){
    event.preventDefault();

    console.log('donate now button clicked');

    const donateMoney = getInputFieldValueById('enter-amount-3');
    const curAmount = getTextFieldValueById('current-amount-3');
    console.log('add money with parameter', donateMoney, curAmount);


    if(isNaN(donateMoney)){
        alert('Input a Valid Amount');
        return;
    }
 
    const balance = getTextFieldValueById('account-balance');

    if(donateMoney>balance){
        alert('You Do Not Have Enough Balance!');
        return;
    }

    const newBalance = balance - donateMoney;

    document.getElementById('account-balance').innerText= newBalance;

    document.getElementById('current-amount-3').innerText= donateMoney + curAmount;

    const date = new Date().toLocaleString();

    const eventName = document.getElementById('name-3-event').innerText;

    const div = document.createElement('div');
    div.classList.add('card','bg-base-100','py-10','shadow-xl','flex-col' ,'justify-items-center','text-center','space-y-1.5');
    div.innerHTML=`
        <h4 class = "lg:text-3xl text-base font-bold ">${donateMoney} Taka is Donated for ${eventName}</h4>
        <h2 class = "lg:text-xl text-sm text-stone-500">Date: ${date}</h2> 
    `
    document.getElementById('section-history').appendChild(div);

})

