// Dữ liệu sản phẩm: mỗi danh mục 16 sản phẩm (8 hiện có + 8 mới)
const products = [
  // Liên Quân (16 sản phẩm)
  { id: 1, name: "Nick Liên Quân Tự Chọn", category: "lien-quan", price: 100000, stock: 10, image: "https://via.placeholder.com/200x300?text=Nick+LQ+1", description: "Acc chất lượng, nhiều skin đẹp." },
  { id: 2, name: "Nick Liên Quân Cao Thủ", category: "lien-quan", price: 200000, stock: 8, image: "https://via.placeholder.com/200x300?text=Nick+LQ+2", description: "Rank cao, sẵn sàng leo rank." },
  { id: 3, name: "Nick Liên Quân Siêu Phẩm", category: "lien-quan", price: 300000, stock: 5, image: "https://via.placeholder.com/200x300?text=Nick+LQ+3", description: "Full skin hiếm, rank Thách Đấu." },
  { id: 4, name: "Nick Liên Quân Giá Rẻ", category: "lien-quan", price: 50000, stock: 15, image: "https://via.placeholder.com/200x300?text=Nick+LQ+4", description: "Phù hợp người mới, giá siêu hời." },
  { id: 5, name: "Nick Liên Quân VIP", category: "lien-quan", price: 250000, stock: 7, image: "https://via.placeholder.com/200x300?text=Nick+LQ+5", description: "Skin độc quyền, rank ổn." },
  { id: 6, name: "Nick Liên Quân Huyền Thoại", category: "lien-quan", price: 400000, stock: 4, image: "https://via.placeholder.com/200x300?text=Nick+LQ+6", description: "Full tướng, skin hiếm." },
  { id: 7, name: "Nick Liên Quân Pro", category: "lien-quan", price: 150000, stock: 12, image: "https://via.placeholder.com/200x300?text=Nick+LQ+7", description: "Rank Kim Cương, nhiều skin." },
  { id: 8, name: "Nick Liên Quân Tiết Kiệm", category: "lien-quan", price: 80000, stock: 20, image: "https://via.placeholder.com/200x300?text=Nick+LQ+8", description: "Giá rẻ, đủ tướng cơ bản." },
  { id: 33, name: "Nick Liên Quân Đặc Biệt", category: "lien-quan", price: 180000, stock: 9, image: "https://via.placeholder.com/200x300?text=Nick+LQ+9", description: "Skin độc quyền, rank Vàng." },
  { id: 34, name: "Nick Liên Quân Siêu Tiết Kiệm", category: "lien-quan", price: 60000, stock: 25, image: "https://via.placeholder.com/200x300?text=Nick+LQ+10", description: "Giá siêu rẻ, đủ chơi cơ bản." },
  { id: 35, name: "Nick Liên Quân Thách Đấu", category: "lien-quan", price: 350000, stock: 3, image: "https://via.placeholder.com/200x300?text=Nick+LQ+11", description: "Rank Thách Đấu, skin đẹp." },
  { id: 36, name: "Nick Liên Quân Cao Cấp", category: "lien-quan", price: 220000, stock: 6, image: "https://via.placeholder.com/200x300?text=Nick+LQ+12", description: "Full skin, rank Bạch Kim." },
  { id: 37, name: "Nick Liên Quân Siêu VIP", category: "lien-quan", price: 500000, stock: 2, image: "https://via.placeholder.com/200x300?text=Nick+LQ+13", description: "Full skin hiếm, full tướng." },
  { id: 38, name: "Nick Liên Quân Giá Hời", category: "lien-quan", price: 90000, stock: 18, image: "https://via.placeholder.com/200x300?text=Nick+LQ+14", description: "Giá rẻ, nhiều skin đẹp." },
  { id: 39, name: "Nick Liên Quân Bạch Kim", category: "lien-quan", price: 170000, stock: 10, image: "https://via.placeholder.com/200x300?text=Nick+LQ+15", description: "Rank Bạch Kim, skin độc." },
  { id: 40, name: "Nick Liên Quân Tiêu Chuẩn", category: "lien-quan", price: 70000, stock: 22, image: "https://via.placeholder.com/200x300?text=Nick+LQ+16", description: "Phù hợp người mới, giá tốt." },
  // Free Fire (16 sản phẩm)
  { id: 9, name: "Nick Free Fire VIP", category: "free-fire", price: 50000, stock: 15, image: "https://via.placeholder.com/200x300?text=Free+Fire+1", description: "Trang phục độc quyền, full vật phẩm." },
  { id: 10, name: "Nick Free Fire Siêu Rẻ", category: "free-fire", price: 30000, stock: 20, image: "https://via.placeholder.com/200x300?text=Free+Fire+2", description: "Giá rẻ, phù hợp người mới chơi." },
  { id: 11, name: "Nick Free Fire Huyền Thoại", category: "free-fire", price: 120000, stock: 7, image: "https://via.placeholder.com/200x300?text=Free+Fire+3", description: "Full súng VIP, trang bị hiếm." },
  { id: 12, name: "Nick Free Fire Cao Thủ", category: "free-fire", price: 80000, stock: 10, image: "https://via.placeholder.com/200x300?text=Free+Fire+4", description: "Rank cao, nhiều vật phẩm." },
  { id: 13, name: "Nick Free Fire Tiết Kiệm", category: "free-fire", price: 40000, stock: 18, image: "https://via.placeholder.com/200x300?text=Free+Fire+5", description: "Giá rẻ, đủ vật phẩm cơ bản." },
  { id: 14, name: "Nick Free Fire Pro", category: "free-fire", price: 100000, stock: 9, image: "https://via.placeholder.com/200x300?text=Free+Fire+6", description: "Skin đẹp, rank ổn." },
  { id: 15, name: "Nick Free Fire Siêu Phẩm", category: "free-fire", price: 150000, stock: 6, image: "https://via.placeholder.com/200x300?text=Free+Fire+7", description: "Full skin hiếm, vật phẩm độc." },
  { id: 16, name: "Nick Free Fire Giá Hời", category: "free-fire", price: 60000, stock: 14, image: "https://via.placeholder.com/200x300?text=Free+Fire+8", description: "Giá rẻ, nhiều vật phẩm." },
  { id: 41, name: "Nick Free Fire Đặc Biệt", category: "free-fire", price: 90000, stock: 12, image: "https://via.placeholder.com/200x300?text=Free+Fire+9", description: "Skin độc, rank Vàng." },
  { id: 42, name: "Nick Free Fire Siêu Tiết Kiệm", category: "free-fire", price: 25000, stock: 30, image: "https://via.placeholder.com/200x300?text=Free+Fire+10", description: "Giá siêu rẻ, đủ chơi cơ bản." },
  { id: 43, name: "Nick Free Fire Thách Đấu", category: "free-fire", price: 200000, stock: 5, image: "https://via.placeholder.com/200x300?text=Free+Fire+11", description: "Rank Thách Đấu, skin đẹp." },
  { id: 44, name: "Nick Free Fire Cao Cấp", category: "free-fire", price: 130000, stock: 8, image: "https://via.placeholder.com/200x300?text=Free+Fire+12", description: "Full skin, rank Bạch Kim." },
  { id: 45, name: "Nick Free Fire Siêu VIP", category: "free-fire", price: 250000, stock: 3, image: "https://via.placeholder.com/200x300?text=Free+Fire+13", description: "Full skin hiếm, vật phẩm độc." },
  { id: 46, name: "Nick Free Fire Tiêu Chuẩn", category: "free-fire", price: 45000, stock: 20, image: "https://via.placeholder.com/200x300?text=Free+Fire+14", description: "Giá rẻ, vật phẩm cơ bản." },
  { id: 47, name: "Nick Free Fire Bạch Kim", category: "free-fire", price: 110000, stock: 10, image: "https://via.placeholder.com/200x300?text=Free+Fire+15", description: "Rank Bạch Kim, skin đẹp." },
  { id: 48, name: "Nick Free Fire Giá Tốt", category: "free-fire", price: 70000, stock: 15, image: "https://via.placeholder.com/200x300?text=Free+Fire+16", description: "Giá hời, nhiều vật phẩm." },
  // Roblox (16 sản phẩm)
  { id: 17, name: "Nick Roblox Premium", category: "roblox", price: 80000, stock: 12, image: "https://via.placeholder.com/200x300?text=Roblox+1", description: "Có Robux và vật phẩm hiếm." },
  { id: 18, name: "Dịch Vụ Roblox", category: "roblox", price: 40000, stock: 18, image: "https://via.placeholder.com/200x300?text=Roblox+2", description: "Tăng cấp nhanh, vật phẩm độc." },
  { id: 19, name: "Nick Roblox VIP", category: "roblox", price: 100000, stock: 10, image: "https://via.placeholder.com/200x300?text=Roblox+3", description: "Full vật phẩm, nhiều Robux." },
  { id: 20, name: "Nick Roblox Giá Rẻ", category: "roblox", price: 30000, stock: 20, image: "https://via.placeholder.com/200x300?text=Roblox+4", description: "Phù hợp người mới, giá hời." },
  { id: 21, name: "Dịch Vụ Roblox Pro", category: "roblox", price: 60000, stock: 15, image: "https://via.placeholder.com/200x300?text=Roblox+5", description: "Tăng cấp nhanh, vật phẩm đẹp." },
  { id: 22, name: "Nick Roblox Huyền Thoại", category: "roblox", price: 120000, stock: 8, image: "https://via.placeholder.com/200x300?text=Roblox+6", description: "Full vật phẩm hiếm, Robux lớn." },
  { id: 23, name: "Nick Roblox Tiết Kiệm", category: "roblox", price: 50000, stock: 16, image: "https://via.placeholder.com/200x300?text=Roblox+7", description: "Giá rẻ, đủ vật phẩm cơ bản." },
  { id: 24, name: "Dịch Vụ Roblox Cao Cấp", category: "roblox", price: 90000, stock: 11, image: "https://via.placeholder.com/200x300?text=Roblox+8", description: "Vật phẩm độc quyền, tăng cấp nhanh." },
  { id: 49, name: "Nick Roblox Đặc Biệt", category: "roblox", price: 110000, stock: 9, image: "https://via.placeholder.com/200x300?text=Roblox+9", description: "Vật phẩm độc, nhiều Robux." },
  { id: 50, name: "Nick Roblox Siêu Tiết Kiệm", category: "roblox", price: 25000, stock: 25, image: "https://via.placeholder.com/200x300?text=Roblox+10", description: "Giá siêu rẻ, đủ chơi cơ bản." },
  { id: 51, name: "Dịch Vụ Roblox Thách Đấu", category: "roblox", price: 150000, stock: 6, image: "https://via.placeholder.com/200x300?text=Roblox+11", description: "Tăng cấp nhanh, vật phẩm hiếm." },
  { id: 52, name: "Nick Roblox Siêu VIP", category: "roblox", price: 200000, stock: 4, image: "https://via.placeholder.com/200x300?text=Roblox+12", description: "Full vật phẩm hiếm, Robux lớn." },
  { id: 53, name: "Dịch Vụ Roblox Giá Hời", category: "roblox", price: 45000, stock: 20, image: "https://via.placeholder.com/200x300?text=Roblox+13", description: "Giá rẻ, vật phẩm đẹp." },
  { id: 54, name: "Nick Roblox Cao Cấp", category: "roblox", price: 130000, stock: 8, image: "https://via.placeholder.com/200x300?text=Roblox+14", description: "Vật phẩm độc quyền, Robux ổn." },
  { id: 55, name: "Nick Roblox Tiêu Chuẩn", category: "roblox", price: 35000, stock: 22, image: "https://via.placeholder.com/200x300?text=Roblox+15", description: "Phù hợp người mới, giá tốt." },
  { id: 56, name: "Dịch Vụ Roblox Bạch Kim", category: "roblox", price: 100000, stock: 10, image: "https://via.placeholder.com/200x300?text=Roblox+16", description: "Tăng cấp nhanh, vật phẩm đẹp." },
  // LMHT (16 sản phẩm)
  { id: 25, name: "Nick LMHT Rank Cao", category: "lmht", price: 150000, stock: 6, image: "https://via.placeholder.com/200x300?text=LMHT+1", description: "Rank Bạch Kim trở lên, nhiều skin." },
  { id: 26, name: "Nick LMHT Giá Rẻ", category: "lmht", price: 70000, stock: 14, image: "https://via.placeholder.com/200x300?text=LMHT+2", description: "Phù hợp người mới, giá siêu hời." },
  { id: 27, name: "Nick LMHT Siêu Phẩm", category: "lmht", price: 200000, stock: 5, image: "https://via.placeholder.com/200x300?text=LMHT+3", description: "Full skin hiếm, rank cao." },
  { id: 28, name: "Nick LMHT VIP", category: "lmht", price: 120000, stock: 8, image: "https://via.placeholder.com/200x300?text=LMHT+4", description: "Skin độc quyền, rank ổn." },
  { id: 29, name: "Nick LMHT Huyền Thoại", category: "lmht", price: 250000, stock: 4, image: "https://via.placeholder.com/200x300?text=LMHT+5", description: "Full tướng, skin đẹp." },
  { id: 30, name: "Nick LMHT Tiết Kiệm", category: "lmht", price: 50000, stock: 18, image: "https://via.placeholder.com/200x300?text=LMHT+6", description: "Giá rẻ, đủ tướng cơ bản." },
  { id: 31, name: "Nick LMHT Pro", category: "lmht", price: 100000, stock: 10, image: "https://via.placeholder.com/200x300?text=LMHT+7", description: "Rank Vàng, nhiều skin." },
  { id: 32, name: "Nick LMHT Cao Cấp", category: "lmht", price: 180000, stock: 7, image: "https://via.placeholder.com/200x300?text=LMHT+8", description: "Skin hiếm, rank Bạch Kim." },
  { id: 57, name: "Nick LMHT Đặc Biệt", category: "lmht", price: 160000, stock: 9, image: "https://via.placeholder.com/200x300?text=LMHT+9", description: "Skin độc, rank Vàng." },
  { id: 58, name: "Nick LMHT Siêu Tiết Kiệm", category: "lmht", price: 40000, stock: 25, image: "https://via.placeholder.com/200x300?text=LMHT+10", description: "Giá siêu rẻ, đủ chơi cơ bản." },
  { id: 59, name: "Nick LMHT Thách Đấu", category: "lmht", price: 300000, stock: 3, image: "https://via.placeholder.com/200x300?text=LMHT+11", description: "Rank Thách Đấu, skin đẹp." },
  { id: 60, name: "Nick LMHT Siêu VIP", category: "lmht", price: 350000, stock: 2, image: "https://via.placeholder.com/200x300?text=LMHT+12", description: "Full skin hiếm, full tướng." },
  { id: 61, name: "Nick LMHT Giá Hời", category: "lmht", price: 60000, stock: 20, image: "https://via.placeholder.com/200x300?text=LMHT+13", description: "Giá rẻ, nhiều skin đẹp." },
  { id: 62, name: "Nick LMHT Bạch Kim", category: "lmht", price: 140000, stock: 10, image: "https://via.placeholder.com/200x300?text=LMHT+14", description: "Rank Bạch Kim, skin độc." },
  { id: 63, name: "Nick LMHT Tiêu Chuẩn", category: "lmht", price: 55000, stock: 22, image: "https://via.placeholder.com/200x300?text=LMHT+15", description: "Phù hợp người mới, giá tốt." },
  { id: 64, name: "Nick LMHT Cao Thủ", category: "lmht", price: 220000, stock: 6, image: "https://via.placeholder.com/200x300?text=LMHT+16", description: "Rank Cao Thủ, skin đẹp." }
];

