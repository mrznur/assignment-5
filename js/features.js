document.getElementById('donation-btn').addEventListener('click',function(){
    console.log('show donation button clicked');
    showSectionById('section-donation');
    document.getElementById('donation-btn').classList.add('btn', 'btn-success', 'bg-prime1', 'text-stone-100', 'px-7');
    document.getElementById('history-btn').classList.remove('btn', 'btn-success', 'bg-prime1', 'text-stone-100', 'px-7');
    document.getElementById('history-btn').classList.add('btn', 'px-8' ,'border-gray-400');
})

document.getElementById('history-btn').addEventListener('click',function(){
    console.log('show transaction button clicked');
    showSectionById('section-history');
    document.getElementById('history-btn').classList.add('btn', 'btn-success', 'bg-prime1', 'text-stone-100', 'px-7');
    document.getElementById('donation-btn').classList.remove('btn', 'btn-success', 'bg-prime1', 'text-stone-100', 'px-7');
    document.getElementById('donation-btn').classList.add('btn', 'px-8' ,'border-gray-400');

})

