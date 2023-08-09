import express from 'express';
import upload from '../utils/upload.js';
import { signupUser,loginUser } from '../controller/user-controller.js';
import { uploadImage,getImage } from '../controller/image-controller.js';
import { createPost,getAllPosts,getPost,updatePost, deletePost } from '../controller/post-controller.js';
import { authenticateToken } from '../controller/jwt-controller.js';
import {submitUser} from '../controller/project-controller.js';
const router = express.Router();
const app=express();

router.post('/signup', signupUser);
router.post('/login', loginUser);
app.get('/about', (req,res)=>{res.send('Hello');});
router.post('/submit', submitUser);
router.post('/file/upload', upload.single('file'), uploadImage);
router.get('/file/:filename', getImage);
router.post('/create', authenticateToken, createPost);
router.get('/posts', authenticateToken, getAllPosts);
router.get('/post/:id', authenticateToken, getPost);
router.put('/update/:id', authenticateToken, updatePost);
router.delete('/delete/:id', authenticateToken, deletePost);

export default router;