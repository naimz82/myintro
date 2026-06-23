/* shuffle function using Fisher-Yates algorithm */
function shuffleObjectKeys(obj) {
    const keys = Object.keys(obj);
    for (let i = keys.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [keys[i], keys[j]] = [keys[j], keys[i]];
    }
    return Object.fromEntries(keys.map(key => [key, obj[key]]));
}

let picinfo = {
    "001": "Group Coding Class Session",
    "002": "Strategic Roundtable Discussion",
    "003": "Event with Dr. Abdal Hakim Murad (Cambridge)",
    "004": "Event with Royal Laureate Professor Tan Sri Dr. SMN Al-Attas",
    "005": "Managing Youth Program in Sarawak",
    "006": "Training Event with Yayasan TM's Scholars",
    "007": "Leadership Training in KL",
    "008": "Volunteer at a Flood Relief Center",
    "009": "Talk on Cybersafety and Gadget Addiction",
    "010": "Private Coding Class Session",
    "011": "Group Coding Class Session"
};

let shuffledInfo = shuffleObjectKeys(picinfo);

for(const [pic, title] of Object.entries(shuffledInfo)){
    let html = '<a href="img/gallery/'+pic+'.jpg" data-lightbox="mygallery" data-title="'+title+'"><img src="img/gallery/thumb/'+pic+'.jpg" alt="'+title+'"></a>';
    $(".profile-gallery").append(html);
}