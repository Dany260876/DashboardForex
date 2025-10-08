// Données des devises - initialisées avec les données fournies
let currencyData = {
  "EUR": {
    "pays": "Zone Euro",
    "banque_centrale": "BCE",
    "devise": "EUR",
    "drapeau": "🇪🇺",
    "taux_directeur": 2.15,
    "taux_depot": 2.00,
    "taux_pret_marginal": 2.40,
    "objectif_inflation": 2.0,
    "inflation_actuelle": 2.1,
    "inflation_core": 2.4,
    "croissance_pib_trim": 0.3,
    "croissance_pib_annuel": 1.2,
    "chomage": 6.4,
    "pmi_manufacturier": 46.2,
    "pmi_services": 50.8,
    "pmi_composite": 48.9,
    "production_industrielle": -0.3,
    "confiance_consommateurs": -6.4,
    "balance_commerciale": 15.8,
    "dette_publique": 88.6,
    "derniere_decision": "2025-09-11",
    "prochaine_reunion": "2025-10-17",
    "biais_politique": "Restrictif → Neutre",
    "probabilite_hausse": 5,
    "probabilite_maintien": 75,
    "probabilite_baisse": 20,
    "signal_global": "PAUSE",
    "couleur_signal": "orange"
  },
  "USD": {
    "pays": "États-Unis",
    "banque_centrale": "FED",
    "devise": "USD",
    "drapeau": "🇺🇸",
    "taux_directeur": 4.375,
    "objectif_inflation": 2.0,
    "inflation_actuelle": 2.4,
    "inflation_core": 3.2,
    "croissance_pib_trim": 0.4,
    "croissance_pib_annuel": 1.6,
    "chomage": 3.8,
    "pmi_manufacturier": 47.3,
    "pmi_services": 55.2,
    "pmi_composite": 52.1,
    "production_industrielle": 0.8,
    "confiance_consommateurs": 108.7,
    "balance_commerciale": -64.3,
    "dette_publique": 106.2,
    "derniere_decision": "2025-09-18",
    "prochaine_reunion": "2025-10-29",
    "biais_politique": "Restrictif",
    "probabilite_hausse": 15,
    "probabilite_maintien": 60,
    "probabilite_baisse": 25,
    "signal_global": "PAUSE",
    "couleur_signal": "orange"
  },
  "GBP": {
    "pays": "Royaume-Uni",
    "banque_centrale": "BOE",
    "devise": "GBP",
    "drapeau": "🇬🇧",
    "taux_directeur": 4.00,
    "objectif_inflation": 2.0,
    "inflation_actuelle": 2.2,
    "inflation_core": 3.5,
    "croissance_pib_trim": 0.1,
    "croissance_pib_annuel": 0.6,
    "chomage": 4.2,
    "pmi_manufacturier": 52.5,
    "pmi_services": 53.8,
    "pmi_composite": 53.3,
    "production_industrielle": -0.8,
    "confiance_consommateurs": -21.0,
    "balance_commerciale": -8.2,
    "dette_publique": 97.6,
    "derniere_decision": "2025-08-07",
    "prochaine_reunion": "2025-11-06",
    "biais_politique": "Restrictif → Accommodant",
    "probabilite_hausse": 10,
    "probabilite_maintien": 40,
    "probabilite_baisse": 50,
    "signal_global": "BAISSE",
    "couleur_signal": "green"
  },
  "JPY": {
    "pays": "Japon",
    "banque_centrale": "BOJ",
    "devise": "JPY",
    "drapeau": "🇯🇵",
    "taux_directeur": 0.50,
    "objectif_inflation": 2.0,
    "inflation_actuelle": 2.8,
    "inflation_core": 2.0,
    "croissance_pib_trim": 0.2,
    "croissance_pib_annuel": 0.9,
    "chomage": 2.5,
    "pmi_manufacturier": 49.7,
    "pmi_services": 53.1,
    "pmi_composite": 51.8,
    "production_industrielle": 2.8,
    "confiance_consommateurs": 36.2,
    "balance_commerciale": -1.2,
    "dette_publique": 261.3,
    "derniere_decision": "2025-01-24",
    "prochaine_reunion": "2025-10-31",
    "biais_politique": "Accommodant → Neutre",
    "probabilite_hausse": 70,
    "probabilite_maintien": 25,
    "probabilite_baisse": 5,
    "signal_global": "HAUSSE",
    "couleur_signal": "red"
  },
  "CAD": {
    "pays": "Canada",
    "banque_centrale": "BOC",
    "devise": "CAD",
    "drapeau": "🇨🇦",
    "taux_directeur": 2.50,
    "objectif_inflation": 2.0,
    "inflation_actuelle": 1.9,
    "inflation_core": 2.1,
    "croissance_pib_trim": 0.2,
    "croissance_pib_annuel": 1.2,
    "chomage": 6.6,
    "pmi_manufacturier": 48.8,
    "pmi_services": 47.4,
    "pmi_composite": 47.9,
    "production_industrielle": -0.6,
    "confiance_consommateurs": 56.3,
    "balance_commerciale": 1.1,
    "dette_publique": 117.8,
    "derniere_decision": "2025-09-17",
    "prochaine_reunion": "2025-10-23",
    "biais_politique": "Accommodant",
    "probabilite_hausse": 5,
    "probabilite_maintien": 25,
    "probabilite_baisse": 70,
    "signal_global": "BAISSE",
    "couleur_signal": "green"
  },
  "AUD": {
    "pays": "Australie",
    "banque_centrale": "RBA",
    "devise": "AUD",
    "drapeau": "🇦🇺",
    "taux_directeur": 3.60,
    "objectif_inflation": 2.5,
    "inflation_actuelle": 3.4,
    "inflation_core": 3.9,
    "croissance_pib_trim": 0.2,
    "croissance_pib_annuel": 1.4,
    "chomage": 4.0,
    "pmi_manufacturier": 48.5,
    "pmi_services": 51.2,
    "pmi_composite": 50.2,
    "production_industrielle": 0.4,
    "confiance_consommateurs": 83.6,
    "balance_commerciale": 11.3,
    "dette_publique": 57.1,
    "derniere_decision": "2025-08-12",
    "prochaine_reunion": "2025-10-01",
    "biais_politique": "Restrictif → Neutre",
    "probabilite_hausse": 25,
    "probabilite_maintien": 55,
    "probabilite_baisse": 20,
    "signal_global": "PAUSE",
    "couleur_signal": "orange"
  },
  "CHF": {
    "pays": "Suisse",
    "banque_centrale": "SNB",
    "devise": "CHF",
    "drapeau": "🇨🇭",
    "taux_directeur": 0.00,
    "objectif_inflation": 2.0,
    "inflation_actuelle": 1.1,
    "inflation_core": 0.9,
    "croissance_pib_trim": 0.3,
    "croissance_pib_annuel": 1.0,
    "chomage": 2.8,
    "pmi_manufacturier": 50.8,
    "pmi_services": 49.1,
    "pmi_composite": 49.8,
    "production_industrielle": 1.2,
    "confiance_consommateurs": 4.2,
    "balance_commerciale": 2.8,
    "dette_publique": 41.0,
    "derniere_decision": "2025-06-19",
    "prochaine_reunion": "2025-12-12",
    "biais_politique": "Neutre",
    "probabilite_hausse": 10,
    "probabilite_maintien": 70,
    "probabilite_baisse": 20,
    "signal_global": "PAUSE",
    "couleur_signal": "orange"
  },
  "NZD": {
    "pays": "Nouvelle-Zélande",
    "banque_centrale": "RBNZ",
    "devise": "NZD",
    "drapeau": "🇳🇿",
    "taux_directeur": 3.00,
    "objectif_inflation": 2.0,
    "inflation_actuelle": 3.3,
    "inflation_core": 3.1,
    "croissance_pib_trim": 0.0,
    "croissance_pib_annuel": -0.2,
    "chomage": 4.6,
    "pmi_manufacturier": 48.0,
    "pmi_services": 48.5,
    "pmi_composite": 48.3,
    "production_industrielle": -1.8,
    "confiance_consommateurs": 85.4,
    "balance_commerciale": 0.6,
    "dette_publique": 36.7,
    "derniere_decision": "2025-08-20",
    "prochaine_reunion": "2025-10-09",
    "biais_politique": "Restrictif → Accommodant",
    "probabilite_hausse": 5,
    "probabilite_maintien": 30,
    "probabilite_baisse": 65,
    "signal_global": "BAISSE",
    "couleur_signal": "green"
  }
};

