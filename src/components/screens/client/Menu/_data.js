const data  = [
    {
      "snacks": [
        {
          "id": 1,
          "name": "Veggie Spring Rolls",
          "price": 180,
          "description": "Crispy spring rolls filled with mixed vegetables and served with sweet chili sauce",
          "rating": 4.2,
          "image": "https://images.pexels.com/photos/3569706/pexels-photo-3569706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          "characteristics": ["vegetarian"],
          "availability": "Available",
        },
        {
          "id": 2,
          "name": "Papdi Chaat",
          "price": 150,
          "description": "Crispy crackers topped with boiled potatoes, chickpeas, and tangy tamarind chutney",
          "rating": 4.5,
          "image": "https://images.pexels.com/photos/16171917/pexels-photo-16171917.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          "characteristics": ["vegetarian", "spicy"],
          "availability": "Available"
        },
        {
          "id": 3,
          "name": "Chicken Satay",
          "price": 220,
          "description": "Grilled chicken skewers served with peanut sauce",
          "rating": 4.3,
          "image": "https://images.pexels.com/photos/13795311/pexels-photo-13795311.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          "characteristics": ["non-vegetarian"],
          "availability": "Available"
        },
        {
          "id": 4,
          "name": "Vada Pav",
          "price": 120,
          "description": "A popular Mumbai street food consisting of a spicy potato fritter served in a bun",
          "rating": 4.0,
          "image": "https://images.pexels.com/photos/5410400/pexels-photo-5410400.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          "characteristics": ["vegetarian", "spicy"],
          "availability": "Available"
        },
        {
          "id": 5,
          "name": "Pesto and Cheese Bruschetta",
          "price": 200,
          "description": "Toasted bread topped with pesto sauce and melted cheese",
          "rating": 4.6,
          "image": "https://images.pexels.com/photos/4378160/pexels-photo-4378160.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          "characteristics": ["vegetarian"],
          "availability": "Available"
        },
        {
          "id": 6,
          "name": "Fish and Chips",
          "price": 250,
          "description": "Crispy battered fish served with french fries",
          "rating": 4.4,
          "image": "https://images.pexels.com/photos/12365243/pexels-photo-12365243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          "characteristics": ["non-vegetarian"],
          "availability": "Available"
        },
        {
          "id": 7,
          "name": "Aloo Tikki",
          "price": 120,
          "description": "Deep-fried potato patties served with chutney",
          "rating": 4.1,
          "image": "https://images.pexels.com/photos/15014920/pexels-photo-15014920.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          "characteristics": ["vegetarian"],
          "availability": "Available"
        }
      ],
      "drinks": [
        {
          "id": 8,
          "name": "Coca-Cola",
          "price": 80,
          "description": "Classic Coca-Cola soft drink",
          "rating": 4.0,
          "image": "https://images.pexels.com/photos/3819969/pexels-photo-3819969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          "characteristics": ["non-alcoholic", "gluten-free", "dairy-free"],
          "availability": "Available"
        },
        {
          "id": 9,
          "name": "Pepsi",
          "price": 80,
          "description": "Classic Pepsi soft drink",
          "rating": 3.8,
          "image": "https://images.pexels.com/photos/11659356/pexels-photo-11659356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          "characteristics": ["non-alcoholic", "gluten-free", "dairy-free"],
          "availability": "Available"
        },
        {
          "id": 10,
          "name": "Lemonade",
          "price": 100,
          "description": "Refreshing lemon-flavored drink",
          "rating": 4.5,
          "image": "https://images.pexels.com/photos/4021983/pexels-photo-4021983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          "characteristics": ["non-alcoholic", "gluten-free", "dairy-free"],
          "availability": "Available"
        },
        {
          "id": 11,
          "name": "Iced Tea",
          "price": 120,
          "description": "Chilled black tea with a hint of lemon",
          "rating": 4.2,
          "image": "https://images.pexels.com/photos/1194030/pexels-photo-1194030.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          "characteristics": ["non-alcoholic", "gluten-free", "dairy-free"],
          "availability": "Available"
        }
      ],
      "main_dishes": [
        {
          "id": 12,
          "name": "Chicken Tikka Masala",
          "price": 350,
          "description": "Tender chicken pieces in a creamy tomato-based sauce",
          "rating": 4.5,
          "image": "https://images.pexels.com/photos/6210747/pexels-photo-6210747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          "characteristics": ["non-vegetarian", "spicy"],
          "availability": "Available"
        },
        {
          "id": 13,
          "name": "Paneer Makhani",
          "price": 320,
          "description": "Chunks of paneer cheese in a rich and creamy tomato sauce",
          "rating": 4.2,
          "image": "https://images.pexels.com/photos/9609835/pexels-photo-9609835.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          "characteristics": ["vegetarian", "spicy"],
          "availability": "Available"
        },
        {
          "id": 14,
          "name": "Beef Stroganoff",
          "price": 420,
          "description": "Sliced beef in a rich and creamy mushroom sauce",
          "rating": 4.8,
          "image": "https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          "characteristics": ["non-vegetarian"],
          "availability": "Available"
        },
        {
          "id": 15,
          "name": "Vegetable Fried Rice",
          "price": 280,
          "description": "Stir-fried rice with mixed vegetables",
          "rating": 4.0,
          "image": "https://images.pexels.com/photos/343871/pexels-photo-343871.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          "characteristics": ["vegetarian"],
          "availability": "Available"
        },
        {
          "id": 16,
          "name": "Lamb Rogan Josh",
          "price": 450,
          "description": "Slow-cooked lamb in a spicy tomato-based sauce",
          "rating": 4.5,
          "image": "https://images.pexels.com/photos/14515089/pexels-photo-14515089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          "characteristics": ["non-vegetarian", "spicy"],
          "availability": "Available"
        },
        {
          "id": 17,
          "name": "Butter Chicken",
          "price": 350,
          "description": "Tender chicken in a creamy and mildly spiced tomato-based sauce",
          "rating": 4.3,
          "image": "https://images.pexels.com/photos/7625056/pexels-photo-7625056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          "characteristics": ["non-vegetarian"],
          "availability": "Available"
        },
        {
          "id": 18,
          "name": "Spinach and Ricotta Stuffed Chicken",
          "price": 380,
          "description": "Chicken breast stuffed with spinach and ricotta cheese",
          "rating": 4.7,
          "image": "https://images.pexels.com/photos/2689419/pexels-photo-2689419.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          "characteristics": ["non-vegetarian"],
          "availability": "Available"
        }
      ],
      "appetizers": [
        {
          "id": 19,
          "name": "Caprese Salad",
          "price": 200,
          "description": "Fresh mozzarella, tomato, and basil drizzled with balsamic vinegar and olive oil",
          "rating": 4.6,
          "image": "https://images.pexels.com/photos/13241736/pexels-photo-13241736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          "characteristics": ["vegetarian"],
          "availability": "Available"
        },
        {
          "id": 20,
          "name": "Escargots",
          "price": 280,
          "description": "Classic French dish of snails cooked in garlic and herb butter",
          "rating": 4.2,
          "image": "https://images.pexels.com/photos/13189279/pexels-photo-13189279.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          "characteristics": ["non-vegetarian"],
          "availability": "Available"
        },
        {
          "id": 21,
          "name": "Stuffed Mushrooms",
          "price": 220,
          "description": "Mushroom caps stuffed with a blend of cheeses and herbs",
          "rating": 4.4,
          "image": "https://images.pexels.com/photos/3026808/pexels-photo-3026808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          "characteristics": ["vegetarian"],
          "availability": "Available"
        },
        {
          "id": 22,
          "name": "Foie Gras Terrine",
          "price": 450,
          "description": "Rich and buttery pate made from duck or goose liver",
          "rating": 4.8,
          "image": "https://images.pexels.com/photos/16064370/pexels-photo-16064370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          "characteristics": ["non-vegetarian"],
          "availability": "Available"
        }
      ],
      "soups": [
        {
          "id": 23,
          "name": "Tomato Soup",
          "price": 150,
          "description": "Classic tomato soup with a hint of basil",
          "rating": 4.3,
          "image": "https://images.pexels.com/photos/262947/pexels-photo-262947.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          "characteristics": ["vegetarian"],
          "availability": "Available"
        },
        {
          "id": 24,
          "name": "French Onion Soup",
          "price": 180,
          "description": "Rich and savory onion soup topped with melted cheese",
          "rating": 4.5,
          "image": "https://images.pexels.com/photos/6794412/pexels-photo-6794412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          "characteristics": ["vegetarian"],
          "availability": "Available"
        },
        {
          "id": 25,
          "name": "Lobster Bisque",
          "price": 350,
          "description": "Creamy soup made with lobster stock and chunks of lobster meat",
          "rating": 4.7,
          "image": "https://images.pexels.com/photos/4553120/pexels-photo-4553120.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          "characteristics": ["non-vegetarian"],
          "availability": "Available"
        }
      ],
      "desserts": [
        {
          "id": 26,
          "name": "Chocolate Truffles",
          "price": 200,
          "description": "Decadent chocolate truffles dusted with cocoa powder",
          "rating": 4.4,
          "image": "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          "characteristics": ["vegetarian"],
          "availability": "Available"
        },
        {
          "id": 27,
          "name": "Crème Brûlée",
          "price": 250,
          "description": "Classic French dessert of creamy custard with a caramelized sugar top",
          "rating": 4.6,
          "image": "https://images.pexels.com/photos/14374898/pexels-photo-14374898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          "characteristics": ["vegetarian"],
          "availability": "Available"
        }
      ]
    }
]

export default data;