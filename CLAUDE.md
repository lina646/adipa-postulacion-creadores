# CLAUDE.md — adipa-postulacion-creadores

## Qué es este proyecto

Prueba técnica: llevar un flujo real de ADIPA (postulación de creadores de contenido / UGC
a un curso) desde un mapa conceptual hasta una web app simple desplegada en Vercel.

## Stack (ya decidido — no hay que elegirlo de nuevo)

- **Next.js 14 (App Router)** + **TypeScript**
- **Tailwind CSS** para estilos
- **Vercel KV** (Redis gestionado por Vercel) para guardar las postulaciones — se conecta
  desde el dashboard de Vercel con un clic, sin configurar nada a mano. Si en el BRIEF.md el
  volumen/modelo de datos termina siendo más simple, se puede usar en su lugar un array en
  memoria para la primera versión y anotar la limitación en "Fuera de alcance".
- Despliegue en **Vercel** (conectado directo al repo de GitHub — cada push a `main` genera un
  deploy).

## Identidad visual — ver DESIGN.md

Este repo incluye `DESIGN.md` con la guía de marca oficial de ADIPA (colores, tipografía,
componentes, reglas de logo). Toda pantalla que se construya debe seguir ese archivo:

- Color principal `#704EFD`, secundario `#2CB7FF`, fondo suave `#F3F4FF`.
- Tipografía **Poppins** (peso máximo Bold/700 en producto digital, nunca Extra Bold).
- Iconos solo de `@phosphor-icons/react`.
- Cards con el estilo descrito en la sección 15.4 de `DESIGN.md` (radio 8px, borde sutil,
  sombra discreta).

## Flujo de trabajo esperado

1. El mapa del journey (Excalidraw) lo hace la persona sola, sin ayuda de Claude.
2. El `BRIEF.md` se arma en Plan Mode, a partir del mapa — haciendo todas las preguntas
   necesarias antes de construir nada.
3. La construcción sigue el `BRIEF.md` al pie de la letra. Todo lo que no esté en el brief
   va a "Fuera de alcance", no se improvisa.
4. Se prueba el flujo completo localmente antes de desplegar a Vercel.

## Convenciones de código

- Componentes en `src/app` (App Router). Componentes compartidos en `src/components`.
- Sin librerías de UI pesadas (no shadcn/mui/etc.) — Tailwind plano + componentes propios
  simples, siguiendo `DESIGN.md`.
- Nombres de archivos y componentes en inglés; copy visible para el usuario final en español.
