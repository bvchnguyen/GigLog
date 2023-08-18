const user = require('../models/userModels');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

require('dotenv').config();

const getUserByEmail = (email) => {
    return new Promise((resolve, reject) => {
        user.findOne({ email: email }).then((data) => {
            resolve(data);
        })
        .catch((error) => {
            reject(error);
        })
    })
}

const addUser = (newUser) => {
    return new Promise((resolve, reject) => {
        bcrypt.genSalt(10, (error, salt) => {
            bcrypt.hash(newUser.password, salt, (error, hash) => {
                if (error) reject(error);
                newUser.password = hash;
                newUser.save().then((data) => {
                    resolve(data);
                })
                .catch((error) => {
                    reject(error);
                })
            })
        })
    })
}

const comparePassword = (password, hash) => {
    return new Promise((resolve, reject) => {
        bcrypt.compare(password, hash, (error, isMatch) => {
            if (error) {
                reject(error);
                return;
            }
            resolve(isMatch);
        });
    });
};

exports.loginUser = async (req, res) => {
    try{
        const { email, password } = req.body;
        const user = await getUserByEmail(email);
        if (!user){
            return res.status(400).json({message: 'User does not exist.'})
        }
        const isMatch = await comparePassword(password, user.password);
        if (!isMatch) {
            return res.status(201).send({
                status: 201,
                message: 'Invalid Password.',
            })
        }
        const token = jwt.sign(JSON.stringify(user), process.env.JWT_SECRET, {
            algorithm: 'HS256',
        });
        res.status(200).send({
            message: 'login successful.',
            status: 200,
            token: 'JWT ' + token,
            user: {
                id: user._id,
                email: user.email,
                firstName: user.firstName,
                lastName: user.lastName,
            },
        })
    } catch(error){
        console.error(error);
        return res.status(500).json({ message: 'Server Error.' });
    }
}

exports.registerUser = async (req, res) => {
    try {
        const newUser = new user({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password,
        });

        const userEmail = await getUserByEmail(newUser.email);
        if (userEmail) {
            return res.status(400).json({ message: 'User already exists.' });
        }
        const signupUser = await(addUser(newUser));
        if (signupUser){
            return res.status(200).json({message: 'User registered successfully.'})
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error.' });
    }
};

exports.getUserById = (id) => {
    return new Promise ((resolve, reject) => {
        user.findById(id).then((data) => {
            resolve(data);
        })
        .catch((error) => {
            reject(error);
        })
    })
}

exports.getProfileData = async (req, res) => {
    try{
        const user = {
            firstName: req.user.firstName,
            lastName: req.user.lastName,
            email: req.user.email,
        }
        return res.status(200).send({
            status: 200,
            message: 'User Profile Data Found.',
            user: user,
        })
    }
    catch(error){
        return res.status(500).json({ message: 'Server Error.' });
    }
}