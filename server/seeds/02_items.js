/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex.schema.raw('TRUNCATE TABLE items RESTART IDENTITY CASCADE')
  await knex('items').insert([
    {user_id: 3, item_name: 'Lullaby Lily', description: 'This is the Lullaby Lily. When placed under a pillow, it sings a soft, gentle tune that can help bring peaceful dreams. Its presence soothes the mind, offering quiet comfort through the night.', quantity: 6},
    {user_id: 3, item_name: 'Invisible Ivy', description: 'The Invisible Ivy is a quiet companion. When wrapped around your wrist, it grants a brief moment of invisibility. It is a gift for those seeking stillness in their movements, a touch of discretion in a busy world.', quantity: 4},
    {user_id: 3, item_name: 'Starlight Rose', description: 'This Starlight Rose glows faintly under the moon’s light, like a soft reminder of the stars above. Its delicate petals hold a gentle, calming energy, perfect for quiet reflection.', quantity: 10},
    {user_id: 3, item_name: 'Whispering Orchid', description: 'The Whispering Orchid speaks in quiet tones when it blooms, sharing little secrets with those who listen. Its fragrance is subtle, but its presence is undeniably calming.', quantity: 5},
    {user_id: 3, item_name: 'Moonpetal Bouquet', description: 'A bouquet of Moonpetals, gently shimmering in the moonlight. These flowers are peaceful companions, offering a serene glow to any evening gathering. A quiet beauty, perfect for those who appreciate soft light.', quantity: 5},
    {user_id: 1, item_name: 'Giggle Pumpkin', description: 'This here is a Giggle Pumpkin! Squeeze it, and it will start chuckling away! You won’t find a more fun-loving pumpkin in the market, trust me!', quantity: 15},
    {user_id: 1, item_name: 'Grumpy Apple', description: 'Don’t mind the grumbling, it’s just the Grumpy Apple! Sure, it complains about being picked early, but it’s got that perfect tangy bite. You’ll love it anyway!', quantity: 20},
    {user_id: 1, item_name: 'Blushing Tomato', description: 'Look at that Tomato, blushing! Compliment it, and it’ll get even redder! Perfect for a fresh addition to a summer salad. It’s a charmer!', quantity: 12},
    {user_id: 1, item_name: 'Chatty Carrot', description: 'Meet the Chatty Carrot! This little guy’s always telling stories. Great for anyone who needs a little entertainment!', quantity: 25},
    {user_id: 1, item_name: 'Wise Cucumber', description: 'The Wise Cucumber, folks. Full of good advice—if you can understand it. One thing’s for sure, it’s as crisp as they come!', quantity: 18},
    {user_id: 2, item_name: 'Stardust Loaf', description: 'A loaf of bread infused with stardust, shimmering faintly in the dark. A true celestial treat.', quantity: 10},
    {user_id: 2, item_name: 'Moonlight Rye', description: 'A dense, nutty rye bread that gleams under the moonlight, perfect for midnight feasts.', quantity: 12},
    {user_id: 2, item_name: 'Celestial Cinnamon Buns', description: 'Soft buns with a swirl of cinnamon and a hint of starry sweetness. A cosmic delight!', quantity: 15},
    {user_id: 2, item_name: 'Galaxy Sourdough', description: 'A sourdough bread with a marbled texture that mimics the swirling galaxies. Tangy and moist.', quantity: 10},
    {user_id: 4, item_name: 'Mirage Mocha', description: 'A creamy mocha that shifts flavors with every sip. Chocolate today, spiced vanilla tomorrow—-who knows? This cup is as unpredictable as a fleeting dream.', quantity: 5},
    {user_id: 4, item_name: 'Emberwake Espresso', description: 'A bold, smoky espresso brewed with a single ember from a phoenix’s nest. One sip will ignite your senses—perfect for late nights, long journeys, or waking the dead-tired.', quantity: 4},
    {user_id: 4, item_name: 'Figment Brew', description: 'A dark, rich fig-infused coffee with a drizzle of sea salt honey. A drink for dreamers and deceivers—sweet fig lingers on the tongue, a fleeting taste of something just out of reach, like a figment of imagination dissolving in the morning light.', quantity: 4},
    {user_id: 4, item_name: 'Lavender Drift', description: 'A delicate lavender matcha, smooth and slightly floral, perfect for quiet afternoons. Brewed for poets, daydreamers, and those who let their minds wander with the wind.', quantity: 6},
    {user_id: 4, item_name: 'The Plain Oat', description: 'A completely normal oat milk latte. No magic, no surprises—just good coffee. (I’ll make it, but just know, the rest of my drinks are far more interesting.)', quantity: 10}
  ]);
};
