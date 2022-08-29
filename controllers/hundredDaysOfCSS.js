const hundredDaysOfCSS = require('../models/hundredDaysOfCSS');

exports.getAllDays = (req, res) => {
    hundredDaysOfCSS.find()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving data."
            });
        });
};

exports.getOneDay = (req, res) => {
    hundredDaysOfCSS.findById(req.params.id)
        .then(data => {
            if (!data) {
                return res.status(404).send({
                    message: "Data not found with id " + req.params.dataId
                });
            }
            res.send(data);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Data not found with id " + req.params.dataId
                });
            }
            return res.status(500).send({
                message: "Error retrieving data with id " + req.params.dataId
            });
        });
}