let toggler = document.getElementById('toggler');
let searchContainer = document.querySelector('.search-container');
let icon = toggler.querySelector('i');

toggler.addEventListener('click', function(){
    
    //toggle the 'open' class of the search container
    searchContainer.classList.toggle('open');
    
    //change icon to chevron-left or chevron-right
    if (searchContainer.classList.contains('open')) {
        icon.classList.remove('fa-chevron-right');
        icon.classList.add('fa-chevron-left');
    } else {
        icon.classList.remove('fa-chevron-left');
        icon.classList.add('fa-chevron-right');
    }

});

document.addEventListener('DOMContentLoaded', function() {

    console.log('Hai, dunia!');

    let a = 10;
    let b = 20;
    let c = "Hello, World!";
    let d = true;
    let harga1 = "35";
    let harga2 = "39";
    const n1 = "Siti";
    const n2 = "Budi";

    n2 = "Nurhaliza";

    console.log(n1 + " " + n2);

});

