import { sign } from "jsonwebtoken"

const generateJWT = (uid, name) => {
    return new Promise((resolve, reject) => {
        const payload = { uid, name }

        sign(
            payload,
            process.env.SECRET_JWT_SEED,
            {
                expiresIn: "12h",
            },
            (err, token) => {
                if (err) {
                    console.log(err)
                    reject("No se pudo generar el token")
                }
                resolve(token)
            }
        )
    })
}

export default {
    generateJWT,
}
