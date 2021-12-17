// Get required libraries.
const models = require("../models");

// Create the base controller object.
const myPokemonController = {};

// --------------------
// | Route functions. |
// --------------------

// ---------------------------------------------------------
// *** GET '/' - Return all of the logged-in user's pokemon.
// ---------------------------------------------------------
myPokemonController.getMyPokemon = async function (req, res) {
    try {
        const loggedInUser = await models.user.findByPk(req.verifiedId);
        const myPokemon = await loggedInUser.getMyPokemons();
        res.json(myPokemon);
    }
    catch (err) {
        console.log(err);
        res.status(400).json({ message: "Error retrieving all of the user's pokemon." });
    }
}

// ----------------------------------------------------------------------------------------------------------------
// *** POST '/add' - Add a pokemon to the user's list of pokemon. Only add if they don't already have that pokemon.
// ----------------------------------------------------------------------------------------------------------------
myPokemonController.addPokemon = async function (req, res) {
    try {
        const loggedInUser = await models.user.findByPk(req.verifiedId);
        const existingPokemon = await models.myPokemon.findOne({
            where: {
                name: req.body.name,
                userId: loggedInUser.id
            }
        });
        if (existingPokemon) {
            res.json({ message: "Pokemon already in user's myPokemon." });
        }
        else {
            const addedPokemon = await loggedInUser.createMyPokemon({
                name: req.body.name,
                currentHealth: req.body.currentHealth
            })
            res.json(addedPokemon);
        }
    }
    catch (err) {
        console.log(err);
        res.status(400).send({ message: "Error adding pokemon to user's list." });
    }
}

// Export the myPokemonController as an express module for use in the myPokemonRouter.
module.exports = myPokemonController;
