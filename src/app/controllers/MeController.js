const Course = require('../models/Course');
const {mutipleMongooseToObject} = require('../../ulti/mongoose');

class MeController {
    // [GET] /me/stored/course
    storedCourses(req, res, next){
        Course.find({})
        .then(courses => res.render('me/stored-courses', {
            courses: mutipleMongooseToObject(courses)
        }))
        .catch(next);
    }
}

module.exports = new MeController;