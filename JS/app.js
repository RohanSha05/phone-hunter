const searchPhone = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    searchField.value = '';
    console.log(searchText);
    const url = `
    https://openapi.programming-hero.com/api/phones?search=${searchText}`
    console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResults(data.data));
}

const displaySearchResults = (phones) => {
    const searchResult = document.getElementById('search-result')
    for (const phone of phones) {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
    <div class="card h-100">
            <img src="${phone.image}" class="card-img-top w-50 mx-auto" alt="...">
        <div class="card-body">
            <h5 class="card-title text-center">${phone.phone_name}</h5>
            <p class="card-text text-center">${phone.brand}</p>
            <div class="d-grid gap-2">
               <button onclick="searchDetails('${phone.slug}')" class="btn btn-dark w-50 mx-auto" type="button">Details</button>
            </div>
        </div>
    </div>
        `
        searchResult.appendChild(div)
    }
}

const searchDetails = (phoneId) => {
    console.log(phoneId);
}