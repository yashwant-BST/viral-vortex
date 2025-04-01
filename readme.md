# *Viral Vortex* 🌪️
## *AI-Powered Blog & Social Media Content Generator*

🚀 *Viral Vortex* is an AI-driven content generation tool that helps users create *SEO-friendly blog posts* and *engaging social media content* with AI-generated images. Whether you're a marketer, blogger, or social media strategist, Viral Vortex streamlines content creation with just a few clicks!

---
## ✨ *Features*
### 📝 *Blog Content Generator*

✔️ *AI-Powered Blog Writing* – Generates well-structured blog posts based on topic, tone, and format.\
✔️ *SEO Recommendations* – Provides meta title, meta description, and best keywords for improved search rankings.\
✔️ *Headings Structuring* – Automatically organizes content with proper H1, H2, and H3 tags.\
✔️ *Internal & External Linking* – Suggests relevant links for better content optimization.\
✔️ *AI-Generated Images* – Option to include feature images & content images for blog posts.

### 📱 *Social Media Content Generator*

✔️ *AI-Generated Posts* – Creates engaging social media content for various platforms.\
✔️ *AI-Generated Posts* – Creates engaging social media content for various platforms.\
✔️ *Trending Hashtags* – Generates 5–10 trending hashtags based on the topic.\
✔️ *Engagement Prediction* – Estimates likely audience interaction based on content type & platform.\
✔️ *Call-to-Action (CTA) Suggestions* – AI-driven recommendations to increase conversions.\
✔️ *Quote Extraction* – Extracts 2–3 impactful quotes from the blog for social media.\
✔️ *Social Media Images* – Option to include AI-generated visuals optimized for social posts.

---

## 🛠️ *Tech Stack*

- *Backend*: Node.js, Express.js
- *Frontend*: HTML, CSS, Bootstrap, JavaScript
- *AI Model*: OpenAI GPT-4o for content & DALL·E 3 for images
- *Database (Optional)*: Can be integrated with MongoDB, Firebase, or MySQL
- *Deployment*: Docker for containerization

---

## 📥 *API Endpoints*

### 1️⃣ *Blog Content Generation*
- Endpoint: POST ```/generate/blog```

- Request Payload:
```json
{
  "topic": "Technology Trends in 2025",
  "length": "Medium",
  "tone": "Professional",
  "format": "Listicle",
  "targetAudience": "Tech Enthusiasts",
  "includeImages": true
}
```

- Response Example
```json
{
  "blogContent": "Full blog content in text format",
  "blogContentHTML": "<h1>...</h1><p>...</p>",
  "seoTitle": "Best Tech Trends in 2025",
  "seoMeta": "Discover the latest technology trends...",
  "seoKeywords": ["AI", "Blockchain", "Cloud Computing"],
  "headings": ["Introduction", "AI Advancements", "Blockchain Growth"],
  "links": ["https://example.com", "https://another-source.com"],
  "featuredImage": "https://cdn.example.com/featured-image.jpg",
  "contentImages": [
    "https://cdn.example.com/image1.jpg",
    "https://cdn.example.com/image2.jpg"
  ]
}

```

---

### 2️⃣ *Social Media Content Generation*
- Endpoint: POST ```/generate/social```

- Request Payload:
```json
{
  "topic": "AI in Marketing",
  "platform": "Twitter",
  "targetAudience": "Marketers",
  "includeImages": true
}
```

- Response Example
```json
{
  "hashtags": ["#AI", "#Marketing", "#Automation"],
  "engagementRate": "High",
  "cta": "Discover how AI transforms marketing strategies!",
  "quotes": [
    "AI is revolutionizing the marketing landscape.",
    "Automate, optimize, and grow with AI."
  ],
  "imageUrl": "https://cdn.example.com/social-image.jpg"
}
```
---
## 💻 *Installation & Setup*
### 🔧 *Prerequisites*

    - Node.js (v16+ recommended)
    - OpenAI API Key
    - Docker (for containerized deployment)

🔹 *1. Clone the Repository*
```bash
git clone https://github.com/yashwant-BST/viral-vortex.git
cd viral-vortex
```

🔹 *2. Install Dependencies*
```bash
npm install
```

🔹 *3. Set Up Environment Variables*

Create a .env file and add:
```bash
OPENAI_API_KEY=your_openai_api_key_here
PORT=5000
```

🔹 *4. Run the Server*
```bash
node server.js
```
    The backend will be available at: `http://localhost:5000`

🔹 *5. Access the Frontend*

Open `http://localhost:5000` in your browser to use the app.

---

## 🔮 *Future Enhancements*
- 🌟 *Multi-language Support* (Generate content in different languages)
- 🎯 *AI-Powered Performance Analytics* (Track engagement metrics)
- 📌 *Content Scheduling* (Auto-post blogs & social media content)

---

## 👥 *Contributors*

Yashwant Mehar (Developer & Maintainer)\
Satish Gupta (Developer)\

`Contribute – Open a PR or suggest ideas!`

---

## 📜 *License*

MIT License. Free to use, modify, and distribute.