window.onload = function() {
    
    // Sprawdzenie czy biblioteka w ogóle się wczytała
    if (typeof confetti === 'undefined') {
        console.error("Biblioteka confetti nie została znaleziona!");
        return;
    }

    try {
        // Tworzenie kształtu serca
        const heart = confetti.shapeFromText({ text: '❤️', scalar: 3 });

        // Funkcja strzelająca
        const fire = () => {
            confetti({
                particleCount: 1000,
                spread: 360,
                origin: { y: 0.6 },
                shapes: [heart],
                colors: ['#ff69b4', '#ff0000']
            });
        };

        // Automatyczny wystrzał
        fire();
        

    } catch (err) {
        console.error("Twój błąd: ", err);
        // Jeśli serca nadal nie działają, strzel chociaż zwykłym konfetti, żeby nie było pusto
        confetti({ particleCount: 150, spread: 100, origin: { y: 0.6 } });
    }
};