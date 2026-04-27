const listings = [
  {
    id: 'fruitmarket-ilana-halperin-2026',
    title: 'Ilana Halperin: What is Us and What is Earth',
    kind: 'exhibitions',
    type: 'Exhibition',
    venue: 'Fruitmarket',
    area: 'Old Town',
    start: '2026-02-27T11:00:00',
    end: '2026-05-17T18:00:00',
    price: 'Free',
    priceBand: 'free',
    description: 'Sculpture, drawing and photography connecting human experience with geological time.',
    sourceName: 'Fruitmarket',
    sourceUrl: 'https://www.fruitmarket.co.uk/event/ilana-halperin/',
    tags: ['free', 'sculpture', 'installation', 'visual art']
  },
  {
    id: 'fruitmarket-night-walk-edinburgh',
    title: 'Night Walk for Edinburgh',
    kind: 'exhibitions',
    type: 'Audio walk',
    venue: 'Fruitmarket',
    area: 'Old Town',
    start: '2026-01-05T18:00:00',
    end: '2029-01-04T23:00:00',
    price: 'Free',
    priceBand: 'free',
    description: 'A self-guided audio and film walk through Edinburgh’s closes and backstreets.',
    sourceName: 'Fruitmarket',
    sourceUrl: 'https://www.fruitmarket.co.uk/event/night-walk-for-edinburgh-2/',
    tags: ['free', 'outdoors', 'audio walk', 'film']
  },
  {
    id: 'collective-paloma-proudfoot-2026',
    title: 'Paloma Proudfoot: Glass Delusion',
    kind: 'exhibitions',
    type: 'Exhibition',
    venue: 'Collective',
    area: 'Calton Hill',
    start: '2026-03-06T10:00:00',
    end: '2026-05-24T17:00:00',
    price: 'Free',
    priceBand: 'free',
    description: 'Sculpture and installation work shown in Collective’s City Dome Gallery on Calton Hill.',
    sourceName: 'Collective',
    sourceUrl: 'https://www.collective-edinburgh.art/programme/paloma-proudfoot',
    tags: ['free', 'sculpture', 'installation', 'outdoors']
  },
  {
    id: 'collective-play-sunday',
    title: 'Play Sunday',
    kind: 'classes',
    type: 'Family workshop',
    venue: 'Collective',
    area: 'Calton Hill',
    start: '2026-05-03T13:00:00',
    end: '2026-05-03T16:00:00',
    price: 'Free',
    priceBand: 'free',
    description: 'A free family making session with clay and puppetry in response to the current exhibition.',
    sourceName: 'Collective',
    sourceUrl: 'https://www.collective-edinburgh.art/programme/play-sunday-paloma',
    tags: ['free', 'classes', 'family', 'workshop']
  },
  {
    id: 'national-galleries-andy-warhol',
    title: 'Andy Warhol: Pop Power',
    kind: 'exhibitions',
    type: 'Exhibition',
    venue: 'Modern Two',
    area: 'West End',
    start: '2026-01-31T10:00:00',
    end: '2026-05-31T17:00:00',
    price: 'Paid, see source',
    priceBand: 'paid',
    description: 'Pop art, celebrity imagery and culture at National Galleries of Scotland.',
    sourceName: 'National Galleries of Scotland',
    sourceUrl: 'https://www.nationalgalleries.org/',
    tags: ['paid', 'painting', 'printmaking', 'visual art']
  },
  {
    id: 'royal-scottish-academy-annual-exhibition-2026',
    title: 'RSA Annual Exhibition 2026',
    kind: 'exhibitions',
    type: 'Exhibition',
    venue: 'Royal Scottish Academy',
    area: 'New Town',
    start: '2026-04-05T10:00:00',
    end: '2026-04-26T17:00:00',
    price: 'Free, donations welcome',
    priceBand: 'free',
    description: 'The RSA’s annual showcase of contemporary art and architecture from Scotland.',
    sourceName: 'Royal Scottish Academy',
    sourceUrl: 'https://www.royalscottishacademy.org/',
    tags: ['free', 'painting', 'sculpture', 'architecture']
  },
  {
    id: 'summerhall-rachael-house-2026',
    title: 'Rachael House: Born Again Bambi',
    kind: 'exhibitions',
    type: 'Exhibition',
    venue: 'Summerhall',
    area: 'Southside',
    start: '2026-04-18T10:00:00',
    end: '2026-05-24T18:00:00',
    price: 'Free',
    priceBand: 'free',
    description: 'A lively visual art exhibition at Summerhall.',
    sourceName: 'Summerhall',
    sourceUrl: 'https://www.summerhall.co.uk/',
    tags: ['free', 'painting', 'visual art', 'installation']
  },
  {
    id: 'dovecot-belongings-modern-alchemy-2026',
    title: 'Belongings & Modern Alchemy',
    kind: 'exhibitions',
    type: 'Exhibition',
    venue: 'Dovecot Studios',
    area: 'Old Town',
    start: '2026-04-03T10:00:00',
    end: '2026-06-28T17:00:00',
    price: 'See source',
    priceBand: 'varies',
    description: 'Craft, identity, textile practice and contemporary making at Dovecot Studios.',
    sourceName: 'Dovecot Studios',
    sourceUrl: 'https://dovecotstudios.com/',
    tags: ['textiles', 'craft', 'visual art', 'installation']
  },
  {
    id: 'ingleby-callum-innes-2026',
    title: 'Callum Innes: New Paintings',
    kind: 'exhibitions',
    type: 'Exhibition',
    venue: 'Ingleby Gallery',
    area: 'New Town',
    start: '2026-03-21T10:00:00',
    end: '2026-06-06T17:00:00',
    price: 'Free',
    priceBand: 'free',
    description: 'A focused contemporary painting exhibition at Ingleby Gallery.',
    sourceName: 'Ingleby Gallery',
    sourceUrl: 'https://www.inglebygallery.com/',
    tags: ['free', 'painting', 'contemporary art', 'visual art']
  },
  {
    id: 'jupiter-artland-vanessa-billy-2026',
    title: 'Vanessa Billy: we become a changing light',
    kind: 'exhibitions',
    type: 'Exhibition',
    venue: 'Jupiter Artland',
    area: 'West Edinburgh',
    start: '2026-04-11T10:00:00',
    end: '2026-07-26T17:00:00',
    price: 'Paid, see source',
    priceBand: 'paid',
    description: 'A seasonal exhibition alongside Jupiter Artland’s sculpture park programme.',
    sourceName: 'Jupiter Artland',
    sourceUrl: 'https://www.jupiterartland.org/',
    tags: ['paid', 'sculpture', 'outdoors', 'family']
  },
  {
    id: 'stills-centre',
    title: 'Stills Centre for Photography',
    kind: 'galleries',
    type: 'Gallery',
    venue: 'Stills',
    area: 'Old Town',
    start: '2026-01-01T11:00:00',
    end: '2026-12-31T18:00:00',
    price: 'Free',
    priceBand: 'free',
    description: 'Photography gallery and production centre on Cockburn Street.',
    sourceName: 'Stills',
    sourceUrl: 'https://www.stills.org/',
    tags: ['free', 'photography', 'gallery', 'classes']
  },
  {
    id: 'edinburgh-printmakers',
    title: 'Edinburgh Printmakers',
    kind: 'galleries',
    type: 'Print studio',
    venue: 'Edinburgh Printmakers',
    area: 'Fountainbridge',
    start: '2026-01-01T10:00:00',
    end: '2026-12-31T18:00:00',
    price: 'Free',
    priceBand: 'free',
    description: 'Printmaking studio, gallery, shop and cafe in Fountainbridge.',
    sourceName: 'Edinburgh Printmakers',
    sourceUrl: 'https://edinburghprintmakers.co.uk/',
    tags: ['free', 'printmaking', 'gallery', 'classes']
  },
  {
    id: 'future-drawing-classes-placeholder',
    title: 'Independent drawing and painting classes',
    kind: 'classes',
    type: 'Class listing',
    venue: 'Various Edinburgh spaces',
    area: 'Edinburgh',
    start: '2026-06-01T10:00:00',
    end: '2026-12-31T18:00:00',
    price: 'Varies',
    priceBand: 'varies',
    description: 'A placeholder for drawing, painting and visual arts classes. This can later feature your own workshops and tuition.',
    sourceName: 'Suggest a class',
    sourceUrl: 'mailto:hello@edinburghartguide.co.uk?subject=Suggest%20an%20art%20class',
    tags: ['classes', 'painting', 'drawing', 'workshop']
  }
];

