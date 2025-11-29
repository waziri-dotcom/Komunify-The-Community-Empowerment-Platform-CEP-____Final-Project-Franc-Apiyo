// src/controllers/aiController.js
const { getAIResponse } = require("../services/aiAssistantService");

exports.chatWithAI = async (req, res) => {
  try {
    const { prompt } = req.body;
    if (!prompt) return res.status(400).json({ message: "Prompt is required" });

    const aiText = await getAIResponse(prompt);
    res.json({ response: aiText });
  } catch (err) {
    console.error("chatWithAI error:", err);
    res.status(500).json({ message: "Server error" });
  }
};
