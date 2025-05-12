describe(' Pruebas en <DemoComponent />', () => {
    test('Esta prueba no debe de falla', () => {

        // Pasos de las Pruebas
        // 1. Inicialización
        const message1 = 'Hola Mundo';

        // 2. Estimulo
        const message2 = message1.trim();

        // 3. Observar el comportamiento... esperado. (Condición para que la prueba pase)
        expect(message1).toBe(message2);
    });
});