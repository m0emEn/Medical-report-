const express = require('express');
const multer = require('multer');
const path = require('path');
const Report = require('../models/Report');
const User = require('../models/User');
const router = express.Router();

// Store files in local uploads/ folder
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../uploads'));
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + '-' + file.originalname);
  },
});
const upload = multer({ storage });

// Upload a report (simulate auth: userId in body)
router.post('/upload', upload.single('file'), async (req, res) => {
  try {
    const { userId } = req.body;
    const user = await User.findById(userId);
    if (!user) return res.status(401).json({ message: 'Invalid user.' });
    const file = req.file;
    const report = new Report({
      user: user._id,
      filename: file.filename,
      originalname: file.originalname,
      mimetype: file.mimetype,
      size: file.size,
    });
    await report.save();
    res.json({ report });
  } catch (err) {
    res.status(500).json({ message: 'Upload failed', error: err.message });
  }
});

// List reports for a user (simulate auth: userId in query)
router.get('/list', async (req, res) => {
  try {
    const { userId } = req.query;
    const reports = await Report.find({ user: userId }).sort({ uploadedAt: -1 });
    res.json({ reports });
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch reports', error: err.message });
  }
});

module.exports = router; 