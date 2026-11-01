const list = document.getElementById('work-list');
if (list && typeof works !== 'undefined') {
  list.innerHTML = works.map((w, i) => `<a class="work-row" href="work.html?id=${encodeURIComponent(w.id)}"><span class="work-number">0${i+1}</span><span class="work-title-wrap"><span class="work-title">${w.title}</span><span class="work-subtitle">(${w.subtitle})</span></span><span class="work-arrow">↗</span></a>`).join('');
}
const year = document.getElementById('year'); if (year) year.textContent = new Date().getFullYear();