const state = { view: 'exhibitions', time: 'now', price: 'all', area: 'all', venue: 'all', tag: 'all', search: '' };

const cards = document.querySelector('#cards');
const cardTemplate = document.querySelector('#cardTemplate');
const searchFilter = document.querySelector('#searchFilter');
const searchForm = document.querySelector('#searchForm');
const viewFilter = document.querySelector('#viewFilter');
const timeFilter = document.querySelector('#timeFilter');
const priceFilter = document.querySelector('#priceFilter');
const areaFilter = document.querySelector('#areaFilter');
const venueFilter = document.querySelector('#venueFilter');
const tagFilter = document.querySelector('#tagFilter');
const liveCount = document.querySelector('#liveCount');
const resultCount = document.querySelector('#resultCount');
const venueCount = document.querySelector('#venueCount');
const resetFilters = document.querySelector('#resetFilters');
const sourceList = document.querySelector('#sourceList');
const quickButtons = [...document.querySelectorAll('[data-filter-type]')];
const browseCards = [...document.querySelectorAll('[data-drawer-target]')];
const filters = document.querySelector('#filters');

function nowDate() { return new Date(); }
function isPast(item) { return new Date(item.end) < nowDate(); }
function isNow(item) { return new Date(item.start) <= nowDate() && nowDate() <= new Date(item.end); }

