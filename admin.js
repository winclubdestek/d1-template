// Admin Panel JavaScript

// Login credentials (demo - gerçek projede güvenli bir sistemle değiştirin)
const ADMIN_CREDENTIALS = {

// API: /api/sites
// API tabanlı Site Güncelleme
async function updateSites() {
    const sites = {};
    const sitesContainer = document.getElementById('sitesContainer');
    const siteItems = sitesContainer.querySelectorAll('.site-item');
    siteItems.forEach(item => {
        const siteKey = item.getAttribute('data-site-key');
        sites[siteKey] = {
            name: document.getElementById(`${siteKey}_name`).value,
            badge: document.getElementById(`${siteKey}_badge`).value,
            icon: document.getElementById(`${siteKey}_icon`).value,
            link: document.getElementById(`${siteKey}_link`).value,
            bonus: document.getElementById(`${siteKey}_bonus`).value,
            feature1: document.getElementById(`${siteKey}_feature1`).value,
            feature2: document.getElementById(`${siteKey}_feature2`).value,
            logo: document.getElementById(`${siteKey}_logo`).value
        };
    });
    try {
        const response = await fetch('https://d1-template.winclubhesap.workers.dev/api/sites', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(Object.values(sites))
        });
        if (!response.ok) throw new Error('API hatası');
        showSuccessMessage('sitesSuccess');
        console.log('Site bilgileri API ile güncellendi:', sites);
    } catch (e) {
        alert('Site bilgileri API ile güncellenemedi!');
        console.error(e);
    }
}
// API: /api/stats
// Update Statistics
async function updateStats() {
    const stats = {
        siteCount: document.getElementById('siteCount').value,
        payoutAmount: document.getElementById('payoutAmount').value,
        memberCount: document.getElementById('memberCount').value
    };
    try {
        const response = await fetch('https://d1-template.winclubhesap.workers.dev/api/stats', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(stats)
        });
        if (!response.ok) throw new Error('API hatası');
        showSuccessMessage('statsSuccess');
        console.log('İstatistikler API ile güncellendi:', stats);
    } catch (e) {
        alert('İstatistikler API ile güncellenemedi!');
        console.error(e);
    }
}

// Update Sites
function updateSites() {
    const sites = {
        sosabet: {
            link: document.getElementById('sosabet_link').value,
            bonus: document.getElementById('sosabet_bonus').value,
            feature1: document.getElementById('sosabet_feature1').value,
            feature2: document.getElementById('sosabet_feature2').value
        },
        virabet: {
            link: document.getElementById('virabet_link').value,
            bonus: document.getElementById('virabet_bonus').value,
            feature1: document.getElementById('virabet_feature1').value,
            feature2: document.getElementById('virabet_feature2').value
        },
        casiburn: {
            link: document.getElementById('casiburn_link').value,
            bonus: document.getElementById('casiburn_bonus').value,
            feature1: document.getElementById('casiburn_feature1').value,
            feature2: document.getElementById('casiburn_feature2').value
        },
        kuponcum: {
            link: document.getElementById('kuponcum_link').value,
            bonus: document.getElementById('kuponcum_bonus').value,
            feature1: document.getElementById('kuponcum_feature1').value,
            feature2: document.getElementById('kuponcum_feature2').value
        },
        stilbet: {
            link: document.getElementById('stilbet_link').value,
            bonus: document.getElementById('stilbet_bonus').value,
            feature1: document.getElementById('stilbet_feature1').value,
            feature2: document.getElementById('stilbet_feature2').value
        },
        janticasino: {
            link: document.getElementById('janticasino_link').value,
            bonus: document.getElementById('janticasino_bonus').value,
            feature1: document.getElementById('janticasino_feature1').value,
            feature2: document.getElementById('janticasino_feature2').value
        }
    };
    
    // Save to localStorage
    localStorage.setItem('winclubSites', JSON.stringify(sites));
    
    // Show success message
    showSuccessMessage('sitesSuccess');
    
    console.log('Site bilgileri güncellendi:', sites);
}

