require('dotenv').config()
require('./config/database')

const Category = require('./models/category')
const Item = require('./models/item');

(async function() {
    await Category.deleteMany({})
    const categories = await Category.create([
        {name: 'Dog Collar', sortOrder: 10},
        {name: 'Cat Collar', sortOrder: 20}
    ])

//In the Item.create method, make sure to use the ._id property of the categories 
//when assigning them to the category field. 
//This ensures that you are providing the correct reference to the category.
    await Item.deleteMany({}) 
    const items = await Item.create([
        {name: 'Small Dog Collar', category: categories[0], price: 9.99},
        {name: 'Medium Dog Collar', category: categories[0], price: 11.99},
        {name: 'Large Dog Collar', category: categories[0], price: 13.99},
        {name: 'Small Cat Collar', category: categories[1], price: 5.99},
        {name: 'Medium Cat Collar', category: categories[1], price: 7.99},
        {name: 'Large Cat Collar', category: categories[1], price: 9.99}  
    ])

console.log(items)

process.exit()
})()
