import Store from './services/Store.js';

const cherryPicker = {
    version: "1.0.0",
    name: "Cherry Picker",
    init: initApp,
    redirectToApp: renderAppContent,
    store: new Store()
}

document.addEventListener('DOMContentLoaded', () => {
   cherryPicker.init();
})

function initApp(){
    const Initbutton = document.getElementById('init-button')
    Initbutton.addEventListener('click', cherryPicker.redirectToApp)
    cherryPicker.store.initializeStorage();
}

function renderAppContent(){
    const dateForm = document.getElementById("cherry-date-form");
    const dateSection = document.getElementById("cherry-dates-container");
    const envelopeTemplate = document.getElementById("date-envelope");
    const appContent = document.getElementById("app-content");


    removeHeaderComponent();
    appContent.removeAttribute("hidden");

    dateForm.addEventListener('submit', (event)=> onAddDate(event, envelopeTemplate, dateSection));

    if(cherryPicker.store.getStoredDates().length > 0){
        renderSavedDates(envelopeTemplate, dateSection);
    }
}

function renderSavedDates(envelopeTemplate, dateSection){
    const savedDates = cherryPicker.store.getStoredDates();
    savedDates.forEach(date => {
        const envelope = createEnvelope(envelopeTemplate, date);
        dateSection.appendChild(envelope);
    });
}


function onAddDate(event, envelopeTemplate, dateSection){
    event.preventDefault();
    const dateTitle = event.target.elements[0].value;
    if(dateTitle === "" || dateTitle === null) return;
    const date = {id: `date-${Date.now()}`, title: dateTitle};
    const envelope = createEnvelope(envelopeTemplate, date);
    cherryPicker.store.addDate(date);
    dateSection.appendChild(envelope);
    event.target.elements[0].value = "";
}

function createEnvelope(envelopeTemplate, date){
    const envelope = envelopeTemplate.content.cloneNode(true);
    const dateContainer = envelope.querySelector('.cherry-date')
    const dateTitleElement = envelope.getElementById("date-title");
    dateContainer.id = date.id;
    dateContainer.title = date.title;
    dateTitleElement.textContent = date.title;
    return envelope;
}

function removeHeaderComponent(){
    const header = document.getElementById("cherry-header");
    header.remove();
}