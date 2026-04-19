import User from "../models/user.js"
import nodemailer from "nodemailer"

export const createUser = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ message: "All fields are required" })
    }
    const newUser = new User({ name, email, subject, message })
    await newUser.save()

    // Email setup
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    })

    const mailOptions = {
      from: email, 
      to: process.env.EMAIL_USER, 
      subject: `New Contact Form Submission: ${subject}`,
      text: `
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        Message: ${message}
      `
    }

    await transporter.sendMail(mailOptions)

    return res.status(201).json({ message: "User created successfully", success: true, newUser })
  }
  catch (error) {
    console.log(error)
    return res.status(500).json({ message: "Internal Server Error in Create User" })
  }
}