// Variables globales
let currentView = 'detailed';
let currentEditingCurrency = null;

// Initialisation de l'application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    populateCurrencyFilter();
    renderCurrencyCards();
    setupEventListeners();
    updateLastUpdateTime();
}

function populateCurrencyFilter() {
    const currencyFilter = document.getElementById('currencyFilter');
    Object.keys(currencyData).forEach(code => {
        const option = document.createElement('option');
        option.value = code;
        option.textContent = `${currencyData[code].drapeau} ${code} - ${currencyData[code].pays}`;
        currencyFilter.appendChild(option);
    });
}

function renderCurrencyCards() {
    const grid = document.getElementById('currenciesGrid');
    const signalFilter = document.getElementById('signalFilter').value;
    const currencyFilter = document.getElementById('currencyFilter').value;
    
    grid.innerHTML = '';
    
    let displayedCount = 0;
    
    Object.entries(currencyData).forEach(([code, data]) => {
        // Appliquer les filtres avec une logique ET (les deux doivent être satisfaits)
        let showCard = true;
        
        // Vérifier le filtre par signal
        if (signalFilter !== 'all' && data.signal_global !== signalFilter) {
            showCard = false;
        }
        
        // Vérifier le filtre par devise
        if (currencyFilter !== 'all' && code !== currencyFilter) {
            showCard = false;
        }
        
        if (showCard) {
            const card = createCurrencyCard(code, data);
            grid.appendChild(card);
            displayedCount++;
        }
    });
    
    // Afficher un message si aucun résultat
    if (displayedCount === 0) {
        grid.innerHTML = `
            <div style="
                grid-column: 1 / -1;
                text-align: center;
                padding: var(--space-32);
                color: var(--gray-medium);
                background: var(--black-tertiary);
                border: 2px dashed var(--gray-light);
                border-radius: var(--radius-lg);
            ">
                <div style="font-size: 3rem; margin-bottom: var(--space-16);">🔍</div>
                <h3 style="color: var(--text-light); margin-bottom: var(--space-8);">Aucun résultat trouvé</h3>
                <p>Aucune devise ne correspond aux filtres sélectionnés.</p>
                <button class="btn btn-secondary" onclick="resetFilters()" style="margin-top: var(--space-16);">
                    🔄 Réinitialiser les filtres
                </button>
            </div>
        `;
    }
}

