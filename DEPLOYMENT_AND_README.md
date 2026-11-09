# GitHub Pages Deployment Guide & Profile README for Mukunda (`Murari182.github.io`)

## 1. Full Static File Structure
All paths use relative URLs (`css/styles.css`, `js/app.js`, `js/mascot.js`, `assets/avatar.jpg`) so the site runs directly from the root of `https://murari182.github.io/` with zero build step required:

```text
Murari182.github.io/
├── index.html          # Home page (Liquid Glass Hero, Avatar Frame, Highlights, JSON-LD)
├── about.html          # Concise Bio, RGIPT Education Card, Interests & Categorized Skills
├── projects.html       # Filterable Projects Grid (BigO Studio/TCAnalyzer, CollegeConnects, AI Study Assistant, CineReserve, DSA_CPP)
├── experience.html     # Vertical Liquid Glass Timeline (ThinkChamp AWS Intern, CIO CollegeConnects, AWS Builder Leader, E-Cell RGIPT)
├── contact.html        # Glass Contact Card, [PLACEHOLDER] Email, Social Links & Mailto Form
├── css/
│   └── styles.css      # Apple visionOS Liquid Glass styles, SVG refraction, custom cursor & 3D GPU mascot
├── js/
│   ├── app.js          # Spring-physics sliding nav lens, View Transitions, droplet cursor, filter & mailto form
│   └── mascot.js       # 3D GPU Mascot ("Muxy RTX") with spinning fans, blinking eyes & squash-and-stretch hop
└── assets/
    ├── avatar.jpg      # Replace with your personal photo (includes automatic monogram fallback)
    ├── banner.jpg      # High-res Apple visionOS Liquid Glass OpenGraph / README banner
    ├── github-banner.svg
    └── favicon.svg
```

---

## 2. Step-by-Step GitHub Pages Deployment Instructions (`Murari182.github.io`)

1. **Create or Clone Your User Pages Repository**:
   - On GitHub, create a public repository named **`Murari182.github.io`** (if it already exists, clone it locally):
   ```bash
   git clone https://github.com/Murari182/Murari182.github.io.git
   cd Murari182.github.io
   ```
2. **Copy the Static Files into the Root**:
   - Place `index.html`, `about.html`, `projects.html`, `experience.html`, `contact.html`, and the `css/`, `js/`, and `assets/` folders directly in the root directory of `Murari182.github.io`.
   - Create an empty `.nojekyll` file in the root so GitHub Pages serves all static files directly without Jekyll processing:
   ```bash
   touch .nojekyll
   ```
3. **Add Your Personal Photo & Fill In `[PLACEHOLDER]` Values**:
   - Replace `assets/avatar.jpg` with your own portrait photo.
   - Search across the HTML/JS files for `[PLACEHOLDER` and fill in your email address, exact project URLs, and role start dates.
4. **Commit and Push to `main`**:
   ```bash
   git add .nojekyll index.html about.html projects.html experience.html contact.html css/ js/ assets/
   git commit -m "Deploy Apple visionOS Liquid Glass portfolio"
   git push -u origin main
   ```
5. **Verify GitHub Pages Settings**:
   - Go to **Settings → Pages** in `Murari182/Murari182.github.io`.
   - Under **Build and deployment**, set **Source** to **Deploy from a branch**, select branch **`main`** and folder **`/ (root)`**, then click **Save**.
   - Within 60 seconds, your portfolio will be live at **`https://murari182.github.io/`**.

---

## 3. GitHub Profile README Snippet (`Murari182/Murari182/README.md`)

Copy and paste this into the `README.md` of your special profile repository (`github.com/Murari182/Murari182`):

```markdown
<div align="center">
  <a href="https://murari182.github.io">
    <img src="https://murari182.github.io/assets/github-banner.svg" alt="Sreeramadasu Mukunda Rama Chary (Mukunda) — Apple visionOS Liquid Glass Portfolio" width="100%" />
  </a>
  <br /><br />
  <a href="https://murari182.github.io">
    <img src="https://img.shields.io/badge/Liquid_Glass_Portfolio-murari182.github.io-2563EB?style=for-the-badge&logo=apple&logoColor=white" alt="Open Portfolio" />
  </a>
  <a href="https://www.linkedin.com/in/smrc182/">
    <img src="https://img.shields.io/badge/LinkedIn-smrc182-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" />
  </a>
  <a href="https://mukunda-deep-aurora.vercel.app">
    <img src="https://img.shields.io/badge/Deep_Aurora-Vercel_App-7C3AED?style=for-the-badge&logo=vercel&logoColor=white" alt="Existing Portfolio" />
  </a>
</div>

### Hi, I'm Sreeramadasu Mukunda Rama Chary (Mukunda) 👋

- 🎓 **Education**: B.Tech in Mathematics and Computing at **RGIPT** (since 2025)
- 🎯 **Career Goal**: AI Engineer
- ☁️ **Experience & Leadership**:
  - **AWS Cloud Intern** at ThinkChamp (May–Jul 2026)
  - **Chief Information Officer (CIO)** at CollegeConnects
  - **AWS Student Builder Group Leader** at RGIPT
  - **Technical Team Member** at E-Cell RGIPT
- 🛠️ **Featured Projects**:
  - **BigO Studio** (powered by the custom **TCAnalyzer** C++ library)
  - **CollegeConnects**
  - **AI-Powered Study Assistant**
  - **CineReserve**
  - **[DSA_CPP](https://github.com/Murari182/DSA_CPP)**
```

---

## 4. Checklist of `[PLACEHOLDER]` Items to Fill In

1. **`assets/avatar.jpg`**: Replace the generated Liquid Glass portrait placeholder with your actual photo (`assets/avatar.jpg`).
2. **Email Address (`contact.html` & `js/app.js`)**:
   - In `contact.html`, replace `[PLACEHOLDER: your.email@rgipt.ac.in]` with your real email address.
   - In `js/app.js` (inside `initContactForm`), replace `const recipient = 'your.email@example.com';` with your real email address.
3. **Education Details (`about.html`)**:
   - Replace `[PLACEHOLDER: Add expected graduation year (e.g., 2029), CGPA, or favorite coursework]`.
4. **Skills Confirmation (`about.html`)**:
   - Replace `[PLACEHOLDER]` next to `Python / Other Languages`, `Specific Frontend/Backend Frameworks`, `ML / Deep Learning Libraries`, and `Vector DBs / RAG Tooling` with the exact libraries you have genuinely used.
5. **Project Links & Technical Specifics (`projects.html` & `js/app.js`)**:
   - Add direct repository or live demo URLs and specific stack details for **BigO Studio**, **CollegeConnects**, **AI-Powered Study Assistant**, and **CineReserve**.
6. **Experience Start Dates & Deliverables (`experience.html`)**:
   - Fill in exact start months/years and bullet specifics for **CIO at CollegeConnects**, **AWS Student Builder Group Leader at RGIPT**, **Technical Team Member at E-Cell RGIPT**, and your **AWS Cloud Internship at ThinkChamp (May–Jul 2026)**.
