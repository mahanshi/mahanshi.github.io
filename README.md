# Mahan Shishehchi — Composer Portfolio

A minimalist composer portfolio for GitHub Pages.

## Publish
1. Upload the contents of this folder to the root of your GitHub repository (not the enclosing folder).
2. In **Settings → Pages**, choose **Deploy from a branch**, branch **main**, folder **/(root)**, then Save.
3. Upload your CV PDF into the `cv/` folder and name it exactly `Mahan-Shishehchi-CV.pdf`. The CV page is already configured to display and download that file.

## Structure
- `index.html` — homepage and selected works
- `all-works.html` — complete work-title catalogue
- `work.html` — dedicated composition page template
- `cv.html` — CV page
- `cv/Mahan-Shishehchi-CV.pdf` — put your CV PDF here (you supply this file)
- `assets/` — styles, scripts, background artwork and portrait
- `audio/` and `scores/` — folders reserved for future audio and score files

## Update works
Edit `assets/works.js`. The six selected works are shown on the homepage. The all-works catalogue is the `allWorks` array. YouTube links and the external score link are configured in each work's data entry.