function resetFilters() {
    document.getElementById('signalFilter').value = 'all';
    document.getElementById('currencyFilter').value = 'all';
    renderCurrencyCards();
}

function createCurrencyCard(code, data) {
    const card = document.createElement('div');
    card.className = 'currency-card fade-in';
    card.dataset.currency = code;
    
    const signalClass = data.signal_global.toLowerCase();
    const signalIcon = data.signal_global === 'HAUSSE' ? '🔴' : 
                      data.signal_global === 'PAUSE' ? '🟡' : '🟢';
    
    card.innerHTML = `
        <div class="currency-header">
            <div class="currency-info">
                <h3>${data.pays}</h3>
                <div class="currency-code">${code}</div>
            </div>
            <div class="flag">${data.drapeau}</div>
        </div>
        
        <div class="rate-section">
            <div class="current-rate">${data.taux_directeur}%</div>
            <div class="rate-label">Taux directeur - ${data.banque_centrale}</div>
        </div>
        
        <div class="signal-section">
            <div class="signal-badge ${signalClass}">
                ${signalIcon} ${data.signal_global}
            </div>
        </div>
        
        <div class="indicators-grid">
            <div class="indicator">
                <span class="indicator-label">Inflation</span>
                <span class="indicator-value">${data.inflation_actuelle}%</span>
            </div>
            <div class="indicator">
                <span class="indicator-label">PIB (trim.)</span>
                <span class="indicator-value">${data.croissance_pib_trim > 0 ? '+' : ''}${data.croissance_pib_trim}%</span>
            </div>
            <div class="indicator">
                <span class="indicator-label">Chômage</span>
                <span class="indicator-value">${data.chomage}%</span>
            </div>
            <div class="indicator">
                <span class="indicator-label">PMI Composite</span>
                <span class="indicator-value">${data.pmi_composite}</span>
            </div>
        </div>
        
        ${currentView === 'detailed' ? `
        <div class="probabilities">
            <h4 style="color: var(--gold-primary); margin-bottom: var(--space-12);">Probabilités prochaine réunion:</h4>
            <div class="probability-item">
                <span>🔴 Hausse:</span>
                <div class="probability-bar">
                    <div class="probability-fill hausse" style="width: ${data.probabilite_hausse}%"></div>
                </div>
                <span>${data.probabilite_hausse}%</span>
            </div>
            <div class="probability-item">
                <span>🟡 Maintien:</span>
                <div class="probability-bar">
                    <div class="probability-fill pause" style="width: ${data.probabilite_maintien}%"></div>
                </div>
                <span>${data.probabilite_maintien}%</span>
            </div>
            <div class="probability-item">
                <span>🟢 Baisse:</span>
                <div class="probability-bar">
                    <div class="probability-fill baisse" style="width: ${data.probabilite_baisse}%"></div>
                </div>
                <span>${data.probabilite_baisse}%</span>
            </div>
        </div>
        ` : ''}
        
        <div class="next-meeting">
            <div class="meeting-label">📅 Prochaine réunion:</div>
            <div class="meeting-date">${formatDate(data.prochaine_reunion)}</div>
        </div>
    `;
    
    card.addEventListener('click', () => showCurrencyDetails(code));
    
    return card;
}

