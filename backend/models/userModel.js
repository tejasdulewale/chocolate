import mongoose from 'mongoose'


const userSchema = new mongoose.Schema({
     // username:String,
     username: {
         type: String,
         required: true,
         unique: true
     },
     // email:String,
     email: {
         type: String,
         required: true,
         unique: true,
     },
     // number:Number,
     number: {
         type: Number,
         required: true,
     },

     // password:String,
     password: {
         type: String,
         required: true,
     
     },
     // cPassword:String,
     cPassword: {
         type: String,
         required: true,
        
         
     },
    
})

const userModel = mongoose.model('user',userSchema)
export default userModel