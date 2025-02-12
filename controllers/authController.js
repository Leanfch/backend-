import User from "../models/users.js"
import { createJWT } from "../helpers/jwt.js"

export const register = async (req, res) => {
    try {
        const { name, email, password } = req.body

        const newUser = new User({ name, email, password })

        const userSaved = await newUser.save()
        const token = await createJWT({ id: userSaved._id })
        res.cookie("token", token)
        res.json({
            id: userSaved._id,
            name: userSaved.name,
            email: userSaved.email,
        })
    } catch (error) {
        console.error(error)
        res.status(500).json({
            message: error.message,
        })
    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body

        const userFound = await User.findOne({ email })

        if (!userFound)
            return res.status(400).json({ message: "User not found, please type a valid user" })

        if (password === userFound.password) {
            const token = await createJWT({ id: userFound._id })
            res.cookie("token", token)
            res.json({
                id: userFound._id,
                name: userFound.name,
                email: userFound.email,
                token: token,
            })
        } else {
            return res.status(400).json({ message: "Password is invalid" })
        }
    } catch (error) {
        console.error(error)
        res.status(500).json({
            message: error.message,
        })
    }
}

export const logout = async (req, res) => {
    res.cookie("token", "")
    return res.status(200).json({ message: "You logged off succesfully" })
}

export const profile = async (req, res) => {
    const userFound = await User.findById(req.user.id)

    if (!userFound)
        return res.status(400).json({ message: "User not found" })
    return res.json({
        id: userFound._id,
        name: userFound.name,
        email: userFound.email,
    })
    res.send("Profile")
}
