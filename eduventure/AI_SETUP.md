# 🤖 Enabling AI-Powered Tutoring in EduVenture

## Current Status

The AI Tutor is currently running in **fallback mode** because a Google Gemini API key has not been configured. Users will see helpful educational resources and guidance instead of AI-generated content.

## How to Enable Full AI Functionality

### Step 1: Get a Google Gemini API Key (FREE)

1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Click **"Create API Key"**
4. Copy your new API key

### Step 2: Add API Key to Backend

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Open the `.env` file in a text editor

3. Find the line with `GEMINI_API_KEY` and replace it with your actual key:
   ```env
   GEMINI_API_KEY=AIzaSy...your_actual_key_here
   ```

4. Save the file

### Step 3: Restart the Backend Server

Press `Ctrl+C` in the backend terminal, then restart:
```bash
npm run dev
```

### Step 4: Test AI Tutor

1. Go to `http://localhost:5174/ai-tutor`
2. Type a question like "How do airplanes fly?"
3. Click "Ask"
4. You should now see AI-generated educational content! 🎉

---

## What the AI Tutor Does

When properly configured with a Gemini API key, the AI Tutor will:

- ✅ Generate engaging, age-appropriate lessons on any topic
- ✅ Include fun introductions with emojis
- ✅ Explain concepts simply using analogies
- ✅ Provide interesting facts and examples
- ✅ Create interactive quizzes to test understanding
- ✅ Adapt content based on the student's age group

---

## Fallback Mode (Current)

Without an API key, users will see:
- Acknowledgment of their question
- Alternative learning resources (books, websites, videos)
- Instructions for enabling AI (for administrators)
- A positive, encouraging message

This ensures a good user experience even when AI is not yet configured.

---

## API Key Safety Tips

🔒 **Keep your API key secure:**
- ✅ DO add `.env` to `.gitignore` (already done)
- ✅ DO use environment variables
- ❌ DON'T commit your API key to version control
- ❌ DON'T share your API key publicly

---

## Troubleshooting

### "API key not valid" Error
- Verify your API key is correctly copied (no extra spaces)
- Ensure the `.env` file is in the `/backend` directory
- Restart the backend server after adding the key

### AI responses are slow
- Gemini API is cloud-based and depends on internet speed
- First request may be slower (model initialization)
- Subsequent requests should be faster

### API Rate Limits
- Free tier: 60 requests per minute
- Upgrade at [Google Cloud Console](https://console.cloud.google.com/) if needed

---

## Need Help?

Contact your system administrator or refer to:
- [Google Gemini API Documentation](https://ai.google.dev/docs)
- [EduVenture GitHub Repository](https://github.com/your-repo)