// API: /api/bonuses
// Update Bonuses
async function updateBonuses() {
    const bonusContainer = document.getElementById('bonusContainer');
    const bonusItems = bonusContainer.querySelectorAll('.site-item');
    const bonuses = {};
    bonusItems.forEach(item => {
        const bonusKey = item.getAttribute('data-bonus-key');
        bonuses[bonusKey] = {
            icon: document.getElementById(`${bonusKey}_icon`).value,
            title: document.getElementById(`${bonusKey}_title`).value,
            desc: document.getElementById(`${bonusKey}_desc`).value,
            value: document.getElementById(`${bonusKey}_value`).value,
            link: document.getElementById(`${bonusKey}_link`).value
        };
    });
    try {
        const response = await fetch('https://d1-template.winclubhesap.workers.dev/api/bonuses', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(bonuses)
        });
        if (!response.ok) throw new Error('API hatası');
        showSuccessMessage('bonusSuccess');
        console.log('Bonuslar API ile güncellendi:', bonuses);
    } catch (e) {
        alert('Bonuslar API ile güncellenemedi!');
        console.error(e);
    }
}

// API: /api/social
// Update Social Media
async function updateSocial() {
    const social = {
        telegram_channel: {
            link: document.getElementById('telegram_channel').value,
            text: document.getElementById('telegram_channel_text').value
        },
        telegram_group: {
            link: document.getElementById('telegram_group').value,
            text: document.getElementById('telegram_group_text').value
        },
        instagram: {
            link: document.getElementById('instagram').value,
            text: document.getElementById('instagram_text').value
        },
        youtube: {
            link: document.getElementById('youtube').value,
            text: document.getElementById('youtube_text').value
        },
        kick: {
            link: document.getElementById('kick').value,
            text: document.getElementById('kick_text').value
        }
    };
    try {
        const response = await fetch('https://d1-template.winclubhesap.workers.dev/api/social', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(social)
        });
        if (!response.ok) throw new Error('API hatası');
        showSuccessMessage('socialSuccess');
        console.log('Sosyal medya API ile güncellendi:', social);
    } catch (e) {
        alert('Sosyal medya API ile güncellenemedi!');
        console.error(e);
    }
}

// Show success message
function showSuccessMessage(elementId) {
    const element = document.getElementById(elementId);
    element.style.display = 'block';
    
    setTimeout(() => {
        element.style.display = 'none';
    }, 3000);
}

// Load saved data
function loadSavedData() {
    console.log('🔄 loadSavedData() çağrıldı');
    
    // Load stats
    const savedStats = localStorage.getItem('winclubStats');
    if (savedStats) {
        const stats = JSON.parse(savedStats);
        document.getElementById('siteCount').value = stats.siteCount || '5 +';
        document.getElementById('payoutAmount').value = stats.payoutAmount || '₺11M+';
        document.getElementById('memberCount').value = stats.memberCount || '12.000+';
        console.log('✅ İstatistikler yüklendi:', stats);
    } else {
        console.log('⚠️ Kayıtlı istatistik bulunamadı');
    }
    
    // Load and render sites
    console.log('🔄 Siteler yükleniyor...');
    loadSites();
    
    // Load and render bonuses
    console.log('🔄 Bonuslar yükleniyor...');
    loadBonuses();
    
    // Load social media
    const savedSocial = localStorage.getItem('winclubSocial');
    if (savedSocial) {
        const social = JSON.parse(savedSocial);
        
        Object.keys(social).forEach(socialKey => {
            const socialItem = social[socialKey];
            if (document.getElementById(socialKey)) {
                document.getElementById(socialKey).value = socialItem.link || '';
                document.getElementById(`${socialKey}_text`).value = socialItem.text || '';
            }
        });
        console.log('✅ Sosyal medya linkleri yüklendi:', social);
    } else {
        console.log('⚠️ Kayıtlı sosyal medya bulunamadı');
    }
    
    // Load styles
    console.log('🔄 Stiller yükleniyor...');
    loadStyles();
    
    console.log('✅ Tüm veriler yüklendi');
}

