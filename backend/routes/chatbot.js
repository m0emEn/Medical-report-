const express = require('express');
const router = express.Router();

const { InferenceClient } = require('@huggingface/inference');
const client = new InferenceClient(process.env.HF_API_KEY);

// POST /api/chatbot
router.post('/', async (req, res) => {
  const { message } = req.body;
  if (!message) {
    return res.status(400).json({ error: 'Message is required.' });
  }

  try {
    const chatCompletion = await client.chatCompletion({
      provider: 'fireworks-ai',
      model: 'deepseek-ai/DeepSeek-R1-0528',
      messages: [
        {
          role: 'user',
          content: message,
        },
      ],
    });
    const botReply = chatCompletion.choices?.[0]?.message?.content || chatCompletion;
    res.json({ reply: botReply });
  } catch (error) {
    console.error('Hugging Face Inference API error:', error.response?.data || error.message);
    res.status(500).json({ error: 'Failed to get response from AI model.' });
  }
});

module.exports = router; 