function setupEventListeners() {
    // Filtres
    document.getElementById('signalFilter').addEventListener('change', renderCurrencyCards);
    document.getElementById('currencyFilter').addEventListener('change', renderCurrencyCards);
    
    // Toggle vue
    document.getElementById('toggleView').addEventListener('click', toggleView);
    
    // Mode édition
    document.getElementById('editModeBtn').addEventListener('click', showEditModal);
    
    // Modals
    document.getElementById('modalClose').addEventListener('click', closeDetailsModal);
    document.getElementById('editModalClose').addEventListener('click', closeEditModal);
    document.getElementById('cancelEdit').addEventListener('click', closeEditModal);
    
    // Formulaire d'édition
    document.getElementById('editForm').addEventListener('submit', saveEditedData);
    
    // Fermer modals en cliquant à l'extérieur
    document.getElementById('detailsModal').addEventListener('click', (e) => {
        if (e.target === e.currentTarget) closeDetailsModal();
    });
    
    document.getElementById('editModal').addEventListener('click', (e) => {
        if (e.target === e.currentTarget) closeEditModal();
    });
}

function toggleView() {
    currentView = currentView === 'detailed' ? 'compact' : 'detailed';
    const button = document.getElementById('toggleView');
    const text = document.getElementById('viewToggleText');
    const grid = document.getElementById('currenciesGrid');
    
    if (currentView === 'compact') {
        grid.classList.add('compact-view');
        text.textContent = 'Vue Détaillée';
    } else {
        grid.classList.remove('compact-view');
        text.textContent = 'Vue Compacte';
    }
    
    renderCurrencyCards();
}

