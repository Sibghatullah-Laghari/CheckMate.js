const AUTH_STORAGE_KEY = 'chessGameUsers';
const SESSION_KEY = 'chessGameSession';

function getUsers() {
    return JSON.parse(localStorage.getItem(AUTH_STORAGE_KEY) || '[]');
}

function saveUsers(users) {
    localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(users));
}

function registerUser({ firstName, lastName, email, password }) {
    const users = getUsers();
    const existing = users.find((u) => u.email.toLowerCase() === email.toLowerCase());

    if (existing) {
        return { success: false, message: 'An account with this email already exists.' };
    }

    users.push({
        firstName,
        lastName,
        email: email.toLowerCase(),
        password
    });
    saveUsers(users);

    return { success: true, message: 'Account created successfully!' };
}

function loginUser({ email, password }) {
    const users = getUsers();
    const user = users.find(
        (u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password
    );

    if (!user) {
        return { success: false, message: 'Invalid email or password.' };
    }

    localStorage.setItem(SESSION_KEY, JSON.stringify({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email
    }));

    return { success: true, message: 'Login successful!' };
}

function getCurrentUser() {
    const session = localStorage.getItem(SESSION_KEY);
    return session ? JSON.parse(session) : null;
}

function logoutUser() {
    localStorage.removeItem(SESSION_KEY);
}

function showMessage(elementId, message, isError) {
    const el = document.getElementById(elementId);
    if (!el) return;
    el.textContent = message;
    el.style.display = 'block';
    el.style.backgroundColor = isError ? '#f8d7da' : '#d4edda';
    el.style.color = isError ? '#721c24' : '#155724';
}
