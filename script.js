let currentInput = '';
let history = [];

function appendNumber(num) {
    currentInput += num;
    updateDisplay(currentInput);
}

function appendOperator(op) {
    if (currentInput === '') return;
    currentInput += ' ' + op + ' ';
    updateDisplay(currentInput);
}

function updateDisplay(val) {
    document.getElementById('display-top').innerText = val;
    document.getElementById('display-bottom').innerText = val;
}

function clearDisplay() {
    currentInput = '';
    updateDisplay('0');
}

function calculate() {
    try {
        let result = eval(currentInput);
        
        // Katana Animasyonunu Tetikle
        const wrapper = document.querySelector('.display-wrapper');
        wrapper.classList.add('slash-anim');
        
        setTimeout(() => {
            history.push(`${currentInput} = ${result}`);
            currentInput = result.toString();
            updateDisplay(result);
            wrapper.classList.remove('slash-anim');
        }, 300);

    } catch (e) {
        updateDisplay("Hata");
        currentInput = '';
    }
}

function toggleMenu() {
    document.getElementById('sidebar').classList.toggle('active');
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

function aboutApp() {
    alert("isoOS © 2026");
}

function showHistory() {
    const list = document.getElementById('history-list');
    list.innerHTML = '<h4>Geçmiş</h4>' + history.map(item => `<p>${item}</p>`).join('');
}