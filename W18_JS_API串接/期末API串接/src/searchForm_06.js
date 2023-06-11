import get from "./getElement.js";
import presentAnimals from "./presentAnimals_06.js";

const form = get('.search-form');

const change = get('[name="select"]');

const baseURL = 'https://data.coa.gov.tw/Service/OpenData/TransService.aspx?UnitId=QcbUEzN6E6DL&$top={top}&animal_place={animal_place}&animal_kind={animal_kind}';
const dropdown = document.getElementById('animalDropdown');

const ddlShelter = document.getElementById('ddlShelter');

const animalchange = document.getElementById('animalchange');

dropdown.addEventListener('change', (e) => {
    e.preventDefault();
    const value = dropdown.value;
    const ddlSheltervalue = ddlShelter.value;
    const animalchangevalue = animalchange.value;
    let modifiedURL = baseURL.replace("{top}", value);
    modifiedURL = modifiedURL.replace("{animal_place}", ddlSheltervalue);
    modifiedURL = modifiedURL.replace("{animal_kind}", animalchangevalue);
    presentAnimals(modifiedURL);
});

ddlShelter.addEventListener('change', (e) => {
    e.preventDefault();
    const value = dropdown.value;
    const ddlSheltervalue = ddlShelter.value;
    const animalchangevalue = animalchange.value;
    let modifiedURL = baseURL.replace("{top}", value);
    modifiedURL = modifiedURL.replace("{animal_place}", ddlSheltervalue);
    modifiedURL = modifiedURL.replace("{animal_kind}", animalchangevalue);
    presentAnimals(modifiedURL);
});
animalchange.addEventListener('change', (e) => {
    e.preventDefault();
    const value = dropdown.value;
    const ddlSheltervalue = ddlShelter.value;
    const animalchangevalue = animalchange.value;
    let modifiedURL = baseURL.replace("{top}", value);
    modifiedURL = modifiedURL.replace("{animal_place}", ddlSheltervalue);
    modifiedURL = modifiedURL.replace("{animal_kind}", animalchangevalue);
    presentAnimals(modifiedURL);
});