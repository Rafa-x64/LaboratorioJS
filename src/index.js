console.clear();

const ejercicios = ["02", "04", "06", "08", "10", "12", "14", "16", "18", "20"];

for (const num of ejercicios) {
    console.log(`\n\x1b[1m\x1b[36m--- Ejercicio ${num} ---\x1b[0m`);
    await import(`./ej${num}.js`);
}
