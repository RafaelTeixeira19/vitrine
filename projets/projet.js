// Bascule FR/EN, partagée avec l'accueil (même clé « lang »).
(function () {
  var root = document.documentElement;
  function setLang(l) {
    root.lang = l;
    document.querySelectorAll(".lang button").forEach(function (b) { b.setAttribute("aria-pressed", String(b.dataset.lang === l)); });
    try { localStorage.setItem("lang", l); } catch (e) {}
  }
  var start = new URLSearchParams(location.search).get("lang");
  if (!start) { try { start = localStorage.getItem("lang"); } catch (e) {} }
  if (start === "en" || start === "fr") setLang(start);
  document.querySelectorAll(".lang button").forEach(function (b) { b.addEventListener("click", function () { setLang(b.dataset.lang); }); });
})();
