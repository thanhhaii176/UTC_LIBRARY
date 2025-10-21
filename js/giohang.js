
function getCart() {
  try {
    const cart = JSON.parse(localStorage.getItem('cart'));
    if (!Array.isArray(cart)) return [];
    return cart;
  } catch (e) {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
}

function renderCart() {
  const cartList = document.getElementById('cart-items');
  const totalEl = document.getElementById('total-price');
  if (!cartList || !totalEl) return; 

  const cart = getCart();
  cartList.innerHTML = '';
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price * item.quantity;
    const li = document.createElement('li');
    li.innerHTML = `
  <div style="
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #f9f9f9;
    border-radius: 12px;
    padding: 12px;
    box-shadow: 0 2px 6px rgba(0,0,0,0.1);
    margin-bottom: 10px;
  ">
    <img src="${item.img}" alt="${item.name}" 
         style="width:80px;height:100px;object-fit:cover;border-radius:6px;margin-bottom:8px;">
    <span style="text-align:center;margin-bottom:8px;">
      ${item.name} - ${item.price.toLocaleString()}đ x ${item.quantity}
    </span>
    <div style="display:flex;gap:8px;">
      <button class="minus" data-index="${index}" 
              style="background:#1e293b;color:white;border:none;border-radius:6px;padding:4px 10px;">-</button>
      <button class="plus" data-index="${index}" 
              style="background:#1e293b;color:white;border:none;border-radius:6px;padding:4px 10px;">+</button>
      <button class="remove" data-index="${index}" 
              style="background:#ef4444;color:white;border:none;border-radius:6px;padding:4px 10px;">X</button>
    </div>
  </div>
`;

    cartList.appendChild(li);
  });

  totalEl.textContent = total.toLocaleString();
  localStorage.setItem('total', total);

  document.querySelectorAll('.plus').forEach(btn => {
    btn.addEventListener('click', () => {
      const i = btn.dataset.index;
      const cart = getCart();
      cart[i].quantity++;
      saveCart(cart);
      renderCart();
    });
  });

  document.querySelectorAll('.minus').forEach(btn => {
    btn.addEventListener('click', () => {
      const i = btn.dataset.index;
      const cart = getCart();
      if (cart[i].quantity > 1) cart[i].quantity--;
      else cart.splice(i, 1);
      saveCart(cart);
      renderCart();
    });
  });

  document.querySelectorAll('.remove').forEach(btn => {
    btn.addEventListener('click', () => {
      const i = btn.dataset.index;
      const cart = getCart();
      cart.splice(i, 1);
      saveCart(cart);
      renderCart();
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderCart(); 

  document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
      const name = button.dataset.name;
      const price = parseInt(button.dataset.price);
      const img = button.dataset.img;
      let cart = getCart();

      const existing = cart.find(item => item.name === name);
      if (existing) existing.quantity++;
      else cart.push({ name, price, quantity: 1,img });

      saveCart(cart);
      renderCart();
    });
  });

  const checkoutBtn = document.getElementById('checkout');
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      window.location.href = '../html/thanhtoan.html';
    });
  }
});