function showCurrencyDetails(currencyCode) {
    const data = currencyData[currencyCode];
    const modal = document.getElementById('detailsModal');
    const title = document.getElementById('modalTitle');
    const body = document.getElementById('modalBody');
    
    title.textContent = `${data.drapeau} ${data.pays} (${currencyCode})`;
    
    body.innerHTML = `
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-16); margin-bottom: var(--space-24);">
            <div>
                <h4 style="color: var(--gold-primary); margin-bottom: var(--space-12);">Informations générales</h4>
                <div class="indicator" style="margin-bottom: var(--space-8);">
                    <span>Banque centrale:</span>
                    <span style="color: var(--text-light);">${data.banque_centrale}</span>
                </div>
                <div class="indicator" style="margin-bottom: var(--space-8);">
                    <span>Taux directeur:</span>
                    <span style="color: var(--gold-primary); font-weight: bold;">${data.taux_directeur}%</span>
                </div>
                <div class="indicator" style="margin-bottom: var(--space-8);">
                    <span>Biais politique:</span>
                    <span style="color: var(--text-light);">${data.biais_politique}</span>
                </div>
                <div class="indicator">
                    <span>Dernière décision:</span>
                    <span style="color: var(--text-light);">${formatDate(data.derniere_decision)}</span>
                </div>
            </div>
            
            <div>
                <h4 style="color: var(--gold-primary); margin-bottom: var(--space-12);">Données économiques</h4>
                <div class="indicator" style="margin-bottom: var(--space-8);">
                    <span>Inflation actuelle:</span>
                    <span style="color: ${data.inflation_actuelle > data.objectif_inflation ? 'var(--signal-hausse)' : 'var(--signal-baisse)'};">
                        ${data.inflation_actuelle}% (obj: ${data.objectif_inflation}%)
                    </span>
                </div>
                <div class="indicator" style="margin-bottom: var(--space-8);">
                    <span>PIB annuel:</span>
                    <span style="color: ${data.croissance_pib_annuel > 0 ? 'var(--signal-baisse)' : 'var(--signal-hausse)'};">
                        ${data.croissance_pib_annuel > 0 ? '+' : ''}${data.croissance_pib_annuel}%
                    </span>
                </div>
                <div class="indicator" style="margin-bottom: var(--space-8);">
                    <span>Chômage:</span>
                    <span style="color: var(--text-light);">${data.chomage}%</span>
                </div>
                <div class="indicator">
                    <span>PMI Composite:</span>
                    <span style="color: ${data.pmi_composite >= 50 ? 'var(--signal-baisse)' : 'var(--signal-hausse)'};">
                        ${data.pmi_composite}
                    </span>
                </div>
            </div>
        </div>
        
        <div style="text-align: center; margin-bottom: var(--space-20);">
            <div class="signal-badge ${data.signal_global.toLowerCase()}" style="font-size: var(--font-size-lg); padding: var(--space-12) var(--space-24);">
                ${data.signal_global === 'HAUSSE' ? '🔴' : data.signal_global === 'PAUSE' ? '🟡' : '🟢'} 
                ${data.signal_global}
            </div>
        </div>
        
        <div style="background: var(--black-tertiary); padding: var(--space-16); border-radius: var(--radius-base); border: 1px solid var(--gold-primary);">
            <h4 style="color: var(--gold-primary); margin-bottom: var(--space-12); text-align: center;">
                📅 Prochaine réunion: ${formatDate(data.prochaine_reunion)}
            </h4>
            <div class="probabilities">
                <div class="probability-item">
                    <span>🔴 Hausse probable:</span>
                    <div class="probability-bar">
                        <div class="probability-fill hausse" style="width: ${data.probabilite_hausse}%"></div>
                    </div>
                    <span>${data.probabilite_hausse}%</span>
                </div>
                <div class="probability-item">
                    <span>🟡 Maintien probable:</span>
                    <div class="probability-bar">
                        <div class="probability-fill pause" style="width: ${data.probabilite_maintien}%"></div>
                    </div>
                    <span>${data.probabilite_maintien}%</span>
                </div>
                <div class="probability-item">
                    <span>🟢 Baisse probable:</span>
                    <div class="probability-bar">
                        <div class="probability-fill baisse" style="width: ${data.probabilite_baisse}%"></div>
                    </div>
                    <span>${data.probabilite_baisse}%</span>
                </div>
            </div>
        </div>
        
        <div style="margin-top: var(--space-20); text-align: center;">
            <button class="btn btn-primary" onclick="openEditCurrency('${currencyCode}')">
                ✏️ Modifier les données
            </button>
        </div>
    `;
    
    modal.classList.remove('hidden');
}

