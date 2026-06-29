// ─── DATA ──────────────────────────────────────────────

// ORIGINAL LORE DATA
const originalData = [
    {
        id: 'kaelen',
        name: 'Kaelen Voss',
        role: 'Wandering Knight',
        story: 'The Last Kingdom',
        background: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=400&h=300&fit=crop',
        description: 'A disgraced knight seeking redemption. Kaelen carries the weight of a failed oath and the memory of a kingdom he could not save. His blade is sharp, but his heart is sharper still.',
        relationships: ['seraphina', 'dorian']
    },
    {
        id: 'seraphina',
        name: 'Seraphina Ashford',
        role: 'Court Mage',
        story: 'The Last Kingdom',
        background: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=300&fit=crop',
        description: 'The royal mage with a secret past. Seraphina commands the elements but struggles to control the fire within her own soul. She serves the crown, but her loyalty is not so easily won.',
        relationships: ['kaelen', 'dorian']
    },
    {
        id: 'dorian',
        name: 'Dorian Blackwood',
        role: 'Spymaster',
        story: 'The Last Kingdom',
        background: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop',
        description: 'The man who knows too much. Dorian moves through shadows and whispers, pulling strings that keep the kingdom from collapsing. His network of spies is unmatched — but so is his paranoia.',
        relationships: ['kaelen', 'seraphina']
    },
    {
        id: 'lyra',
        name: 'Lyra Starweaver',
        role: 'Astronomer',
        story: 'Starfall Chronicles',
        background: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=300&fit=crop',
        description: 'A scholar who maps the heavens and charts the fates. Lyra believes the stars speak in riddles, and she is determined to decipher their meaning before the next alignment — which foretells disaster.',
        relationships: ['orion']
    },
    {
        id: 'orion',
        name: 'Orion Vex',
        role: 'Void Engineer',
        story: 'Starfall Chronicles',
        background: 'https://images.unsplash.com/photo-1521119989659-a83eee488004?w=400&h=300&fit=crop',
        description: 'An engineer who builds bridges between worlds. Orion\'s machines are powered by captured starlight, but he\'s dangerously close to breaching a void that should remain sealed.',
        relationships: ['lyra']
    },
    {
        id: 'mira',
        name: 'Mira Tidesong',
        role: 'Harbor Witch',
        story: 'Mystic Harbor',
        background: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=300&fit=crop',
        description: 'The witch of the harbor who speaks to the sea. Mira\'s magic is tidal — ebbing and flowing with the moon. She guards the coastline from ancient horrors that sleep beneath the waves.',
        relationships: ['finnegan']
    },
    {
        id: 'finnegan',
        name: 'Finnegan Rush',
        role: 'Smuggler Captain',
        story: 'Mystic Harbor',
        background: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=300&fit=crop',
        description: 'A roguish captain with a heart of gold — or so he claims. Finnegan runs contraband across the harbor and knows every secret cove. He owes Mira a debt he can never repay.',
        relationships: ['mira']
    }
];

