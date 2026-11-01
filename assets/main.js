const list = document.getElementById("work-list");
if (list && typeof works !== "undefined") {
  list.innerHTML = works.map((w, i) => `
    <a class="work-row" href="work.html?work=${encodeURIComponent(w.slug)}">
      <span class="work-number">${String(i + 1).padStart(2, "0")}</span>
      <span class="work-title">${w.title}</span>
      <span class="work-year">${w.year || " "}</span>
      <span class="work-arrow">↗</span>
    </a>`).join("");
}
document.getElementById("year").textContent = new Date().getFullYear();