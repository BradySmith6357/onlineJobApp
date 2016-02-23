var mongoose = require('mongoose');

var applicantSchema = mongoose.Schema({
	name: String,
	bio: String,
	skills: Array,
	experience: Number,
	why: String,
})

module.export = mongoose.model("Applicant", applicantSchema)