function closeDetailsModal() {
    document.getElementById('detailsModal').classList.add('hidden');
}

function showEditModal() {
    // Sélectionner la première devise par défaut
    const firstCurrency = Object.keys(currencyData)[0];
    openEditCurrency(firstCurrency);
}

function openEditCurrency(currencyCode) {
    closeDetailsModal();
    
    currentEditingCurrency = currencyCode;
    const data = currencyData[currencyCode];
    const modal = document.getElementById('editModal');
    const title = document.getElementById('editModalTitle');
    
    title.textContent = `Modifier ${data.drapeau} ${data.pays} (${currencyCode})`;
    
    // Remplir le formulaire
    document.getElementById('editInflation').value = data.inflation_actuelle;
    document.getElementById('editPIB').value = data.croissance_pib_trim;
    document.getElementById('editChomage').value = data.chomage;
    document.getElementById('editPMI').value = data.pmi_composite;
    document.getElementById('editTaux').value = data.taux_directeur;
    document.getElementById('editSignal').value = data.signal_global;
    
    modal.classList.remove('hidden');
}

function closeEditModal() {
    document.getElementById('editModal').classList.add('hidden');
    currentEditingCurrency = null;
}

function saveEditedData(event) {
    event.preventDefault();
    
    if (!currentEditingCurrency) return;
    
    const data = currencyData[currentEditingCurrency];
    
    // Récupérer les nouvelles valeurs
    data.inflation_actuelle = parseFloat(document.getElementById('editInflation').value);
    data.croissance_pib_trim = parseFloat(document.getElementById('editPIB').value);
    data.chomage = parseFloat(document.getElementById('editChomage').value);
    data.pmi_composite = parseFloat(document.getElementById('editPMI').value);
    data.taux_directeur = parseFloat(document.getElementById('editTaux').value);
    data.signal_global = document.getElementById('editSignal').value;
    
    // Mettre à jour la couleur du signal
    data.couleur_signal = data.signal_global === 'HAUSSE' ? 'red' : 
                         data.signal_global === 'PAUSE' ? 'orange' : 'green';
    
    // Fermer le modal
    closeEditModal();
    
    // Re-render les cartes
    renderCurrencyCards();
    
    // Animer la carte modifiée
    const card = document.querySelector(`[data-currency="${currentEditingCurrency}"]`);
    if (card) {
        card.classList.add('updated');
        setTimeout(() => card.classList.remove('updated'), 600);
    }
    
    // Afficher une notification
    showNotification(`✅ Données de ${data.pays} mises à jour avec succès !`);
    
    // Mettre à jour l'heure de dernière modification
    updateLastUpdateTime();
}

function showNotification(message) {
    const notification = document.getElementById('notification');
    const messageEl = document.getElementById('notificationMessage');
    
    messageEl.textContent = message;
    notification.classList.remove('hidden');
    
    setTimeout(() => {
        notification.classList.add('hidden');
    }, 3000);
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
}

function updateLastUpdateTime() {
    const now = new Date();
    const formatted = now.toLocaleDateString('fr-FR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        timeZoneName: 'short'
    });
    document.getElementById('lastUpdate').textContent = formatted;
}

// Fonctions globales pour pouvoir les appeler depuis le HTML
window.openEditCurrency = openEditCurrency;
window.resetFilters = resetFilters;