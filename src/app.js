const shoesData = {
    men: [
        { name: "Sports Shoes", image: "assets/shoes/men/sports.jpg" },
        { name: "Formal Shoes", image: "assets/shoes/men/formal.jpg" }
    ],
    women: [
        { name: "Running Shoes", image: "assets/shoes/women/running.jpg" },
        { name: "Heels", image: "assets/shoes/women/heels.jpg" }
    ],
    kids: [
        { name: "Sneakers", image: "assets/shoes/kids/sneakers.jpg" },
        { name: "Sandals", image: "assets/shoes/kids/sandals.jpg" }
    ]
};

let selectedGender = "";

function selectGender(gender) {
    selectedGender = gender;
    document.getElementById('gender-selection').classList.add('hidden');
    document.getElementById('size-selection').classList.remove('hidden');
}

function showShoes() {
    const shoeList = document.getElementById('shoe-list');
    shoeList.innerHTML = "";
    shoesData[selectedGender].forEach(shoe => {
        const shoeItem = document.createElement('div');
        shoeItem.innerHTML = `<img src="${shoe.image}" alt="${shoe.name}" width="120"> <p>${shoe.name}</p>`;
        shoeList.appendChild(shoeItem);
    });

    document.getElementById('size-selection').classList.add('hidden');
    document.getElementById('shoe-display').classList.remove('hidden');
}