// Load and render sites
function loadSites() {
    console.log('🔄 loadSites() çağrıldı');
    const sitesContainer = document.getElementById('sitesContainer');
    if (!sitesContainer) {
        console.error('❌ sitesContainer elementi bulunamadı!');
        return;
    }
    
    const savedSites = localStorage.getItem('winclubSites');
    let sites = {};
    
    if (savedSites) {
        sites = JSON.parse(savedSites);
        console.log('✅ Kayıtlı siteler bulundu:', sites);
        
        // Eski format kontrolü - eğer site objelerinde name, badge, icon yoksa güncelle
        Object.keys(sites).forEach(siteKey => {
            const site = sites[siteKey];
            if (!site.name || !site.badge || !site.icon) {
                console.log('🔧 Eski format tespit edildi, güncelleniyor:', siteKey);
                // Eski format tespit edildi, güncelle
                const defaultData = getDefaultSiteData(siteKey);
                sites[siteKey] = {
                    ...defaultData,
                    link: site.link || defaultData.link,
                    bonus: site.bonus || defaultData.bonus,
                    feature1: site.feature1 || defaultData.feature1,
                    feature2: site.feature2 || defaultData.feature2
                };
            }
        });
        
        // Güncellenmiş veriyi kaydet
        localStorage.setItem('winclubSites', JSON.stringify(sites));
    } else {
        console.log('⚠️ Kayıtlı site bulunamadı, varsayılanlar yükleniyor');
        // Default sites
        sites = getDefaultSites();
        localStorage.setItem('winclubSites', JSON.stringify(sites));
    }
    
    // Render sites
    sitesContainer.innerHTML = '';
    Object.keys(sites).forEach((siteKey, index) => {
        const site = sites[siteKey];
        const siteHtml = `
            <div class="site-item" data-site-key="${siteKey}">
                <div class="site-controls">
                    <button class="control-btn" onclick="moveSiteUp('${siteKey}')" ${index === 0 ? 'disabled' : ''}>↑</button>
                    <button class="control-btn" onclick="moveSiteDown('${siteKey}')" ${index === Object.keys(sites).length - 1 ? 'disabled' : ''}>↓</button>
                    <button class="control-btn delete-btn" onclick="deleteSite('${siteKey}')">🗑️</button>
                </div>
                <h3>${site.icon} ${site.name} (${site.badge})</h3>
                <div class="site-fields">
                    <input type="text" id="${siteKey}_name" placeholder="Site Adı" value="${site.name || ''}">
                    <input type="text" id="${siteKey}_badge" placeholder="Rozet" value="${site.badge || ''}">
                    <input type="text" id="${siteKey}_icon" placeholder="İkon" value="${site.icon || ''}">
                    <input type="text" id="${siteKey}_link" placeholder="Affiliate Link" value="${site.link || ''}">
                    <input type="text" id="${siteKey}_bonus" placeholder="Deneme Bonusu" value="${site.bonus || ''}">
                    <input type="text" id="${siteKey}_feature1" placeholder="Özellik 1" value="${site.feature1 || ''}">
                    <input type="text" id="${siteKey}_feature2" placeholder="Özellik 2" value="${site.feature2 || ''}">
                    <input type="text" id="${siteKey}_logo" placeholder="Logo Dosya Adı" value="${site.logo || ''}">
                </div>
            </div>
        `;
        sitesContainer.innerHTML += siteHtml;
    });
    
    console.log(`✅ ${Object.keys(sites).length} site yüklendi`);
}

// Default site data helper
function getDefaultSites() {
    return {
        sosabet: {
            name: 'Sosabet',
            badge: 'VIP',
            icon: '💎',
            link: 'https://cutt.ly/3rSv4z43',
            bonus: '1000₺',
            feature1: '%30 Çevrimsiz Yatırım Bonusu',
            feature2: '4 Yatırım Senden 1 Yatırım Sosa\'dan',
            logo: 'sosabet.png'
        },
        virabet: {
            name: 'Virabet',
            badge: 'POPULER',
            icon: '🔥',
            link: 'https://cutt.ly/XrP3QL4o',
            bonus: '500₺',
            feature1: '500.000₺ Blet Etkinliği',
            feature2: '1 Yatırım 2 Kayıp Bonusu',
            logo: 'virabet.png'
        },
        casiburn: {
            name: 'Casiburn',
            badge: 'HIZLI ÇEKİM',
            icon: '⚡',
            link: 'https://cutt.ly/mrOt7sSo',
            bonus: '1000₺',
            feature1: '%50 Çevrimsiz İlk Yatırım Bonusu',
            feature2: '5 Dakika\'da Çekim',
            logo: 'casiburn.png'
        },
        kuponcum: {
            name: 'Kuponcum',
            badge: '#1 ÖNERİ',
            icon: '🏆',
            link: 'https://cutt.ly/kuponcumgiris',
            bonus: '1000₺',
            feature1: '%100 Çevrimsiz İlk Yatırım Bonusu',
            feature2: '%100 Nakit İade',
            logo: 'kuponcum.png'
        },
        stilbet: {
            name: 'Stilbet',
            badge: '#2 ÖNERİ',
            icon: '🏆',
            link: 'https://cutt.ly/urP3e8b7',
            bonus: '500₺',
            feature1: '%300 Hoşgeldin Bonusu',
            feature2: 'Her Yatırıma Ek Freespin',
            logo: 'stilbet.mp4'
        },
        janticasino: {
            name: 'Janticasino',
            badge: '#3 ÖNERİ',
            icon: '🏅',
            link: 'https://cutt.ly/jantigiris',
            bonus: '1000₺',
            feature1: '%50 Çevrimsiz İlk Yatırım Bonusu',
            feature2: '%30 Anlık Kayıp Bonusu',
            logo: 'janticasino.png'
        }
    };
}

