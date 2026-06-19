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


