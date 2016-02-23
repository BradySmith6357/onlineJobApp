var Applicant = require("../model/applicants.js")

function createApplicant (req, res){

	var applicant = new Applicant({
		name : req.body.name,
		bio : req.body.bio,
		skills: req.body.skills,
		experience: req.body.experience,
		why: req.body.why,
	})
	applicant.save(function(err, savedApplicant){
		res.send(savedApplicant)
	})
}

function getApplicant (req, res){
	if(req.params.applicantID){
		Applicant.findOne({_id : req.params.applicantID}, function(err, doc){
			res.send(doc)
		})
	}
	else{
		Applicant.find({}, function(err, docs){
			res.send(docs)
		})
	}
}

module.export = {
	createApplicant : createApplicant,
	getApplicant : getApplicant
}