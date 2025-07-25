// Untuk membuat link bisa dicopy
const actionLink = document.querySelectorAll(".link-card .link-action");

actionLink.forEach((aksi) => {
  aksi.addEventListener("click", (r) => {
    r.preventDefault();
    navigator.clipboard.writeText(aksi.parentElement.getAttribute("href"));
    
    //Untuk memunculkan toast notifikation
    document.getElementById("toast").innerHTML = `
     <div class="toast-container">
         <p>✨ Link <strong>${aksi.parentElement.innerText} </strong> Success copied!</p>
        </div>
    `;

    // Untuk menghilangkan toast notifikation 
    setTimeout(() => {
      document
        .querySelector("#toast .toast-container")
        .classList.add("toast-gone");
    }, 300);

    setTimeout(() => {
      document
      .querySelector("#toast .toast-container").remove()
    },2000)
  });
});


//Untuk mengganti icon saat hover
document.querySelectorAll(".sosmed i").forEach ((media) => {
media.addEventListener("mouseenter", () => {
  media.classList.remove("ph")
  media.classList.add("ph-fill")
})
  media.addEventListener("mouseleave", () => {
    media.classList.remove("ph-fill")
    media.classList.add("ph")
  })
  })

  // Animasi text bergerak saat scroll
  document.addEventListener("scroll", (r) => {
document.querySelector(".bg-text-animation").style.transform = `translateX(${window.scrollY}px)`
  })