emulators
  .dos(document.getElementById("dos"), {
    kiosk: true
  })
  .then((ci) => {
    ci.run("https://v8.js-dos.com/bundles/doom.jsdos");
  });
