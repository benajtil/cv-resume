# CV‑Resume



A sleek, pixel‑art–inspired personal portfolio built with React and Vite, showcasing my skills, projects, and résumé—deployed to GitHub Pages.

## 🚀 Live Demo

👉 [https://benajtil.github.io/cv-resume/](https://benajtil.github.io/cv-resume/)

## 📖 About

I’m **Ben Florence A.J. Til**, a fresh Computer Science graduate from NDMU, passionate about web development. This repo hosts my personal portfolio site, where you can:

- Learn about my background, skills, and experience
- Browse through my featured projects
- Download my resume with one click

## ✨ Features

- **Hero section** with dynamic typing effect
- **About**, **Timeline**, **Projects**, **Skills**, **Contact** sections
- **Responsive** layout (mobile‑first)
- **Download Resume** button opens PDF in a new tab
- **EmailJS**–powered contact form with auto‑reply
- **Dark/light** mode toggle (optional to implement)

## 🛠️ Tech Stack

- **Framework**: React
- **Bundler**: Vite
- **Styling**: Tailwind CSS
- **Icons**: react‑icons (including lucide‑react)
- **Forms**: EmailJS
- **Deployment**: GitHub Pages via `gh‑pages`

## 💻 Getting Started

1. **Clone the repo**

   ```bash
   git clone https://github.com/benajtil/cv-resume.git
   cd cv-resume
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run dev server**

   ```bash
   npm run dev
   ```

   Open `http://localhost:5173` in your browser.

4. **Build for production**

   ```bash
   npm run build
   ```

5. **Preview the production build**

   ```bash
   npm run preview
   ```

## 📦 Deployment

This project is pre‑configured to deploy to GitHub Pages under the `/cv-resume/` base path:

```js
// in vite.config.js
export default defineConfig({
  base: '/cv-resume/',
  …
})
```

Just run:

```bash
npm run deploy
```

…and your site will go live at:

```
https://benajtil.github.io/cv-resume/
```

## 📂 Project Structure

```
cv-resume/
├─ public/                # Static assets (fonts, PDF résumé, favicon)
│  └─ Ben-Resume.pdf      # Résumé PDF  
├─ src/
│  ├─ assets/             # Images, JSON animations, styles  
│  ├─ components/         # Reusable React components  
│  ├─ constants/          # Site content data  
│  ├─ App.jsx             # Root component  
│  └─ main.jsx            # Entry point  
├─ README.md              # You are here  
└─ vite.config.js
```

## 🙋‍♂️ Author

**Ben Florence A.J. Til**

- 📧 [benzajtil@gmail.com](mailto\:benzajtil@gmail.com)
- 🌐 [https://benajtil.github.io/cv-resume](https://benajtil.github.io/cv-resume)
- 👔 [LinkedIn](https://www.linkedin.com/in/ben-florence-aj-til-7217a729a/)

## 📄 License

This project is licensed under the [MIT License](./LICENSE).