function getDefaultSiteData(siteKey) {
    const defaults = getDefaultSites();
    return defaults[siteKey] || {
        name: siteKey.charAt(0).toUpperCase() + siteKey.slice(1),
        badge: 'YENİ',
        icon: '🎯',
        link: '',
        bonus: '0₺',
        feature1: '',
        feature2: '',
        logo: siteKey + '.png'
    };
}

// Load and render bonuses
function loadBonuses() {
    const bonusContainer = document.getElementById('bonusContainer');
    if (!bonusContainer) return; // Element yoksa çık
    
    const savedBonuses = localStorage.getItem('winclubBonuses');
    let bonuses = {};
    
    if (savedBonuses) {
        bonuses = JSON.parse(savedBonuses);
        // Eski format kontrolü - eğer bonus objelerinde icon yoksa güncelle
        Object.keys(bonuses).forEach(bonusKey => {
            const bonus = bonuses[bonusKey];
            if (!bonus.icon) {
                const defaultData = getDefaultBonusData(bonusKey);
                bonuses[bonusKey] = {
                    icon: defaultData.icon,
                    title: bonus.title || defaultData.title,
                    desc: bonus.desc || defaultData.desc,
                    value: bonus.value || defaultData.value,
                    link: bonus.link || ''
                };
            }
        });
        // Güncellenmiş veriyi kaydet
        localStorage.setItem('winclubBonuses', JSON.stringify(bonuses));
    } else {
        // Default bonuses
        bonuses = getDefaultBonuses();
        localStorage.setItem('winclubBonuses', JSON.stringify(bonuses));
    }
    // Render bonuses
    bonusContainer.innerHTML = '';
    Object.keys(bonuses).forEach((bonusKey, index) => {
        const bonus = bonuses[bonusKey];
        const bonusHtml = `
            <div class="site-item" data-bonus-key="${bonusKey}">
                <div class="site-controls">
                    <button class="control-btn" onclick="moveBonusUp('${bonusKey}')" ${index === 0 ? 'disabled' : ''}>↑</button>
                    <button class="control-btn" onclick="moveBonusDown('${bonusKey}')" ${index === Object.keys(bonuses).length - 1 ? 'disabled' : ''}>↓</button>
                    <button class="control-btn delete-btn" onclick="deleteBonus('${bonusKey}')">🗑️</button>
                </div>
                <h3>${bonus.icon} ${bonus.title}</h3>
                <div class="site-fields">
                    <input type="text" id="${bonusKey}_icon" placeholder="İkon" value="${bonus.icon || ''}">
                    <input type="text" id="${bonusKey}_title" placeholder="Bonus Başlığı" value="${bonus.title || ''}">
                    <input type="text" id="${bonusKey}_desc" placeholder="Açıklama" value="${bonus.desc || ''}">
                    <input type="text" id="${bonusKey}_value" placeholder="Bonus Değeri" value="${bonus.value || ''}">
                    <input type="text" id="${bonusKey}_link" placeholder="Bonus Linki" value="${bonus.link || ''}">
                    <button class="bonus-link-btn" onclick="window.open(document.getElementById('${bonusKey}_link').value || '${bonus.link || ''}', '_blank')" style="margin-top:6px;">Bonus Değerine Git</button>
                </div>
            </div>
        `;
        bonusContainer.innerHTML += bonusHtml;
    });
}

// Default bonus data helpers
function getDefaultBonuses() {
    return {
        welcome: {
            icon: '🎁',
            title: 'Hoşgeldin Bonusu',
            desc: 'İlk üyeliğinizde %200\'e kadar bonus kazanın',
            value: '₺5500\'e Kadar'
        },
        cashback: {
            icon: '🔄',
            title: 'Kayıp Bonusu',
            desc: 'Kayıplarınızın %25\'ini geri alın',
            value: '%25 Cashback'
        },
        freespin: {
            icon: '⭐',
            title: 'Free Spin',
            desc: 'Popüler slot oyunlarında ücretsiz çevirme',
            value: '250 Free Spin'
        }
    };
}

