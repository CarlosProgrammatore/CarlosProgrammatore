// Riferimento al box delle frasi e al pulsante "Genera"
const phraseBox = document.getElementById('phraseBox');
const generateButton = document.getElementById('generateButton');
const copyButton = document.getElementById('copyButton');

// Event listener per il clic sul pulsante "Genera"
generateButton.addEventListener('click', generateAndDisplayPhrase);

// Event listener per il clic sul pulsante "Copia"
copyButton.addEventListener('click', copyPhraseToClipboard);

// Funzione per generare e visualizzare una frase casuale
function generateAndDisplayPhrase() {
    // Scegli una frase casuale dall'array di frasi
    const randomIndex = Math.floor(Math.random() * phrases.length);
    const randomPhrase = phrases[randomIndex];

    // Visualizza la frase nel box delle frasi
    phraseBox.textContent = randomPhrase;
}

// Funzione per copiare la frase negli appunti
function copyPhraseToClipboard() {
    // Seleziona il testo nella casella della frase
    const phraseText = phraseBox.textContent;
    
    // Aggiungi "GeneratoreDiFrasi.com" alla frase
    const textWithFooter = `${phraseText} - GeneratoreDiFrasi.com`;
    
    // Crea un elemento textarea nascosto per copiare il testo
    const textarea = document.createElement('textarea');
    textarea.value = textWithFooter;
    document.body.appendChild(textarea);
    
    // Seleziona il testo nell'elemento textarea
    textarea.select();
    textarea.setSelectionRange(0, 99999); // Per dispositivi mobili
    
    // Copia il testo negli appunti del dispositivo
    document.execCommand('copy');
    
    // Rimuovi l'elemento textarea
    document.body.removeChild(textarea);
    
    // Notifica l'utente che il testo è stato copiato
    alert('Frase copiata negli appunti!');
}
