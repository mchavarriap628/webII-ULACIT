const asyncHandler = require("express-async-handler");
const User = require('../models/userModel');
const generateToken = require("../utils/generateToken");


/*-------------------------- Registro Usuarios ------------------------------*/
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password, rol, salario, restaurante, estado } = req.body;

    const userExists = await User.findOne({ email });
    if (userExists) {
        res.status(400);
        throw new Error("¡Un usuario con este correo ya existe!");
    }

    const user = await User.create({
        name,
        email,
        password,
        rol,
        salario,
        restaurante,
        estado,
    });

    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            rol: user.rol,
            salario: user.salario,
            restaurante: user.restaurante,
            estado: user.estado,
            token: generateToken(user._id),
        });
    } else {
        res.status(400);
        throw new Error("Error Ocurred!")
    }
});

/*-------------------------- Authenticación ------------------------------*/
const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    //Revisa que el password que ponen coindica con el de la base de datos
    const user = await User.findOne({ email });
    if ((user && (await user.matchPassword(password))) && (user.estado !== "Inactivo")) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            rol: user.rol,
            restaurante: user.restaurante,
            estado: user.estado,
            token: generateToken(user._id),
        })
    } else {
        res.status(400);
        throw new Error("Credenciales invalidas");
    }


});

module.exports = { registerUser, authUser };