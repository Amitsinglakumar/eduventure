import { GoogleGenerativeAI } from '@google/generative-ai';
import dotenv from 'dotenv';

dotenv.config();

// Fallback response when API key is not configured
const generateFallbackContent = (topic: string, ageGroup: string): string => {
  return `
<h2>🎓 Learning About: ${topic}</h2>

<p><strong>Hey there, Explorer!</strong> 👋</p>

<p>I'm your AI Tutor, and I'd love to teach you about <strong>${topic}</strong>! However, I need a special key to unlock my full knowledge database.</p>

<h3>📚 What You Can Do:</h3>
<ul>
    <li>Ask your teacher or admin to add a Gemini API key to enable AI-powered lessons</li>
    <li>In the meantime, here are some fun resources to explore <strong>${topic}</strong>:
        <ul>
            <li>📖 Check out books in your library</li>
            <li>🌐 Search educational websites like Khan Academy or National Geographic Kids</li>
            <li>🎥 Watch educational videos on YouTube (with parent permission!)</li>
            <li>🤔 Ask your teacher questions about ${topic}</li>
        </ul>
    </li>
</ul>

<h3>🔧 For Administrators:</h3>
<p>To enable AI-powered tutoring, add your Google Gemini API key to the <code>.env</code> file:</p>
<pre>GEMINI_API_KEY=your_api_key_here</pre>
<p>Get your free API key at: <a href="https://makersuite.google.com/app/apikey" target="_blank">Google AI Studio</a></p>

<p><strong>Keep exploring and learning! 🚀</strong></p>
    `.trim();
};

const hasValidApiKey = (): boolean => {
  const apiKey = process.env.GEMINI_API_KEY;
  // Check if key exists, is not empty, and is not the placeholder
  return !!(apiKey && apiKey.trim().length > 0 && apiKey !== 'your_api_key_here');
};

export const generateContent = async (topic: string, ageGroup: string): Promise<string> => {
  // Check if API key is configured
  if (!hasValidApiKey()) {
    console.warn('⚠️ Gemini API key not configured. Using fallback response.');
    return generateFallbackContent(topic, ageGroup);
  }

  try {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY as string);
    // Use gemini-pro which is the standard stable model
    const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash-exp' });
    const prompt = `Create a short, engaging educational lesson about "${topic}" suitable for a ${ageGroup} student. 
      Include: 
      1. A fun introduction (use emojis!). 
      2. Key concepts explained simply (use analogies). 
      3. Fun facts or examples.
      4. A short quiz with 3 questions at the end.
      Format as HTML with proper headings and lists.
      Style: Gamified, encouraging, and fun!`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error: any) {
    console.error('❌ Gemini API Error:', error.message);
    // If API call fails, return fallback content
    return generateFallbackContent(topic, ageGroup);
  }
};
