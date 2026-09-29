// Funcio per filtrar els projectes segons el boto premut
function filtrarProjectes(categoria) {
    const projectes = document.querySelectorAll('.tarjeta-projecte');
    const botons = document.querySelectorAll('.boto-filtre');

    // Treu la classe activa de tots els botons i la posa al seleccionat
    botons.forEach(boto => boto.classList.remove('actiu'));
    event.target.classList.add('actiu');

    // Mostra els projectes que coincideixen i amaga els altres
    projectes.forEach(projecte => {
        if (categoria === 'tots' || projecte.getAttribute('data-categoria') === categoria) {
            projecte.style.display = 'block';
        } else {
            projecte.style.display = 'none';
        }
    });
}

// Executa el codi quan tot el document HTML sha carregat
document.addEventListener('DOMContentLoaded', () => {
    // Selecciona els elements amb la classe danimacio
    const elementsAnimats = document.querySelectorAll('.animar-scroll');

    // Detecta quan un element entra al camp visual de la pantalla
    const observador = new IntersectionObserver((entrades) => {
        entrades.forEach(entrada => {
            if (entrada.isIntersecting) {
                entrada.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.15
    });

    // Posa lobservador a vigilar cada element de la llista
    elementsAnimats.forEach(element => observador.observe(element));
});