// Khởi tạo Swiper và các chức năng chính
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM loaded, initializing...');

  // Khởi tạo Swiper với kiểm tra lỗi
  try {
    if (typeof Swiper !== 'undefined') {
      new Swiper('.swiper-container', {
        loop: true,
        autoplay: { delay: 5000 },
        pagination: { el: '.swiper-pagination', clickable: true },
        navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }
      });
      console.log('Swiper initialized');
    } else {
      console.warn('Swiper not found, skipping initialization');
    }
  } catch (e) {
    console.error('Error initializing Swiper:', e);
  }

  // Cập nhật badge giỏ hàng
  try {
    updateCartBadge();
  } catch (e) {
    console.error('Error updating cart badge:', e);
  }

  // Hiển thị sản phẩm
  const productList = document.getElementById('product-list');
  if (productList) {
    try {
      const currentPage = window.location.pathname;
      let filteredProducts = products;
      if (currentPage.includes('lien-quan.html')) {
        filteredProducts = products.filter(p => p.category === 'lien-quan');
      } else if (currentPage.includes('free-fire.html')) {
        filteredProducts = products.filter(p => p.category === 'free-fire');
      } else if (currentPage.includes('roblox.html')) {
        filteredProducts = products.filter(p => p.category === 'roblox');
      } else if (currentPage.includes('lmht.html')) {
        filteredProducts = products.filter(p => p.category === 'lmht');
      } else if (currentPage.includes('tui-mu.html')) {
        filteredProducts = [];
      }
      renderProducts(filteredProducts);
    } catch (e) {
      console.error('Error rendering products:', e);
    }
  }

  // Lọc sản phẩm theo danh mục
  const filterButtons = document.querySelectorAll('.filter-btn');
  filterButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      if (button.tagName === 'A') return;
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      const category = button.getAttribute('data-filter');
      const filtered = category === 'all' ? products : products.filter(p => p.category === category);
      renderProducts(filtered);
    });
  });

  // Tìm kiếm sản phẩm
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      const query = searchInput.value.toLowerCase();
      const filtered = products.filter(p => p.name.toLowerCase().includes(query));
      renderProducts(filtered);
    });
  }

  // Form đăng nhập
  const loginForm = document.getElementById('login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const identifier = document.getElementById('identifier')?.value;
      const password = document.getElementById('password')?.value;
      const message = document.getElementById('login-message');
      if (!message) return;
      if (identifier && password === '123456') {
        localStorage.setItem('isLoggedIn', 'true');
        message.textContent = 'Đăng nhập thành công!';
        message.style.color = 'green';
        setTimeout(() => (window.location.href = 'index.html'), 1000);
      } else {
        message.textContent = 'Sai thông tin đăng nhập!';
        message.style.color = 'red';
      }
    });
  }

  // Giỏ hàng
  const cartList = document.getElementById('cart-list');
  if (cartList) {
    try {
      renderCart();
    } catch (e) {
      console.error('Error rendering cart:', e);
    }
  }

  const checkoutBtn = document.getElementById('checkout-btn');
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      try {
        const cart = JSON.parse(localStorage.getItem('cart') || '[]');
        if (cart.length === 0) {
          console.log('Checkout attempted: Cart is empty');
        } else if (!localStorage.getItem('isLoggedIn')) {
          console.log('Checkout attempted: User not logged in');
          setTimeout(() => (window.location.href = 'login.html'), 2000);
        } else {
          const order = {
            userId: 'user123',
            items: cart,
            total: cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
            timestamp: new Date().toISOString()
          };
          console.log('Gửi yêu cầu thanh toán:', order);
          localStorage.setItem('cart', '[]');
          renderCart();
          updateCartBadge();
        }
      } catch (e) {
        console.error('Error during checkout:', e);
      }
    });
  }
});