// EXISTING CHARACTERS DATA
const existingData = [
    {
        id: 'tony',
        name: 'Tony Stark',
        role: 'Genius Billionaire Playboy Philanthropist',
        story: 'Marvel',
        background: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop',
        description: 'CEO of Stark Industries, genius inventor, and the armored Avenger known as Iron Man. Tony Stark built his suit in a cave with a box of scraps and went on to save the world multiple times over.',
        relationships: ['steve', 'peter', 'pepper']
    },
    {
        id: 'steve',
        name: 'Steve Rogers',
        role: 'Super Soldier',
        story: 'Marvel',
        background: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=300&fit=crop',
        description: 'The first Avenger. A man out of time who stands for truth, justice, and the American way. Steve Rogers was a weakling who became a super-soldier through the power of conviction and the Super-Soldier Serum.',
        relationships: ['tony', 'bucky', 'natasha']
    },
    {
        id: 'peter',
        name: 'Peter Parker',
        role: 'Friendly Neighborhood Spider-Man',
        story: 'Marvel',
        background: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=300&fit=crop',
        description: 'A young man from Queens who gained spider-like abilities after being bitten by a radioactive spider. Peter Parker struggles with great power and great responsibility while balancing his life as a student and a hero.',
        relationships: ['tony']
    },
    {
        id: 'pepper',
        name: 'Pepper Potts',
        role: 'CEO of Stark Industries',
        story: 'Marvel',
        background: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=300&fit=crop',
        description: 'The heart of Stark Industries and Tony Stark\'s partner in every sense. Pepper Potts went from personal assistant to CEO, and even donned her own armor to fight alongside the Avengers.',
        relationships: ['tony']
    },
    {
        id: 'bucky',
        name: 'Bucky Barnes',
        role: 'Winter Soldier',
        story: 'Marvel',
        background: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=300&fit=crop',
        description: 'Steve Rogers\' childhood best friend turned brainwashed assassin. Bucky Barnes has spent years trying to break free from the conditioning that made him the Winter Soldier and reclaim his humanity.',
        relationships: ['steve']
    },
    {
        id: 'natasha',
        name: 'Natasha Romanoff',
        role: 'Black Widow',
        story: 'Marvel',
        background: 'https://images.unsplash.com/photo-1521119989659-a83eee488004?w=400&h=300&fit=crop',
        description: 'A master spy and assassin who chose to fight for the good guys. Natasha Romanoff was trained in the Red Room but found redemption as a member of the Avengers, willing to sacrifice everything for her found family.',
        relationships: ['steve', 'tony']
    },
    {
        id: 'bruce',
        name: 'Bruce Wayne',
        role: 'The Dark Knight',
        story: 'DC',
        background: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop',
        description: 'A billionaire orphan who fights crime as the Batman. Bruce Wayne uses his fortune, intellect, and physical prowess to protect Gotham City from the darkness that threatens to consume it.',
        relationships: ['diana', 'clark']
    },
    {
        id: 'diana',
        name: 'Diana Prince',
        role: 'Wonder Woman',
        story: 'DC',
        background: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=300&fit=crop',
        description: 'An Amazon warrior princess from Themyscira. Diana Prince fights for peace, justice, and love in the world of men, wielding her Lasso of Truth and indestructible bracelets.',
        relationships: ['bruce', 'clark']
    },
    {
        id: 'clark',
        name: 'Clark Kent',
        role: 'Superman',
        story: 'DC',
        background: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=300&fit=crop',
        description: 'The last son of Krypton. Clark Kent is a journalist by day and Superman by night, using his extraordinary powers to protect Earth from threats both terrestrial and extraterrestrial.',
        relationships: ['bruce', 'diana']
    },
    {
        id: 'goku',
        name: 'Goku',
        role: 'Saiyan Warrior',
        story: 'Anime',
        background: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=400&h=300&fit=crop',
        description: 'A Saiyan raised on Earth with an unquenchable thirst for battle and self-improvement. Goku has saved the universe countless times and continues to push his limits beyond the impossible.',
        relationships: ['vegeta']
    },
    {
        id: 'vegeta',
        name: 'Vegeta',
        role: 'Prince of Saiyans',
        story: 'Anime',
        background: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=300&fit=crop',
        description: 'The proud Prince of the fallen Saiyan race. Vegeta started as a villain but found a new purpose on Earth, constantly striving to surpass Goku and protect his new family and home.',
        relationships: ['goku']
    }
];

// ─── UNIVERSE CONFIG ──────────────────────────────────
const universes = {
    original: {
        data: originalData,
        gridId: 'originalGrid',
        graphContainerId: 'originalGraphContainer',
        filterSelector: '[data-universe="original"] .filter-btn',
        graphTransform: { x: 0, y: 0, scale: 1 },
        isDragging: false,
        dragStart: { x: 0, y: 0 },
        transformStart: { x: 0, y: 0 },
        showLabels: true
    },
    existing: {
        data: existingData,
        gridId: 'existingGrid',
        graphContainerId: 'existingGraphContainer',
        filterSelector: '[data-universe="existing"] .filter-btn',
        graphTransform: { x: 0, y: 0, scale: 1 },
        isDragging: false,
        dragStart: { x: 0, y: 0 },
        transformStart: { x: 0, y: 0 },
        showLabels: true
    }
};

// ─── DOM REFS ──────────────────────────────────────────
const detailModal = document.getElementById('detailModal');
const modalBody = document.getElementById('modalBody');
const addCharacterModal = document.getElementById('addCharacterModal');
const addCharacterForm = document.getElementById('addCharacterForm');

let currentFilters = { original: 'all', existing: 'all' };
let currentUniverse = 'original'; // Track which universe we're adding to

// ─── TAB SWITCHING ────────────────────────────────────