function getDefaultBonusData(bonusKey) {
    const defaults = getDefaultBonuses();
    return defaults[bonusKey] || {
        icon: '🎁',
        title: bonusKey.charAt(0).toUpperCase() + bonusKey.slice(1),
        desc: 'Yeni bonus açıklaması',
        value: '0₺'
    };
}

// Load styles
function loadStyles() {
    const savedStyles = localStorage.getItem('winclubStyles');
    if (savedStyles) {
        const styles = JSON.parse(savedStyles);
        
        // Color inputs - check if elements exist first
        if (document.getElementById('primaryGold')) {
            document.getElementById('primaryGold').value = styles.primaryGold || '#FFD700';
            document.getElementById('primaryGoldHex').value = styles.primaryGold || '#FFD700';
            document.getElementById('darkGold').value = styles.darkGold || '#B8860B';
            document.getElementById('darkGoldHex').value = styles.darkGold || '#B8860B';
            document.getElementById('primaryBlack').value = styles.primaryBlack || '#000000';
            document.getElementById('primaryBlackHex').value = styles.primaryBlack || '#000000';
            document.getElementById('darkGray').value = styles.darkGray || '#1a1a1a';
            document.getElementById('darkGrayHex').value = styles.darkGray || '#1a1a1a';
            
            // Typography
            document.getElementById('primaryFont').value = styles.primaryFont || 'Roboto';
            document.getElementById('titleSize').value = styles.titleSize || 32;
            document.getElementById('titleSizeValue').textContent = (styles.titleSize || 32) + 'px';
            document.getElementById('textSize').value = styles.textSize || 16;
            document.getElementById('textSizeValue').textContent = (styles.textSize || 16) + 'px';
            
            // Effects
            document.getElementById('animationSpeed').value = styles.animationSpeed || '0.3s';
            document.getElementById('glowEffect').checked = styles.glowEffect !== false;
            document.getElementById('useGradient').checked = styles.useGradient !== false;
            document.getElementById('borderRadius').value = styles.borderRadius || 10;
            document.getElementById('borderRadiusValue').textContent = (styles.borderRadius || 10) + 'px';
        }
    }
    
    // Add event listeners for live updates after a short delay
    setTimeout(() => {
        addStyleEventListeners();
    }, 100);
}

// Generate HTML Export (for manual update)
function generateHTMLUpdate() {
    const stats = JSON.parse(localStorage.getItem('winclubStats') || '{}');
    const sites = JSON.parse(localStorage.getItem('winclubSites') || '{}');
    const bonuses = JSON.parse(localStorage.getItem('winclubBonuses') || '{}');
    const social = JSON.parse(localStorage.getItem('winclubSocial') || '{}');
    
    console.log('📊 Güncel Veriler:');
    console.log('İstatistikler:', stats);
    console.log('Siteler:', sites);
    console.log('Bonuslar:', bonuses);
    console.log('Sosyal Medya:', social);
    
    alert('Veriler konsola yazdırıldı. F12 ile Console\'u açarak görebilirsiniz.');
}

// Export data button (hidden feature)
document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && e.shiftKey && e.key === 'E') {
        generateHTMLUpdate();
    }
});

// Auto-save every 30 seconds
setInterval(() => {
    if (document.getElementById('adminPanel').style.display === 'block') {
        console.log('🔄 Otomatik kayıt yapılıyor...');
    }
}, 30000);

