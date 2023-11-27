// import { response } from "express"
// import userSchema from "../models/users"
// import { generateJWT } from "../helpers/jwt"

// const createUser = async (req, res = response) => {
//     const { email } = req.body

//     try {
//         let user = await userSchema.findOne({ email })
//         if (user) {
//             return res.status(400).json({
//                 ok: false,
//                 msg: " El usuario ya existe",
//             })
//         }
//         user = new User(req.body)
//     } catch (error) {
//         res.status(500).json({
//             ok: false,
//             msg: "Por favor, comuniquese con el administrador",
//         })
//     }
// }
// ///////////////////////////////////////////////

// const loginUser = async (req, res = response) => {
//     const { email, password } = req.body

//     try {
//         const user = await userSchema.findOne({ email })
//         if (!user) {
//             return res.status(400).json({
//                 ok: false,
//                 msg: " El usuario no existe",
//             })
//         }

//         //Confirmar password
//         const validPassword = compareSync(password, user.password)

//         if (!validPassword) {
//             return res.status(400).json({
//                 ok: false,
//                 msg: "Contraseña incorrecta",
//             })
//         }

//         //Generar nuestro JWT
//         const token = await generateJWT(user.id, user.name)

//         res.json({
//             ok: true,
//             uid: user.id,
//             name: user.name,
//             token,
//         })
//     } catch (error) {
//         res.status(500).json({
//             ok: false,
//             msg: "Por favor, comuniquese con el administrador",
//         })
//     }
// }

// const revalidateToken = async (req, res = response) => {
//     const { uid, name } = req

//     //Generar un nuevo JWT y retornarlo en esta peticion

//     const token = await generateJWT(uid, name)
//     res.json({
//         ok: true,
//         uid,
//         name,
//         token,
//     })
// }

// export default {
//     createUser,
//     loginUser,
//     revalidateToken,
// }
