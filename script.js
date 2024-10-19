function showQRCode(plant) {
    let qrCodeURL;
    if (plant === 'african pine') {
        qrCodeURL = 'African Pine.jpg';
    } else if (plant === 'amla tree') {
        qrCodeURL = 'Amla Tree.jpg';
    } else if (plant === 'arabian jasmine') {
        qrCodeURL = 'Arabian Jasmine.jpg';
    } else if (plant === 'arjun tree') {
        qrCodeURL = 'Arjun Tree.jpg';
    } else if (plant === 'ashoka tree') {
        qrCodeURL = 'Ashoka Tree.jpg';
    } else if (plant === 'banyan tree') {
        qrCodeURL = 'Banyan Tree.jpg';
    } else if (plant === 'birdlime tree') {
        qrCodeURL = 'Birdlime Tree.jpg';
    } else if (plant === 'blackboard tree') {
        qrCodeURL = 'Blackboard Tree.jpg';
    } else if (plant === 'bottle brush') {
        qrCodeURL = 'Bottle Brush.jpg';
    } else if (plant === 'camphor tree') {
        qrCodeURL = 'Camphor Tree.jpg';
    } else if (plant === 'chinaberry') {
        qrCodeURL = 'Chinaberry.jpg';
    } else if (plant === 'chinese chaste') {
        qrCodeURL = 'Chinese Chaste.jpg';
    } else if (plant === 'chinese flame tree') {
        qrCodeURL = 'Chinese Flame Tree.jpg';
    } else if (plant === 'date palm') {
        qrCodeURL = 'Date Palm.jpg';
    } else if (plant === 'east indian walnut') {
        qrCodeURL = 'East Indian Walnut.jpg';
    } else if (plant === 'eastern cottonwood') {
        qrCodeURL = 'Eastern Cottonwood.jpg';
    } else if (plant === 'fire bush') {
        qrCodeURL = 'Fire Bush.jpg';
    } else if (plant === 'fortunes spindle') {
        qrCodeURL = 'Fortunes Spindle.jpg';
    } else if (plant === 'gamhar') {
        qrCodeURL = 'Gamhar Tree.jpg';
    } else if (plant === 'hongkong orchid tree') {
        qrCodeURL = 'Hong Kong Orchid Tree.jpg';
    } else if (plant === 'indian rosewood') {
        qrCodeURL = 'Indian Rosewood.jpg';
    } else if (plant === 'jamal gota') {
        qrCodeURL = 'Jamal Gota.jpg';
    } else if (plant === 'jamun tree') {
        qrCodeURL = 'Jamun Tree.jpg';
    } else if (plant === 'japanese holly') {
        qrCodeURL = 'Japanese Holly.jpg';
    } else if (plant === 'jor tor tree') {
        qrCodeURL = 'Jor Tor Tree.jpg';
    } else if (plant === 'kachnar') {
        qrCodeURL = 'Kachnar.jpg';
    } else if (plant === 'kadam') {
        qrCodeURL = 'Kadam.jpg';
    } else if (plant === 'karanja') {
        qrCodeURL = 'Karanja.jpg';
    } else if (plant === 'mahua tree') {
        qrCodeURL = 'Mahua Tree.jpg';
    } else if (plant === 'moulsari') {
        qrCodeURL = 'Moulsari.jpg';
    } else if (plant === 'moutan peony') {
        qrCodeURL = 'Moutan Peony.jpg';
    } else if (plant === 'nagkesar') {
        qrCodeURL = 'Nagkesar.jpg';
    } else if (plant === 'paradise tree') {
        qrCodeURL = 'Paradise Tree.jpg';
    } else if (plant === 'peepal tree') {
        qrCodeURL = 'Peepal Tree.jpg';
    } else if (plant === 'pinwheel tree') {
        qrCodeURL = 'Pinwheel Flower.jpg';
    } else if (plant === 'ponytail palm') {
        qrCodeURL = 'Ponytail Palm.jpg';
    } else if (plant === 'rangoon creeper') {
        qrCodeURL = 'Rangoon Creeper.jpg';
    } else if (plant === 'red cedar') {
        qrCodeURL = 'Red Cedar.jpg';
    } else if (plant === 'rose') {
        qrCodeURL = 'Rose.jpg';
    } else if (plant === 'safeda tree') {
        qrCodeURL = 'Safeda Tree.jpg';
    } else if (plant === 'silver buttonwood') {
        qrCodeURL = 'Silver Buttonwood.jpg';
    } else if (plant === 'silver oak') {
        qrCodeURL = 'Silver Oak.jpg';
    } else if (plant === 'singapore graveyard flower') {
        qrCodeURL = 'Singapore Graveyard Flower.jpg';
    } else if (plant === 'taiwan cycad') {
        qrCodeURL = 'Taiwan Cycad.jpg';
    } else if (plant === 'the false ashoka') {
        qrCodeURL = 'The False Ashoka.jpg';
    } else if (plant === 'trumpet vine') {
        qrCodeURL = 'Trumpet Vine.jpg';
    } else if (plant === 'weeping fig') {
        qrCodeURL = 'Weeping Fig.jpg';
    } else if (plant === 'white fig') {
        qrCodeURL = 'White Fig.jpg';
    } else if (plant === 'yellow flame tree') {
        qrCodeURL = 'Yellow Flame Tree.jpg';
    } else if (plant === 'yellow oleander') {
        qrCodeURL = 'Yellow Oleander.jpg';
    }
    if (qrCodeURL) {
        window.open(qrCodeURL, '_blank');
    }
}

window.addEventListener('scroll', ()=> {
    const navbar = document.getElementById('navbar');
    if (window.scrollY>50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
