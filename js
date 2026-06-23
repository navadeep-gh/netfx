// Catalog dataset arrays
const trendingData = [
    { title: "Bridgerton", img: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=400", genre: "Romantic Drama", year: "2024", duration: "3 Seasons", desc: "Wealth, lust, and betrayal set against the backdrop of Regency-era England, seen through the eyes of the powerful Bridgerton family." },
    { title: "Money Heist", img: "https://images.unsplash.com/photo-1509281373149-e957c6296406?q=80&w=400", genre: "Crime Thriller", year: "2021", duration: "5 Parts", desc: "An unusual group of thieves attempt to carry out the most perfect robbery in Spanish history - stealing 2.4 billion euros from the Royal Mint of Spain." },
    { title: "The Witcher", img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=400", genre: "Fantasy Action", year: "2023", duration: "3 Seasons", desc: "Geralt of Rivia, a mutated monster-hunter for hire, journeys toward his destiny in a turbulent world where people often prove more wicked than beasts." },
    { title: "Lucifer", img: "https://images.unsplash.com/photo-1618336753974-aae8e04506aa?q=80&w=400", genre: "Fantasy/Procedural", year: "2021", duration: "6 Seasons", desc: "Bored and unhappy as the Lord of Hell, Lucifer Morningstar abandons his throne and retires to Los Angeles, where he owns an upscale nightclub." },
    { title: "The Queen's Gambit", img: "https://images.unsplash.com/photo-1523821741446-edb2b68bb7a0?q=80&w=400", genre: "Drama", year: "2020", duration: "Limited Series", desc: "Orphaned at the tender age of nine, prodigious introvert Beth Harmon discovers and masters the game of chess in 1960s USA." }
];

const top10Data = [
    { title: "Sacred Games", img: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?q=80&w=400", genre: "Crime Noir", year: "2019", duration: "2 Seasons", desc: "A link in their pasts leads an honest cop to a fugitive gang lord, whose cryptic warning spurs the officer on a quest to save Mumbai from cataclysm." },
    { title: "Kantara", img: "https://images.unsplash.com/photo-1608889175123-8ec330b86f84?q=80&w=400", genre: "Action Thriller", year: "2022", duration: "2h 30m", desc: "When greed paves the way for betrayal, scheming, and murder, a young tribal hero reluctantly aligns with local lore to avenge his family." },
    { title: "Jawan", img: "https://images.unsplash.com/photo-1535016120720-40c646be5580?q=80&w=400", genre: "High-Octane Action", year: "2023", duration: "2h 45m", desc: "A high-octane action thriller which outlines the emotional journey of a man who is set to rectify the wrongs in the society." },
    { title: "Gangs of Wasseypur", img: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=400", genre: "Epic Crime", year: "2012", duration: "5h 20m", desc: "A clash between Sultan and Shahid Khan leads to the expulsion of Khan from Wasseypur, igniting a deadly three-generation blood feud." },
    { title: "Animal", img: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?q=80&w=400", genre: "Action Drama", year: "2023", duration: "3h 21m", desc: "A fierce, dark tale explores the complex, hyper-volatile relationship dynamics between an aggressively protective son and his distant father." }
];

// Dynamically generate media cards inside categories
function populateRow(containerId, dataList, showTopBadge = false) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    dataList.forEach((item) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.onclick = () => {
            console.log("Navigating to details layout for:", item.title);
            openDetails(item.title, item.img, item.genre, item.year, item.duration, item.desc);
        };
        
        card.innerHTML = `
            <img src="${item.img}" alt="${item.title}">
            ${showTopBadge ? `<div class="top10-badge">TOP 10</div>` : ''}
            <div class="card-title">${item.title}</div>
        `;
        container.appendChild(card);
    });
}

// Kick off construction grid rendering
window.onload = function() {
    populateRow('trending-row', trendingData);
    populateRow('top10-row', top10Data, true);
    populateRow('continue-row', [...trendingData].reverse()); 
    populateRow('recommendations-row', top10Data); 
};

// Layout switching navigation function 
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
    }
    window.scrollTo(0, 0);
}

// Injects relevant movie data dynamically on selection view
function openDetails(title, img, genre, year, duration, desc) {
    document.getElementById('detail-title').innerText = title;
    document.getElementById('detail-img').src = img;
    document.getElementById('detail-year').innerText = year;
    document.getElementById('detail-duration').innerText = duration;
    document.getElementById('detail-desc').innerText = desc;
    document.getElementById('detail-match').innerText = `${Math.floor(Math.random() * 15) + 85}% Match`;
    
    showPage('details-page');
}

// Expandable FAQs
function toggleFaq(element) {
    const isActive = element.classList.contains('active');
    document.querySelectorAll('.faq-item').forEach(item => item.classList.remove('active'));
    if (!isActive) {
        element.classList.add('active');
    }
}

// Handles scroll triggers changing header color parameters
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 50) {
        nav.classList.add('black-bg');
    } else {
        nav.classList.remove('black-bg');
    }
});
