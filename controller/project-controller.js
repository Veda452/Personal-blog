import Project from "../model/project.js";



export const submitUser = async (request, response) => {
    try {
        const project = { name: request.body.name, username: request.body.username, email: request.body.email, project:request.body.project };

        const newProject = new Project(project);
        await newProject.save();

        return response.status(200).json({ newProject});
    } catch (error) {
        return response.status(500).json({ msg: 'Error while submitting' });
    }
}