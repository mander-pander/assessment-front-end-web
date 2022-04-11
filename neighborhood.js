let restaurants = ['Delhi Oven', 'Maestro', 'Monsoon Burgers', 'Thai Spoon'];

const getRandomRestaurant = () => {
        alert(restaurants[Math.floor(Math.random() * restaurants.length)]);
}

let restaurantBtn = document.getElementById('restBtn');
restaurantBtn.addEventListener('click', getRandomRestaurant);
