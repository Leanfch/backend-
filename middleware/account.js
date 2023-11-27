import { AccountSchema } from "../models/accounts.js"

export function validateAccount(req, res, next) {
    AccountSchema.validate(req.body, {
        stripUnknown: true,
        abortEarly: false,
    })
        .then(async function (data) {
            req.body = data
            next()
        })
        .catch(function (error) {
            res.status(400).json({ message: error.message })
        })
}
