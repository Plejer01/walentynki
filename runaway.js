document.addEventListener('DOMContentLoaded', () => {
    // Zmieniono na ID: runaway-btn
    const button = document.getElementById("runaway-btn");
    const margin = 30;
    const segmentSize = 10;

    function moveButton() {
        let t = button.getBoundingClientRect();
        let e = t.width;
        let n = t.height;

        // Obliczanie dostępnej przestrzeni
        let o = window.innerWidth - e - 2 * margin;
        let i = window.innerHeight - n - 2 * margin;

        let left, top;

        // Efekt znikania przed skokiem
        button.style.opacity = 0;
        button.style.transition = "opacity 0.2s, transform 0.2s ease-out";

        setTimeout(() => {
            let attempts = 0;
            do {
                left = Math.random() * o + margin;
                top = Math.random() * i + margin;
                attempts++;
                // Próbuje znaleźć wolne miejsce, ale po 20 próbach poddaje się i skacze gdziekolwiek
            } while (isColliding(left, top, e, n, 10, 10) && attempts < 20);

            // Używamy pozycji bezwzględnej zamiast translate, jeśli chcesz uniknąć problemów z Flexem
            button.style.position = "fixed"; 
            button.style.left = `${left}px`;
            button.style.top = `${top}px`;
            button.style.transform = "none"; 
            button.style.opacity = 1;
        }, 200);
    }

    function isColliding(t, e, n, o, i, l) {
        let cols = Math.floor((n + 2 * i) / segmentSize);
        let rows = Math.floor((o + 2 * i + 2 * l) / segmentSize);

        for (let u = 0; u <= cols; u++) {
            for (let _ = 0; _ <= rows; _++) {
                let m = segmentSize * u;
                let s = segmentSize * _;
                let a = document.elementsFromPoint(t + m, e + s);
                for (let d of a) {
                    // Sprawdza, czy w nowym miejscu nie ma innych elementów (np. kontenera z tekstem)
                    if (d !== button && !d.contains(button) && d.tagName !== "BODY" && d.tagName !== "HTML") {
                        return true;
                    }
                }
            }
        }
        return false;
    }

    button.addEventListener("mouseenter", moveButton);
    button.addEventListener("click", moveButton);
});


function delayRedirect() {
    
    setTimeout(function() {
        window.location.href = "yes.html";
    }, 1000); 
}


