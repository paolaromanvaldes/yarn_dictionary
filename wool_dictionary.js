let wool_types = {
    fiber:
    [{
        name: 'merino',
        origin: 'Spain', 
        fiber_size: 'superfine',
        features: ['soft', 'insulating', 'moisture wicking', 'antimicrobial', 'upf50', 'odor resistant', 'fire resistant', 'wrinkle resistant'], 
        uses: ['couture', 'outdoors', 'athletic', 'winter', 'fall' ],
        material_origin: 'animal'

    },
    {
        name: 'alpaca', 
        origin: 'Peru', 
        fiber_size: 'superfine', 
        features: ['soft', 'hypoallergenic', 'lightweight', 'smooth', 'insulation', 'strong', ' many natural colors', 'sustainable'], 
        uses: ['fashion', 'outdoors', 'athletic', 'winter', 'fall'],
        material_origin: 'animal'

    },
    {
        name: 'cotton', 
        orgin: 'Sudan', 
        fiber_size: 'fine', 
        features: ['plant based', 'strong', 'water absorbant', 'lightweight', 'machine washable', 'softer with use', 'inexpensive', 'bulky'],
        uses: ['summer', 'spring', 'fashion' ],
        material_origin: 'plant'



    }, 


    
    ]
};

// Function to generate a random yarn
function generateRandomYarn() {
    const yarns = wool_types.fiber;
    const randomYarn = yarns[Math.floor(Math.random() * yarns.length)];
    
    const yarnDetails = `
        <h3>${randomYarn.name}</h3>
        <p>Origin: ${randomYarn.origin}</p>
        <p>Fiber Size: ${randomYarn.fiber_size}</p>
        <p>Features: ${randomYarn.features.join(', ')}</p>
        <p>Uses: ${randomYarn.uses.join(', ')}</p>
        <p>Material Origin: ${randomYarn.material_origin}</p>
    `;

    document.getElementById('yarn-stats').innerHTML = yarnDetails;
}

// Attach event listener to the generate button
document.getElementById('generate-yarn').addEventListener('click', generateRandomYarn);


// Mapping of regions to countries
const regions = {
    'north-america': ['USA', 'Canada', 'Mexico'],
    'europe': ['Spain', 'Italy', 'France'],
    'africa': ['Sudan', 'Ethiopia', 'South Africa'],
    // Add more regions and countries as needed
};

// Function to populate countries based on selected region
function populateCountries() {
    const region = document.getElementById('region-select').value;
    const countrySelect = document.getElementById('country-select');
    
    countrySelect.innerHTML = '<option value="" disabled selected>Select Country</option>'; // Reset the country dropdown

    if (regions[region]) {
        regions[region].forEach(country => {
            const option = document.createElement('option');
            option.value = country.toLowerCase();
            option.textContent = country;
            countrySelect.appendChild(option);
        });
    }
}

// Function to display yarns based on selected country
function displayYarns() {
    const country = document.getElementById('country-select').value;
    const yarnList = document.getElementById('yarn-list');
    const yarns = wool_types.fiber.filter(yarn => yarn.origin.toLowerCase() === country);
    
    yarnList.innerHTML = yarns.length > 0 ? 
        yarns.map(yarn => `<div><h3>${yarn.name}</h3><p>Features: ${yarn.features.join(', ')}</p></div>`).join('') :
        '<p>No yarns available for this country.</p>';
}

// Attach event listeners to region and country dropdowns
document.getElementById('region-select').addEventListener('change', populateCountries);
document.getElementById('country-select').addEventListener('change', displayYarns);