# William James Sidis — La venganza del silencio

Sitio de Valentino Gamboa · Coordinadora: Ana Cardenas · UTEC × MAC · 2026.

## Abrirlo

Extrae el ZIP y abre **index.html** con Chrome, Edge, Firefox o Safari. Conserva `styles.css`, `script.js` y la carpeta `assets` junto a `index.html`. No abras el HTML desde dentro del ZIP. No necesitas instalar nada, usar npm ni compilar.

## Subirlo a tu repositorio

1. Copia **todo el contenido extraído** dentro de tu carpeta actual `C:\Users\Valentino\Documents\poster_mac\web`. Reemplaza los archivos de la versión anterior. Los archivos deben quedar directamente junto a `index.html`, sin una carpeta adicional por encima. Conserva la carpeta `.git` de tu repositorio.
2. En la terminal de VS Code, abierta en esa carpeta, ejecuta:

```powershell
git add index.html styles.css script.js assets .nojekyll LEEME.md
git commit -m "Completa Martha Foley y el cierre de Pessoa"
git push origin main
```

Si Git rechaza el envío porque hay cambios remotos, no fuerces el push. Conserva tus archivos y revisa primero el mensaje de Git. El paquete no cambia la configuración ni el historial de tu repositorio.

3. En [tu repositorio](https://github.com/valirus/sidis), abre **Settings → Pages**. En **Build and deployment**, elige **Deploy from a branch**, rama **main**, carpeta **/(root)** y pulsa **Save**. Si esos valores ya estaban seleccionados, basta con subir los archivos.
4. Cuando termine la publicación, abre **https://valirus.github.io/sidis/**. La dirección `github.com/valirus/sidis` muestra el código; la dirección `valirus.github.io/sidis/` muestra la web. Si un QR del póster enlaza la segunda dirección, seguirá funcionando sin modificarlo.

Puedes seguir el estado de la publicación en la pestaña **Actions** del repositorio. La dirección pública no estará actualizada hasta que termine correctamente. Si aparece una versión antigua, prueba una recarga completa.

Alternativa sin terminal: en GitHub, **Add file → Upload files**, arrastra los archivos extraídos y la carpeta `assets`, y confirma el cambio en `main`. Sube los archivos del sitio, no el ZIP.

Documentación oficial: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Qué incluye

- Siete momentos y un prólogo: promesa, peso, ruptura, seudónimos, persecución, muerte y silencio.
- Un pasaje sobre Martha Foley antes de revelar la billetera: su activismo, su trabajo como escritora y editora, y la fotografía que William conservaba al morir. Se citan su propio testimonio, Story, Columbia y el relato de John H. Lienhard basado en Amy Wallace.
- «Se busca» aparece exactamente dos veces: en la portada y en el capítulo de la persecución.
- La última pieza de la página, después de los créditos, es el fragmento solicitado de «Tabaquería», atribuido a Fernando Pessoa / Álvaro de Campos, con traducción de Octavio Paz.
- Composición con tus fotografías y recortes reales, modelos de boletos recortados, logos y la billetera reutilizada del póster adjunto. Sin nuevas imágenes generadas por IA.
- Texto editable en `index.html`; colores, tamaños y composición en `styles.css`; apagado de la luz en `script.js`.
- Biografía contrastada y fuentes enlazadas, dentro de «Sobre la obra y sus fuentes». Las metáforas se distinguen de las afirmaciones históricas.
- 39 boletos en el cierre. La luz baja desde el centro, deja el pedestal vacío y alcanza la billetera antes de apagarse.
- Diseño para móvil desde 320 px, con adaptación a tablet y escritorio; navegación por teclado y preferencia de movimiento reducido.
- Sin seguimiento, cookies, audio, servicios externos, frameworks ni solicitudes de imágenes a terceros. Los enlaces bibliográficos solo se abren si se pulsan.
- El texto completo se conserva si JavaScript no está disponible. «Reducir movimiento», al pie, mantiene el final estático y legible; también se respeta la preferencia del dispositivo.

## Ajustes mínimos, si deseas hacerlos

Busca una frase en `index.html` con Ctrl+F y reemplázala. Guarda y vuelve a hacer `git add`, `git commit` y `git push`. No renombres `assets` ni cambies las rutas relativas.

El rótulo «SE BUSCA» es parte de la obra, no un aviso real. La fotografía de Martha que William conservaba al morir está recogida en relatos biográficos. El detalle de la billetera aparece en fuentes posteriores; no se ha localizado aquí un inventario contemporáneo que lo confirme. La billetera y la foto concretas del collage no se presentan como los objetos originales de Sidis. El intervalo de unos veinticinco años corresponde a 1919–1944, sin afirmar una custodia ininterrumpida demostrada.

La animación conserva su secuencia. Su recorrido se calcula con la altura real del escenario fijo, evitando cambios de ritmo cuando aparece o se oculta la barra del navegador del teléfono. Se añadieron ajustes para pantallas bajas y teléfonos en horizontal. La cita se adapta al ancho y permanece visible con o sin JavaScript.

## Materiales y tipografía

Los archivos de imagen provienen del ZIP y los logos aportados por el autor. La billetera se recortó de `Sidis-3D-115x185cm.pdf`. `new_1` y `new_13` eran duplicados y se conserva una sola copia optimizada. No se utilizaron los modelos con marcas de agua ni el escenario titulado «Empty pedestal beneath a warm spotlight».

Latin Modern Roman se incluye localmente, sin modificar sus archivos originales, con su licencia GUST en `assets/GUST-FONT-LICENSE.txt`. Créditos tipográficos: Bogusław Jackowski y Janusz M. Nowacki / GUST. Información del proyecto: https://www.gust.org.pl/projects/e-foundry/latin-modern

## Comprobaciones de esta entrega

Se revisaron las rutas locales, imágenes, anclas, estructura HTML y la sintaxis de JavaScript; también se comprobó la estructura de la hoja de estilos. Las pruebas de ejecución cubren el apagado, el retorno, las referencias, el movimiento reducido, el cambio de orientación y las variaciones de la barra del navegador móvil. Se verificaron las medidas tipográficas de la cita desde 320 px. No se pudo realizar una comprobación visual en un navegador real desde este entorno. Antes de la exposición, abre la web en tu teléfono y recórrela hasta el final; el paquete no se ha publicado automáticamente.
