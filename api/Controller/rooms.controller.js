const listing = require("../Model/listingandreviews");

module.exports.rooms = async (req, res) => {

    // if (!req.deatils) {
    //     return res.status(401).send({ message: "Authentication Failed Please Login Again" });
    // }

    if (!req.params.roomId) {
        return res.status(400).send({ message: "Invalid Room ID" });
    }
    try {
        const roomId = req.params.roomId;
        const room = await listing.findOne({ _id: roomId });
        if (!room) {
            return res.status(404).send({ message: "Room not found" });
        }

        res.json({
            success: true,
            message: "Room fetched successfully",
            data: room,
        });

    } catch (error) {
        res.status(500).send({ message: "Server Error" });
    }
}