const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const router = express.Router();
const { projectController } = require('../../controllers');

router.route('/create-project').post(projectController.createProject);
router.route('/get-projects').get(projectController.getProjects);
// router.route('/get-project-for-user').get(projectController.getProjectForUser);
router.route('/get-project/:proj_id').get(projectController.getProjectById);
router.route('/update-project/:proj_id').put(projectController.updateProject);
router.route('/delete-project/:proj_id').delete(projectController.deleteProject);
module.exports = router;
