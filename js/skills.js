$(".info-content em").each(function(){
    let s = $(this).data("star"), star = '<i class="fa-solid fa-star filled"></i>', blank = '<i class="fa-solid fa-star empty"></i>';
    for(let i = 5; i >= 1; i--){
        if(i > s){
            $(this).append(blank);
        } else {
            $(this).append(star);
        }
    }
});