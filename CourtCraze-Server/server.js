const express = require('express');
const fs = require('fs').promises; // Using fs.promises for async file operations
const cors = require('cors'); // Import cors package
const app = express();
const PORT = 3001;

// Middleware to parse JSON request bodies
app.use(express.json());

// Enable CORS for all routes
app.use(cors());

// Array to store user data
let usersData = [];

// Load initial data from users.txt file
async function loadUsersData() {
    try {
        const data = await fs.readFile('users.txt', 'utf8');
        const lines = data.trim().split('\n');
        usersData = lines.map(line => {
            const [email, type] = line.trim().split(',');
            return { email, type };
        });
        console.log('Users data loaded successfully', usersData);
    } catch (error) {
        console.error('Error loading users data:', error);
    }
}
loadUsersData();

// Function to update users.txt file
async function updateUsersFile() {
    try {
        const text = usersData.map(user => `${user.email},${user.type}`).join('\n');
        await fs.writeFile('users.txt', text);
        console.log('Users data updated in file',usersData);
    } catch (error) {
        console.error('Error updating users file:', error);
    }
}

// API to get all users data
app.get('/users', (req, res) => {
    res.json(usersData);
});

// API to add a new user
app.post('/users', (req, res) => {
    const { email, type } = req.body;
    if (!email || !type) {
        return res.status(400).json({ error: 'Email and type are required' });
    }
    
    const existingUserIndex = usersData.findIndex(user => user.email === email);
    if (existingUserIndex !== -1) {
        // If the email already exists, update the type
        usersData[existingUserIndex].type = type;
        updateUsersFile(); // Update users.txt file
        console.log("User type updated");
        res.json(usersData);
    } else {
        // If the email does not exist, add a new entry
        usersData.push({ email, type });
        updateUsersFile(); // Update users.txt file
        console.log("User added");
        res.json(usersData);
    }
});

app.put('/users/:email', (req, res) => {
    const email = req.params.email;
    const { type } = req.body;
    const index = usersData.findIndex(user => user.email === email);
    if (index === -1) {
        return res.status(404).json({ error: 'User not found' });
    }
    usersData[index].type = type;
    updateUsersFile(); // Update users.txt file
    console.log("User Updated");
    res.json(usersData); // Send updated user data back to the client
});


// API to delete user data
app.delete('/users/:email', (req, res) => {
    const email = req.params.email;
    const index = usersData.findIndex(user => user.email === email);
    if (index === -1) {
        return res.status(404).json({ error: 'User not found' });
    }
    usersData.splice(index, 1);
    updateUsersFile(); // Update users.txt file
    console.log("User Deleted");
    res.json(usersData);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});





