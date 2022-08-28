const Project = require('../models/project');

exports.getAllDatas = (req, res) => {
    Project.find()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving data."
            });
        });
};

exports.getOneData = (req, res) => {
    const projectId = req.params.id;


    Project.findById(projectId)
        .then(data => {
            if (!data) {
                return res.status(404).send({
                    message: "Data not found with id " + req.params.id
                });
            }
            res.send(data);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Data not found with id " + req.params.id
                });
            }
            return res.status(500).send({
                message: "Error retrieving data with id " + req.params.id
            });
        });
}