import { Router } from 'express';
import { userController } from '../controllers/user.controller';
import { authController } from '../controllers/auth.controller';
import { verifyToken } from '../middleware/authMiddleware';
import { personalDetailsController } from '../controllers/personalAllDetails.controller';

const router = Router();

router.post('/signup', userController.createUser);
router.post('/login', userController.loginUser);
router.post('/login/google', authController.loginWithGoogle);
router.patch('/reset-password', verifyToken, userController.resetPassword);

router.post('/profile/biodata', verifyToken, personalDetailsController.Biodata);
router.get(
  '/profile/biodata',
  verifyToken,
  personalDetailsController.GetBiodata,
);
router.get(
  '/profile/biodata/:id',
  personalDetailsController.GetPublicBiodataDetails,
);
router.get('/biodata', personalDetailsController.GetPublicBiodata);

export default router;
