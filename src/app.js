

const cherryPicker = {
    version: "1.0.0",
    name: "Cherry Picker",
    init: initApp,
    redirectToApp: renderAppContent,
}

document.addEventListener('DOMContentLoaded', () => {
   cherryPicker.init();
})

function initApp(){
    const Initbutton = document.getElementById('init-button')
    Initbutton.addEventListener('click', ()=>{
       cherryPicker.redirectToApp();
    })
}

function renderAppContent(){
    removeHeaderComponent();
    const appContent = document.getElementById("app-content");
    appContent.removeAttribute("hidden");
    const addDateForm = document.getElementById("cherry-date-form");
    addDateForm.addEventListener('submit', (event)=>{
        event.preventDefault();
    });
}

function removeHeaderComponent(){
    const header = document.getElementById("cherry-header");
    header.remove();
}