// New Site Functions
function addNewSite() {
    const name = document.getElementById('new_site_name').value;
    const badge = document.getElementById('new_site_badge').value;
    const icon = document.getElementById('new_site_icon').value;
    const link = document.getElementById('new_site_link').value;
    const bonus = document.getElementById('new_site_bonus').value;
    const feature1 = document.getElementById('new_site_feature1').value;
    const feature2 = document.getElementById('new_site_feature2').value;
    const logo = document.getElementById('new_site_logo').value;
    
    if (!name || !badge || !icon || !link) {
        alert('Lütfen zorunlu alanları doldurun (Site Adı, Rozet, İkon, Link)');
        return;
    }
    
    const sites = JSON.parse(localStorage.getItem('winclubSites') || '{}');
    const siteKey = name.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    sites[siteKey] = {
        name: name,
        badge: badge,
        icon: icon,
        link: link,
        bonus: bonus,
        feature1: feature1,
        feature2: feature2,
        logo: logo
    };
    
    localStorage.setItem('winclubSites', JSON.stringify(sites));
    
    // Clear form
    document.getElementById('new_site_name').value = '';
    document.getElementById('new_site_badge').value = '';
    document.getElementById('new_site_icon').value = '';
    document.getElementById('new_site_link').value = '';
    document.getElementById('new_site_bonus').value = '';
    document.getElementById('new_site_feature1').value = '';
    document.getElementById('new_site_feature2').value = '';
    document.getElementById('new_site_logo').value = '';
    
    loadSites();
    showSuccessMessage('sitesSuccess');
}

function deleteSite(siteKey) {
    if (confirm('Bu siteyi silmek istediğinizden emin misiniz?')) {
        const sites = JSON.parse(localStorage.getItem('winclubSites') || '{}');
        delete sites[siteKey];
        localStorage.setItem('winclubSites', JSON.stringify(sites));
        loadSites();
        showSuccessMessage('sitesSuccess');
    }
}

function moveSiteUp(siteKey) {
    const sites = JSON.parse(localStorage.getItem('winclubSites') || '{}');
    const siteKeys = Object.keys(sites);
    const currentIndex = siteKeys.indexOf(siteKey);
    
    if (currentIndex > 0) {
        const newSites = {};
        for (let i = 0; i < siteKeys.length; i++) {
            let keyToAdd;
            if (i === currentIndex - 1) {
                keyToAdd = siteKey;
            } else if (i === currentIndex) {
                keyToAdd = siteKeys[currentIndex - 1];
            } else {
                keyToAdd = siteKeys[i];
            }
            newSites[keyToAdd] = sites[keyToAdd];
        }
        localStorage.setItem('winclubSites', JSON.stringify(newSites));
        loadSites();
    }
}

function moveSiteDown(siteKey) {
    const sites = JSON.parse(localStorage.getItem('winclubSites') || '{}');
    const siteKeys = Object.keys(sites);
    const currentIndex = siteKeys.indexOf(siteKey);
    
    if (currentIndex < siteKeys.length - 1) {
        const newSites = {};
        for (let i = 0; i < siteKeys.length; i++) {
            let keyToAdd;
            if (i === currentIndex) {
                keyToAdd = siteKeys[currentIndex + 1];
            } else if (i === currentIndex + 1) {
                keyToAdd = siteKey;
            } else {
                keyToAdd = siteKeys[i];
            }
            newSites[keyToAdd] = sites[keyToAdd];
        }
        localStorage.setItem('winclubSites', JSON.stringify(newSites));
        loadSites();
    }
}

// New Bonus Functions
function addNewBonus() {
    const icon = document.getElementById('new_bonus_icon').value;
    const title = document.getElementById('new_bonus_title').value;
    const desc = document.getElementById('new_bonus_desc').value;
    const value = document.getElementById('new_bonus_value').value;
    const link = document.getElementById('new_bonus_link').value;
    
    if (!icon || !title || !desc || !value || !link) {
        alert('Lütfen tüm alanları doldurun');
        return;
    }
    
    const bonuses = JSON.parse(localStorage.getItem('winclubBonuses') || '{}');
    const bonusKey = title.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    bonuses[bonusKey] = {
        icon: icon,
        title: title,
        desc: desc,
        value: value,
        link: link
    };
    
    localStorage.setItem('winclubBonuses', JSON.stringify(bonuses));
    
    // Clear form
    document.getElementById('new_bonus_icon').value = '';
    document.getElementById('new_bonus_title').value = '';
    document.getElementById('new_bonus_desc').value = '';
    document.getElementById('new_bonus_value').value = '';
    document.getElementById('new_bonus_link').value = '';
    
    loadBonuses();
    showSuccessMessage('bonusSuccess');
}

function deleteBonus(bonusKey) {
    if (confirm('Bu bonusu silmek istediğinizden emin misiniz?')) {
        const bonuses = JSON.parse(localStorage.getItem('winclubBonuses') || '{}');
        delete bonuses[bonusKey];
        localStorage.setItem('winclubBonuses', JSON.stringify(bonuses));
        loadBonuses();
        showSuccessMessage('bonusSuccess');
    }
}

