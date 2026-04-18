import User from "../models/user.js"

export const createUser = async (req, res) =>{
  try {
        const {name, email, subject, message} = req.body
        if(!name || !email || !subject || !message){
            return res.status(400).json({message:"All fields are required"})
        }
        const newUser = new User({name, email, subject, message})
        await newUser.save()
        return res.status(201).json({message: "User created successfully", success: true, newUser})
  }
  catch (error) {
    console.log(error)
    return res.status(500).json({message: "Internal Server Error in Create User"})
  }
}