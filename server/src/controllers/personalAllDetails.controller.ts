import { Request, Response } from 'express';
import { personalDetailsService } from '../services/personalAllDetails.service';
import logger from '../utils/logger.util';

interface CustomRequest extends Request {
  user: {
    id: string;
  };
}

const Biodata = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = (req as CustomRequest).user.id;
    req.body.users = userId;
    const result = await personalDetailsService.createBiodata(req.body);

    res.status(200).json({
      success: true,
      message: 'Biodata created successfully',
      data: result,
    });
  } catch (error) {
    logger.error(error);
    if (error instanceof Error && error.message === 'Biodata already exists!') {
      res.status(400).json({
        success: false,
        message: error.message,
      });
      return;
    }
  }
};

const GetBiodata = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = (req as CustomRequest).user.id;
    const result = await personalDetailsService.getBiodata(userId);

    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    logger.error(error);
    res.status(500).json({ success: false, message: 'Failed to fetch data' });
  }
};

const GetPublicBiodataDetails = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const id = req.params.id;
    const biodata = await personalDetailsService.getPublicBiodataDetails(id);

    res.status(200).json({
      success: true,
      data: biodata,
    });
  } catch (error) {
    logger.error(error);
    res.status(500).json({ success: false, message: 'Failed to fetch data' });
  }
};
const getBiodataStatistics = async (req: Request, res: Response) => {
  try {
    const stats = await personalDetailsService.getBiodataStats();
    res.status(200).json({
      success: true,
      data: stats,
      message: 'Biodata statistics retrieved successfully',
    });
  } catch (error) {
    console.error('Error fetching biodata stats:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve biodata statistics',
    });
  }
};

export const personalDetailsController = {
  Biodata,
  GetBiodata,
  GetPublicBiodataDetails,
  getBiodataStatistics,
};
