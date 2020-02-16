const db = require('../config/db');

const { Op } = db.Sequelize

const version = db.version

exports.getVersion = async (req, res) => {
    try {
        const query = req.query.timestamp
        const key = req.params.key
        let findVersion = await version.findOne({
            attributes:["value"],
            where: query ?
                {
                    key: key,
                    timestamp: {
                        [Op.lte]: query
                    }
                }
                :
                {
                    key: key
                }

            ,
            order: [
                ['timestamp', 'desc']
            ]
        })

        res.status(200).send(findVersion)
    } catch (error) {
        res.status(500).send(error)
    }
}

exports.createVersion = async (req, res) => {
    try {
        const body = req.body
        let responseData = []
        for (let [key, value] of Object.entries(body)) {
            responseData.push(
                await version.create({
                    key: key,
                    value: value,
                    timestamp:new Date().getTime()
                })
            )
        }
        res.status(200).send(responseData)
    } catch (error) {
        res.status(500).send(error)
    }
}