// Main tabs
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const tab = this.dataset.tab;
        
        // Update active state
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        
        // Show/hide content
        document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
        document.getElementById(`${tab}-tab`).classList.add('active');
        
        // Re-render graph for the visible tab
        setTimeout(() => renderGraph(tab), 100);
    });
});

// Sub-tabs (Gallery/Graph)
document.querySelectorAll('.sub-tab-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const subtab = this.dataset.subtab;
        const parent = this.closest('.tab-content');
        const universe = parent.id.replace('-tab', '');
        
        // Update active state
        parent.querySelectorAll('.sub-tab-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        
        // Show/hide content
        parent.querySelectorAll('.sub-tab-content').forEach(t => t.classList.remove('active'));
        document.getElementById(subtab).classList.add('active');
        
        // Re-render graph if switching to graph view
        if (subtab.includes('graph')) {
            setTimeout(() => renderGraph(universe), 50);
        }
    });
});

// ─── FILTERS ──────────────────────────────────────────

document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const universe = this.closest('.story-filters').dataset.universe;
        const filter = this.dataset.story;
        
        // Update active state
        this.closest('.story-filters').querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        
        currentFilters[universe] = filter;
        renderGallery(universe, filter);
    });
});

// ─── RENDER GALLERY ──────────────────────────────────

function renderGallery(universe, filter = 'all') {
    const config = universes[universe];
    const data = config.data;
    const grid = document.getElementById(config.gridId);
    
    const filtered = filter === 'all' 
        ? data 
        : data.filter(c => c.story === filter);

    grid.innerHTML = filtered.map(char => `
        <div class="character-card" style="background-image: url('${char.background}')" data-id="${char.id}" data-universe="${universe}">
            <div class="story-tag">${char.story}</div>
            <h3>${char.name}</h3>
            <div class="role">${char.role}</div>
            <div class="card-actions">
                <button data-action="story" data-id="${char.id}" data-universe="${universe}">📖 Story</button>
                <button data-action="details" data-id="${char.id}" data-universe="${universe}">📋 Details</button>
                <button data-action="relations" data-id="${char.id}" data-universe="${universe}">🔗 Relations</button>
            </div>
        </div>
    `).join('');

    // Event listeners for card buttons
    grid.querySelectorAll('.character-card .card-actions button').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const id = btn.dataset.id;
            const action = btn.dataset.action;
            const universeData = universes[btn.dataset.universe].data;
            const char = universeData.find(c => c.id === id);
            if (!char) return;
            if (action === 'story') showModal(char, 'story');
            else if (action === 'details') showModal(char, 'details');
            else if (action === 'relations') showModal(char, 'relations');
        });
    });

    // Click on card itself → show details
    grid.querySelectorAll('.character-card').forEach(card => {
        card.addEventListener('click', () => {
            const id = card.dataset.id;
            const universeData = universes[card.dataset.universe].data;
            const char = universeData.find(c => c.id === id);
            if (char) showModal(char, 'details');
        });
    });
}

// ─── MODAL ────────────────────────────────────────────

function showModal(char, mode) {
    let content = `
        <h2>${char.name}</h2>
        <div class="modal-story">${char.story}</div>
        <div class="modal-role">${char.role}</div>
    `;

    if (mode === 'story' || mode === 'details') {
        content += `<div class="modal-desc">${char.description}</div>`;
    }

    if (mode === 'relations' || mode === 'details') {
        const relNames = char.relationships
            .map(id => {
                let c = originalData.find(ch => ch.id === id);
                if (!c) c = existingData.find(ch => ch.id === id);
                return c ? c.name : id;
            })
            .join(' · ');
        content += `
            <div class="modal-relations">
                <h4>🔗 Relations</h4>
                <span>${relNames || 'None listed'}</span>
            </div>
        `;
    }

    modalBody.innerHTML = content;
    detailModal.classList.add('show');
}

document.querySelector('.modal-close').addEventListener('click', () => {
    detailModal.classList.remove('show');
});

detailModal.addEventListener('click', (e) => {
    if (e.target === detailModal) detailModal.classList.remove('show');
});

// ─── ADD CHARACTER ────────────────────────────────────

document.querySelectorAll('.add-character-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        currentUniverse = this.dataset.universe;
        addCharacterModal.classList.add('show');
        document.getElementById('addUniverse').textContent = 
            currentUniverse === 'original' ? 'Original Lore' : 'Existing Characters';
    });
});

