// ============================================
// SCRIPT LOADER PARA TAGS DE ANALYTICS
// ============================================
// Este archivo carga todos los snippets de tracking
// de manera ordenada y controlada

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

    // Agregar el iframe de GTM (noscript) - solo para navegadores sin JS
    // Este se agregará al body mediante un elemento oculto
    const noscriptGTM = document.createElement('noscript');
    noscriptGTM.innerHTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`;
    document.body.insertBefore(noscriptGTM, document.body.firstChild);

    console.log('✅ GTM cargado correctamente');

    // ============================================
    // 2. MICROSOFT CLARITY
    // ============================================
    // Reemplaza con tu ID de Clarity
    const CLARITY_ID = 'tu-clarity-id-aqui'; // ← CAMBIA ESTO

    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);
        t.async=1;
        t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];
        y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", CLARITY_ID);

    console.log('✅ Clarity cargado correctamente');

    // ============================================
    // 3. GOOGLE ANALYTICS 4 (GA4)
    // ============================================
    // NOTA: Si usas GTM, GA4 se carga desde GTM
    // Si quieres cargarlo directamente, descomenta esto:
    /*
    const GA4_ID = 'G-XXXXXXXXXX'; // ← CAMBIA ESTO
    
    // Cargar GA4
    (function() {
        const script = document.createElement('script');
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`;
        document.head.appendChild(script);
        
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', GA4_ID);
    })();
    console.log('✅ GA4 cargado correctamente');
    */

    // ============================================
    // 4. HUBSPOT BADGE
    // ============================================
    // Insertar el badge de HubSpot en el footer o donde quieras
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
        // Buscar un lugar para insertar el badge
        // Opción 1: Si hay un footer
        const footer = document.querySelector('footer');
        if (footer) {
            footer.insertAdjacentHTML('beforeend', badgeHTML);
            console.log('✅ Badge HubSpot insertado en el footer');
            return;
        }

        // Opción 2: Al final del body
        document.body.insertAdjacentHTML('beforeend', badgeHTML);
        console.log('✅ Badge HubSpot insertado al final del body');
    }

    // ============================================
    // 5. EVENTOS PERSONALIZADOS (Ejemplos)
    // ============================================
    // Puedes agregar eventos personalizados aquí
    // Ejemplo: tracking de clics en enlaces
    document.addEventListener('click', function(e) {
        const target = e.target;
        // Tracking de clics en enlaces externos
        if (target.tagName === 'A' && target.href && target.hostname !== window.location.hostname) {
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

    console.log('✅ Todos los tags cargados y listos!');
    console.log('📊 Verifica en:');
    console.log('  - GTM: https://tagassistant.google.com/');
    console.log('  - Clarity: https://clarity.microsoft.com/');
    console.log('  - GA4: https://analytics.google.com/');

})();
