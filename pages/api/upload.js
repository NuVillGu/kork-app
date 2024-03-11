import { IncomingForm } from 'formidable';
import fs from 'fs';
import path from 'path';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  try {
    const uploadDir = path.join(process.cwd(), 'public/images/products');

    const form = new IncomingForm({
      uploadDir,
      keepExtensions: true
    });

    form.parse(req, async (err, fields, files) => {
      if (err) {
        console.error('Error parsing form', err);
        return res.status(500).json({ message: 'Server error' });
      }
    
      const uploadedFiles = Array.isArray(files.images) ? files.images : [files.images];
    
      for (const file of uploadedFiles) {
        const { originalFilename, filepath } = file;
    
        const newPath = path.join(uploadDir, originalFilename);
    
        try {
          fs.renameSync(filepath, newPath);
        } catch (error) {
          return res.status(500).json({ message: 'Error moving image' });
        }
      }
    
      res.status(200).json({ message: 'Images uploaded successfully' });
    });

  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
}


