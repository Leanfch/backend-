import jwt from "jsonwebtoken"

export const authRequire = (req, res, next) => {
    const { token } = req.cookies

    if (!token) return res.status(401).json({ message: "You are not authorized for this app" })

    jwt.verify(token, "secret123", (error, user) => {
        if (error) return res.status(401).json({ message: "Invalid Token" })

        req.user = user
        next()
    })
}
