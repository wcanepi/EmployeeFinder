//import employees.js file
const employees = require('../data/employees');

module.exports = function (app) {
    
    //get employees
    app.get('/api/employees', function (req, res) {
        res.json(employees);
    });
    // submit to the server
    app.post('/api/employees', function (req, res) {
        //find close Match
        const closeMatch = {
            name: '',
            photo: '',
            scoreDiff: Infinity
        };
        //parse user results
        const userInput = req.body;
        const userScores = userInput.scores;
        
        //get the calculated difference
        let calcDiff;

        //loop through each employee
        for (let i = 0; i < employees.length; i++) {
            const eachEmployee = employees[i];
            calcDiff = 0;
            //loop through scores of each employee
            for (let j = 0; j < eachEmployee.scores.length; j++) {
                const eachEmployeeScore = eachEmployee.scores[j];
                const eachUserScore = userScores[j];

                //get score diff and calculate the Diff
                calcDiff += Math.abs(parseInt(eachUserScore) - parseInt(eachEmployeeScore));
            }
            //If diff is less than closest match make close match the new employee
            if (calcDiff <= closeMatch.scoreDiff) {
                closeMatch.name = eachEmployee.name;
                closeMatch.photo = eachEmployee.photo;
                closeMatch.scoreDiff = calcDiff;
            }
        }
        //save users data
        employees.push(userInput);
        //json with match
        res.json(closeMatch);
    });
};
