
const btn = document.querySelector('.btn');
const url = './api/people.json';
btn.addEventListener('click', async () => {
    const data = await getData(url);
    await displayData(data);
})

const getData = async (url) => {
    try {
        const response = await fetch(url)
        const data = response.json();
        return data;
            // .then(response => response.json())

            // .then(response => console.log('Success:', response)).catch(error => console.error('Error:', error));

    } catch (error) {
        console.log(error)
    }
}

const displayData = async(data) => {
    console.log(data)
    const displayData = data.map(item => {
        return `<p> ${item.name}</p>`
    }).join('');
    const divElement = document.createElement('div');
    divElement.innerHTML = displayData;
    document.body.appendChild(divElement)
}
// fetch(url)
// .then(response=>response.json())

// .then(response => console.log('Success:', response)).catch(error => console.error('Error:', error));


