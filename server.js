require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const axios = require("axios");
const openai = require('openai');
const marked = require("marked");

const app = express();
app.use(cors());
app.use(express.json());

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files (Frontend)
app.use(express.static(path.join(__dirname, "public")));

// Route to serve the index.html file
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Function to generate text using OpenAI API
async function generateText(prompt) {
    try {
        const response = await axios.post(
            "https://api.openai.com/v1/chat/completions",
            {
                model: "gpt-4o",
                messages: [{ role: "user", content: prompt }],
            },
            { headers: { Authorization: `Bearer ${OPENAI_API_KEY}` } }
        );
        return response.data.choices[0].message.content.trim();
    } catch (error) {
        console.error("Error generating text:", error);
        return "Failed to generate content";
    }
}

// Function to generate an image using OpenAI API
async function generateImage(prompt, size = "1024x1024") {
    try {
        const response = await axios.post(
            "https://api.openai.com/v1/images/generations",
            {
                model: "dall-e-3",
                prompt: prompt,
                n: 1,
                size: size,
            },
            { headers: { Authorization: `Bearer ${OPENAI_API_KEY}` } }
        );
        return response.data.data[0].url;
    } catch (error) {
        console.error("Error generating image:", error);
        return null;
    }
}

// 🔹 Blog Content Generation API (Now Handles Image Generation)
app.post("/generate/blog", async (req, res) => {
    const { topic, length, tone, format, targetAudience, includeImages } = req.body;

    const textPrompt = `Write a ${length} blog post about '${topic}'. Tone: ${tone}. Format: ${format}. Target Audience: ${targetAudience}. Include SEO-friendly headings.`;

    const blogContent = await generateText(textPrompt);
    const blogContentHTML = marked.parse(blogContent);
    console.log("~~~~~Blog Content~~~~~\n" +blogContent)
    const seoTitle = await generateText(`Generate an SEO-friendly title for a blog about '${topic}'`);
    const seoMeta = await generateText(`Write an engaging meta description for '${topic}'`);
    const seoKeywords = await generateText(`Suggest the best 5 SEO keywords for '${topic}'`);
    const seoKeywordsHTML = marked.parse(seoKeywords);

    const headings = await generateText(`Structure this blog with proper H1, H2, and H3 tags:\n\n${blogContent}`);
    const links = await generateText(`Suggest 3 relevant internal/external links for:\n\n${blogContent}`);

    let featuredImage = null;
    let contentImages = [];

    if (includeImages) {
        featuredImage = await generateImage(`A visually appealing featured image for a blog about '${topic}'`);
        contentImages.push(await generateImage(`A detailed illustration related to '${topic}', suitable for a blog post`));
        contentImages.push(await generateImage(`Another high-quality image related to '${topic}', for a blog section`));
        contentImages.push(await generateImage(`An additional unique image relevant to '${topic}'`));
        console.log("~~~~~Blog Featured Image~~~~~\n" +featuredImage)
        console.log("~~~~~Blog Featured Image~~~~~\n" +contentImages)
    }

    res.json({ 
        blogContent,
        blogContentHTML,
        seoTitle, 
        seoMeta, 
        seoKeywords, 
        seoKeywordsHTML,
        headings, 
        links,
        featuredImage, 
        contentImages
    });
});

// 🔹 Social Media Content Generation API (Now Handles Image Generation)
app.post("/generate/social", async (req, res) => {
    const { topic, platform, targetAudience, includeImages } = req.body;

    const hashtags = await generateText(`Create 5–10 trending hashtags for '${topic}'`);
    const engagementRate = await generateText(`Predict the likely engagement rate for '${topic}' on ${platform}`);
    const cta = await generateText(`Create a compelling CTA for '${topic}'`);
    const quotes = await generateText(`Extract 3 impactful quotes from a blog about '${topic}' for '${targetAudience}'.`);
    console.log("~~~~~Social Media Post~~~~~\n" +quotes)

    let imageUrl = null;
    if (includeImages) {
        imageUrl = await generateImage(`An eye-catching AI-generated image suitable for a social media post about '${topic}' on ${platform}`);
        console.log("~~~~~Social Media Image~~~~~\n" +imageUrl)
    }

    res.json({ hashtags, engagementRate, cta, quotes, imageUrl });
});

// 🔹 Standalone Image Generation API
app.post("/generate/image", async (req, res) => {
    try {
        const { prompt, size } = req.body;
        const imageUrl = await generateImage(prompt, size);
        res.json({ imageUrl });
    } catch (error) {
        res.status(500).json({ error: "Failed to generate image" });
    }
});

// Server Listening
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
