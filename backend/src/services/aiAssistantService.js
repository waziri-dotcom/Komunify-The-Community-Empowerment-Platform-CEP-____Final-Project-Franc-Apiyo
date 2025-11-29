// src/services/aiAssistantService.js
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY, // Make sure this is in your .env
});

const openai = new OpenAIApi(configuration);

/**
 * Send a prompt to OpenAI and get a response
 * @param {string} prompt - User input or query
 * @param {object} options - Optional OpenAI options (model, max_tokens, temperature)
 * @returns {Promise<string>} AI-generated text
 */
async function getAIResponse(prompt, options = {}) {
  try {
    if (!prompt || typeof prompt !== "string") {
      throw new Error("Prompt must be a non-empty string");
    }

    const response = await openai.createChatCompletion({
      model: options.model || "gpt-4",
      messages: [
        { role: "system", content: options.system || "You are a helpful assistant." },
        { role: "user", content: prompt },
      ],
      max_tokens: options.max_tokens || 500,
      temperature: options.temperature || 0.7,
    });

    const message = response.data.choices[0].message.content.trim();
    return message;
  } catch (err) {
    console.error("AI Assistant Error:", err.response?.data || err.message);
    return "Sorry, I couldn't process your request. Please try again.";
  }
}

module.exports = { getAIResponse };