// Hàm hiển thị sản phẩm
function renderProducts(products) {
  try {
    const productList = document.getElementById('product-list');
    if (!productList) return;
    productList.innerHTML = '';
    if (products.length === 0) {
      productList.innerHTML = '<p class="text-center text-gray-500">Chưa có sản phẩm trong danh mục này.</p>';
      return;
    }

    const groupDiv = document.createElement('div');
    groupDiv.className = 'product-group grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6';
    groupDiv.innerHTML = products.map(product => `
      <div class="product-item bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col" data-id="${product.id}">
        <div class="aspect-w-2 aspect-h-3 w-full">
          <img src="${product.image}" alt="${product.name}" class="w-full h-56 object-cover rounded-t-lg">
        </div>
        <div class="p-4 flex flex-col flex-1">
          <h3 class="text-lg font-semibold text-gray-800 truncate">${product.name}</h3>
          <p class="text-gray-600 text-sm mt-1 line-clamp-2">${product.description}</p>
          <p class="text-red-500 font-bold text-lg mt-2">${product.price.toLocaleString('vi-VN')} VNĐ</p>
          <div class="mt-4 flex space-x-2">
            <button class="view-details border border-red-500 text-red-500 px-3 py-1 rounded-lg hover:bg-red-50" data-id="${product.id}">Xem chi tiết</button>
            <button class="buy-now bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600" data-id="${product.id}">Mua ngay</button>
          </div>
        </div>
      </div>
    `).join('');
    productList.appendChild(groupDiv);

    // Thêm sự kiện click cho thẻ sản phẩm
    document.querySelectorAll('.product-item').forEach(item => {
      item.addEventListener('click', (e) => {
        if (e.target.classList.contains('view-details') || (!e.target.classList.contains('buy-now') && !e.target.classList.contains('view-details'))) {
          const id = item.getAttribute('data-id');
          window.location.href = `product-detail.html?id=${id}`;
        }
      });
    });

    // Thêm sự kiện click cho nút "Mua ngay"
    document.querySelectorAll('.buy-now').forEach(button => {
      button.addEventListener('click', (e) => {
        const id = parseInt(e.target.getAttribute('data-id'));
        addToCart(id);
      });
    });
  } catch (e) {
    console.error('Error rendering products:', e);
  }
}

