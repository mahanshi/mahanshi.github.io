const params = new URLSearchParams(location.search);
const work = works.find(w => w.id === params.get('id'));
const root = document.getElementById('work-detail');
if (work) {
 document.title = `${work.title} — Mahan Shishehchi`;
 root.innerHTML = `<p class="eyebrow">COMPOSITION${work.year ? ' · '+work.year : ''}</p><h1 class="detail-title">${work.title}</h1><p class="detail-subtitle">${work.subtitle}</p>${work.description ? `<p class="detail-description">${work.description}</p>` : ''}${work.youtube ? `<section class="media-section"><h2>Recording</h2><div class="video-frame"><iframe src="${work.youtube}" title="${work.title} — recording" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe></div><a class="text-link" href="${work.watch}" target="_blank" rel="noreferrer">Watch on YouTube ↗</a></section>` : (work.id === 'mother-time-war' ? `<section class="media-section"><h2>Recording</h2><p class="muted">Recording in progress.</p></section>` : '')}${work.score ? `<section class="media-section"><h2>Score</h2><p><a class="text-link" href="${work.score}" target="_blank" rel="noreferrer">View score ↗</a></p><div class="score-frame"><iframe src="${work.score}" title="${work.title} — score" loading="lazy"></iframe></div></section>` : ''}`;
} else { root.innerHTML = '<h1>Composition not found</h1><a class="text-link" href="all-works.html">Browse all works ↗</a>'; }
const year = document.getElementById('year'); if (year) year.textContent = new Date().getFullYear();