document.querySelector('.add-modal-close').addEventListener('click', () => {
    addCharacterModal.classList.remove('show');
});

addCharacterModal.addEventListener('click', (e) => {
    if (e.target === addCharacterModal) addCharacterModal.classList.remove('show');
});

addCharacterForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('charName').value.trim();
    const role = document.getElementById('charRole').value.trim();
    const story = document.getElementById('charStory').value.trim();
    const description = document.getElementById('charDescription').value.trim();
    const relationships = document.getElementById('charRelationships').value
        .split(',')
        .map(s => s.trim())
        .filter(s => s);
    const background = document.getElementById('charBackground').value.trim() || 
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop';
    
    if (!name || !role || !story || !description) {
        alert('Please fill in all required fields (Name, Role, Story, Description)');
        return;
    }
    
    const newChar = {
        id: name.toLowerCase().replace(/\s+/g, '-'),
        name,
        role,
        story,
        background,
        description,
        relationships
    };
    
    // Add to the appropriate dataset
    const targetData = currentUniverse === 'original' ? originalData : existingData;
    targetData.push(newChar);
    
    // Re-render gallery
    renderGallery(currentUniverse, currentFilters[currentUniverse]);
    
    // Re-render graph
    setTimeout(() => renderGraph(currentUniverse), 100);
    
    // Reset form and close modal
    this.reset();
    addCharacterModal.classList.remove('show');
    
    // Show success feedback
    const btn = this.querySelector('button[type="submit"]');
    const originalText = btn.textContent;
    btn.textContent = '✅ Added!';
    btn.style.background = 'rgba(80, 200, 120, 0.3)';
    setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = '';
    }, 2000);
});

// ─── GRAPH VIEW ──────────────────────────────────────

function buildGraphData(data) {
    const nodes = data.map(c => ({ id: c.id, label: c.name, group: c.story }));
    const edges = [];
    data.forEach(c => {
        c.relationships.forEach(targetId => {
            const targetExists = data.some(d => d.id === targetId);
            if (!targetExists) return;
            
            if (!edges.some(e =>
                (e.source === c.id && e.target === targetId) ||
                (e.source === targetId && e.target === c.id)
            )) {
                edges.push({ source: c.id, target: targetId });
            }
        });
    });
    return { nodes, edges };
}

function simulateLayout(nodes, edges, width, height) {
    const pos = {};
    nodes.forEach(n => {
        pos[n.id] = {
            x: 100 + Math.random() * (width - 200),
            y: 100 + Math.random() * (height - 200)
        };
    });

    const iterations = 300;
    const repulsion = 600;
    const attraction = 0.03;

    for (let iter = 0; iter < iterations; iter++) {
        for (let i = 0; i < nodes.length; i++) {
            for (let j = i + 1; j < nodes.length; j++) {
                const a = nodes[i];
                const b = nodes[j];
                const dx = pos[a.id].x - pos[b.id].x;
                const dy = pos[a.id].y - pos[b.id].y;
                const dist = Math.sqrt(dx * dx + dy * dy) + 1;
                const force = repulsion / (dist * dist);
                const fx = (dx / dist) * force;
                const fy = (dy / dist) * force;
                pos[a.id].x += fx;
                pos[a.id].y += fy;
                pos[b.id].x -= fx;
                pos[b.id].y -= fy;
            }
        }

        edges.forEach(edge => {
            const a = pos[edge.source];
            const b = pos[edge.target];
            if (!a || !b) return;
            const dx = a.x - b.x;
            const dy = a.y - b.y;
            const dist = Math.sqrt(dx * dx + dy * dy) + 1;
            const force = attraction * dist;
            const fx = (dx / dist) * force;
            const fy = (dy / dist) * force;
            a.x -= fx;
            a.y -= fy;
            b.x += fx;
            b.y += fy;
        });

        nodes.forEach(n => {
            pos[n.id].x = Math.max(40, Math.min(width - 40, pos[n.id].x));
            pos[n.id].y = Math.max(40, Math.min(height - 40, pos[n.id].y));
        });
    }

    return pos;
}

