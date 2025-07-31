<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# WinClub - Bahis Platformu Projesi

Bu proje, modern bir bahis tanıtım sitesi için özel olarak geliştirilmiştir. Siyah ve altın sarısı renk temasını kullanarak premium bir görünüm hedeflemektedir.

## Proje Özellikleri

### Renk Paleti
- Ana renk: Siyah (#000000)
- Vurgu rengi: Altın Sarısı (#FFD700)
- Gradient efektleri kullanılır
- Altın sarısı vurgu amaçlı kullanılır

### Tasarım Prensipleri
- Modern ve minimalist tasarım
- Responsive design (Mobile-first approach)
- Smooth animasyonlar ve hover efektleri
- Premium görünüm için gradient ve glow efektleri

### Kod Standartları
- Semantic HTML5 kullanın
- CSS Grid ve Flexbox tercih edin
- JavaScript'te modern ES6+ syntax kullanın
- BEM metodolojisini takip edin (opsiyonel)

### Özel Bileşenler
- Site kartları (.site-card)
- Bonus kartları (.bonus-card)
- Premium butonlar (.premium-btn)
- Hero section ile paralaks efekt

### Animasyon Rehberi
- Hover efektleri 0.3s transition
- Fade-in animasyonlar 0.6s duration
- Transform efektleri scale ve translateY kullanır
- Glow efektleri box-shadow ile oluşturulur

## Geliştirme Notları

### CSS Değişkenleri
```css
:root {
    --primary-gold: #FFD700;
    --dark-gold: #B8860B;
    --black: #000000;
    --dark-gray: #1a1a1a;
    --gradient-gold: linear-gradient(135deg, #FFD700, #FFA500, #FF8C00);
    --gradient-black: linear-gradient(135deg, #000000, #1a1a1a, #2a2a2a);
}
```

### JavaScript Fonksiyonları
- Smooth scrolling navigation
- Intersection Observer ile animasyonlar
- Counter animasyonları
- Parallax efektler
- Ripple button efektleri

### Responsive Breakpoints
- Mobile: max-width: 480px
- Tablet: max-width: 768px
- Desktop: 1200px max-width container

Bu proje, bahis siteleri tanıtım platformu olarak tasarlanmıştır ve kullanıcı deneyimini ön planda tutar.
