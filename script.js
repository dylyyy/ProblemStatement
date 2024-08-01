function filterInvestments() {
    // Get the value from the search bar
    const searchQuery = document.getElementById('search-bar').value.toLowerCase();
    
    // Get all investment cards
    const investmentCards = document.querySelectorAll('.investment-card');

    // Loop through all cards and hide those that don't match the search query
    investmentCards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        const description = card.querySelector('p').textContent.toLowerCase();
        
        if (title.includes(searchQuery) || description.includes(searchQuery)) {
            card.style.display = 'block'; // Show card if it matches
        } else {
            card.style.display = 'none'; // Hide card if it does not match
        }
    });
}

function showDetails(title) {
    // Get investment details
    const investmentDetails = {
        'Renewable Energy Fund': 'Invest in renewable energy projects to support sustainable power sources.',
        'Eco-Friendly Tech Startups': 'Support startups focused on eco-friendly technology innovations.',
        'Sustainable Agriculture': 'Invest in agricultural projects that promote sustainable farming practices and reduce environmental impact.',
        'Green Building Projects': 'Support the construction of eco-friendly buildings with energy-efficient designs and materials.',
        'Clean Water Initiatives': 'Invest in projects that provide clean and safe drinking water to communities in need.',
        'Waste Management Solutions': 'Support technologies and practices that improve waste management and recycling processes.',
        'Sustainable Transportation': 'Invest in transportation solutions that reduce emissions and promote eco-friendly commuting options.',
        'Ocean Conservation': 'Support efforts to protect and restore marine ecosystems and reduce ocean pollution.',
        'Green Energy Storage': 'Invest in technologies that enhance the storage and efficiency of renewable energy sources.',
        'Climate Change Research': 'Support research initiatives focused on understanding and combating climate change.'
    };

    // Set the title and description
    document.getElementById('investment-title').textContent = title;
    document.getElementById('investment-description').textContent = investmentDetails[title];

    // Show the investment details section
    document.getElementById('investment-details').style.display = 'block';
    
    // Scroll to the investment details section
    document.getElementById('investment-details').scrollIntoView({ behavior: 'smooth' });
}

function closeDetails() {
    // Hide the investment details section
    document.getElementById('investment-details').style.display = 'none';
    
    // Scroll back to the top of the page
    window.scrollTo({ top: 0, behavior: 'smooth' });
}



