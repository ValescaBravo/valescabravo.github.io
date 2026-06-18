// ============================================
// SCRIPT LOADER PARA TAGS DE ANALYTICS
// ============================================

(function() {
    'use strict';

    console.log('🚀 Iniciando carga de tags de analytics...');

    // ============================================
    // 1. GOOGLE TAG MANAGER (GTM)
    // ============================================
    const GTM_ID = 'GTM-KHLN3NSD';

    // Cargar GTM script
    (function(w,d,s,l,i){
        w[l]=w[l]||[];
        w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
        var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),
        dl=l!='dataLayer'?'&l='+l:'';
        j.async=true;
        j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
        f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer',GTM_ID);

    console.log('✅ GTM cargado con ID:', GTM_ID);

    // ============================================
    // 2. MICROSOFT CLARITY
    // ============================================
    // ✅ TU CLARITY ID REAL
    const CLARITY_ID = 'x95rlwgutf'; //

    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);
        t.async=1;
        t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];
        y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", CLARITY_ID);

    console.log('✅ Clarity cargado con ID:', CLARITY_ID);

    // ============================================
    // 3. HUBSPOT BADGE
    // ============================================
    const badgeHTML = `
        <div class="hubspot-badge-container" style="margin: 20px 0; text-align: center;">
            <div class='academy-badge'>
                <a href='https://app-eu1.hubspot.com/academy/achievements/npwd61dx/en/1/valesca-bravo/hubspot-revenue-operations-certified' 
                   title='HubSpot Revenue Operations Certified' 
                   target="_blank">
                    <img src='https://hubspot-credentials-na1.s3.amazonaws.com/prod/badges/user/014167b4f58d43eb922a5c2bea16fac6.png' 
                         alt='HubSpot Revenue Operations Certified Badge'
                         style="max-width: 150px; height: auto;" />
                </a>
            </div>
        </div>
    `;

    // Esperar a que el DOM esté listo
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            insertBadge();
        });
    } else {
        insertBadge();
    }

    function insertBadge() {
        const footer = document.querySelector('footer');
        if (footer) {
            footer.insertAdjacentHTML('beforeend', badgeHTML);
            console.log('✅ Badge HubSpot insertado en el footer');
        } else {
            document.body.insertAdjacentHTML('beforeend', badgeHTML);
            console.log('✅ Badge HubSpot insertado al final del body');
        }
    }

    // ============================================
    // 4. EVENTOS PERSONALIZADOS (Ejemplos)
    // ============================================
    // Tracking de clics en enlaces externos
    document.addEventListener('click', function(e) {
        const target = e.target.closest('a');
        if (target && target.href && target.hostname !== window.location.hostname) {
            if (window.dataLayer) {
                window.dataLayer.push({
                    'event': 'external_link_click',
                    'link_url': target.href,
                    'link_text': target.textContent || 'link'
                });
                console.log('🔗 Link externo clickeado:', target.href);
            }
        }
    });

    // Tracking de tiempo en página (opcional)
    let timeOnPage = 0;
    setInterval(() => {
        timeOnPage += 10;
        if (timeOnPage % 30 === 0) { // Cada 30 segundos
            if (window.dataLayer) {
                window.dataLayer.push({
                    'event': 'time_on_page',
                    'seconds': timeOnPage
                });
            }
        }
    }, 10000);

    console.log('✅ Todos los tags cargados y listos!');
    console.log('📊 Verifica en:');
    console.log('  - GTM: https://tagassistant.google.com/');
    console.log('  - Clarity: https://clarity.microsoft.com/');
    console.log('  - GA4: Debes configurarlo en GTM');

})();
