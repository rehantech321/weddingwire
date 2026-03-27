const tipsGrid = document.getElementById("tipsGrid");

if (tipsGrid && Array.isArray(weddingTips)) {
  tipsGrid.innerHTML = weddingTips
    .map(
      (tip, index) => `
        <article class="tip-card">
          <div class="tip-card__meta">
            <span class="tip-card__number">${String(index + 1).padStart(2, "0")}</span>
            <span class="tip-card__category">${tip.category}</span>
          </div>
          <h3>${tip.title}</h3>
          <p>${tip.description}</p>
        </article>
      `
    )
    .join("");
}
