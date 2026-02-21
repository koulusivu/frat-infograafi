/**
 * Funktio kaatumisriskin pika-arviointiin.
 * @param {boolean} isRisk - Onko käyttäjällä riski (true/false)
 */
function checkRisk(isRisk) {
    // Etsitään elementti, johon tulos kirjoitetaan
    const resultDiv = document.getElementById('risk-result');
    
    if (isRisk) {
        // Jos käyttäjä vastasi "Kyllä"
        resultDiv.innerHTML = `
            <div style="margin-top: 20px; color: #d0021b; font-weight: bold;">
                Huomio: Irtonaiset matot lisäävät riskiä. Suosittelemme liukuesteiden käyttöä tai mattojen poistamista.
            </div>
        `;
    } else {
        // Jos käyttäjä vastasi "Ei"
        resultDiv.innerHTML = `
            <div style="margin-top: 20px; color: #007f3b; font-weight: bold;">
                Hienoa! Kotisi vaikuttaa tältä osin turvalliselta.
            </div>
        `;
    }
    
    // Saavutettavuus: Siirretään fokus tulokseen, jotta ruudunlukuohjelmat huomaavat sen
    resultDiv.setAttribute('tabindex', '-1');
    resultDiv.focus();
}

// Konsoliviesti kehittäjälle (sinulle), jotta tiedät koodin latautuneen
console.log("Sivuston logiikka ladattu onnistuneesti.");