function moveBonusUp(bonusKey) {
    const bonuses = JSON.parse(localStorage.getItem('winclubBonuses') || '{}');
    const bonusKeys = Object.keys(bonuses);
    const currentIndex = bonusKeys.indexOf(bonusKey);
    
    if (currentIndex > 0) {
        const newBonuses = {};
        for (let i = 0; i < bonusKeys.length; i++) {
            let keyToAdd;
            if (i === currentIndex - 1) {
                keyToAdd = bonusKey;
            } else if (i === currentIndex) {
                keyToAdd = bonusKeys[currentIndex - 1];
            } else {
                keyToAdd = bonusKeys[i];
            }
            newBonuses[keyToAdd] = bonuses[keyToAdd];
        }
        localStorage.setItem('winclubBonuses', JSON.stringify(newBonuses));
        loadBonuses();
    }
}

function moveBonusDown(bonusKey) {
    const bonuses = JSON.parse(localStorage.getItem('winclubBonuses') || '{}');
    const bonusKeys = Object.keys(bonuses);
    const currentIndex = bonusKeys.indexOf(bonusKey);
    
    if (currentIndex < bonusKeys.length - 1) {
        const newBonuses = {};
        for (let i = 0; i < bonusKeys.length; i++) {
            let keyToAdd;
            if (i === currentIndex) {
                keyToAdd = bonusKeys[currentIndex + 1];
            } else if (i === currentIndex + 1) {
                keyToAdd = bonusKey;
            } else {
                keyToAdd = bonusKeys[i];
            }
            newBonuses[keyToAdd] = bonuses[keyToAdd];
        }
        localStorage.setItem('winclubBonuses', JSON.stringify(newBonuses));
        loadBonuses();
    }
}

// Style Functions
// API: /api/styles
async function updateStyles() {
    const styles = {
        primaryGold: document.getElementById('primaryGold').value,
        darkGold: document.getElementById('darkGold').value,
        primaryBlack: document.getElementById('primaryBlack').value,
        darkGray: document.getElementById('darkGray').value,
        primaryFont: document.getElementById('primaryFont').value,
        titleSize: document.getElementById('titleSize').value,
        textSize: document.getElementById('textSize').value,
        animationSpeed: document.getElementById('animationSpeed').value,
        glowEffect: document.getElementById('glowEffect').checked,
        useGradient: document.getElementById('useGradient').checked,
        borderRadius: document.getElementById('borderRadius').value
    };
    try {
        const response = await fetch('https://d1-template.winclubhesap.workers.dev/api/styles', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(styles)
        });
        if (!response.ok) throw new Error('API hatası');
        showSuccessMessage('styleSuccess');
        console.log('Stil ayarları API ile güncellendi:', styles);
    } catch (e) {
        alert('Stil ayarları API ile güncellenemedi!');
        console.error(e);
    }
}

function addStyleEventListeners() {
    // Color sync - check if elements exist first
    const primaryGold = document.getElementById('primaryGold');
    const primaryGoldHex = document.getElementById('primaryGoldHex');
    
    if (primaryGold && primaryGoldHex) {
        primaryGold.addEventListener('input', function() {
            primaryGoldHex.value = this.value;
        });
        primaryGoldHex.addEventListener('input', function() {
            primaryGold.value = this.value;
        });
    }
    
    const darkGold = document.getElementById('darkGold');
    const darkGoldHex = document.getElementById('darkGoldHex');
    
    if (darkGold && darkGoldHex) {
        darkGold.addEventListener('input', function() {
            darkGoldHex.value = this.value;
        });
        darkGoldHex.addEventListener('input', function() {
            darkGold.value = this.value;
        });
    }
    
    const primaryBlack = document.getElementById('primaryBlack');
    const primaryBlackHex = document.getElementById('primaryBlackHex');
    
    if (primaryBlack && primaryBlackHex) {
        primaryBlack.addEventListener('input', function() {
            primaryBlackHex.value = this.value;
        });
        primaryBlackHex.addEventListener('input', function() {
            primaryBlack.value = this.value;
        });
    }
    
    const darkGray = document.getElementById('darkGray');
    const darkGrayHex = document.getElementById('darkGrayHex');
    
    if (darkGray && darkGrayHex) {
        darkGray.addEventListener('input', function() {
            darkGrayHex.value = this.value;
        });
        darkGrayHex.addEventListener('input', function() {
            darkGray.value = this.value;
        });
    }
    
    // Range sliders
    const titleSize = document.getElementById('titleSize');
    const titleSizeValue = document.getElementById('titleSizeValue');
    
    if (titleSize && titleSizeValue) {
        titleSize.addEventListener('input', function() {
            titleSizeValue.textContent = this.value + 'px';
        });
    }
    
    const textSize = document.getElementById('textSize');
    const textSizeValue = document.getElementById('textSizeValue');
    
    if (textSize && textSizeValue) {
        textSize.addEventListener('input', function() {
            textSizeValue.textContent = this.value + 'px';
        });
    }
    
    const borderRadius = document.getElementById('borderRadius');
    const borderRadiusValue = document.getElementById('borderRadiusValue');
    
    if (borderRadius && borderRadiusValue) {
        borderRadius.addEventListener('input', function() {
            borderRadiusValue.textContent = this.value + 'px';
        });
    }
}

