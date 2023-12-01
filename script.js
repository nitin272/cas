// Function to fetch random meal data from the MealDB API
async function getRandomMeal() {
    try {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
        const data = await response.json();

        // Extract meal details from the API response
        const meal = data.meals[0]; // Assuming the API response contains a 'meals' array

        // Update the meal image
        const mealImage = document.querySelector('.meal-image img');
        mealImage.src = meal.strMealThumb; // Update image source from API data

        // Update the text below the meal image
        const mealText = document.querySelector('.meal-image p');

        
        mealText.textContent = meal.strMeal; // Update text content from API data
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Call the function to load a random meal when the page loads
document.addEventListener('DOMContentLoaded', getRandomMeal);



// Function to fetch meal data based on search query from the MealDB API
async function searchMeal(query) {
    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
        const data = await response.json();

        // Update grid images with search results
        const grid = document.querySelector('.hidden');
        grid.innerHTML = ''; // Clear existing content

        data.meals.forEach(meal => {
            const gridItem = document.createElement('div');
            gridItem.classList.add('grid');

            const image = document.createElement('img');
            image.src = meal.strMealThumb;
            image.alt = meal.strMeal;
            image.height = 300;
            image.width = 300;

            const text = document.createElement('p');
            text.textContent = meal.strMeal;

            gridItem.appendChild(image);
            gridItem.appendChild(text);
            grid.appendChild(gridItem);
        });

        // Show the hidden grid
        grid.style.display = 'grid';

    } catch (error) {
        console.error('Error fetching search results:', error);
    }
}

// Event listener for search input
const searchInput = document.querySelector('.search-input');
searchInput.addEventListener('keypress', async function(event) {
    if (event.key === 'Enter') {
        const query = event.target.value.trim();
        if (query !== '') {
            await searchMeal(query);
        }
    }
});
// Function to fetch random meal data from the MealDB API
async function getRandomMeal() {
    try {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
        const data = await response.json();

        // Extract meal details from the API response
        const meal = data.meals[0]; // Assuming the API response contains a 'meals' array

        // Update the meal image
        const mealImage = document.querySelector('.meal-image img');
        mealImage.src = meal.strMealThumb; // Update image source from API data

        // Update the text below the meal image
        const mealText = document.querySelector('.meal-image p');
        mealText.textContent = meal.strMeal; // Update text content from API data

        // Update the ingredients list
        const ingredientsList = document.querySelector('.ingredients-list');
        ingredientsList.innerHTML = ''; // Clear existing content

        // Loop through ingredients and measurements
        for (let i = 1; i <= 20; i++) {
            const ingredient = meal[`strIngredient${i}`];
            const measure = meal[`strMeasure${i}`];

            if (ingredient && ingredient.trim() !== '') {
                const ingredientItem = document.createElement('li');
                ingredientItem.textContent = `${measure} ${ingredient}`;
                ingredientsList.appendChild(ingredientItem);
            }
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
    function toggleIngredients() {
        const ingredientsSection = document.querySelector('.ingredients-box');
        ingredientsSection.classList.toggle('hidden'); // Toggle the 'hidden' class
    }
    
    // Event listener for clicking the random meal image
    const mealImage = document.querySelector('.meal-image img');
    mealImage.addEventListener('click', toggleIngredients);
}


// Call the function to load a random meal when the page loads
document.addEventListener('DOMContentLoaded', getRandomMeal);


