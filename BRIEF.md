# Brief · Postulación de Creadores/UGC — ADIPA

## Problema que resuelve
Hoy la convocatoria para creadores de contenido/UGC vive dispersa entre Instagram y mensajes
directos, sin una página con la marca de ADIPA que explique la colaboración de forma clara
antes de postularse. Esta app resuelve solo esa primera pieza: una landing oficial que explica
el programa y lleva directo al formulario de postulación. Todo lo demás del proceso (revisión,
aprobación, cupón, seguimiento, recordatorios) ya funciona bien hoy en Monday y no se reconstruye.

## Usuario principal y roles
- **Usuario principal:** la persona creadora (estudiante o profesional de psicología o carrera
  afín) que quiere postularse a la colaboración UGC.
- **Equipo de Comunicaciones de ADIPA** (cualquier persona del equipo): no interactúa con la app
  directamente — sigue revisando, aprobando y gestionando todo desde el tablero de Monday, igual
  que hoy.

## Pantallas / piezas (en orden del journey)
1. **Landing pública** — explica qué es ADIPA, en qué consiste la colaboración UGC, qué se
   ofrece (acceso a curso asincrónico vía cupón), qué se pide (2 videos verticales) y para quién
   es. Sigue la identidad visual de `DESIGN.md`.
2. **Videos de ejemplo** — 2 videos reales de creadores anteriores, embebidos con reproductor
   nativo (`<video>`), para mostrar el tipo de contenido esperado.
3. **Selector de brief por país** — botones Colombia/México que muestran un enlace de descarga
   al brief PDF de cada país (el valor del cupón sí aparece dentro del PDF, ya en el contexto
   correcto de su país — no se muestra un precio genérico suelto en la landing).
4. **Formulario de postulación** — el formulario nativo de Monday, embebido (iframe) dentro de
   la misma landing. Captura: nombre, edad, teléfono, correo, usuario de IG/TikTok, país, curso
   de interés.
5. **Confirmación de envío** — la pantalla de agradecimiento que Monday muestra nativamente al
   completar su formulario embebido (no se construye una pantalla de confirmación aparte).

## Datos por pantalla
- **Landing:** no captura datos, solo muestra información institucional y el formulario embebido.
- **Formulario (Monday):** entran nombre, edad, teléfono, correo, IG/TikTok, país, curso de
  interés → salen directo al tablero de Monday (no pasan por ningún backend propio de esta app).

## Reglas de negocio
- Si la postulación es aprobada en Monday → Monday envía correo de aprobación + cupón (fuera de
  esta app).
- Si la postulación es rechazada en Monday → Monday envía correo de rechazo (fuera de esta app).
- Si la persona no completa el curso y envía los 2 videos dentro de 15 días desde la activación
  del cupón → pierde el acceso y no queda habilitada para futuras colaboraciones (regla de
  negocio, gestionada y recordada vía Monday, no por esta app).

## Fuera de alcance
- Panel de administración propio dentro de la app (se sigue usando el tablero de Monday tal cual).
- Envío automático de correos/cupones/recordatorios desde código propio (lo hacen las
  automatizaciones nativas de Monday).
- Autenticación o login de cualquier tipo.
- Base de datos o almacenamiento propio (Vercel KV u otro) — no hay datos que persistir en el
  lado de la app, todo vive en Monday.
- Consulta de estado de la postulación por parte del creador dentro de la app.
- Subida o envío del contenido final (los 2 videos) dentro de la app — se sigue enviando por
  correo/WhatsApp como hoy.

## Nota de contenido pendiente
- Los PDFs de brief (Colombia y México) todavía dicen "14 días para completar el curso + 7 días
  para enviar el contenido" en vez de "15 días en total" (la regla vigente). Se le indicó a Lina
  el texto exacto a corregir en el documento fuente; la app ya muestra "15 días en total" de
  forma correcta, independientemente del PDF.

## Preguntas abiertas
- Confirmar con Lina, antes de desplegar, la URL/embed code exacto del formulario de Monday
  (se obtiene desde "Compartir formulario" → "Embed" en Monday).

## Retrospectiva

**1. ¿Qué pregunta de Claude te hizo dar cuenta de algo que no tenías claro del flujo?**
Quería que las personas se redireccionaran a la página de ADIPA según su país a la sección de
cursos asincrónicos, y no tenía muy claro cómo integrar eso en el flujo.

**2. ¿Qué diferencia hubo entre tu mapa inicial y lo que terminaste construyendo?**
Mi mapa inicial no tenía el paso del brief descargable por país, y terminó siendo parte central
de la app. También pensaba que al seleccionar el curso se generaría el cupón automáticamente,
pero no se pudo conectar con el sistema de cupones, así que ese paso sigue siendo manual. En
general, la app terminó siendo más simple de lo que imaginaba al principio: no tiene panel de
administración propio, porque el tablero de Monday ya cumple ese rol.

**3. Si tuvieras que hacer este flujo de verdad para ADIPA, ¿cuál sería el primer riesgo o pieza faltante?**
Todavía no hay ninguna automatización que avise cuando se cumplen los 15 días para la entrega
del contenido — depende de que alguien revise el tablero de Monday manualmente. Además, el
formulario depende 100% de que el embed de Monday siga funcionando; si cambia la URL o se cae
el servicio, la postulación se rompe sin aviso. Y no hay forma de que el creador consulte el
estado de su postulación por su cuenta — todo depende de que el equipo le escriba.
