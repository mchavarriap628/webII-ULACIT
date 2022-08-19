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

/*-------------------------- Ver Usuarios ------------------------------*/
const getUsuarios = asyncHandler(async (req, res) => {
    const usuarios = await User.find();
    res.json(usuarios);
});


/*-------------------------- Obtener a los gerentes de la DB ------------------------------*/
const getGerentes = asyncHandler(async (req, res) => {
    const gerentes = await User.find({ "rol": "Gerente" });

    if (gerentes) {
        res.json(gerentes);
    } else {
        res.status(400).json({ message: "Gerentes no encontrados" });
    }

});

/*-------------------------- Ver un solo User por ID ------------------------------*/

const getUserById = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);

    if (user) {
        res.json(user);
    } else {
        res.status(400).json({ message: "Usuario no encontrado" });
    }
});

/*-------------------------- Actualizar User por ID ------------------------------*/

const actualizarUser = asyncHandler(async (req, res) => {
    const { name, email, salario, restaurante, rol, estado } = req.body;
    const user = await User.findById(req.params.id);
    if (user) {
        user.name = name;
        user.email = email;
        user.salario = salario;
        user.restaurante = restaurante;
        user.rol = rol;
        user.estado = estado;

        const userActualizado = await user.save();
        res.json(userActualizado);
    } else {
        res.status(404);
        throw new Error("El usuario que desea actualizar no ha sido encontrado en la base de datos");
    }
});

/*-------------------------- Eliminar User por ID ------------------------------*/

const eliminarUser = asyncHandler(async (req, res) => {
    /* const restaurante = await Restaurante.findById(req.params.id);
     if (restaurante) {
         await restaurante.remove();
         res.json({ message: "El restaurante ha sido eliminado" });
     } else {
         res.status(404);
         throw new Error("El restaurante que desea eliminar no ha sido encontrado en la base de datos");
     }*/

});

module.exports = {
    registerUser,
    authUser,
    getGerentes,
    getUsuarios,
    getUserById,
    actualizarUser,
    eliminarUser
};