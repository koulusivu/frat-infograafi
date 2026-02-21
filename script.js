/* Perusasetukset ja saavutettavuus */
:root {
    --nhs-blue: #005eb8;
    --nhs-white: #ffffff;
    --nhs-grey: #f0f4f5;
    --nhs-text: #212b32;
    --nhs-border: #d8dde0;
}

body {
    font-family: Arial, sans-serif; /* Selkeä sans-serif fontti */
    line-height: 1.6;
    color: var(--nhs-text);
    background-color: var(--nhs-white);
    margin: 0;
    padding: 0;
}

.container {
    max-width: 960px; /* Rajaa leveyden, jotta teksti on helppo lukea */
    margin: 0 auto;
    padding: 0 1rem;
}

/* Header */
.site-header {
    background-color: var(--nhs-blue);
    color: white;
    padding: 2rem 0;
    text-align: left;
}

/* Navigointi */
.main-nav {
    background-color: var(--nhs-grey);
    border-bottom: 4px solid var(--nhs-border);
}

.main-nav ul {
    list-style: none;
    padding: 0;
    display: flex;
}

.main-nav li {
    margin-right: 20px;
}

.main-nav a {
    text-decoration: none;
    color: var(--nhs-blue);
    font-weight: bold;
    display: block;
    padding: 10px 0;
}

/* Sisältöosiot */
.content-section {
    padding: 2rem 0;
    border-bottom: 1px solid var(--nhs-border);
}

/* Interaktiivinen laatikko */
.interactive-box {
    background-color: var(--nhs-grey);
    padding: 20px;
    border-radius: 4px;
    border-left: 10px solid var(--nhs-blue);
}

button {
    background-color: var(--nhs-blue);
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 1rem;
    cursor: pointer;
    margin-right: 10px;
}

button:hover {
    background-color: #003087; /* Tummempi sininen hover-efektissä */
}

/* Mobiiliresponsiivisuus */
@media (max-width: 600px) {
    .main-nav ul {
        flex-direction: column; /* Valikko allekkain puhelimella */
    }
    
    h1 {
        font-size: 1.5rem;
    }
}
