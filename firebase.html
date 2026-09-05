// ================================================================
// 1. Firebase Initialisation (assumes firebase.js is loaded)
// ================================================================
// This assumes you already have firebase.initializeApp() in firebase.js
// We'll use Anonymous Authentication to get a unique user ID without login.

let currentUser = null;
let cartRef = null;

// Function to sign in anonymously
function signInAnonymously() {
    firebase.auth().signInAnonymously()
        .then((userCredential) => {
            currentUser = userCredential.user;
            console.log('✅ Signed in anonymously. UID:', currentUser.uid);
            initCartListener();
        })
        .catch((error) => {
            console.error('❌ Anonymous sign-in failed:', error);
            // Fallback: use a fixed guest ID (but we want to avoid localStorage)
            // We'll still store in Firebase with a guest key, but we'll use the device ID.
            // For simplicity, we'll use a hardcoded guest ID if auth fails.
            currentUser = { uid: 'guest_' + Date.now() };
            console.warn('⚠️ Using guest ID:', currentUser.uid);
            initCartListener();
        });
}

// ================================================================
// 2. Product Data (matching your structure)
// ================================================================
const products = [
    { id: 1, name: '500ml', price: 10, image: 'images/500ml.jpg', desc: 'Small bottle' },
    { id: 2, name: '1L', price: 20, image: 'images/1L.jpg', desc: 'Medium bottle' },
    { id: 3, name: '5L', price: 100, image: 'images/5L.jpg', desc: 'Family size' }
];

// ================================================================
// 3. Cart Functions (Firebase)
// ================================================================

function getCartRef() {
    if (!currentUser) return null;
    return firebase.database().ref('carts/' + currentUser.uid);
}

// Listen for cart changes and update UI
function initCartListener() {
    cartRef = getCartRef();
    if (!cartRef) return;

    cartRef.on('value', (snapshot) => {
        const data = snapshot.val();
        // data is an array or object; we'll convert to array
        let cart = [];
        if (data) {
            // If stored as array, it might be an object with keys; we'll handle both.
            if (Array.isArray(data)) {
                cart = data;
            } else {
                // If it's an object with keys, convert to array
                cart = Object.values(data);
            }
        }
        // Update the cart count in the UI
        updateCount(cart);
        // Also store in a global variable for easy access
        window.currentCart = cart;
    });
}

// Add to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const qtyInput = document.querySelector('.qty-' + productId);
    const qty = parseInt(qtyInput ? qtyInput.value : 1);

    if (isNaN(qty) || qty <= 0) {
        alert('Enter a valid quantity');
        return;
    }

    if (!currentUser) {
        alert('Please wait, we are setting up your session.');
        return;
    }

    const ref = getCartRef();
    if (!ref) {
        alert('Could not access cart. Please try again.');
        return;
    }

    // First, read current cart to check if item exists
    ref.once('value').then((snapshot) => {
        let cart = snapshot.val() || [];
        // Ensure it's an array (if stored as object, convert)
        if (!Array.isArray(cart)) {
            cart = Object.values(cart);
        }

        const existing = cart.find(item => item.id === productId);
        if (existing) {
            existing.quantity += qty;
        } else {
            cart.push({
                id: product.id,
                name: product.name,
                price: product.price,
                quantity: qty,
                image: product.image
            });
        }

        // Save back to Firebase
        return ref.set(cart);
    }).then(() => {
        alert(`${product.name} added to cart!`);
        // The listener will update the count automatically.
    }).catch((error) => {
        console.error('Error updating cart:', error);
        alert('Could not add to cart. Please try again.');
    });
}

// Update cart count (called by listener)
function updateCount(cart) {
    const total = cart.reduce((sum, item) => sum + (item.quantity || 0), 0);
    const countEl = document.getElementById('cart-count');
    if (countEl) countEl.innerText = total;
}

// ================================================================
// 4. Navigation
// ================================================================

function viewCart() {
    window.location.href = 'cart.html';
}

function goToCheckout() {
    // Check if cart has items (we can check the currentCart variable)
    const cart = window.currentCart || [];
    if (cart.length === 0) {
        alert('Your cart is empty.');
        return;
    }

    // Redirect to delivery option page (or checkout)
    window.location.href = 'delivery-option.html';
}

// ================================================================
// 5. Delivery Selection (if on delivery page)
// ================================================================

function setDelivery(type) {
    // Store delivery method in Firebase under user's profile
    if (!currentUser) {
        alert('Please wait for session setup.');
        return;
    }
    const ref = firebase.database().ref('users/' + currentUser.uid + '/delivery');
    ref.set(type).then(() => {
        console.log('Delivery method saved:', type);
        // Show/hide location box if needed
        const box = document.getElementById('location-box');
        if (box) {
            box.style.display = (type === 'delivery') ? 'block' : 'none';
        }
        // If delivery, you might want to set a default fee, etc.
        localStorage.removeItem('deliveryMethod'); // ensure we don't use localStorage
    }).catch(err => console.error(err));
}

// ================================================================
// 6. Render Products
// ================================================================

function render() {
    const grid = document.getElementById('product-grid');
    if (!grid) return;

    grid.innerHTML = '';
    products.forEach(p => {
        grid.innerHTML += `
            <div class="product-card">
                <img src="${p.image}" alt="${p.name}" class="product-image">
                <div class="product-info">
                    <h3>${p.name}</h3>
                    <p>${p.desc}</p>
                    <p class="price">R${p.price}</p>
                    <input type="number" value="1" min="1" class="qty-${p.id}">
                    <button class="add-btn" onclick="addToCart(${p.id})">Add to Cart</button>
                </div>
            </div>
        `;
    });
}

// ================================================================
// 7. Init
// ================================================================

document.addEventListener('DOMContentLoaded', function() {
    render();
    // Try to sign in anonymously (if not already signed in)
    if (firebase.auth().currentUser) {
        currentUser = firebase.auth().currentUser;
        console.log('✅ User already signed in:', currentUser.uid);
        initCartListener();
    } else {
        signInAnonymously();
    }
});

// ================================================================
// 8. Optional: Logout function (for testing)
// ================================================================

function logout() {
    firebase.auth().signOut().then(() => {
        console.log('Signed out');
        window.location.reload();
    }).catch(err => console.error(err));
}