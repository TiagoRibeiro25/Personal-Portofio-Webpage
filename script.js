if (window.pageYOffset < 100) {
   // scroll to the top
   window.scrollTo(0, 0);
   // prevent scrolling
   document.body.style.overflow = "hidden";

   document.querySelector("h1").classList.add("show-title");
   document.querySelector("h1").style.opacity = 1;

   setTimeout(() => {
      document.querySelectorAll(".letter").forEach((letter, index) => {
         setTimeout(() => {
            letter.classList.add("show-letter");
            letter.style.opacity = 1;
         }, 200 * index);
      });
   }, 800);

   setTimeout(() => {
      document.querySelector("#welcome-description").classList.add("slide-right");
      document.querySelector("#welcome-description").style.opacity = 1;
   }, 3500);

   setTimeout(() => {
      document.querySelector("#country").classList.add("slide-left");
      document.querySelector("#country").style.opacity = 1;
   }, 4000);

   setTimeout(() => {
      document.querySelector(".arrow-container").classList.add("show-arrow");
      document.querySelector(".arrow-container").style.opacity = 1;

      // allow scrolling
      document.body.style.overflow = "auto";
   }, 4500);
} else {
   document.querySelector("h1").style.opacity = 1;
   document.querySelectorAll(".letter").forEach((letter) => {
      letter.style.opacity = 1;
      letter.style.textShadow = "0 2px 5px #000";
   });
   document.querySelector("#welcome-description").style.opacity = 1;
   document.querySelector("#country").style.opacity = 1;
   document.querySelector(".arrow-container").style.opacity = 1;
}

document.querySelector("#discord-link").addEventListener("click", () => {
   document
      .querySelector("#discord-id-clipboard-message")
      .classList.remove("hide-discord-message");

   document
      .querySelector("#discord-id-clipboard-message")
      .classList.add("show-discord-message");

   // copy to clipboard
   navigator.clipboard.writeText("-|GOLD|-#5063");

   setTimeout(() => {
      document
         .querySelector("#discord-id-clipboard-message")
         .classList.remove("show-discord-message");

      document
         .querySelector("#discord-id-clipboard-message")
         .classList.add("hide-discord-message");
   }, 5000);
});
