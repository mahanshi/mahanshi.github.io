const params = new URLSearchParams(location.search);
const work = works.find(w => w.slug === params.get("work"));
const root = document.getElementById("work-detail");
document.getElementById("year").textContent = new Date().getFullYear();

if (!work) {
  root.innerHTML = '<p class="eyebrow">WORK NOT FOUND</p><h1>This page is not available.</h1><a class="text-link" href="index.html#works">Return to selected works ↗</a>';
} else {
  document.title = `${work.title} — Mahan Shishehchi`;
  const video = work.youtubeId ? `
    <section class="detail-block">
      <p class="eyebrow">RECORDING</p><h2>Video</h2>
      <div class="video-frame"><iframe src="https://www.youtube-nocookie.com/embed/${encodeURIComponent(work.youtubeId)}" title="${work.title} — video" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
    </section>` : "";
  const score = work.score ? `
    <section class="detail-block"><p class="eyebrow">NOTATION</p><h2>Score</h2>
      <div class="resource-links"><a href="scores/${work.score}" target="_blank" rel="noopener">View score PDF ↗</a><a href="scores/${work.score}" download>Download score ↓</a></div>
    </section>` : "";
  const audio = work.audio ? `
    <section class="detail-block"><p class="eyebrow">LISTEN</p><h2>Audio</h2><audio controls preload="none" src="audio/${work.audio}">Your browser does not support audio playback.</audio></section>` : "";
  root.innerHTML = `
    <a class="back-link" href="index.html#works">← Selected works</a>
    <section class="detail-heading"><p class="eyebrow">${work.forces || "COMPOSITION"} ${work.year ? " · " + work.year : ""}</p><h1>${work.title}</h1>
    ${work.description ? `<p class="detail-description">${work.description}</p>` : ""}
    </section>
    ${video}${score}${audio}
    ${!video && !score && !audio ? '<p class="empty-note">Recording, score and audio will be added here.</p>' : ''}
    <div class="detail-end"><a class="text-link" href="index.html#works">← Browse all works</a></div>`;
}