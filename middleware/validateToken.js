import jwt from "jsonwebtoken"

export const authRequire = (req, res, next) => {
    const { token } = req.cookies

    if (!token) return res.status(401).json({ message: "No estas autorizado" })

    jwt.verify(token, "secret123", (error, user) => {
        if (error) return res.status(401).json({ message: "Token inválido" })

        req.user = user
        next()
    })
}