function renderGraph(universe) {
    const config = universes[universe];
    const container = document.getElementById(config.graphContainerId);
    const svg = container.querySelector('.graph-svg');
    
    if (!container || !svg) return;
    
    const rect = container.getBoundingClientRect();
    const width = rect.width || 800;
    const height = rect.height || 500;

    const { nodes, edges } = buildGraphData(config.data);
    const positions = simulateLayout(nodes, edges, width, height);

    let svgContent = '';

    // Edges
    edges.forEach(edge => {
        const src = positions[edge.source];
        const tgt = positions[edge.target];
        if (!src || !tgt) return;
        svgContent += `
            <line class="edge-line" 
                  x1="${src.x}" y1="${src.y}" 
                  x2="${tgt.x}" y2="${tgt.y}" />
        `;
    });

    // Nodes
    nodes.forEach(node => {
        const p = positions[node.id];
        if (!p) return;
        const isCentral = node.id === 'kaelen' || node.id === 'lyra' || 
                         node.id === 'mira' || node.id === 'tony' || 
                         node.id === 'steve' || node.id === 'bruce';
        svgContent += `
            <circle class="node-circle ${isCentral ? 'central' : ''}" 
                    data-id="${node.id}" data-universe="${universe}"
                    cx="${p.x}" cy="${p.y}" r="18" />
        `;
        if (config.showLabels) {
            svgContent += `
                <text x="${p.x}" y="${p.y + 30}" text-anchor="middle">${node.label}</text>
            `;
        }
    });

    svg.innerHTML = svgContent;

    // Click node → show details
    svg.querySelectorAll('.node-circle').forEach(circle => {
        circle.addEventListener('click', () => {
            const id = circle.dataset.id;
            const universeData = universes[circle.dataset.universe].data;
            const char = universeData.find(c => c.id === id);
            if (char) showModal(char, 'details');
        });
    });
}

// ─── GRAPH INTERACTIONS ──────────────────────────────

// Setup graph interactions for each universe
Object.keys(universes).forEach(universe => {
    const config = universes[universe];
    const container = document.getElementById(config.graphContainerId);
    if (!container) return;
    
    const svg = container.querySelector('.graph-svg');
    
    container.addEventListener('mousedown', (e) => {
        if (e.target.closest('.node-circle')) return;
        config.isDragging = true;
        config.dragStart = { x: e.clientX, y: e.clientY };
        config.transformStart = { x: config.graphTransform.x, y: config.graphTransform.y };
        svg.style.cursor = 'grabbing';
    });

    window.addEventListener('mousemove', (e) => {
        if (!config.isDragging) return;
        const dx = e.clientX - config.dragStart.x;
        const dy = e.clientY - config.dragStart.y;
        config.graphTransform.x = config.transformStart.x + dx;
        config.graphTransform.y = config.transformStart.y + dy;
        applyGraphTransform(universe);
    });

    window.addEventListener('mouseup', () => {
        config.isDragging = false;
        svg.style.cursor = 'grab';
    });

    container.addEventListener('wheel', (e) => {
        e.preventDefault();
        const delta = e.deltaY > 0 ? -0.05 : 0.05;
        config.graphTransform.scale = Math.max(0.3, Math.min(3, config.graphTransform.scale + delta));
        applyGraphTransform(universe);
    });
});

function applyGraphTransform(universe) {
    const config = universes[universe];
    const container = document.getElementById(config.graphContainerId);
    const svg = container.querySelector('.graph-svg');
    svg.setAttribute('transform',
        `translate(${config.graphTransform.x}, ${config.graphTransform.y}) scale(${config.graphTransform.scale})`
    );
}

// ─── GRAPH CONTROLS ──────────────────────────────────

document.querySelectorAll('.toggle-labels').forEach(btn => {
    btn.addEventListener('click', function() {
        const universe = this.dataset.universe;
        universes[universe].showLabels = !universes[universe].showLabels;
        renderGraph(universe);
    });
});

document.querySelectorAll('.reset-graph').forEach(btn => {
    btn.addEventListener('click', function() {
        const universe = this.dataset.universe;
        const config = universes[universe];
        config.graphTransform = { x: 0, y: 0, scale: 1 };
        applyGraphTransform(universe);
        renderGraph(universe);
    });
});

// ─── INIT ──────────────────────────────────────────────

// Render both galleries
renderGallery('original', 'all');
renderGallery('existing', 'all');

// Render both graphs after a delay
setTimeout(() => {
    renderGraph('original');
    renderGraph('existing');
}, 200);

// Re-render graphs on resize
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        renderGraph('original');
        renderGraph('existing');
    }, 300);
});
