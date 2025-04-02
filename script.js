function Solve(val) {
    var v = document.getElementById('res');
    
    // Prevent consecutive operators
    if (['+', '-', 'x', '/', '%'].includes(val) && ['+', '-', 'x', '/', '%'].includes(v.value.slice(-1))) {
        return;
    }
    
    v.value += val;
}

function Result() {
    var num1 = document.getElementById('res').value;
    try {
        var num2 = eval(num1.replace(/x/g, '*'));
        document.getElementById('res').value = num2;
    } catch {
        document.getElementById('res').value = 'Error';
    }
}

function Clear() {
    document.getElementById('res').value = '';
}

function Back() {
    var ev = document.getElementById('res');
    ev.value = ev.value.slice(0, -1);
}

document.addEventListener('keydown', function (event) {
    event.preventDefault(); // Prevents duplicate input
    
    const key = event.key;
    const validKeys = '0123456789+-*/.%';
    
    if (validKeys.includes(key)) {
        Solve(key === '*' ? 'x' : key);
    } else if (key === 'Enter') {
        Result();
    } else if (key === 'Backspace') {
        Back();
    } else if (key.toLowerCase() === 'c') {
        Clear();
    }
});