// Array to store user profiles
const users = [];

// Function to add a user profile
function addUser() {
    const name = document.getElementById("name").value;
    const genre = document.getElementById("genre").value.toLowerCase().trim();

    if (name && genre) {
        // Add user to array
        const user = { name, genre };
        users.push(user);

        // Clear form fields
        document.getElementById("userForm").reset();

        // Show matches for the user
        showMatches(user);
    }
}

// Function to show matches based on genre
function showMatches(newUser) {
    const matchesDiv = document.getElementById("matches");
    matchesDiv.innerHTML = "";  // Clear previous matches

    // Filter users with the same genre, excluding the new user themselves
    const matches = users.filter(user => user.genre === newUser.genre && user.name !== newUser.name);

    // Display matches if any found
    if (matches.length > 0) {
        matchesDiv.innerHTML = `<h3>People who also love ${newUser.genre}:</h3>`;
        matches.forEach(match => {
            const matchElement = document.createElement("div");
            matchElement.classList.add("match");
            matchElement.innerHTML = `<p><strong>${match.name}</strong></p>`;
            matchesDiv.appendChild(matchElement);
        });
    } else {
        matchesDiv.innerHTML = `<p>No matches found for ${newUser.genre} yet. Be the first!</p>`;
    }
}
