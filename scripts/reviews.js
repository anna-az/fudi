const reviews = [
    {
        photo: '/images/review1.png', 
        text: 'I am so happy because I found this recipe, and it just made my life easier.<br>Thanks  so much for sharing!',
        name: 'Michael Dawson',
        city: 'San Francisco, CA'
    },
    {
        photo: '/images/review1.png', 
        text: 'I am so happy because I found this recipe, and it just made my life easier.<br>Thanks  so much for sharing!',
        name: 'Michael Dawson',
        city: 'San Francisco, CA'
    },
    {
        photo: '/images/review1.png', 
        text: 'I am so happy because I found this recipe, and it just made my life easier.<br>Thanks  so much for sharing!',
        name: 'Michael Dawson',
        city: 'San Francisco, CA'
    }
];


reviews.forEach(addReview);

function addReview(item) {
    const html = `<div class="review">
                    <img src="${item.photo}" alt="${item.name}">
                    <p class="review_text">“${item.text}”</p>
                    <p class="review_sender"><span class="review_name">- ${item.name},</span> <span class="review_city">${item.city} -</span></p>
                </div>`;
    
    const container = document.createElement('div');
    const inner = document.querySelector('.slider');
    container.innerHTML = html;
    inner.appendChild(container);    
}

$('.multiple-items').slick({
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
});
