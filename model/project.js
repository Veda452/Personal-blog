import mongoose from 'mongoose';

const ProjectSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: false
    },
    email: {
        type: String,
        required: true,
        unique: false
    },
    project: {
        type: String,
        required: true,
        unique: false
    }
});


const project = mongoose.model('project', ProjectSchema);

export default project;