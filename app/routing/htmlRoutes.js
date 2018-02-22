//Your htmlRoutes.js file should include two routes:
//A GET Route to / survey which should display the survey page.
//A default, catch-all route that leads to home.html which displays the home page. 

console.log('HTML route connected!');

//Dependencies

// Routh for the HTML
module.exports = function(app){
    //GET Route for the survey page
    app.get('survey', function(req, res){
        res.sendFile(path.join(__dirname, '/../public/survey.html'));
    });
    //GET Route for the home page
    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, '/../public/home.html'));
    });
};
