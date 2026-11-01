# Mahan Shishehchi — Composer Portfolio

A static portfolio website designed for GitHub Pages. No build tools or paid hosting required.

## Preview locally
Open `index.html` in a browser. For best results, use a simple local server (for example VS Code Live Server).

## Publish on GitHub Pages
1. Create a **public** GitHub repository. For a personal site, name it `YOURUSERNAME.github.io`.
2. Upload all files and folders from this project to the repository root.
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select `main` and `/(root)`, then Save.
6. Your site will appear at `https://YOURUSERNAME.github.io` after deployment.

GitHub Pages can take several minutes to publish the first time.

## Customize the content
- Edit `assets/works.js` to change titles, years, forces, descriptions and media.
- Replace `YOUR_EMAIL@example.com` in `index.html` with your contact email.
- Add score PDFs to `scores/`, then set the matching filename in the work's `score` field.
- Add MP3/WAV files to `audio/`, then set the matching filename in the work's `audio` field.
- To embed a YouTube video, copy the video ID from its URL and set `youtubeId` in `assets/works.js`.

Example: `https://www.youtube.com/watch?v=o5i18Yk0GdI` → `youtubeId: "o5i18Yk0GdI"`.

## Before publishing
Check all years, descriptions, instrumentation and credits. The initial entries include some draft metadata and blank years where details still need confirmation. Do not upload scores or recordings unless you have the right to share them publicly.