// Hàm cập nhật số lượng sản phẩm trong giỏ hàng
function updateCartBadge() {
  try {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 0), 0);
    const cartIcon = document.querySelector('a[href="cart.html"] i.bx-cart');
    if (cartIcon) {
      let badge = cartIcon.parentElement.querySelector('.cart-badge');
      if (!badge) {
        badge = document.createElement('span');
        badge.className = 'cart-badge absolute -top-2 -right-2 bg-red-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs';
        cartIcon.parentElement.appendChild(badge);
      }
      badge.textContent = totalItems;
      badge.style.display = totalItems === 0 ? 'none' : 'flex';
    }
  } catch (e) {
    console.error('Error updating cart badge:', e);
  }
}

// Hàm thêm sản phẩm vào giỏ hàng
function addToCart(productId) {
  try {
    if (!localStorage.getItem('isLoggedIn')) {
      showNotification('Vui lòng đăng nhập để mua hàng!', 'error');
      console.log('Add to cart attempted: User not logged in');
      setTimeout(() => (window.location.href = 'login.html'), 2000);
      return;
    }

    const product = products.find(p => p.id === productId);
    if (!product) {
      showNotification('Sản phẩm không tồn tại!', 'error');
      console.log('Add to cart failed: Product not found');
      return;
    }
    if (product.stock === 0) {
      showNotification('Sản phẩm đã hết hàng!', 'error');
      console.log('Add to cart failed: Product out of stock');
      return;
    }

    let cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const cartItem = cart.find(item => item.id === productId);
    if (cartItem) {
      if (cartItem.quantity >= product.stock || cartItem.quantity >= 10) {
        showNotification('Đã đạt giới hạn số lượng hoặc tồn kho!', 'error');
        console.log('Add to cart failed: Stock or quantity limit reached');
        return;
      }
      cartItem.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    showNotification(`Đã thêm ${product.name} vào giỏ hàng!`, 'success');
    console.log(`Added ${product.name} to cart`);
    updateCartBadge();
  } catch (e) {
    console.error('Error adding to cart:', e);
  }
}

// Hàm hiển thị giỏ hàng
function renderCart() {
  try {
    const cartList = document.getElementById('cart-list');
    const cartTotal = document.getElementById('cart-total');
    if (!cartList || !cartTotal) return;

    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    cartList.innerHTML = '';
    if (cart.length === 0) {
      cartList.innerHTML = '<p class="text-center text-gray-500">Giỏ hàng trống.</p>';
      cartTotal.textContent = '0 VNĐ';
      return;
    }

    cart.forEach(item => {
      const cartItem = document.createElement('div');
      cartItem.className = 'cart-item flex items-center justify-between border-b py-4';
      cartItem.innerHTML = `
        <div class="flex items-center">
          <img src="${item.image}" alt="${item.name}" class="w-16 h-24 object-cover rounded mr-4">
          <div>
            <h3 class="text-lg font-semibold text-gray-800">${item.name}</h3>
            <p class="text-gray-600 text-sm">${item.description}</p>
            <p class="text-red-500 font-bold">${item.price.toLocaleString('vi-VN')} VNĐ</p>
          </div>
        </div>
        <div class="flex items-center space-x-4">
          <div class="quantity-controls flex items-center space-x-2">
            <button class="bg-gray-200 px-2 py-1 rounded hover:bg-gray-300" onclick="updateCartQuantity(${item.id}, ${item.quantity - 1})">-</button>
            <input type="number" class="cart-quantity w-16 p-1 border rounded text-center" value="${item.quantity}" min="1" max="${Math.min(item.stock, 10)}" data-id="${item.id}">
            <button class="bg-gray-200 px-2 py-1 rounded hover:bg-gray-300" onclick="updateCartQuantity(${item.id}, ${item.quantity + 1})">+</button>
          </div>
          <button class="cart-remove text-red-500 hover:text-red-700" onclick="removeFromCart(${item.id})"><i class="bx bx-trash text-xl"></i></button>
        </div>
      `;
      cartList.appendChild(cartItem);
    });

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    cartTotal.textContent = `${total.toLocaleString('vi-VN')} VNĐ`;

    // Cập nhật số lượng qua input
    document.querySelectorAll('.cart-quantity').forEach(input => {
      input.removeEventListener('change', handleQuantityChange); // Xóa sự kiện cũ
      input.addEventListener('change', handleQuantityChange);
    });
  } catch (e) {
    console.error('Error rendering cart:', e);
  }
}

// Hàm xử lý thay đổi số lượng qua input
function handleQuantityChange(e) {
  const id = parseInt(e.target.getAttribute('data-id'));
  const quantity = parseInt(e.target.value);
  updateCartQuantity(id, quantity);
}

// Hàm cập nhật số lượng trong giỏ hàng
function updateCartQuantity(productId, quantity) {
  try {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    let cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const item = cart.find(i => i.id === productId);
    if (item) {
      if (quantity < 1) {
        item.quantity = 1;
      } else if (quantity > product.stock) {
        item.quantity = product.stock;
        showNotification(`Chỉ còn ${product.stock} sản phẩm trong kho!`, 'error');
        console.log(`Quantity adjusted to stock limit: ${product.stock}`);
      } else if (quantity > 10) {
        item.quantity = 10;
        showNotification('Tối đa 10 sản phẩm mỗi loại!', 'error');
        console.log('Quantity adjusted to max limit: 10');
      } else {
        item.quantity = quantity;
      }
      localStorage.setItem('cart', JSON.stringify(cart));
      renderCart();
      updateCartBadge();
    }
  } catch (e) {
    console.error('Error updating cart quantity:', e);
  }
}

// Hàm xóa sản phẩm khỏi giỏ hàng
function removeFromCart(productId) {
  try {
    let cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const product = cart.find(item => item.id === productId);
    if (!product) return;
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    showNotification(`Đã xóa ${product.name} khỏi giỏ hàng!`, 'success');
    console.log(`Removed ${product.name} from cart`);
    renderCart();
    updateCartBadge();
  } catch (e) {
    console.error('Error removing from cart:', e);
  }
}

// Hàm hiển thị thông báo
function showNotification(message, type) {
  const notification = document.getElementById('notification');
  if (notification) {
    notification.textContent = message;
    notification.className = `fixed top-4 right-4 px-4 py-2 rounded-lg shadow ${type === 'error' ? 'bg-red-500' : 'bg-green-500'} text-white`;
    notification.classList.remove('hidden');
    setTimeout(() => notification.classList.add('hidden'), 3000);
  }
}