// LocalStorage key for storing registered users
const AUTH_STORAGE_KEY = 'chessGameUsers';

// LocalStorage key for storing current logged-in user
const SESSION_KEY = 'chessGameSession';

// Get all registered users from localStorage
function getUsers() {
    return JSON.parse(localStorage.getItem(AUTH_STORAGE_KEY) || '[]');
}

// Save updated users list to localStorage
function saveUsers(users) {
    localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(users));
}

// Register a new user
function registerUser({ firstName, lastName, email, password }) {

    // Get existing users
    const users = getUsers();

    // Check if email already exists
    const existing = users.find((u) => u.email.toLowerCase() === email.toLowerCase());

    // Return error if account already exists
    if (existing) {
        return { success: false, message: 'An account with this email already exists.' };
    }

    // Add new user to the list
    users.push({
        firstName,
        lastName,
        email: email.toLowerCase(),
        password
    });

    // Save updated user list
    saveUsers(users);

    // Return success message
    return { success: true, message: 'Account created successfully!' };
}

// Login existing user
function loginUser({ email, password }) {

    // Get all registered users
    const users = getUsers();

    // Find matching email and password
    const user = users.find(
        (u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password
    );

    // Return error if user not found
    if (!user) {
        return { success: false, message: 'Invalid email or password.' };
    }

    // Save logged-in user session
    localStorage.setItem(SESSION_KEY, JSON.stringify({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email
    }));

    // Return success message
    return { success: true, message: 'Login successful!' };
}

// Get currently logged-in user
function getCurrentUser() {
    const session = localStorage.getItem(SESSION_KEY);
    return session ? JSON.parse(session) : null;
}

// Logout current user
function logoutUser() {
    localStorage.removeItem(SESSION_KEY);
}

// Display success or error message on the page
function showMessage(elementId, message, isError) {

    // Get message element
    const el = document.getElementById(elementId);

    // Exit if element doesn't exist
    if (!el) return;

    // Set message text
    el.textContent = message;

    // Make message visible
    el.style.display = 'block';

    // Set background color based on message type
    el.style.backgroundColor = isError ? '#f8d7da' : '#d4edda';

    // Set text color based on message type
    el.style.color = isError ? '#721c24' : '#155724';
}
