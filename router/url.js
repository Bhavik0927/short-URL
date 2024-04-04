import express from 'express';
import { handleGenerateShortURL,handleRedirectURL, handleGetAnalytics } from '../controller/urlController.js';

const router = express.Router();

router.post("/",handleGenerateShortURL);
router.get("/:shortId",handleRedirectURL);
 router.get("/analytics/:shortId",handleGetAnalytics)


export default router;