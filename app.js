/* ===== NAV & SECTIONS ===== */
function showSection(id) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  const el = document.getElementById(id);
  if (el) el.classList.add('active');

  document.querySelectorAll('.nav-links a').forEach(a => {
    a.classList.toggle('active', a.dataset.section === id);
  });

  document.querySelector('.nav-links')?.classList.remove('open');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleMenu() {
  document.querySelector('.nav-links')?.classList.toggle('open');
}

/* ===== ART DETAIL MODAL ===== */
const artDetails = {
  pintura: {
    title: 'Pintura',
    img: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=700&q=80',
    text: 'Espaço dedicado à pintura em todas as suas formas: óleo, aquarela, acrílica, muralismo e experimentações contemporâneas. Do realismo clássico às pinceladas abstratas, a pintura continua sendo uma das linguagens mais potentes da expressão humana.'
  },
  desenho: {
    title: 'Desenho',
    img: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=700&q=80',
    text: 'Linha, sombra e gesto. Aqui vivem o grafite, o nanquim, o desenho digital, croquis de observação e ilustrações narrativas. O desenho é a base de quase todas as artes visuais e também uma arte completa por si só.'
  },
  musica: {
    title: 'Música',
    img: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=700&q=80',
    text: 'Composições, performances ao vivo, gravações e a eterna busca por novos sons. Da música erudita ao experimental, passando por todos os gêneros. A música é o fio que amarra a sinfonia artística do ART.'
  },
  bandas: {
    title: 'Bandas',
    img: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=700&q=80',
    text: 'Formações amadoras e profissionais, gigs, ensaios e a química entre músicos. Use a seção Músicos para publicar seu perfil e encontrar (ou formar) o grupo certo para o seu som.'
  },
  danca: {
    title: 'Dança',
    img: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=700&q=80',
    text: 'O corpo como linguagem. Ballet, contemporâneo, street dance, danças folclóricas e tudo que envolve movimento e ritmo. A dança traduz o que as palavras às vezes não alcançam.'
  },
  escrita: {
    title: 'Artes Escritas',
    img: 'https://images.unsplash.com/photo-1455390582262-044cdead168a?w=700&q=80',
    text: 'Poesia, contos, crônicas, roteiros, literatura experimental e textos que vivem na fronteira entre o literário e o visual. A palavra também é cor e forma.'
  },
  graffiti: {
    title: 'Graffiti & Street Art',
    img: 'https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?w=700&q=80',
    text: 'Muros, tags, murais e a arte que nasce na rua. Do lettering clássico às intervenções urbanas de grande escala, o graffiti transforma a cidade em galeria viva e democrática.'
  }
};

function openArtDetail(key) {
  const d = artDetails[key];
  if (!d) return;
  document.getElementById('art-modal-body').innerHTML = `
    <img class="modal-img" src="${d.img}" alt="${d.title}" />
    <h3>${d.title}</h3>
    <p>${d.text}</p>
  `;
  document.getElementById('art-modal').classList.remove('hidden');
}

function closeArtDetail() {
  document.getElementById('art-modal').classList.add('hidden');
}

document.getElementById('art-modal')?.addEventListener('click', e => {
  if (e.target.id === 'art-modal') closeArtDetail();
});

