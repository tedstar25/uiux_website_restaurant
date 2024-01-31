import images from './images';

const wines = [
  {
    title: 'Chapel Hill Shiraz',
    price: '$56',
    tags: 'AU | Bottle',
  },
  {
    title: 'Catena Malbee',
    price: '$59',
    tags: 'AU | Bottle',
  },
  {
    title: 'La Vieillw Rose',
    price: '$44',
    tags: 'FR | 750 ml',
  },
  {
    title: 'Rhino Pale Ale',
    price: '$31',
    tags: 'CA | 750 ml',
  },
  {
    title: 'Irish Guinness',
    price: '$26',
    tags: 'IE | 750 ml',
  },
];

const cocktails = [
  {
    title: 'Aperol Sprtiz',
    price: '$20',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: "Dark 'N' Stormy",
    price: '$16',
    tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'Daiquiri',
    price: '$10',
    tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'Old Fashioned',
    price: '$31',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Negroni',
    price: '$26',
    tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
];

const appetizers = [
  {
    title: 'Bruschetta al Pomodoro',
    price: '$9.99',
    tags: 'Italian | Fresh | Vegetarian',
  },
  {
    title: "Stuffed Mushrooms",
    price: '$11.99',
    tags: 'Savory | Cheese | Vegetarian',
  },
  {
    title: 'Spinach Artichoke Dip',
    price: '$8.99',
    tags: 'Creamy | Dip | Vegetarian',
  },
  {
    title: 'Shrimp Cocktail',
    price: '$13.99',
    tags: 'Seafood | Tangy | Refreshing',
  },
  {
    title: 'Chicken Wings (Buffalo Style)',
    price: '$10.99',
    tags: 'Spicy | Crispy | Finger Food',
  },
];

const salads = [
  {
    title: 'Caesar Salad',
    price: '$8.99',
    tags: 'Classic | Crispy | Parmesan',
  },
  {
    title: "Greek Salad",
    price: '$9.99',
    tags: 'Feta | Olives | Fresh Vegetables',
  },
  {
    title: 'Caprese Salad',
    price: '$10.99',
    tags: 'Tomato | Mozzarella | Basil',
  },
  {
    title: 'Cobb Salad',
    price: '$11.99',
    tags: 'Bacon | Avocado | Blue Cheese',
  },
  {
    title: 'Mango Avocado Salad',
    price: '$12.99',
    tags: 'Tropical | Citrusy | Healthy',
  },
];

const meat = [
  {
    title: 'Filet Mignon',
    price: '$25.99',
    tags: 'Prime Cut | Juicy | Grilled',
  },
  {
    title: "BBQ Ribs",
    price: '$18.99',
    tags: 'Smoky | Tender | BBQ Sauc',
  },
  {
    title: 'Lamb Chops',
    price: '$22.99',
    tags: 'Rosemary | Garlic | Char-Grilled',
  },
  {
    title: 'Chicken Alfredo',
    price: '$16.99',
    tags: 'Creamy | Pasta | Italian',
  },
  {
    title: 'Steak Fajitas',
    price: '$20.99',
    tags: 'Sizzling | Peppers | Onions',
  },
];

const vegan = [
  {
    title: 'Quinoa Buddha Bowl',
    price: '$14.99',
    tags: 'Nutrient-Rich | Colorful | Vegan',
  },
  {
    title: "Vegan Pad Thai",
    price: '$13.99',
    tags: 'Noodles | Peanuts | Tofu',
  },
  {
    title: 'Chickpea Curry',
    price: '$12.99',
    tags: 'Spicy | Coconut Milk | Plant-Based',
  },
  {
    title: 'Mushroom Risotto (Vegan)',
    price: '$15.99',
    tags: 'Creamy | Arborio Rice | Umami',
  },
  {
    title: 'Vegetable Stir-Fry',
    price: '$11.99',
    tags: 'Crisp Vegetables | Soy Sauce | Vegan',
  },
];

const desserts = [
  {
    title: 'Chocolate Lava Cake',
    price: '$7.99',
    tags: 'Decadent | Melting Cente | Sweet',
  },
  {
    title: "Tiramisu",
    price: '$9.99',
    tags: 'Coffee-Flavored | Ladyfingers | Mascarpone',
  },
  {
    title: 'Cheesecake (New York Style)',
    price: '$8.99',
    tags: 'Creamy | Graham Cracker Crust | Rich',
  },
  {
    title: 'Fruit Sorbet',
    price: '$6.99',
    tags: 'Refreshing | Light | Assorted Fruits',
  },
  {
    title: 'Classic Apple Pie',
    price: '$10.99',
    tags: 'Cinnamon | Flaky Crust | Warm',
  },
];











const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { wines, cocktails, awards, appetizers, salads, meat, vegan, desserts };