// Update Sites with new structure
function updateSites() {
    const sites = JSON.parse(localStorage.getItem('winclubSites') || '{}');
    const sitesContainer = document.getElementById('sitesContainer');
    const siteItems = sitesContainer.querySelectorAll('.site-item');
    
    siteItems.forEach(item => {
        const siteKey = item.getAttribute('data-site-key');
        if (sites[siteKey]) {
            sites[siteKey].name = document.getElementById(`${siteKey}_name`).value;
            sites[siteKey].badge = document.getElementById(`${siteKey}_badge`).value;
            sites[siteKey].icon = document.getElementById(`${siteKey}_icon`).value;
            sites[siteKey].link = document.getElementById(`${siteKey}_link`).value;
            sites[siteKey].bonus = document.getElementById(`${siteKey}_bonus`).value;
            sites[siteKey].feature1 = document.getElementById(`${siteKey}_feature1`).value;
            sites[siteKey].feature2 = document.getElementById(`${siteKey}_feature2`).value;
            sites[siteKey].logo = document.getElementById(`${siteKey}_logo`).value;
        }
    });
    
    localStorage.setItem('winclubSites', JSON.stringify(sites));
    loadSites();
    showSuccessMessage('sitesSuccess');
}

// Update Bonuses with new structure
function updateBonuses() {
    const bonuses = JSON.parse(localStorage.getItem('winclubBonuses') || '{}');
    const bonusContainer = document.getElementById('bonusContainer');
    const bonusItems = bonusContainer.querySelectorAll('.site-item');
    
    bonusItems.forEach(item => {
        const bonusKey = item.getAttribute('data-bonus-key');
        if (bonuses[bonusKey]) {
            bonuses[bonusKey].icon = document.getElementById(`${bonusKey}_icon`).value;
            bonuses[bonusKey].title = document.getElementById(`${bonusKey}_title`).value;
            bonuses[bonusKey].desc = document.getElementById(`${bonusKey}_desc`).value;
            bonuses[bonusKey].value = document.getElementById(`${bonusKey}_value`).value;
            bonuses[bonusKey].link = document.getElementById(`${bonusKey}_link`).value;
        }
    });
    
    localStorage.setItem('winclubBonuses', JSON.stringify(bonuses));
    loadBonuses();
    showSuccessMessage('bonusSuccess');
}

// Reset all data function
function resetAllData() {
    if (confirm('TÜM VERİLER SİLİNECEK! Bu işlem geri alınamaz. Emin misiniz?')) {
        if (confirm('Son kez soruyorum! Tüm site, bonus ve ayar verileriniz silinecek. Devam edilsin mi?')) {
            console.log('🔄 Tüm veriler sıfırlanıyor...');
            
            // Clear all localStorage data
            localStorage.removeItem('winclubStats');
            localStorage.removeItem('winclubSites');
            localStorage.removeItem('winclubBonuses');
            localStorage.removeItem('winclubSocial');
            localStorage.removeItem('winclubStyles');
            
            console.log('🗑️ localStorage temizlendi');
            
            // Reload all data with defaults
            setTimeout(() => {
                loadSavedData();
                
                alert('✅ Tüm veriler sıfırlandı ve varsayılan değerler yüklendi!');
                
                // Show success messages on all tabs
                showSuccessMessage('statsSuccess');
                showSuccessMessage('sitesSuccess');
                showSuccessMessage('bonusSuccess');
                showSuccessMessage('socialSuccess'); 
                showSuccessMessage('styleSuccess');
                
                console.log('✅ Reset işlemi tamamlandı');
            }, 500);
        }
    }
}