/* ===== MARKETPLACE ===== */
const catalog = [
  { id: 1, name: 'Kit Aquarela Profissional 24 cores', cat: 'materiais', price: 189.90, store: 'ArtStore', keyword: 'aquarela pintura kit' },
  { id: 2, name: 'Tinta Acrílica 500ml - Azul Ultramar', cat: 'materiais', price: 42.50, store: 'Cor & Forma', keyword: 'tinta acrilica pintura' },
  { id: 3, name: 'Cavalete de Madeira Ajustável', cat: 'materiais', price: 279.00, store: 'Kabum Arte', keyword: 'cavalete pintura' },
  { id: 4, name: 'Bloco Papel Canson A3 300g', cat: 'materiais', price: 68.90, store: 'Mercado Criativo', keyword: 'papel desenho canson' },
  { id: 5, name: 'Guitarra Stratocaster (réplica)', cat: 'instrumentos', price: 1299.00, store: 'SoundMax', keyword: 'guitarra instrumento banda' },
  { id: 6, name: 'Baixo Elétrico 4 cordas', cat: 'instrumentos', price: 980.00, store: 'MusicHub', keyword: 'baixo instrumento banda' },
  { id: 7, name: 'Bateria Acústica Completa', cat: 'instrumentos', price: 3450.00, store: 'Rhythm Pro', keyword: 'bateria instrumento' },
  { id: 8, name: 'Teclado MIDI 61 teclas', cat: 'instrumentos', price: 749.00, store: 'SynthLab', keyword: 'teclado midi synth' },
  { id: 9, name: 'Microfone Condensador USB', cat: 'acessorios', price: 399.00, store: 'AudioBox', keyword: 'microfone cantor vocal' },
  { id: 10, name: 'Palheta de Violão (kit 12)', cat: 'acessorios', price: 24.90, store: 'MusicHub', keyword: 'palheta violao' },
  { id: 11, name: 'Spray de Tinta para Graffiti (un.)', cat: 'materiais', price: 18.50, store: 'StreetColor', keyword: 'spray graffiti street' },
  { id: 12, name: 'Kit Canetas Posca 8 cores', cat: 'materiais', price: 159.00, store: 'ArtStore', keyword: 'posca graffiti desenho' },
  { id: 13, name: 'Violão Clássico Nylon', cat: 'instrumentos', price: 520.00, store: 'MusicHub', keyword: 'violao instrumento' },
  { id: 14, name: 'Fone de Estúdio Over-ear', cat: 'acessorios', price: 289.00, store: 'AudioBox', keyword: 'fone estudio musica' },
  { id: 15, name: 'Tela para Pintura 50x70cm', cat: 'materiais', price: 45.00, store: 'Cor & Forma', keyword: 'tela pintura' },
  { id: 16, name: 'Amplificador Guitarra 40W', cat: 'instrumentos', price: 890.00, store: 'SoundMax', keyword: 'amplificador guitarra' },
  { id: 17, name: 'Caderno de Croquis A5', cat: 'materiais', price: 32.00, store: 'Mercado Criativo', keyword: 'croquis desenho caderno' },
  { id: 18, name: 'Interface de Áudio 2 canais', cat: 'acessorios', price: 650.00, store: 'SynthLab', keyword: 'interface audio gravacao' }
];

function runSearch() {
  const keyword = (document.getElementById('main-search')?.value || document.getElementById('filter-keyword')?.value || '').toLowerCase().trim();
  const cat = document.getElementById('filter-cat')?.value || 'all';
  const maxPrice = parseFloat(document.getElementById('filter-price')?.value) || Infinity;

  let results = catalog.filter(item => {
    const matchCat = cat === 'all' || item.cat === cat;
    const matchPrice = item.price <= maxPrice;
    const matchKey = !keyword || item.name.toLowerCase().includes(keyword) || item.keyword.includes(keyword);
    return matchCat && matchPrice && matchKey;
  });

  results.sort((a, b) => a.price - b.price);
  renderResults(results, keyword);
}

function renderResults(list, keyword) {
  const container = document.getElementById('results-list');
  if (!container) return;

  if (list.length === 0) {
    container.innerHTML = `<p class="empty-msg">Nenhum item encontrado${keyword ? ` para "${keyword}"` : ''}. Tente outros filtros.</p>`;
    return;
  }

  container.innerHTML = list.map((item, i) => `
    <div class="result-card">
      <div class="result-info">
        <h4>${item.name}</h4>
        <div class="meta">${item.cat === 'materiais' ? 'Materiais de Arte' : item.cat === 'instrumentos' ? 'Instrumentos' : 'Acessórios'}</div>
        <span class="store">${item.store}</span>
      </div>
      <div class="result-price">
        <div class="price">R$ ${item.price.toFixed(2).replace('.', ',')}</div>
        ${i === 0 ? '<span class="badge">Melhor preço</span>' : ''}
      </div>
    </div>
  `).join('');
}

