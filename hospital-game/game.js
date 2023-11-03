

let windo = document.querySelectorAll(".win");
      windo.forEach((element) => {
        element.addEventListener("click", (e) => {
          e.target.parentElement.classList.toggle("ative");
          console.log(e.target.parentElement.classList)
        });
      });

      