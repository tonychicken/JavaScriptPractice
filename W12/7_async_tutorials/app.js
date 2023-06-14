
const btn = document.querySelector('.btn');
const url= './api/people.json';
btn.addEventListener('click',()=>{
    getData(url);
})

const getData=(url)=>{
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onreadystatechange = function () {
        console.log('xhr', xhr);
        if (xhr.readyState === 4 && xhr.status === 200) {
            const data= JSON.parse(xhr.responseText);
            const displayData=data.map(item=>{
                return `<p> ${item.name}</p>`
            }).join('');
            const divElement = document.createElement('div');
            divElement.innerHTML=displayData;
            document.body.appendChild(divElement)
            // const text = document.createElement('p');
            // console.log('text', text);
            // text.textContent = xhr.responseText;
            // document.body.appendChild(text);
        } else {
            console.log({
                status: xhr.status,
                text: xhr.statusText,
                state: xhr.readyState
            });
        }
    }
    xhr.send();
}

// fetch(url)
// .then(response=>response.json())

// .then(response => console.log('Success:', response)).catch(error => console.error('Error:', error));


