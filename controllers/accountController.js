import accountService from "../services/accountService.js"

function createAccount(req, res) {
    accountService
        .createAccount(req.body)
        .then(() => {
            res.status(201).json({ message: "Cuenta creada con éxito" })
        })
        .catch((error) => {
            console.error(error)
            res.status(500).json({ message: "No se pudo crear la cuenta" })
        })
}

export default { createAccount }
