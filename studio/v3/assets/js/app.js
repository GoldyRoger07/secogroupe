// AOS.init();

      const body = document.body
      const hider = document.querySelector(".hider")
      const nav = document.querySelector("#nav")
    //   const menuBtn = document.querySelector("#menuBtn")

      let lastScroll = 0

      window.addEventListener('scroll',()=>{
          let currentScroll = window.pageYOffset

          if(currentScroll<= 0){
              hider.classList.remove("scroll-up")
          }

          if(currentScroll > lastScroll && !hider.classList.contains("scroll-down")){
            hider.classList.remove("scroll-up")
            hider.classList.add("scroll-down")
            // onClickLink()
          }

          if(currentScroll < lastScroll && hider.classList.contains("scroll-down")){
            hider.classList.add("scroll-up")
            hider.classList.remove("scroll-down")
          }
          lastScroll = currentScroll


      })

            


