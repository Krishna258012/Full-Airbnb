const AuthModel = require("../Model/auth");


module.exports.userProfile = async (req, res) => {
    const { name } = req.deatils;

    if (!req.deatils) {
        return res.status(401).send({ message: "Authentication Failed Please Login Again" });
    }

    try {
        const user = await AuthModel.findOne({ name }).select('-password');

        if (!user) {
            return res.status(404).send({ message: "User not found" });
        }

        res.json({
            success: true,
            message: "User profile fetched successfully",
            data: user,
        })
    } catch (error) {
        console.log(error);
        return res.status(500).send({ message: "Internal Server Error" });
    }


}