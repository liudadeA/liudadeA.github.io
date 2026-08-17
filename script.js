const root = document.documentElement;
const toggle = document.querySelector(".theme-toggle");
const themeMeta = document.querySelector('meta[name="theme-color"]');

function applyTheme(theme, persist = true) {
  root.dataset.theme = theme;
  const dark = theme === "dark";
  toggle.setAttribute("aria-label", dark ? "切换浅色模式" : "切换深色模式");
  toggle.setAttribute("title", dark ? "切换浅色模式" : "切换深色模式");
  themeMeta.setAttribute("content", dark ? "#171715" : "#f4f1ea");
  if (persist) localStorage.setItem("theme", theme);
}

applyTheme(root.dataset.theme, false);
toggle.addEventListener("click", () => applyTheme(root.dataset.theme === "dark" ? "light" : "dark"));
document.querySelector("#year").textContent = new Date().getFullYear();

matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (event) => {
  if (!localStorage.getItem("theme")) applyTheme(event.matches ? "dark" : "light", false);
});
