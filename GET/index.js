function createCountryCard(country) {
    const card = document.createElement('div')
    card.classList.add('country')

    const coutryName = country.name.common
    const name = document.createElement('h2')
    name.textContent = coutryName

    const flag = document.createElement('img')
    flag.src = country.flags.svg
    flag.alt = coutryName

    card.append(name, flag)
    document.querySelector('#countries').append(card)
}
  
async function getCountries() {
    const response = await fetch('https://restcountries.com/v3.1/all')
    const countries = await response.json()

    countries.forEach(createCountryCard)
    
}   

getCountries()