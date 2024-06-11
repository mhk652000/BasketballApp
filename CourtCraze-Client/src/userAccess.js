var users=[]

function addData(email, type) {
    users.push({ email, type });
}

function removeData(email) {
    const index = users.findIndex(user => user.email === email);
    if (index !== -1) {
        users.splice(index, 1);
    } else {
        console.error('User not found');
    }
}

function updateData(email, newType) {
    const index = users.findIndex(user => user.email === email);
    if (index !== -1) {
        users[index].type = newType;
    } else {
        console.error('User not found');
    }
}

// Exporting functions along with data
module.exports = {
    users,
    addData,
    removeData,
    updateData
};