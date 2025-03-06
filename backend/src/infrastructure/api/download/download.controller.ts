import { Request, Response, Router } from "express";
import fs from "fs";
import path from "path";

// Fixme: get download using TSOA
const router = Router();

router.get('/', (_req: Request, res: Response) => {
  const cvName = "CV_Elodie_ROY_Developpeuse_web.pdf"
  const cvPath = path.join(__dirname, `../../../../documents/${cvName}`);


  // Check if file exists
  if (!fs.existsSync(cvPath)) {
    res.status(404).send('CV not found');
  }

  // Set headers for PDF download
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', `inline; filename="${cvName}"`);

  // Send the file
  res.sendFile(cvPath, (err) => {
    if (err) {
      console.error('Error sending file:', err);
      res.status(500).send('Error processing file');
    }
  });
});

export default router;

// @Route('download')
// export class DownloadController extends Controller {


//   constructor() {
//     super();
//   }

//   /**
//    * @summary Download the CV as a PDF file
//    */
//   @Get()
//   @Tags('Download')
//   @SuccessResponse(200, 'PDF Successfully Downloaded')
//   @Response(404, 'CV not found')
//   @Response(500, 'Internal server error')
//   async getCV(@Response('200') res: ExpressResponse): Promise<void> {
//     try {
//       const cvName = "CV_Elodie_ROY_Developpeuse_web.pdf";
//       const cvPath = path.join(__dirname, `../../../../documents/${cvName}`);

//       // Vérifier si le fichier existe
//       if (!fs.existsSync(cvPath)) {
//         this.setStatus(404);
//         return;
//       }

//       // Définir les en-têtes pour le téléchargement
//       this.setHeader('Content-Type', 'application/pdf');
//       this.setHeader('Content-Disposition', `inline; filename="${cvName}"`);

//         res.sendFile(cvPath, (err) => {
//           if (err) {
//             console.error('Error sending file:', err);
//             this.setStatus(500);
//           }
//         });
//     } catch (error) {
//       console.error('Server error:', error);
//       this.setStatus(500);
//     }
//   }
// }