/* ===== MÚSICOS ===== */
let profiles = [
  {
    name: 'Luna Vox',
    role: 'Vocal',
    level: 'Semi-profissional',
    city: 'São Paulo / SP',
    styles: 'Indie, Pop, MPB',
    bio: 'Busco banda para shows e gravações. Experiência em palcos e home studio.'
  },
  {
    name: 'Rafa Drums',
    role: 'Bateria',
    level: 'Amador',
    city: 'Curitiba / PR',
    styles: 'Rock, Punk, Alternativo',
    bio: 'Quero entrar em uma banda amadora para ensaiar e tocar em bares da cidade.'
  },
  {
    name: 'Kai Bass',
    role: 'Baixo',
    level: 'Profissional',
    city: 'Rio de Janeiro / RJ',
    styles: 'Funk, Soul, Jazz fusion',
    bio: 'Disponível para projetos profissionais e gravações. Já toquei em turnês nacionais.'
  },
  {
    name: 'Mel Synth',
    role: 'Teclado / Synth',
    level: 'Semi-profissional',
    city: 'Belo Horizonte / MG',
    styles: 'Eletrônica, Synthwave, Ambient',
    bio: 'Procuro duo ou projeto eletrônico para lives e lançamentos digitais.'
  }
];

function addProfile(e) {
  e.preventDefault();
  const name = document.getElementById('p-name').value.trim();
  const role = document.getElementById('p-role').value;
  const level = document.getElementById('p-level').value;
  const city = document.getElementById('p-city').value.trim();
  const styles = document.getElementById('p-styles').value.trim();
  const bio = document.getElementById('p-bio').value.trim();

  if (!name || !role || !level || !city || !styles || !bio) return;

  profiles.unshift({ name, role, level, city, styles, bio });
  document.getElementById('profile-form').reset();
  filterProfiles();
  alert('Perfil publicado com sucesso!');
}

function filterProfiles() {
  const role = document.getElementById('filter-role')?.value || 'all';
  const level = document.getElementById('filter-level')?.value || 'all';

  const filtered = profiles.filter(p => {
    const matchRole = role === 'all' || p.role === role;
    const matchLevel = level === 'all' || p.level === level;
    return matchRole && matchLevel;
  });

  renderProfiles(filtered);
}

function renderProfiles(list) {
  const container = document.getElementById('profiles-container');
  if (!container) return;

  if (list.length === 0) {
    container.innerHTML = `<p class="empty-msg">Nenhum perfil encontrado com esses filtros.</p>`;
    return;
  }

  container.innerHTML = list.map(p => `
    <div class="profile-card">
      <div class="profile-top">
        <h4>${p.name}</h4>
        <div class="profile-badges">
          <span class="badge-role">${p.role}</span>
          <span class="badge-level">${p.level}</span>
        </div>
      </div>
      <div class="profile-meta">${p.city}</div>
      <div class="profile-styles">${p.styles}</div>
      <p class="profile-bio">${p.bio}</p>
    </div>
  `).join('');
}

/* ===== BACKGROUND PARTICLES (warm tones) ===== */
function initCanvas() {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let w, h, particles;

  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }

  function createParticles() {
    particles = [];
    const count = Math.min(55, Math.floor((w * h) / 18000));
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.6 + 0.4,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        hue: Math.random() > 0.55 ? 5 : (Math.random() > 0.5 ? 25 : 40)
      });
    }
  }

  function draw() {
    ctx.clearRect(0, 0, w, h);
    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > w) p.vx *= -1;
      if (p.y < 0 || p.y > h) p.vy *= -1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `hsla(${p.hue}, 90%, 55%, 0.5)`;
      ctx.shadowBlur = 8;
      ctx.shadowColor = `hsla(${p.hue}, 90%, 50%, 0.7)`;
      ctx.fill();
      ctx.shadowBlur = 0;
    });
    requestAnimationFrame(draw);
  }

  resize();
  createParticles();
  draw();
  window.addEventListener('resize', () => { resize(); createParticles(); });
}

/* ===== INIT ===== */
document.addEventListener('DOMContentLoaded', () => {
  showSection('home');
  runSearch();
  filterProfiles();
  initCanvas();

  document.getElementById('main-search')?.addEventListener('keydown', e => {
    if (e.key === 'Enter') runSearch();
  });
});