const searchFilterToggle = document.querySelector('#searchFilterToggle');
const filterDrawer = document.querySelector('#filters');

if (searchFilterToggle && filterDrawer) {
  const syncFilterState = () => {
    searchFilterToggle.setAttribute('aria-expanded', String(filterDrawer.open));
  };

  searchFilterToggle.addEventListener('click', () => {
    filterDrawer.open = !filterDrawer.open;
    syncFilterState();

    if (filterDrawer.open) {
      setTimeout(() => {
        filterDrawer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 50);
    }
  });

  filterDrawer.addEventListener('toggle', syncFilterState);
  syncFilterState();
}
