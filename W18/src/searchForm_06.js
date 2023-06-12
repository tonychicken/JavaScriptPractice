import get from "./getElement.js";
import presentAnimals from "./presentAnimals_06.js";

const form = get('.search-form');
const queryOptionform = get('.queryOption');

const change = get('[name="select"]');

const baseURL = 'https://data.coa.gov.tw/Service/OpenData/TransService.aspx?UnitId=QcbUEzN6E6DL&$top={top}&animal_place={animal_place}&animal_kind={animal_kind}&animal_subid={animal_subid}';
const dropdown = document.getElementById('animalDropdown');

const ddlShelter = document.getElementById('ddlShelter');

const animalchange = document.getElementById('animalchange');

const txtAcceptNum = document.getElementById('txtAcceptNum');
const txtChipID = document.getElementById('txtChipID');
const Search = document.getElementById('Search');


dropdown.addEventListener('change', (e) => {
    e.preventDefault();
    const value = dropdown.value;
    const ddlSheltervalue = ddlShelter.value;
    const animalchangevalue = animalchange.value;
    const txtAcceptNumvalue = txtAcceptNum.value;
    console.log("Search")
    // const txtChipIDvalue = txtChipID.value;
    let modifiedURL = baseURL.replace("{top}", value);
    modifiedURL = modifiedURL.replace("{animal_place}", ddlSheltervalue);
    modifiedURL = modifiedURL.replace("{animal_kind}", animalchangevalue);
    modifiedURL = modifiedURL.replace("{animal_subid}", txtAcceptNumvalue);
    presentAnimals(modifiedURL);
});

ddlShelter.addEventListener('change', (e) => {
    e.preventDefault();
    const value = dropdown.value;
    const ddlSheltervalue = ddlShelter.value;
    const animalchangevalue = animalchange.value;
    const txtAcceptNumvalue = txtAcceptNum.value;
    console.log("Search")
    // const txtChipIDvalue = txtChipID.value;
    let modifiedURL = baseURL.replace("{top}", value);
    modifiedURL = modifiedURL.replace("{animal_place}", ddlSheltervalue);
    modifiedURL = modifiedURL.replace("{animal_kind}", animalchangevalue);
    modifiedURL = modifiedURL.replace("{animal_subid}", txtAcceptNumvalue);
    presentAnimals(modifiedURL);
});
animalchange.addEventListener('change', (e) => {
    e.preventDefault();
    const value = dropdown.value;
    const ddlSheltervalue = ddlShelter.value;
    const animalchangevalue = animalchange.value;
    const txtAcceptNumvalue = txtAcceptNum.value;
    // const txtChipIDvalue = txtChipID.value;
    let modifiedURL = baseURL.replace("{top}", value);
    modifiedURL = modifiedURL.replace("{animal_place}", ddlSheltervalue);
    modifiedURL = modifiedURL.replace("{animal_kind}", animalchangevalue);
    modifiedURL = modifiedURL.replace("{animal_subid}", txtAcceptNumvalue);
    presentAnimals(modifiedURL);
});
debugger
Search.addEventListener('click', (e) => {
    e.preventDefault();
    const value = dropdown.value;
    const ddlSheltervalue = ddlShelter.value;
    const animalchangevalue = animalchange.value;
    const txtAcceptNumvalue = txtAcceptNum.value;
    console.log("Search")
    // const txtChipIDvalue = txtChipID.value;
    let modifiedURL = baseURL.replace("{top}", value);
    modifiedURL = modifiedURL.replace("{animal_place}", ddlSheltervalue);
    modifiedURL = modifiedURL.replace("{animal_kind}", animalchangevalue);
    modifiedURL = modifiedURL.replace("{animal_subid}", txtAcceptNumvalue);
    presentAnimals(modifiedURL);
});