function activeListings() {
  return listings.slice().sort((a, b) => new Date(a.start) - new Date(b.start));
}

function timeMatches(item) {
  if (state.time === 'now') return isNow(item);
  if (state.time === 'upcoming') return new Date(item.start) > nowDate();
  if (state.time === 'past') return isPast(item);
  return !isPast(item);
}

function visibleListings() {
  const query = state.search.trim().toLowerCase();
  return activeListings().filter((item) => {
    if (state.view !== 'all' && item.kind !== state.view) return false;
    if (!timeMatches(item)) return false;
    if (state.price !== 'all' && item.priceBand !== state.price) return false;
    if (state.area !== 'all' && item.area !== state.area) return false;
    if (state.venue !== 'all' && item.venue !== state.venue) return false;
    if (state.tag !== 'all' && !item.tags.includes(state.tag)) return false;
    const haystack = [item.title, item.type, item.venue, item.area, item.price, item.description, ...item.tags].join(' ').toLowerCase();
    return !query || haystack.includes(query);
  });
}

function fillSelect(select, values, firstLabel) {
  const current = select.value || 'all';
  select.innerHTML = `<option value="all">${firstLabel}</option>`;
  values.forEach((value) => select.append(new Option(value, value)));
  select.value = values.includes(current) ? current : 'all';
}

function updateDynamicFilters() {
  const relevant = listings.filter((item) => state.view === 'all' || item.kind === state.view);
  fillSelect(areaFilter, [...new Set(relevant.map((item) => item.area))].sort(), 'All areas');
  fillSelect(venueFilter, [...new Set(relevant.map((item) => item.venue))].sort(), 'All venues');
  state.area = areaFilter.value;
  state.venue = venueFilter.value;
}

function formatDate(item) {
  const start = new Date(item.start);
  const end = new Date(item.end);
  const date = isNow(item) ? end : start;
  return {
    day: new Intl.DateTimeFormat('en-GB', { day: '2-digit' }).format(date),
    month: new Intl.DateTimeFormat('en-GB', { month: 'short' }).format(date),
    meta: isNow(item) ? `Until ${new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'long' }).format(end)}` : isPast(item) ? `Ended ${new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'long' }).format(end)}` : `From ${new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'long' }).format(start)}`
  };
}

function visual(item) {
  if (item.kind === 'classes') return { emoji: '🎨', label: 'Class', poster: 'class' };
  if (item.tags.includes('photography')) return { emoji: '📷', label: 'Photo', poster: 'photo' };
  if (item.tags.includes('printmaking')) return { emoji: '🧾', label: 'Print', poster: 'print' };
  if (item.tags.includes('sculpture')) return { emoji: '🗿', label: 'Sculpture', poster: 'sculpture' };
  if (item.tags.includes('painting')) return { emoji: '🎨', label: 'Painting', poster: 'painting' };
  if (item.kind === 'galleries') return { emoji: '🏛️', label: 'Gallery', poster: 'sculpture' };
  return { emoji: '🖼️', label: 'Show', poster: 'painting' };
}

function calendarDate(value) {
  const [date, time = '00:00:00'] = value.split('T');
  return `${date.replaceAll('-', '')}T${time.replaceAll(':', '')}`;
}

