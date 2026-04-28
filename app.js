const L = (id, title, kind, type, venue, area, start, end, price, priceBand, description, sourceName, sourceUrl, tags = []) => ({ id, title, kind, type, venue, area, start, end, price, priceBand, description, sourceName, sourceUrl, tags });
const D = (id, title, type, venue, area, description, sourceUrl, tags = []) => L(id, title, 'galleries', type, venue, area, '2026-01-01T10:00:00', '2026-12-31T18:00:00', 'Check source', 'varies', description, venue, sourceUrl, [...tags, 'directory']);

const listings = [
  L('fruitmarket-ilana-halperin-2026', 'Ilana Halperin: What is Us and What is Earth', 'exhibitions', 'Exhibition', 'Fruitmarket', 'Old Town', '2026-02-27T11:00:00', '2026-05-17T18:00:00', 'Free', 'free', 'Sculpture, drawing and photography connecting human experience with geological time.', 'Fruitmarket', 'https://www.fruitmarket.co.uk/event/ilana-halperin/', ['free', 'sculpture', 'drawing', 'photography']),
  L('fruitmarket-night-walk-edinburgh', 'Night Walk for Edinburgh', 'exhibitions', 'Audio walk', 'Fruitmarket', 'Old Town', '2026-01-05T18:00:00', '2029-01-04T23:00:00', 'Free', 'free', 'A self-guided audio and film walk through Edinburgh’s closes and backstreets.', 'Fruitmarket', 'https://www.fruitmarket.co.uk/event/night-walk-for-edinburgh-2/', ['free', 'outdoors', 'audio walk', 'film']),
  L('collective-paloma-proudfoot-2026', 'Paloma Proudfoot: Glass Delusion', 'exhibitions', 'Exhibition', 'Collective', 'Calton Hill', '2026-03-06T10:00:00', '2026-05-24T17:00:00', 'Free', 'free', 'Sculpture and installation work shown in Collective’s City Dome Gallery on Calton Hill.', 'Collective', 'https://www.collective-edinburgh.art/', ['free', 'sculpture', 'installation', 'artist-run']),
  L('collective-katie-paterson-afterlife-2026', 'Katie Paterson: Afterlife', 'exhibitions', 'Exhibition', 'Collective', 'Calton Hill', '2026-06-19T10:00:00', '2026-09-06T17:00:00', 'Free', 'free', 'A summer contemporary art exhibition at Collective on Calton Hill.', 'Collective', 'https://www.collective-edinburgh.art/', ['free', 'contemporary art', 'installation', 'artist-run']),
  L('collective-play-sunday-2026', 'Play Sunday', 'classes', 'Family workshop', 'Collective', 'Calton Hill', '2026-05-03T13:00:00', '2026-05-03T16:00:00', 'Free', 'free', 'A free family making session with clay and puppetry in response to the current exhibition.', 'Collective', 'https://www.collective-edinburgh.art/programme/play-sunday-paloma', ['free', 'classes', 'family', 'workshop']),
  L('ngs-bourgeois-chadwick-mapplethorpe-2026', 'ARTIST ROOMS: Louise Bourgeois, Helen Chadwick, Robert Mapplethorpe', 'exhibitions', 'Exhibition', 'Modern One', 'West End', '2026-01-01T10:00:00', '2026-05-31T17:00:00', 'Free', 'free', 'A major ARTIST ROOMS exhibition at Modern One featuring Bourgeois, Chadwick and Mapplethorpe.', 'National Galleries of Scotland', 'https://www.nationalgalleries.org/exhibition/surrealism-and-marvellous', ['free', 'photography', 'sculpture', 'museum']),
  L('ngs-peter-doig-morning-paramin-2026', 'Peter Doig: Morning, Paramin', 'exhibitions', 'Display', 'Modern One', 'West End', '2026-01-01T10:00:00', '2027-01-03T17:00:00', 'Free', 'free', 'A National Galleries of Scotland display of Peter Doig’s Morning, Paramin at Modern One.', 'National Galleries of Scotland', 'https://www.nationalgalleries.org/exhibition/surrealism-and-marvellous', ['free', 'painting', 'modern art', 'museum']),
  L('ngs-solidarity-wins-2026', 'Solidarity Wins: Creative Resistance in North Edinburgh', 'exhibitions', 'Display', 'Portrait', 'New Town', '2026-01-01T10:00:00', '2026-04-30T17:00:00', 'Free', 'free', 'A display at the Portrait exploring creative resistance and community in North Edinburgh.', 'National Galleries of Scotland', 'https://www.nationalgalleries.org/exhibition/surrealism-and-marvellous', ['free', 'community', 'photography', 'museum']),
  L('ngs-arthur-melville-2026', 'Arthur Melville: Watercolour Radical', 'exhibitions', 'Display', 'National', 'New Town', '2026-01-01T10:00:00', '2026-06-21T17:00:00', 'Free', 'free', 'A display at the National Gallery looking at Arthur Melville’s radical watercolour practice.', 'National Galleries of Scotland', 'https://www.nationalgalleries.org/exhibition/surrealism-and-marvellous', ['free', 'painting', 'watercolour', 'museum']),
  L('ngs-hill-adamson-newhaven-2026', 'Hill and Adamson in Newhaven', 'exhibitions', 'Display', 'National', 'New Town', '2026-01-01T10:00:00', '2026-06-21T17:00:00', 'Free', 'free', 'A photography display at the National Gallery focused on Hill and Adamson in Newhaven.', 'National Galleries of Scotland', 'https://www.nationalgalleries.org/exhibition/surrealism-and-marvellous', ['free', 'photography', 'history', 'museum']),
  L('ngs-panoramic-views-2026', 'Panoramic Views: Edinburgh, 1680–1850', 'exhibitions', 'Display', 'National', 'New Town', '2026-01-01T10:00:00', '2026-06-21T17:00:00', 'Free', 'free', 'Historic panoramic views of Edinburgh on display at the National Gallery.', 'National Galleries of Scotland', 'https://www.nationalgalleries.org/exhibition/your-art-world', ['free', 'drawing', 'history', 'museum']),
  L('summerhall-annual-group-show-2026', 'Second Annual Summerhall Arts Group Show', 'exhibitions', 'Group exhibition', 'Summerhall Arts', 'Southside', '2026-04-18T11:00:00', '2026-05-24T17:00:00', 'Free', 'free', 'A curated group exhibition across Summerhall’s Sciennes, War Memorial and Lab Galleries.', 'Summerhall Arts', 'https://www.summerhallarts.co.uk/2026/02/summerhall-arts-announce-applications-for-second-annual-group-show-and-reveal-winner-of-annual-exhibition-collaboration-with-edinburgh-college-of-art/', ['free', 'painting', 'sculpture', 'installation']),
  L('efi-imbrication-future-voices-2026', 'Imbrication and Future Voices', 'exhibitions', 'Digital art exhibition', 'Edinburgh Futures Institute', 'Old Town', '2026-04-08T10:00:00', '2026-05-31T17:00:00', 'Free', 'free', 'Two spring exhibitions featuring France Priest’s digital artwork and creative interdisciplinary student work.', 'Edinburgh Futures Institute', 'https://efi.ed.ac.uk/imbrication-and-future-voices-our-april-may-2026-exhibitions/', ['free', 'digital art', 'students', 'installation']),
  L('talbot-rice-spin-dead-dont-go-2026', 'Spin: The dead don’t go until we do', 'exhibitions', 'Tour and discussion', 'Talbot Rice Gallery', 'Old Town', '2026-04-30T18:00:00', '2026-04-30T19:30:00', '£10', 'paid', 'An out-of-hours exhibition tour and contemporary art discussion event at Talbot Rice Gallery.', 'National Galleries of Scotland', 'https://www.nationalgalleries.org/event/spin-tour-and-discussion-dead-dont-go-until-we-do-0', ['paid', 'tour', 'discussion', 'contemporary art']),
  L('morningside-drummond-kelsey-2026', 'Marion Drummond PAI & Robert Kelsey PAI', 'exhibitions', 'Exhibition', 'Morningside Gallery', 'Morningside', '2026-04-18T10:00:00', '2026-05-03T17:00:00', 'Free', 'free', 'A contemporary Scottish painting exhibition at Morningside Gallery.', 'Morningside Gallery', 'https://www.morningsidegallery.co.uk/', ['free', 'painting', 'commercial']),
  L('andgallery-james-lumsden-2026', 'James Lumsden: solus bho thuath | north light', 'exhibitions', 'Exhibition', '&Gallery', 'New Town', '2026-05-02T11:00:00', '2026-05-30T17:00:00', 'Free', 'free', 'A solo exhibition of abstract and minimal painting at &Gallery on Dundas Street.', '&Gallery', 'https://andgallery.co.uk/', ['free', 'painting', 'abstract', 'commercial']),
  L('city-art-centre-gifted-2026', 'Gifted: New Acquisitions at the City Art Centre', 'exhibitions', 'Exhibition', 'City Art Centre', 'Old Town', '2026-09-12T10:00:00', '2027-06-06T17:00:00', 'See source', 'varies', 'Recent gifts and bequests to the City Art Centre collection, including painting, drawing, sculpture, print and photography.', 'City Art Centre', 'https://www.edinburgh.gov.uk/news/article/14334/city-art-centre-reveals-exhibitions-programme-for-2026', ['painting', 'drawing', 'sculpture', 'photography']),
  L('city-art-centre-ade-adesina-2026', 'Ade Adesina', 'exhibitions', 'Exhibition', 'City Art Centre', 'Old Town', '2026-11-07T10:00:00', '2027-04-11T17:00:00', 'See source', 'varies', 'A major solo show of monumental woodcuts, etchings, linocuts and screenprints by Ade Adesina.', 'City Art Centre', 'https://www.edinburgh.gov.uk/news/article/14334/city-art-centre-reveals-exhibitions-programme-for-2026', ['printmaking', 'drawing', 'scottish art', 'museum']),
  L('edinburgh-art-festival-2026', 'Edinburgh Art Festival 2026', 'exhibitions', 'Festival', 'Multiple venues', 'Edinburgh', '2026-08-14T10:00:00', '2026-08-30T18:00:00', 'Varies', 'varies', 'The UK’s largest annual visual art festival returns across Edinburgh galleries, museums, studios and artist-run spaces.', 'Edinburgh Art Festival', 'https://edinburgh.org/festivals/edinburgh-art-festival/', ['festival', 'visual art', 'galleries', 'artist-run']),

  D('scottish-national-gallery-directory', 'Scottish National Gallery', 'Museum gallery', 'National Galleries of Scotland', 'New Town', 'National collection of Scottish and international art on The Mound.', 'https://www.nationalgalleries.org/', ['free', 'museum', 'painting', 'gallery']),
  D('scottish-national-portrait-gallery-directory', 'Scottish National Portrait Gallery', 'Museum gallery', 'National Galleries of Scotland', 'New Town', 'Portraiture, photography and national collections in a landmark Gothic building.', 'https://www.nationalgalleries.org/', ['free', 'museum', 'photography', 'gallery']),
  D('modern-one-directory', 'Modern One', 'Museum gallery', 'National Galleries of Scotland', 'West End', 'Modern and contemporary art gallery beside the Water of Leith.', 'https://www.nationalgalleries.org/', ['free', 'museum', 'modern art', 'gallery']),
  D('modern-two-directory', 'Modern Two', 'Museum gallery', 'National Galleries of Scotland', 'West End', 'Modern and contemporary art, archive displays and special exhibitions.', 'https://www.nationalgalleries.org/', ['free', 'museum', 'modern art', 'gallery']),
  D('fruitmarket-directory', 'Fruitmarket', 'Gallery', 'Fruitmarket', 'Old Town', 'Major contemporary art gallery near Waverley, with exhibitions, commissions, publishing and events.', 'https://www.fruitmarket.co.uk/', ['free', 'contemporary art', 'gallery', 'classes']),
  D('collective-directory', 'Collective', 'Artist-run gallery', 'Collective', 'Calton Hill', 'Contemporary art centre on Calton Hill with exhibitions, walks, events and a shop.', 'https://www.collective-edinburgh.art/', ['free', 'artist-run', 'contemporary art', 'gallery']),
  D('talbot-rice-directory', 'Talbot Rice Gallery', 'University gallery', 'Talbot Rice Gallery', 'Old Town', 'University of Edinburgh’s public gallery for contemporary visual art, based in Old College.', 'https://www.ed.ac.uk/visit/museums-galleries/talbot', ['free', 'contemporary art', 'gallery', 'museum']),
  D('city-art-centre-directory', 'City Art Centre', 'Museum gallery', 'City Art Centre', 'Old Town', 'Edinburgh’s City Art Centre, focused on Scottish visual and applied arts.', 'https://www.edinburghmuseums.org.uk/venue/city-art-centre', ['museum', 'painting', 'scottish art', 'gallery']),
  D('royal-scottish-academy-directory', 'Royal Scottish Academy', 'Gallery', 'Royal Scottish Academy', 'New Town', 'Artist-led institution and exhibition space beside the Scottish National Gallery.', 'https://www.royalscottishacademy.org/', ['artist-run', 'painting', 'sculpture', 'gallery']),
  D('kings-gallery-directory', 'The King’s Gallery', 'Royal collection gallery', 'The King’s Gallery', 'Holyrood', 'Changing exhibitions from the Royal Collection at the Palace of Holyroodhouse.', 'https://www.rct.uk/visit/the-kings-gallery-palace-of-holyroodhouse', ['museum', 'photography', 'drawing', 'gallery']),
  D('national-museum-scotland-directory', 'National Museum of Scotland', 'Museum gallery', 'National Museum of Scotland', 'Old Town', 'Museum spaces with changing displays across art, design, craft, culture and history.', 'https://www.nms.ac.uk/national-museum-of-scotland/', ['museum', 'design', 'craft', 'gallery']),
  D('dovecot-directory', 'Dovecot Studios', 'Gallery and tapestry studio', 'Dovecot Studios', 'Old Town', 'Tapestry studio and exhibition space for craft, design and contemporary making.', 'https://dovecotstudios.com/', ['textiles', 'craft', 'design', 'studio']),
  D('edinburgh-printmakers-directory', 'Edinburgh Printmakers', 'Print studio and gallery', 'Edinburgh Printmakers', 'Fountainbridge', 'Open-access print studio, gallery, shop and cafe in Fountainbridge.', 'https://edinburghprintmakers.co.uk/', ['free', 'printmaking', 'studio', 'classes']),
  D('stills-directory', 'Stills Centre for Photography', 'Photography gallery', 'Stills', 'Old Town', 'Photography gallery, production centre and education space on Cockburn Street.', 'https://www.stills.org/', ['free', 'photography', 'gallery', 'classes']),
  D('scottish-gallery-directory', 'The Scottish Gallery', 'Commercial gallery', 'The Scottish Gallery', 'New Town', 'Long-running Dundas Street gallery showing fine art, applied art and contemporary craft.', 'https://scottish-gallery.co.uk/', ['commercial', 'painting', 'craft', 'gallery']),
  D('ingleby-directory', 'Ingleby Gallery', 'Commercial gallery', 'Ingleby Gallery', 'New Town', 'Contemporary art gallery in Edinburgh with a programme of exhibitions and represented artists.', 'https://www.inglebygallery.com/', ['free', 'commercial', 'contemporary art', 'gallery']),
  D('open-eye-directory', 'Open Eye Gallery', 'Commercial gallery', 'Open Eye Gallery', 'New Town', 'Dundas Street gallery focused on contemporary and modern art, printmaking and applied art.', 'https://www.openeyegallery.co.uk/', ['commercial', 'painting', 'printmaking', 'gallery']),
  D('fine-art-society-directory', 'The Fine Art Society Edinburgh', 'Commercial gallery', 'The Fine Art Society', 'New Town', 'Historic gallery on Dundas Street showing Scottish and British art, design and applied arts.', 'https://thefineartsociety.com/', ['commercial', 'painting', 'design', 'gallery']),
  D('andgallery-directory', '&Gallery', 'Commercial gallery', '&Gallery', 'New Town', 'Contemporary gallery on Dundas Street with an emphasis on abstract and minimal painting, drawing and sculpture.', 'https://andgallery.co.uk/', ['free', 'commercial', 'painting', 'sculpture']),
  D('dundas-street-gallery-directory', 'Dundas Street Gallery', 'Hire gallery', 'Dundas Street Gallery', 'New Town', 'Rental exhibition space in the New Town used by artists and groups for changing shows.', 'https://www.dundas-street-gallery.co.uk/', ['commercial', 'artist-run', 'gallery', 'studio']),
  D('morningside-gallery-directory', 'Morningside Gallery', 'Commercial gallery', 'Morningside Gallery', 'Morningside', 'Contemporary Scottish art gallery specialising in painting and ceramics.', 'https://www.morningsidegallery.co.uk/', ['commercial', 'painting', 'ceramics', 'gallery']),
  D('urbane-art-directory', 'Urbane Art Gallery', 'Commercial gallery', 'Urbane Art Gallery', 'Old Town', 'Contemporary art gallery near Waverley showing established and emerging artists.', 'https://www.urbaneart.co.uk/About-Urbane-Art-Gallery', ['commercial', 'contemporary art', 'painting', 'gallery']),
  D('graystone-gallery-directory', 'Graystone Gallery', 'Commercial gallery', 'Graystone Gallery', 'Stockbridge', 'Contemporary Scottish art gallery in Stockbridge.', 'https://graystonegallery.com/our-stockbridge-edinburgh-art-gallery/', ['commercial', 'painting', 'scottish art', 'gallery']),
  D('jupiter-artland-directory', 'Jupiter Artland', 'Sculpture park and gallery', 'Jupiter Artland', 'West Edinburgh', 'Contemporary art, exhibitions and sculpture park on the west edge of Edinburgh.', 'https://www.jupiterartland.org/', ['paid', 'sculpture', 'outdoors', 'gallery']),
  D('rbge-directory', 'Royal Botanic Garden Edinburgh', 'Garden gallery', 'Royal Botanic Garden Edinburgh', 'Inverleith', 'Botanic garden with visual arts, botanical illustration, outdoor sculpture and seasonal exhibitions.', 'https://www.rbge.org.uk/', ['outdoors', 'drawing', 'nature', 'gallery']),
  D('edinburgh-sculpture-workshop-directory', 'Edinburgh Sculpture Workshop', 'Studio and project space', 'Edinburgh Sculpture Workshop', 'Newhaven', 'Production, learning and exhibition space supporting contemporary sculpture.', 'https://edinburghsculpture.org/', ['studio', 'sculpture', 'classes', 'artist-run']),
  D('rhubaba-directory', 'Rhubaba Gallery and Studios', 'Artist-run gallery and studios', 'Rhubaba', 'Leith', 'Artist-run organisation providing studio space and an annual programme of exhibitions and events.', 'https://www.rhubaba.org/about', ['artist-run', 'studio', 'contemporary art', 'gallery']),
  D('sett-studios-directory', 'Sett Studios', 'Artist-run studio and gallery', 'Sett Studios', 'Leith', 'Artist-run studio and gallery space on Leith Walk supporting accessible and marginalised voices.', 'https://www.edinburghartfestival.com/venue-partner/sett-studios/', ['artist-run', 'studio', 'gallery', 'collective']),
  D('coburg-studios-directory', 'Coburg Studios', 'Studios and gallery shop', 'Coburg Studios', 'Leith', 'Creative hub with 50+ artist studios, gallery/shop, exhibitions, open studios and courses.', 'https://www.edinburghartfestival.com/venue-partner/coburg-studios/', ['studio', 'classes', 'gallery', 'collective']),
  D('custom-lane-directory', 'Custom Lane', 'Studios and exhibition space', 'Custom Lane', 'Leith', 'Leith creative hub with studios, workshops and project space.', 'https://customlane.co/', ['studio', 'design', 'classes', 'collective']),
  D('out-of-the-blue-directory', 'Out of the Blue Drill Hall', 'Arts centre and studios', 'Out of the Blue Drill Hall', 'Leith', 'Community arts centre with studios, markets, workshops and exhibitions.', 'https://www.outoftheblue.org.uk/', ['studio', 'classes', 'community', 'collective']),
  D('patriothall-wasps-directory', 'Patriothall Studios / WASPS', 'Artist studios', 'Patriothall Studios', 'Stockbridge', 'Long-running artist studio complex in Stockbridge associated with Edinburgh’s artist-led scene.', 'https://www.waspsstudios.org.uk/', ['studio', 'artist-run', 'collective', 'gallery']),
  D('outer-spaces-directory', 'Outer Spaces', 'Artist space network', 'Outer Spaces', 'Edinburgh', 'Artist-support organisation repurposing empty commercial spaces for studios, exhibitions and development.', 'https://www.edinburghartfestival.com/venue-partner/outer-spaces/', ['studio', 'artist-run', 'collective', 'contemporary art']),
  D('travelling-gallery-directory', 'Travelling Gallery', 'Mobile gallery', 'Travelling Gallery', 'Various', 'Contemporary art gallery in a bus, bringing exhibitions to communities across Scotland and Edinburgh sites.', 'https://www.edinburghartfestival.com/venue-partner/travelling-gallery/', ['free', 'gallery', 'outdoors', 'community']),
  D('bard-directory', 'Bard', 'Gallery and studio', 'Bard', 'Leith', 'Gallery and studio celebrating Scottish craft, design, furniture, textiles and ceramics.', 'https://www.edinburghartfestival.com/venue-partner/bard/', ['craft', 'design', 'studio', 'commercial']),
  D('lavender-menace-directory', 'Lavender Menace Queer Books Archive', 'Archive and project space', 'Lavender Menace Queer Books Archive', 'Edinburgh', 'Queer books archive and cultural space connected with Edinburgh’s visual arts festival programme.', 'https://lavendermenace.org.uk/', ['archive', 'queer art', 'collective', 'gallery']),
  D('whale-arts-directory', 'WHALE Arts', 'Community arts centre', 'WHALE Arts', 'Wester Hailes', 'Community-led arts organisation in Wester Hailes with creative projects, workshops and events.', 'https://www.whalearts.co.uk/', ['community', 'classes', 'studio', 'collective']),
  D('edinburgh-college-art-directory', 'Edinburgh College of Art', 'Art school and exhibition spaces', 'Edinburgh College of Art', 'Old Town', 'Art school with degree shows, exhibitions, public events and studio culture.', 'https://www.eca.ed.ac.uk/', ['students', 'classes', 'studio', 'gallery']),
  D('edinburgh-futures-institute-directory', 'Edinburgh Futures Institute', 'Exhibition space', 'Edinburgh Futures Institute', 'Old Town', 'University hub hosting digital, interdisciplinary and public exhibitions.', 'https://efi.ed.ac.uk/', ['digital art', 'students', 'gallery', 'installation']),
  D('summerhall-directory', 'Summerhall Arts', 'Arts centre and galleries', 'Summerhall Arts', 'Southside', 'Arts centre with visual arts galleries, studios, events and cross-disciplinary programming.', 'https://www.summerhallarts.co.uk/', ['free', 'visual art', 'gallery', 'studio']),
  D('eaf-directory', 'Edinburgh Art Festival', 'Festival and partner network', 'Edinburgh Art Festival', 'Edinburgh', 'Annual visual art festival connecting partner galleries, artist-run spaces and museums across the city.', 'https://www.edinburghartfestival.com/about/partners/', ['festival', 'visual art', 'galleries', 'collective'])
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
const filters = document.querySelector('#filters');

function nowDate() { return new Date(); }
function isPast(item) { return new Date(item.end) < nowDate(); }
function isNow(item) { return new Date(item.start) <= nowDate() && nowDate() <= new Date(item.end); }

function activeListings() {
  return listings.slice().sort((a, b) => {
    if (isPast(a) !== isPast(b)) return isPast(a) ? 1 : -1;
    if (a.kind === 'galleries' && b.kind !== 'galleries') return 1;
    if (a.kind !== 'galleries' && b.kind === 'galleries') return -1;
    return new Date(a.start) - new Date(b.start) || a.title.localeCompare(b.title);
  });
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
  if (item.tags.includes('studio')) return { emoji: '👩‍🎨', label: 'Studio', poster: 'class' };
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
