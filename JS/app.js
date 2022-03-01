const searchPhone = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    searchField.value = '';
    const url = `
    https://openapi.programming-hero.com/api/phones?search=${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResults(data.data));
}

const displaySearchResults = (phones) => {
    const searchResult = document.getElementById('search-result')
    searchResult.innerHTML = '';
    if (phones.length == 0) {
        const notFoundField = document.getElementById('not-found');
        notFoundField.innerHTML = `
        <h3 class="text-center mt-5 p-5">No Phone Found</h3>
        `
        // notFoundField.appendChild(notFoundText);

    }
    else {
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
}

const searchDetails = (phoneId) => {
    const url = `https://openapi.programming-hero.com/api/phone/${phoneId}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayPhoneDetails(data.data))
}
// console.log(data.data.mainFeatures.storage)
const displayPhoneDetails = (phoneDetails) => {
    const phoneDetailsField = document.getElementById('phone-details-field');
    console.log(phoneDetails)
    const div = document.createElement('div')
    div.classList.add('col')
    div.innerHTML = `
    <div class=" d-flex justify-content-center m-5">
                <div class="d-flex align-items-center"><img src="${phoneDetails.image}" class=" mx-auto" alt="..."></div>
            <div class="">
                <h5 class="card-title text-center">Model: ${phoneDetails.name}</h5>
                <p class="card-text text-center">Brand:${phoneDetails.brand}</p>
                <p class="card-text ms-3">Storage:${phoneDetails.mainFeatures.storage}</p>
                <p class="card-text ms-3">Display:${phoneDetails.mainFeatures.displaySize}</p>
                <p class="card-text ms-3">Chipset:${phoneDetails.mainFeatures.chipSet}</p>
                <p class="card-text ms-3">Memory:${phoneDetails.mainFeatures.memory}</p>
                <p class="card-text ms-3">Sensors:${phoneDetails.mainFeatures.sensors}</p>
                <p class="card-text ms-3">ReleaseDate:${phoneDetails.releaseDate}</p>
                <p class="card-text ms-3">WLAN:${phoneDetails.others?.WLAN}</p>
                <p class="card-text ms-3">Bluetooth:${phoneDetails.others?.Bluetooth}</p>
                <p class="card-text ms-3">USB:${phoneDetails.others?.USB}</p>
            </div>
        </div>
         `
    phoneDetailsField.appendChild(div);
}