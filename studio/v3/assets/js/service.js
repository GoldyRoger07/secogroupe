const params = new URLSearchParams(window.location.search)

const serviceName = params.get("service_name")

const serviceContainer = document.querySelector("#service-container")

const serviceTitle = document.querySelector("#service-title")

const bigServiceTitle = document.querySelector("#big-service-title")

const titleServiceActive = document.querySelector("#title-service-active")

const innerBanner = document.querySelector(".inner-banner")

if(!SERVICES[serviceName]){
    let a = document.createElement("a")
    a.href="index.html"
    a.click();
}


// innerBanner.style=`background: url(${SERVICES[serviceName].cover}) no-repeat top/cover; min-height: 100vh; position: fixed; left: 0; right: 0; bottom: 0; z-index:1;`
// Modifier la variable globale --main-color
document.documentElement.style.setProperty('--body-bg', `url(${SERVICES[serviceName].cover})`);

// serviceContainer.innerHTML = `
//                     <h3 class="title-style text-dark mb-2">${SERVICES[serviceName].title}</h3>
//                     <p class="mb-2" style="color: #000;">${SERVICES[serviceName].description}</p>
                    
// `



serviceTitle.textContent = SERVICES[serviceName].title
titleServiceActive.textContent = SERVICES[serviceName].title
bigServiceTitle.textContent = SERVICES[serviceName].title
