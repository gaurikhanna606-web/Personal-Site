// Mobile nav toggle (present on every page)
const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.topnav ul');
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navList.classList.toggle('open');
  });
}

// Project filter logic (only present on projects.html — guarded so other
// pages don't error when these elements don't exist)
const filterBtns = document.querySelectorAll('.filter-btn');
const rows = document.querySelectorAll('.ledger-row');

if (filterBtns.length) {
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      rows.forEach(row => {
        if (filter === 'all' || row.dataset.cat === filter) {
          row.classList.remove('hidden');
        } else {
          row.classList.add('hidden');
        }
      });
    });
  });
}
