const Sequelize = require('Sequelize')
const {STRING, TEXT} = Sequelize
const faker = require('faker')
const conn = new Sequelize(process.env.DATABASE_URL || 'postgres:localhost/practice_db')

const User = conn.define('user',{
    name : STRING,
    bio: TEXT
},{
   hooks: {
       beforeCreate: function(user){
           if(!user.bio){
               user.bio = `${user.name} ${faker.lorem.paragraphs(3)} ${user.name}`;
           }
       }
   } 
})

User.createWithName = (name) => User.create({ name })

const syncAndSeed = async() => {
    await conn.sync({force: true})
    const [moe, lucy, curly] = await Promise.all(
    ['moe','lucy','curly'].map(User.createWithName)
    )
}

module.exports = {
    models: {
        User,
    },
    syncAndSeed
}