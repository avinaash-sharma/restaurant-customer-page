const data  = [
    {
      "snacks": [
        {
          "name": "Veggie Spring Rolls",
          "price": 180,
          "description": "Crispy spring rolls filled with mixed vegetables and served with sweet chili sauce",
          "rating": 4.2,
          "image": "https://example.com/veggie-spring-rolls.jpg",
          "characteristics": ["vegetarian"],
          "availability": "Available"
        },
        {
          "name": "Papdi Chaat",
          "price": 150,
          "description": "Crispy crackers topped with boiled potatoes, chickpeas, and tangy tamarind chutney",
          "rating": 4.5,
          "image": "https://example.com/papdi-chaat.jpg",
          "characteristics": ["vegetarian", "spicy"],
          "availability": "Available"
        },
        {
          "name": "Chicken Satay",
          "price": 220,
          "description": "Grilled chicken skewers served with peanut sauce",
          "rating": 4.3,
          "image": "https://example.com/chicken-satay.jpg",
          "characteristics": ["non-vegetarian"],
          "availability": "Available"
        },
        {
          "name": "Vada Pav",
          "price": 120,
          "description": "A popular Mumbai street food consisting of a spicy potato fritter served in a bun",
          "rating": 4.0,
          "image": "https://example.com/vada-pav.jpg",
          "characteristics": ["vegetarian", "spicy"],
          "availability": "Available"
        },
        {
          "name": "Pesto and Cheese Bruschetta",
          "price": 200,
          "description": "Toasted bread topped with pesto sauce and melted cheese",
          "rating": 4.6,
          "image": "https://example.com/pesto-bruschetta.jpg",
          "characteristics": ["vegetarian"],
          "availability": "Available"
        },
        {
          "name": "Fish and Chips",
          "price": 250,
          "description": "Crispy battered fish served with french fries",
          "rating": 4.4,
          "image": "https://example.com/fish-chips.jpg",
          "characteristics": ["non-vegetarian"],
          "availability": "Available"
        },
        {
          "name": "Aloo Tikki",
          "price": 120,
          "description": "Deep-fried potato patties served with chutney",
          "rating": 4.1,
          "image": "https://example.com/aloo-tikki.jpg",
          "characteristics": ["vegetarian"],
          "availability": "Available"
        }
      ],
      "drinks": [
        {
          "name": "Coca-Cola",
          "price": 80,
          "description": "Classic Coca-Cola soft drink",
          "rating": 4.0,
          "image": "https://example.com/coca-cola.jpg",
          "characteristics": ["non-alcoholic", "gluten-free", "dairy-free"],
          "availability": "Available"
        },
        {
          "name": "Pepsi",
          "price": 80,
          "description": "Classic Pepsi soft drink",
          "rating": 3.8,
          "image": "https://example.com/pepsi.jpg",
          "characteristics": ["non-alcoholic", "gluten-free", "dairy-free"],
          "availability": "Available"
        },
        {
          "name": "Lemonade",
          "price": 100,
          "description": "Refreshing lemon-flavored drink",
          "rating": 4.5,
          "image": "https://example.com/lemonade.jpg",
          "characteristics": ["non-alcoholic", "gluten-free", "dairy-free"],
          "availability": "Available"
        },
        {
          "name": "Iced Tea",
          "price": 120,
          "description": "Chilled black tea with a hint of lemon",
          "rating": 4.2,
          "image": "https://example.com/iced-tea.jpg",
          "characteristics": ["non-alcoholic", "gluten-free", "dairy-free"],
          "availability": "Available"
        }
      ],
      "main_dishes": [
        {
          "name": "Chicken Tikka Masala",
          "price": 350,
          "description": "Tender chicken pieces in a creamy tomato-based sauce",
          "rating": 4.5,
          "image": "https://example.com/chicken-tikka-masala.jpg",
          "characteristics": ["non-vegetarian", "spicy"],
          "availability": "Available"
        },
        {
          "name": "Paneer Makhani",
          "price": 320,
          "description": "Chunks of paneer cheese in a rich and creamy tomato sauce",
          "rating": 4.2,
          "image": "https://example.com/paneer-makhani.jpg",
          "characteristics": ["vegetarian", "spicy"],
          "availability": "Available"
        },
        {
          "name": "Beef Stroganoff",
          "price": 420,
          "description": "Sliced beef in a rich and creamy mushroom sauce",
          "rating": 4.8,
          "image": "https://example.com/beef-stroganoff.jpg",
          "characteristics": ["non-vegetarian"],
          "availability": "Available"
        },
        {
          "name": "Vegetable Fried Rice",
          "price": 280,
          "description": "Stir-fried rice with mixed vegetables",
          "rating": 4.0,
          "image": "https://example.com/vegetable-fried-rice.jpg",
          "characteristics": ["vegetarian"],
          "availability": "Available"
        },
        {
          "name": "Lamb Rogan Josh",
          "price": 450,
          "description": "Slow-cooked lamb in a spicy tomato-based sauce",
          "rating": 4.5,
          "image": "https://example.com/lamb-rogan-josh.jpg",
          "characteristics": ["non-vegetarian", "spicy"],
          "availability": "Available"
        },
        {
          "name": "Butter Chicken",
          "price": 350,
          "description": "Tender chicken in a creamy and mildly spiced tomato-based sauce",
          "rating": 4.3,
          "image": "https://example.com/butter-chicken.jpg",
          "characteristics": ["non-vegetarian"],
          "availability": "Available"
        },
        {
          "name": "Spinach and Ricotta Stuffed Chicken",
          "price": 380,
          "description": "Chicken breast stuffed with spinach and ricotta cheese",
          "rating": 4.7,
          "image": "https://example.com/spinach-ricotta-chicken.jpg",
          "characteristics": ["non-vegetarian"],
          "availability": "Available"
        }
      ],
      "appetizers": [
        {
          "name": "Caprese Salad",
          "price": 200,
          "description": "Fresh mozzarella, tomato, and basil drizzled with balsamic vinegar and olive oil",
          "rating": 4.6,
          "image": "https://example.com/caprese-salad.jpg",
          "characteristics": ["vegetarian"],
          "availability": "Available"
        },
        {
          "name": "Escargots",
          "price": 280,
          "description": "Classic French dish of snails cooked in garlic and herb butter",
          "rating": 4.2,
          "image": "https://example.com/escargots.jpg",
          "characteristics": ["non-vegetarian"],
          "availability": "Available"
        },
        {
          "name": "Stuffed Mushrooms",
          "price": 220,
          "description": "Mushroom caps stuffed with a blend of cheeses and herbs",
          "rating": 4.4,
          "image": "https://example.com/stuffed-mushrooms.jpg",
          "characteristics": ["vegetarian"],
          "availability": "Available"
        },
        {
          "name": "Foie Gras Terrine",
          "price": 450,
          "description": "Rich and buttery pate made from duck or goose liver",
          "rating": 4.8,
          "image": "https://example.com/foie-gras-terrine.jpg",
          "characteristics": ["non-vegetarian"],
          "availability": "Available"
        }
      ],
      "soups": [
        {
          "name": "Tomato Soup",
          "price": 150,
          "description": "Classic tomato soup with a hint of basil",
          "rating": 4.3,
          "image": "https://example.com/tomato-soup.jpg",
          "characteristics": ["vegetarian"],
          "availability": "Available"
        },
        {
          "name": "French Onion Soup",
          "price": 180,
          "description": "Rich and savory onion soup topped with melted cheese",
          "rating": 4.5,
          "image": "https://example.com/french-onion-soup.jpg",
          "characteristics": ["vegetarian"],
          "availability": "Available"
        },
        {
          "name": "Lobster Bisque",
          "price": 350,
          "description": "Creamy soup made with lobster stock and chunks of lobster meat",
          "rating": 4.7,
          "image": "https://example.com/lobster-bisque.jpg",
          "characteristics": ["non-vegetarian"],
          "availability": "Available"
        }
      ],
      "desserts": [
        {
          "name": "Chocolate Truffles",
          "price": 200,
          "description": "Decadent chocolate truffles dusted with cocoa powder",
          "rating": 4.4,
          "image": "https://example.com/chocolate-truffles.jpg",
          "characteristics": ["vegetarian"],
          "availability": "Available"
        },
        {
          "name": "Crème Brûlée",
          "price": 250,
          "description": "Classic French dessert of creamy custard with a caramelized sugar top",
          "rating": 4.6,
          "image": "https://example.com/creme-brulee.jpg",
          "characteristics": ["vegetarian"],
          "availability": "Available"
        }
      ]
    }
]

export default data;