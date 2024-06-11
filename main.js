const fetchDataBtn = document.getElementById("fetchDataBtn");
const dataContainer = document.getElementById("dataContainer");

fetchDataBtn.addEventListener('click', async () => {
    //const response = await fetch('data.json')
    const response = await fetch('/.netlify/functions/getData')
    const data = await response.json()
    // renderData function
    renderData(data);
});

function renderData(data) {
    dataContainer.innerHTML = '';
    // Iterate through each programmers fun fact item
    data.forEach(item => {
        const dataItem = document.createElement("div");
        dataItem.classList.add('data-item');
        dataItem.innerHTML = `
        <h2>${item.title}</h2>
        <p>${item.content}</p>`;
        dataContainer.appendChild(dataItem);
    })
}