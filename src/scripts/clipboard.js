var clipboard = new Clipboard(".gitmoji", {
  text: function(trigger) {
    var shouldCopyUnicode = document.location.search.includes("?unicode");
    return shouldCopyUnicode
      ? trigger.textContent
      : trigger.getAttribute("data-clipboard-text");
  }
});