function calendarUrl(item) {
  const v = visual(item);
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: `${v.emoji} ${item.title} at ${item.venue}`,
    dates: `${calendarDate(item.start)}/${calendarDate(item.end)}`,
    details: `${item.description}\n\nSaved from Edinburgh Art Guide.\nOfficial source: ${item.sourceUrl}`,
    location: `${item.venue}, Edinburgh`,
    ctz: 'Europe/London',
    sf: 'true',
    output: 'xml'
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

function renderCards() {
  const items = visibleListings();
  cards.innerHTML = '';
  resultCount.textContent = String(items.length);
  venueCount.textContent = String(new Set(items.map((item) => item.venue)).size);
  liveCount.textContent = String(listings.filter((item) => item.kind === 'exhibitions' && isNow(item)).length);

  if (!items.length) {
    cards.innerHTML = '<article class="empty"><h3>No listings match this search.</h3><p>Try clearing filters, switching to now and upcoming, or searching by venue or area.</p></article>';
    return;
  }

  items.forEach((item) => {
    const node = cardTemplate.content.cloneNode(true);
    const card = node.querySelector('.card');
    const date = formatDate(item);
    const v = visual(item);
    if (isPast(item)) card.classList.add('is-past');
    node.querySelector('.day').textContent = date.day;
    node.querySelector('.month').textContent = date.month;
    const poster = node.querySelector('.poster');
    poster.classList.add(v.poster);
    node.querySelector('.poster-emoji').textContent = v.emoji;
    node.querySelector('.poster-label').textContent = v.label;
    node.querySelector('.type').textContent = item.type;
    node.querySelector('.price').textContent = item.price;
    node.querySelector('h3').textContent = item.title;
    node.querySelector('.meta').textContent = `${date.meta} • ${item.venue} • ${item.area}`;
    node.querySelector('.description').textContent = item.description;
    const tags = node.querySelector('.tags');
    item.tags.slice(0, 4).forEach((tag) => {
      const span = document.createElement('span');
      span.textContent = tag;
      tags.append(span);
    });
    node.querySelector('.calendar').href = calendarUrl(item);
    const source = node.querySelector('.source');
    source.href = item.sourceUrl;
    source.textContent = item.sourceName;
    cards.append(node);
  });
}

function renderSources() {
  const sources = [...new Map(listings.map((item) => [item.sourceName, item.sourceUrl])).entries()];
  sourceList.innerHTML = '';
  sources.forEach(([name, url]) => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = url;
    a.textContent = name;
    a.target = '_blank';
    a.rel = 'noreferrer';
    li.append(a);
    sourceList.append(li);
  });
}

function setQuickActive(button) {
  quickButtons.forEach((item) => item.classList.toggle('is-active', item === button));
}

function render() {
  updateDynamicFilters();
  renderCards();
}

function bindEvents() {
  searchForm.addEventListener('submit', (event) => event.preventDefault());
  searchFilter.addEventListener('input', (event) => { state.search = event.target.value; renderCards(); });
  viewFilter.addEventListener('change', (event) => { state.view = event.target.value; setQuickActive(null); render(); });
  timeFilter.addEventListener('change', (event) => { state.time = event.target.value; renderCards(); });
  priceFilter.addEventListener('change', (event) => { state.price = event.target.value; setQuickActive(null); renderCards(); });
  areaFilter.addEventListener('change', (event) => { state.area = event.target.value; renderCards(); });
  venueFilter.addEventListener('change', (event) => { state.venue = event.target.value; renderCards(); });
  tagFilter.addEventListener('change', (event) => { state.tag = event.target.value; setQuickActive(null); renderCards(); });
  quickButtons.forEach((button) => button.addEventListener('click', () => {
    state.view = button.dataset.filterType === 'view' ? button.dataset.filterValue : 'all';
    state.price = button.dataset.filterType === 'price' ? button.dataset.filterValue : 'all';
    state.tag = button.dataset.filterType === 'tag' ? button.dataset.filterValue : 'all';
    viewFilter.value = state.view;
    priceFilter.value = state.price;
    tagFilter.value = state.tag;
    setQuickActive(button);
    render();
  }));
  browseCards.forEach((card) => card.addEventListener('click', () => {
    filters.open = true;
    document.querySelector(`#${card.dataset.drawerTarget}`).focus();
  }));
  resetFilters.addEventListener('click', () => {
    Object.assign(state, { view: 'exhibitions', time: 'now', price: 'all', area: 'all', venue: 'all', tag: 'all', search: '' });
    searchFilter.value = '';
    viewFilter.value = 'exhibitions';
    timeFilter.value = 'now';
    priceFilter.value = 'all';
    tagFilter.value = 'all';
    setQuickActive(quickButtons[0]);
    render();
  });
}

renderSources();
render();
bindEvents();
