const progData = require('../data.json');
exports.handler = async () => {
    return {
        statuscode: 200,
        body: JSON.stringify(progData)
    }
}