---
name: "ADIPA Design System"
version: "1.0.0"
status: "brand-aligned-draft"
description: "Guía de diseño y tokens de marca para ADIPA, alineada con el manual oficial de marca. Este archivo orienta diseño, marketing, producto, frontend y agentes de IA."
language: "es"
source_of_truth: "Manual de marca oficial de ADIPA"
brand:
  name: "ADIPA"
  identity_attributes:
    - "educativa"
    - "profesional"
    - "cercana"
    - "confiable"
    - "moderna"
    - "clara"
  usage_contexts:
    - "producto digital"
    - "sitio web"
    - "marketing"
    - "redes sociales"
    - "email marketing"
    - "recursos académicos"
    - "ebooks"
    - "infografías"
    - "material impreso"

tokens:
  color:
    logo:
      purple:
        hex: "#7D61F1"
        rgb: "125, 97, 241"
        cmyk: "71, 67, 0, 0"
      cyan:
        hex: "#72CAF7"
        rgb: "114, 202, 247"
        cmyk: "54, 3, 0, 0"
    primary:
      purple:
        hex: "#704EFD"
        rgb: "112, 78, 253"
        cmyk: "79, 72, 0, 0"
      cyan:
        hex: "#2CB7FF"
        rgb: "44, 183, 255"
        cmyk: "65, 13, 0, 0"
      gray:
        hex: "#F3F4FF"
        rgb: "243, 244, 255"
        cmyk: "6, 4, 0, 0"
    secondary:
      navy:
        hex: "#091E42"
        rgb: "9, 30, 66"
        cmyk: "100, 89, 44, 49"
      light_blue:
        hex: "#CBE8FF"
        rgb: "203, 232, 255"
        cmyk: "24, 2, 0, 0"
      lavender:
        hex: "#DFD5FF"
        rgb: "223, 213, 255"
        cmyk: "15, 19, 0, 0"
    support:
      purple: "#704EFD"
      cyan: "#2CB7FF"
      light: "#F3F4FF"
    campaign:
      red:
        hex: "#F61710"
        rgb: "246, 23, 16"
        cmyk: "0, 94, 91, 0"
        contexts: "Black Friday, Buen Fin, Hot Sale"
      yellow:
        hex: "#FFC728"
        rgb: "255, 199, 40"
        cmyk: "0, 24, 87, 0"
        contexts: "descuentos, énfasis"
      orange:
        hex: "#FF7415"
        rgb: "255, 116, 21"
        cmyk: "0, 64, 91, 0"
        contexts: "Cyber, Halloween, Día de Muertos"
      pinkLight:
        hex: "#FFDCE8"
        rgb: "255, 220, 232"
        cmyk: "0, 21, 2, 0"
        contexts: "San Valentín"
      greenDark:
        hex: "#13631F"
        rgb: "19, 99, 31"
        cmyk: "88, 34, 100, 29"
        contexts: "Fiestas Patrias MX"
      magenta:
        hex: "#FF017C"
        rgb: "255, 1, 124"
        cmyk: "0, 94, 11, 0"
        contexts: "San Valentín, Congreso, Día de Muertos"
    active:
      purple: "#704EFD"
      cyan: "#2CB7FF"
      magenta: "#FF017C"
      red: "#F61710"
      yellow: "#FFC728"
      orange: "#FF7415"
    neutral:
      white: "#FFFFFF"
      black: "#000000"
      logo_container: "#FFFFFF"
      logo_container_shadow: "rgba(0, 0, 0, 0.15)"
      logo_grayscale: "#9D9D9C"
    print:
      primary_purple:
        hex: "#635DA6"
        cmyk: "71, 67, 0, 0"
      primary_blue:
        hex: "#4BB3E6"
        cmyk: "65, 13, 0, 0"
      primary_cyan:
        hex: "#1BA2DC"
        cmyk: "74, 18, 0, 0"
      secondary_navy:
        hex: "#1A2340"
        cmyk: "100, 89, 44, 49"
      secondary_light_blue:
        hex: "#CCE7FA"
        cmyk: "23, 2, 0, 0"
      secondary_lavender:
        hex: "#DED4EA"
        cmyk: "14, 19, 0, 0"
    schools:
      adult_mental_health:
        name: "Escuela de Salud Mental Adultos"
        primary: "#432D86"
        secondary: "#5F459B"
        soft: "#E4D3EF"
      child_youth_mental_health:
        name: "Escuela de Salud Mental Infantojuvenil"
        primary: "#0272AA"
        secondary: "#00B7FF"
        soft: "#B6E9FD"
      organizational_psychology:
        name: "Escuela de Psicología Organizacional"
        primary: "#B20000"
        secondary: "#F90000"
        soft: "#F8E1E1"
      education_neurodevelopment:
        name: "Escuela de Educación y Neurodesarrollo"
        primary: "#00770E"
        secondary: "#46A732"
        soft: "#CFFFD2"
      psychosocial_legal:
        name: "Escuela Psicosocial Jurídica"
        primary: "#CC6A00"
        secondary: "#FF8B00"
        soft: "#FFE2C2"
  typography:
    primary:
      family: "Poppins"
      usage: "Tipografía principal. Usar siempre que esté disponible."
      weights:
        regular: 400
        medium: 500
        semibold: 600
        bold: 700
        extra_bold: 800
    fallback:
      family: "Helvetica"
      usage: "Alternativa excepcional cuando Poppins no esté disponible."
    ebook:
      body: "Poppins Regular 9pt"
      highlighted_words: "Poppins Semibold 9pt"
      subtitles: "Poppins Semibold 13pt"
      titles: "Poppins Bold 24pt"
  logo:
    allowed_forms:
      - "logotype"
      - "isotype"
    minimum_height_print: "10mm"
    clear_space_unit: "X"
    clear_space_reference: "Elemento estructural de la letra A del isotipo/logo principal."
    direct_backgrounds:
      full_color:
        - "#FFFFFF"
        - "#F3F4FF"
      white_monochrome:
        - "#704EFD"
        - "#2CB7FF"
        - "#091E42"
    container:
      background: "#FFFFFF"
      shadow_color: "#000000"
      shadow_opacity: 0.15
      vertex_scales:
        - 22
        - 75
  graphic_elements:
    approved_brand_patterns:
      - "círculos"
      - "ondas"
      - "cuadros con bordes redondeados"
      - "semicírculos"
      - "formas abstractas"
    campaign_patterns:
      - "ondas"
      - "puntos"
      - "nubes"
      - "patrones de texto"
      - "elementos alusivos a festividades"
      - "líneas"
    additional_resources:
      - "puntos"
      - "círculos"
      - "ondas"
      - "elementos 3D"
      - "emoji"
      - "íconos"
    follow_through_elements:
      - "flecha con dos triángulos"
      - "flecha con un triángulo"
      - "flecha con un triángulo redondeado"
      - "flecha con dos triángulos redondeados"
      - "flecha simple"
  photography:
    style: "limpio, natural, bien iluminado, profesional, académico, cercano y creíble"
    preferred_subjects: "mujeres adultas de 25 años en adelante con apariencia profesional o académica, cuando el contexto lo amerite"
    preferred_sources:
      - "carpeta oficial de fotografías docentes en Dropbox"
      - "tablero de Monday: Información docente"
  color_balance:
    base_palette: "80%"
    secondary_active_accent_palette: "20%"
---

# ADIPA DESIGN.md

## 1. Propósito del documento

Este `DESIGN.md` traduce el manual oficial de marca de ADIPA en reglas prácticas para diseño, marketing, comunicación, frontend y agentes de IA. Su función es evitar interpretaciones inconsistentes de la marca y servir como referencia operativa al crear interfaces, piezas gráficas, recursos académicos, campañas, emails, landing pages y componentes digitales.

Este documento no reemplaza el manual de marca. Lo convierte en lineamientos accionables. Si existe conflicto entre este archivo y el manual oficial, prevalece el manual oficial.

## 2. Principios visuales de ADIPA

La identidad visual de ADIPA debe transmitir:

- Profesionalismo.
- Credibilidad académica.
- Cercanía.
- Claridad.
- Modernidad.
- Confianza.
- Coherencia institucional.

Las composiciones deben sentirse educativas y especializadas, sin caer en una estética genérica SaaS, excesivamente decorativa, informal, infantil, experimental o desconectada de la marca.

## 3. Reglas generales para IA y equipos

Toda IA, diseñador, desarrollador o persona del equipo debe cumplir estas reglas:

- No inventar colores, tipografías, formas, escudos, logos o patrones fuera del sistema de marca.
- No aproximar colores desde screenshots.
- No reconstruir logos o escudos manualmente.
- No alterar proporciones, posiciones, colores o geometrías de activos oficiales.
- Usar archivos oficiales siempre que existan.
- Mantener prioridad en legibilidad, jerarquía, contraste y claridad.
- Usar colores activos y recursos gráficos con moderación.
- Modernizar interfaces sin romper la familiaridad visual de ADIPA.
- **Iconografía:** usar exclusivamente `@phosphor-icons/react` (Phosphor) en todo el front. No introducir otras librerías de iconos (p. ej. `lucide-react`). Peso por defecto `regular`; usar `weight="fill"` para íconos sólidos (estrellas de rating, play, etc.). Tamaño y color con clases Tailwind (`size-*`, `text-*`), no con props `size`/`color`.
- **Overlays:** todos los drawers, sheets y modales con fondo difuminado usan la clase global `.adipa-overlay` (mismo color y blur que el cart sheet de adipa-widgets). No definir `bg`/`backdrop-blur` por componente.
- Solicitar validación si un caso no está cubierto por el manual o por este archivo.

---

## 4. Logo ADIPA

### 4.1 Logotipo e isotipo

La marca ADIPA está formada por:

- **Logotipo:** la palabra ADIPA como marca completa.
- **Isotipo:** el símbolo independiente de la marca.

Ambos pueden utilizarse de forma individual cuando la situación lo amerite, siempre que se respeten sus proporciones, colores, archivos oficiales y reglas de aplicación.

### 4.2 Construcción del logo

El logo tiene una construcción reticular definida. Esta construcción es una referencia de proporción, no una instrucción para redibujar el logo.

**Regla obligatoria:** el logo y el isotipo siempre deben reproducirse desde archivos originales oficiales.

No se permite:

- Redibujar el logo.
- Trazarlo desde capturas.
- Reconstruirlo con CSS, SVG manual, texto o formas geométricas.
- Estirar, comprimir, rotar, inclinar o modificar sus elementos.
- Cambiar colores, grosores, espaciados o proporciones.

### 4.3 Área de seguridad

El espacio de seguridad se define a partir de la unidad **X**, tomada de uno de los elementos que construyen la letra **A** del isotipo y logo principal.

Debe mantenerse al menos **X** de espacio libre alrededor del logo o isotipo. Ningún texto, botón, ícono, borde, patrón, imagen o componente debe invadir esta zona.

### 4.4 Tamaño mínimo

Para preservar lectura y pregnancia de marca, el tamaño mínimo permitido en impresión es:

- **10 mm de alto** para el logotipo.
- **10 mm de alto** para el isotipo.

La proporción horizontal debe mantenerse según el archivo original. En digital, el tamaño debe garantizar legibilidad equivalente; si el logotipo completo pierde claridad, usar el isotipo oficial en contextos compactos.

---

## 5. Cajas o envolventes del logo

### 5.1 Propósito

La caja o envolvente protege la legibilidad del logo cuando el fondo compromete su visibilidad. Permite conservar los colores originales sin distorsión en fotografías, fondos de color, texturas, materiales externos o piezas de terceros.

### 5.2 Color obligatorio

La caja del logo debe ser siempre blanca:

```yaml
logo_container_background: "#FFFFFF"
```

No usar cajas con colores, transparencias, gradientes, texturas o patrones si no están aprobadas en el manual.

### 5.3 Cuándo usar caja

Usar caja blanca cuando el logo o isotipo se coloque sobre:

- Fondos que reduzcan contraste.
- Imágenes.
- Texturas.
- Patrones.
- Fondos de terceros.
- Colores sólidos no incluidos en la paleta oficial.
- Colores pastel o superficies claras que afecten la lectura.

### 5.4 Formas aprobadas

Para isotipo:

- Cuadrado con bordes redondeados.
- Cuadrado con bordes inferiores redondeados.
- Cuadrado con bordes inferiores circulares.
- Cuadrado con bordes laterales circulares.

Para logotipo:

- Rectángulo horizontal con bordes redondeados.
- Rectángulo horizontal con bordes laterales redondeados.
- Rectángulo horizontal con bordes laterales circulares.

Escalas de vértices documentadas:

```yaml
logo_container_vertex_scales:
  - 22
  - 75
```

No inventar nuevas cajas, marcos, contornos o envolventes.

### 5.5 Sombra en cajas

Como la caja es blanca, puede usar sombra sutil únicamente sobre fondos claros donde necesite separación visual.

```yaml
logo_container_shadow:
  color: "#000000"
  opacity: 0.15
  alignment: "centrada"
```

No usar sombra en fondos oscuros o de alto contraste. No aplicar sombras directamente al logo.

---

## 6. Aplicación del logo sobre fondos

### 6.1 Logo full-color

El logo a color solo puede ir directamente sobre:

```yaml
logo_full_color_direct_backgrounds:
  - "#FFFFFF"
  - "#F3F4FF"
```

### 6.2 Logo blanco monocromático

El logo blanco solo puede usarse directamente sobre:

```yaml
logo_white_direct_backgrounds:
  adipa_purple: "#704EFD"
  adipa_cyan: "#2CB7FF"
  adipa_navy: "#091E42"
```

### 6.3 Otros fondos

En cualquier otro escenario —colores pastel, colores de campaña, imágenes, texturas, fondos no oficiales o fondos complejos— usar el logo full-color dentro de caja blanca.

### 6.4 Reglas de contraste

- Mantener contraste alto y lectura inmediata.
- No colocar el logo sobre zonas saturadas, con ruido visual o texturas invasivas.
- No superponer el logo con texto, íconos, patrones, bordes o elementos gráficos.
- Si la legibilidad no es obvia, usar caja blanca.

---

## 7. Usos incorrectos del logo

Está prohibido:

- Cambiar colores originales fuera de versiones aprobadas.
- Deformar, estirar, comprimir, rotar o inclinar.
- Cambiar posición de elementos internos.
- Modificar tamaño relativo de los elementos.
- Aplicar sobre bajo contraste sin caja.
- Integrar el logo dentro de texturas.
- Usar fondos no establecidos sin caja.
- Agregar contornos, trazos o bordes.
- Cambiar rellenos por tricromía, cuatricromía o tinta directa no aprobada.
- Agregar sombras, brillos, gradientes, filtros o efectos al logo.
- Combinarlo con símbolos o textos no aprobados.
- Usarlo como patrón decorativo salvo que exista activo oficial.

---

## 8. Versiones monocromáticas

Las versiones blanco, negro y escala de grises son excepcionales. Solo deben utilizarse cuando no sea posible aplicar la versión a color o la versión blanca sobre colores institucionales aprobados.

Tono gris aprobado:

```yaml
logo_grayscale_tone: "#9D9D9C"
```

Escenarios aceptables:

- Papelería a una tinta.
- Bordados.
- Estampados especiales.
- Materiales institucionales o promocionales con limitaciones técnicas.
- Materiales externos donde no se controle el fondo o la impresión.

No usar versiones monocromáticas por conveniencia cuando la versión a color pueda aplicarse correctamente.

---

## 9. Sistema de color

### 9.1 Colores del logotipo

Estos colores pertenecen al arte oficial del logo. No deben reemplazarse por los colores principales de UI.

```yaml
logo_colors:
  purple: "#7D61F1"
  cyan: "#72CAF7"
```

### 9.2 Colores corporativos principales

```yaml
adipa_main_colors:
  purple: "#704EFD"
  cyan: "#2CB7FF"
  gray: "#F3F4FF"
```

Roles recomendados:

- `#704EFD`: color principal de marca, énfasis, identidad, títulos destacados, CTA primario según contraste.
- `#2CB7FF`: color secundario energético, acentos, elementos de apoyo, CTA alternativo.
- `#F3F4FF`: fondo suave de marca, superficies, secciones limpias, aplicaciones seguras del logo.

### 9.3 Colores complementarios o secundarios

```yaml
adipa_secondary_colors:
  navy: "#091E42"
  light_blue: "#CBE8FF"
  lavender: "#DFD5FF"
```

Usos indicados por el manual:

- Redes sociales.
- Recursos gratuitos.
- Ebooks.
- Infografías.
- Equilibrio visual.
- Colores de acompañamiento.

### 9.4 Colores de apoyo y colores de campaña

Los colores de apoyo son alias semánticos de los colores principales. Los colores de campaña son contextuales y exclusivos para campañas temporales.

```yaml
support_colors:
  purple: "#704EFD"   # alias de brand-purple
  cyan: "#2CB7FF"     # alias de brand-cyan
  light: "#F3F4FF"    # alias de brand-light

campaign_colors:
  red: "#F61710"         # Black Friday, Buen Fin, Hot Sale
  yellow: "#FFC728"      # descuentos, énfasis
  orange: "#FF7415"      # Cyber, Halloween, Día de Muertos
  pinkLight: "#FFDCE8"   # San Valentín
  greenDark: "#13631F"   # Fiestas Patrias MX
  magenta: "#FF017C"     # San Valentín, Congreso, Día de Muertos
```

Los colores de campaña son contextuales para eventos como Black Friday, Buen Fin, Hot Sale, San Valentín, Fiestas Patrias, Cyber, Halloween, Día de Muertos y Congreso.

No deben reemplazar la identidad principal de ADIPA ni convertirse en colores base del producto digital.

### 9.5 Colores activos

```yaml
active_colors:
  purple: "#704EFD"
  cyan: "#2CB7FF"
  magenta: "#FF017C"
  red: "#F61710"
  yellow: "#FFC728"
  orange: "#FF7415"
```

Los colores activos sirven para aportar dinamismo, énfasis y energía. Pueden aplicarse en botones, llamados a la acción, íconos, acentos, secciones destacadas y campañas.

Usarlos con moderación. No deben saturar el diseño ni competir con el logo.

### 9.6 Regla 80/20

Mantener una proporción aproximada:

```yaml
color_balance:
  primary_palette: "80%"
  secondary_active_accent_palette: "20%"
```

El 80% debe apoyarse en la paleta principal y superficies neutras de ADIPA. El 20% puede usar colores secundarios, acentos o activos para destacar elementos puntuales.

### 9.7 Gradientes y combinaciones sugeridas

Los gradientes pueden usarse en campañas, posts especiales, marketing, redes sociales, sitio web, ebooks, manuales e infografías.

Construir gradientes solo con colores oficiales. Combinaciones sugeridas:

```yaml
suggested_gradients:
  primary_purple_to_cyan:
    from: "#704EFD"
    to: "#2CB7FF"
  lavender_to_gray:
    from: "#DFD5FF"
    to: "#F3F4FF"
  light_blue_to_gray:
    from: "#CBE8FF"
    to: "#F3F4FF"
  cyan_to_light_blue:
    from: "#2CB7FF"
    to: "#CBE8FF"
  purple_to_lavender:
    from: "#704EFD"
    to: "#DFD5FF"
  navy_to_purple:
    from: "#091E42"
    to: "#704EFD"
  pink_light_to_gray:
    from: "#FFDCE8"
    to: "#F3F4FF"
  lavender_to_light_blue:
    from: "#DFD5FF"
    to: "#CBE8FF"
```

#### Reglas de uso de gradientes en producto digital

- **Gradiente estándar de marca:** `primary_purple_to_cyan` (`#704EFD` → `#2CB7FF`). Es el gradiente principal de ADIPA. Usar en heroes, banners y piezas generales de producto y marketing.
- **Navy reservado para contextos premium:** El color `#091E42` (navy) y las combinaciones que lo incluyen (`navy_to_purple`) se usan únicamente en: ventas nocturnas, Black Friday, Hot Sale, postítulos y sesiones magistrales. No mezclar navy en gradientes de contenido regular.
- **No construir gradientes de 3 stops que incluyan navy + purple + cyan simultáneamente.** Ese tratamiento rompe la legibilidad de marca y no corresponde al uso estándar.

No usar gradientes detrás de textos densos si afectan legibilidad. No colocar el logo directamente sobre gradientes sin caja blanca.

### 9.8 Paleta para uso impreso

```yaml
print_color_palette:
  primary_purple: "#635DA6"
  primary_blue: "#4BB3E6"
  primary_cyan: "#1BA2DC"
  secondary_navy: "#1A2340"
  secondary_light_blue: "#CCE7FA"
  secondary_lavender: "#DED4EA"
```

Usar esta paleta para materiales impresos o producción CMYK. No reemplazar automáticamente la paleta digital en frontend o pantallas.

---

## 10. Escuelas de ADIPA

### 10.1 Escudos oficiales

Las escuelas cuentan con escudos oficiales. Deben usarse desde archivos fuente oficiales y no como íconos genéricos.

Escuelas:

- Escuela de Salud Mental Adultos.
- Escuela de Salud Mental Infantojuvenil.
- Escuela de Psicología Organizacional.
- Escuela de Educación y Neurodesarrollo.
- Escuela Psicosocial Jurídica.

No redibujar, simplificar, recolorear, distorsionar o recrear los escudos.

### 10.2 Colores por escuela

```yaml
school_color_palettes:
  adult_mental_health:
    name: "Escuela de Salud Mental Adultos"
    primary: "#432D86"
    secondary: "#5F459B"
    soft: "#E4D3EF"
  child_youth_mental_health:
    name: "Escuela de Salud Mental Infantojuvenil"
    primary: "#0272AA"
    secondary: "#00B7FF"
    soft: "#B6E9FD"
  organizational_psychology:
    name: "Escuela de Psicología Organizacional"
    primary: "#B20000"
    secondary: "#F90000"
    soft: "#F8E1E1"
  education_neurodevelopment:
    name: "Escuela de Educación y Neurodesarrollo"
    primary: "#00770E"
    secondary: "#46A732"
    soft: "#CFFFD2"
  psychosocial_legal:
    name: "Escuela Psicosocial Jurídica"
    primary: "#CC6A00"
    secondary: "#FF8B00"
    soft: "#FFE2C2"
```

> Nota de normalización: el texto entregado indicaba `RGB: 0/119/14` y `HEX: #0070E` para Educación y Neurodesarrollo. El RGB corresponde a `#00770E`. Se usa `#00770E` salvo confirmación distinta del equipo de diseño.

### 10.3 Variaciones de logo de escuelas

Las variaciones combinan el isotipo ADIPA con el nombre de la escuela en su color asignado.

Reglas:

- Usar únicamente layouts oficiales.
- No cambiar line breaks, proporciones, color, espaciado o tipografía.
- No crear nombres de escuela no aprobados.
- No mezclar colores entre escuelas.
- No usar colores de campaña como identificadores de escuela.

### 10.4 Colocación en fondos y cajas

Los escudos pueden aplicarse sobre fondos si mantienen contraste. Si el fondo compromete la visibilidad, usar caja blanca.

Cajas permitidas para escudos:

```yaml
school_shield_container_shapes:
  rounded_square:
    vertex_scale: 22
  rounded_bottom_square:
    vertex_scale: 22
  circular_bottom_square:
    vertex_scale: 75
```

---

## 11. Tipografía

### 11.1 Fuente principal

La tipografía principal de ADIPA es **Poppins** y debe utilizarse siempre que esté disponible.

```yaml
typography_primary: "Poppins"
typography_fallback: "Helvetica"
```

Helvetica se permite únicamente como alternativa excepcional cuando Poppins no esté disponible.

### 11.2 Jerarquía

Variaciones aprobadas:

- Poppins Extra Bold.
- Poppins Bold.
- Poppins Semibold.
- Poppins Medium.
- Poppins Regular.

Uso recomendado:

- **Extra Bold:** destacados fuertes y palabras clave en campañas.
- **Bold:** títulos principales.
- **Semibold:** subtítulos, labels, destacados y jerarquía media.
- **Medium:** énfasis moderado, badges, botones o textos cortos.
- **Regular:** cuerpo de texto y lectura extendida.

> **Producto digital (decisión de diseño, 2026-08-05):** en el sitio web **no se usa Extra
> Bold**; el peso máximo es **Bold (700)**, porque el 800 se lee demasiado cargado en pantalla.
> Aplica a títulos, cifras, badges y precios: en el front no debe aparecer `font-extrabold`.
> Extra Bold queda reservado a piezas de marketing e impresos según esta sección.

### 11.3 Posts

En posts, los títulos pueden usar Poppins Bold o Semibold. Para destacar una palabra dentro del título, usar preferentemente Poppins Extra Bold, idealmente en mayúsculas cuando sea necesario reforzar énfasis.

No usar demasiados pesos en una misma pieza.

### 11.4 Ebooks

```yaml
ebook_typography:
  body_text: "Poppins Regular 9pt"
  highlighted_words: "Poppins Semibold 9pt"
  subtitles: "Poppins Semibold 13pt"
  titles: "Poppins Bold 24pt"
```

Los ebooks deben priorizar lectura, orden y claridad. Evitar exceso de pesos, colores o elementos decorativos.

### 11.5 Frontend

Tokens recomendados:

```yaml
frontend_typography_tokens:
  font.family.sans: "Poppins"
  font.family.brand_fallback: "Helvetica"                    # única fuente aprobada por el manual como alternativa
  font.family.css_stack: "Poppins, Helvetica, sans-serif"    # stack técnico CSS completo
  font.weight.regular: 400
  font.weight.medium: 500
  font.weight.semibold: 600
  font.weight.bold: 700
  font.weight.extraBold: 800
```

> **Arial no es una tipografía de marca ADIPA.** Puede aparecer en el stack técnico CSS como fallback de sistema (`sans-serif`) pero no debe referenciarse explícitamente ni presentarse como fuente de marca o fallback aprobado.

No introducir tipografías serif, decorativas, handwritten, condensadas o experimentales sin aprobación explícita.

---

## 12. Elementos gráficos complementarios

### 12.1 Propósito

Los elementos gráficos complementarios refuerzan identidad, cohesión y reconocimiento visual sin restar protagonismo al contenido principal.

### 12.2 Patrones aprobados

```yaml
approved_brand_patterns:
  - "círculos"
  - "ondas"
  - "cuadros con bordes redondeados"
  - "semicírculos"
  - "formas abstractas"
```

Pueden usarse en fondos, redes sociales, presentaciones, documentos, ebooks e infografías.

### 12.3 Patrones extra para campañas

```yaml
campaign_patterns:
  - "ondas"
  - "puntos"
  - "nubes"
  - "texto"
  - "elementos alusivos a la festividad"
  - "líneas"
```

Son contextuales y no deben convertirse en patrones permanentes de marca sin aprobación.

### 12.4 Recursos gráficos adicionales

```yaml
additional_graphic_resources:
  - "puntos"
  - "círculos"
  - "ondas"
  - "elementos 3D"
  - "emoji"
  - "íconos"
```

Usar con moderación. No reemplazar logos, escudos o activos oficiales por emojis, íconos genéricos o recursos decorativos.

### 12.5 Elementos que dan seguimiento

```yaml
follow_through_elements:
  - "flecha con dos triángulos"
  - "flecha con un triángulo"
  - "flecha con un triángulo redondeado"
  - "flecha con dos triángulos redondeados"
  - "flecha simple"
```

Deben guiar atención, lectura o progresión. No usarlos como decoración aleatoria.

### 12.6 Uso en frontend

Adecuados para:

- Hero sections.
- Banners promocionales.
- Landing pages.
- Bloques de recursos descargables.
- Empty states.
- Módulos educativos.

Evitar patrones densos en:

- Formularios.
- Checkout.
- Grillas de cursos.
- Tablas.
- Modales.
- Navegación.
- Interfaces con lectura o acción crítica.

---

## 13. Imágenes y fotografía

### 13.1 Estilo fotográfico

El estilo fotográfico de ADIPA debe transmitir cercanía, profesionalismo y credibilidad.

Preferir fotografías:

- Limpias.
- Naturales.
- Bien iluminadas.
- Con luz suave.
- Con fondos neutros.
- En contextos laborales, académicos, de estudio o formación.
- Con expresión natural y composición profesional.

El manual recomienda imágenes protagonizadas por mujeres de 25 años en adelante con apariencia profesional o académica, cuando el contexto lo amerite. Esta guía debe entenderse como criterio de selección visual/casting, no como autorización para inferir edad real de personas en imágenes.

### 13.2 Evitar

- Imágenes excesivamente posadas.
- Expresiones artificiales.
- Fondos ruidosos.
- Mala iluminación.
- Estética demasiado informal.
- Fotos desconectadas del contexto educativo o profesional.

### 13.3 Fotografía docente

Usar preferentemente fotografías oficiales disponibles en la carpeta de Dropbox. También pueden consultarse fotos del tablero de Monday **Información docente**, pero suelen ser más informales y deben ajustarse cuidadosamente.

Reglas:

- Mantener apariencia profesional o académica.
- Priorizar buena iluminación y composición limpia.
- No usar fotos pixeladas, mal recortadas o inconsistentes.
- No reemplazar fotos reales de docentes por stock o imágenes generadas por IA salvo aprobación explícita.
- No retocar en exceso hasta perder autenticidad.

---

## 14. Aplicaciones en marketing y comunicación

### 14.1 Publicidad

Puede usar mayor énfasis visual, colores activos, fotografía, campañas y jerarquía fuerte.

Reglas:

- Usar Poppins.
- Usar paleta principal como base.
- Usar colores activos para descuentos, fechas, urgencia o énfasis.
- Mantener logo protegido y legible.
- Evitar saturación de colores activos.

### 14.2 Redes sociales

Puede usar patrones, campañas, escuelas, fotografía docente y jerarquía tipográfica fuerte.

Reglas:

- Priorizar lectura en móvil.
- Usar colores de escuela solo cuando el contenido pertenezca a esa escuela.
- Usar colores de campaña solo en contexto de campaña.
- No sobrecargar con texto, stickers, íconos o elementos decorativos.

### 14.3 Sitio web

Debe priorizar usabilidad, claridad, conversión, accesibilidad y coherencia con ADIPA.

Reglas:

- No sacrificar UX por decoración.
- No usar patrones densos detrás de formularios, cards, grillas o flujos de compra.
- Mantener contraste alto en texto y botones.
- Usar `#704EFD`, `#2CB7FF` y `#F3F4FF` como base visual.
- Mantener colores de campaña como contextuales.
- Modernizar sin romper identidad visual existente.

### 14.4 Email marketing

Debe ser simple, escaneable, legible y compatible con restricciones de renderizado.

Reglas:

- Jerarquía clara.
- CTAs visibles.
- Colores activos para urgencia o promociones.
- Fondos no excesivamente complejos.
- Logo legible y protegido.

---

## 15. Reglas específicas para frontend

### 15.1 Tokens recomendados

```yaml
frontend_color_tokens:
  brand.primary: "#704EFD"
  brand.secondary: "#2CB7FF"
  brand.surface.soft: "#F3F4FF"
  brand.text.strong: "#091E42"
  brand.surface.blueSoft: "#CBE8FF"
  brand.surface.lavender: "#DFD5FF"
```

### 15.2 Componente de logo recomendado

```ts
type AdipaLogoProps = {
  variant: "logotype" | "isotype";
  mode?: "full-color" | "white" | "black" | "grayscale";
  container?: "none" | "white";
  containerShape?:
    | "rounded-square"
    | "rounded-bottom-square"
    | "circular-bottom-square"
    | "circular-lateral-square"
    | "rounded-horizontal"
    | "rounded-lateral-horizontal"
    | "circular-lateral-horizontal";
  backgroundContext?:
    | "white"
    | "adipa-gray"
    | "adipa-purple"
    | "adipa-cyan"
    | "adipa-navy"
    | "pastel"
    | "image"
    | "texture"
    | "third-party"
    | "unknown";
  shadow?: "none" | "subtle-light-background";
  size?: "default" | "compact" | "large";
};
```

El componente debe impedir combinaciones inválidas. Por ejemplo, `mode: "white"` solo debe permitirse sobre `#704EFD`, `#2CB7FF` o `#091E42`.

### 15.3 Componente de escuela recomendado

```ts
type AdipaSchool =
  | "adult-mental-health"
  | "child-youth-mental-health"
  | "organizational-psychology"
  | "education-neurodevelopment"
  | "psychosocial-legal";

type AdipaSchoolBadgeProps = {
  school: AdipaSchool;
  variant?: "shield" | "isotype-lockup" | "text-lockup";
  container?: "none" | "white";
  containerShape?: "rounded-square" | "rounded-bottom-square" | "circular-bottom-square";
};
```

### 15.4 Cards y redondeados de UI

La card estándar de producto digital ADIPA toma como referencia la `CourseCard` de
`adipa-widgets`: superficie blanca, borde sutil, radio moderado, sombra base discreta y
hover con borde/acento y sombra más visible.

Tokens operativos en `src/app/globals.css`:

```yaml
adipa_radius:
  sm: "4px"
  md: "6px"
  lg: "8px"
  card: "8px"
  control: "8px"
  media: "8px"
  full: "9999px"

adipa_card:
  background: "#FFFFFF"
  border: "#E3E8F3"
  radius: "8px"
  shadow: "0 1px 3px rgb(0 0 0 / 0.15)"
  hover_border: "rgba(112, 78, 253, 0.24)"
  hover_shadow: "0 6px 18px rgb(19 1 63 / 0.08)"
```

Clases globales:

```tsx
<article className="adipa-card">...</article>
<article className="adipa-card adipa-card-interactive">...</article>
```

Reglas:

- Usar `adipa-card` para superficies tipo card, panel, ficha, item repetido o bloque con borde propio.
- Agregar `adipa-card-interactive` solo cuando la card completa o parte de ella tenga interacción: navegación, expansión, selección, hover preview o acción principal.
- Usar `rounded-adipa-card`, `rounded-adipa-control` y `rounded-adipa-media` cuando se necesiten radios sin usar la clase completa de card.
- No usar `rounded-2xl` para cards nuevas salvo excepción visual documentada.
- No anidar cards dentro de cards. Si hace falta agrupar, usar secciones o sub-bloques sin borde/sombra propia.
- Mantener los radios de UI en el rango 4px, 6px y 8px. Reservar `rounded-full` para avatares, pills, badges circulares y botones redondos.

El componente compartido `src/shared/components/ui/card.tsx` ya usa `adipa-card` por defecto.
Para nuevos componentes, preferir `<Card>` o las clases globales anteriores.

### 15.5 Tokens de UI pendientes de aprobación de marca

Los siguientes tokens son necesarios para la UI pero **no tienen equivalente en la paleta oficial del manual**. No deben tomarse como colores de marca; requieren validación antes de incorporarse formalmente al sistema de diseño. Se marcan con `needs-brand-definition` en el código.

```yaml
needs_brand_definition:
  # Tipografía / texto
  foreground_default: "#1d1d1d"        # texto principal de UI
  foreground_muted: "#5b6987"          # texto secundario / muted
  foreground_subtle: "#8c93a8"         # texto sutil / placeholder

  # Bordes
  border_subtle: "#e3e8f3"             # borde estándar de UI
  border_strong: "#9ba7bd"             # borde fuerte / separadores

  # Estados semánticos (success / error / rating)
  color_success: "#4dc247"             # sin equivalente permitido; pendiente
  color_error: "#d9485f"               # sin equivalente permitido; pendiente
  color_rating_star: "#c49a3a"         # sin equivalente permitido; pendiente

  # Tono hover de color primario
  brand_primary_hover: "#6241e0"       # shade no en manual; usar brand primary con opacidad CSS como alternativa (`rgba(112,78,253,0.85)`)

  # Partículas de animación (burst favorito)
  particle_green: "#8ac26f"
  particle_orange: "#f08a3c"
  particle_yellow: "#ffd166"
  particle_red: "#e05273"
  particle_blue: "#3478f6"
  particle_magenta: "#d73cec"
  particle_muted_1: "#cbd5e1"
  particle_muted_2: "#94a3b8"
  particle_muted_3: "#d6dce8"
  particle_muted_4: "#a8b3c5"
  particle_muted_5: "#b8c2d4"
  particle_muted_6: "#d1d8e5"
  particle_muted_7: "#9ba7bd"
```

Tokens corregidos (sustituidos por colores permitidos):
- `--color-mega-aside-bg` → `#f3f4ff` (`brand-surface-soft`) en lugar de `#fafbff`
- `--color-primary-600` → `#704efd` (`brand-primary`) en lugar de `#6241e0`
- `--color-primary-700` → `#704efd` (`brand-primary`) en lugar de `#4f34c4`
- Sombras CSS → base `rgba(9, 30, 66, …)` (`secondary-navy #091e42`) en lugar de `rgba(19, 1, 63, …)`
- Overlay scrim → `rgba(9, 30, 66, 0.58)` en lugar de `rgba(18, 24, 39, 0.58)`

### 15.5 Estructura recomendada de assets

```txt
public/
  brand/
    logos/
    schools/
    patterns/
    icons/
    campaign/
```

Nombres sugeridos:

```txt
adipa-logotype-full-color.svg
adipa-logotype-white.svg
adipa-isotype-full-color.svg
adipa-isotype-white.svg
school-adult-mental-health-shield.svg
school-child-youth-mental-health-shield.svg
pattern-waves-lavender.svg
pattern-circles-light-blue.svg
```

Evitar nombres vagos como `logo-final`, `nuevo-logo`, `asset-1`, `imagen-copy`.

### 15.6 Heros de página — escala canónica

La referencia aprobada es la familia de heros de noticias/prensa/glosario
(`ArticlesHero`, `PressHero`, `GlossaryHero`). Todo hero nuevo o rediseñado usa esta receta:

| Pieza | Clases canónicas |
|---|---|
| Fondo | `bg-brand text-white` + `<HeroOrbs className="text-white opacity-10" …>` |
| Contenedor | `mx-auto max-w-350 px-4 sm:px-6 lg:px-8` (1400px, mismo marco que noticias/ebooks) |
| Breadcrumb | componente compartido `@/shared/components/ui/Breadcrumb` con `className="mb-6 text-white/70 lg:mb-10"` — no crear breadcrumbs locales |
| Título (H1) | `text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight` |
| Descripción | `mt-4 text-[15px] sm:text-base leading-relaxed text-white/80` |
| Eyebrow / badge | Poppins — **prohibido `font-mono`** — `text-[11px] font-bold uppercase tracking-[0.16em]`; plano en `text-white/80` o pill `bg-white/12 px-4 py-1.5 ring-1 ring-white/25` (como prensa) |
| Stats en fila | cifra `text-[28px] font-bold tabular-nums`, label `text-[11px] font-semibold uppercase tracking-[0.05em] text-white/70`, separadas por `h-10 w-px bg-white/30` — sin estilo de card |

**Alineación del contenido** — la decide la presencia de un visual propio, no el gusto:

- **Hero con visual a la derecha** (foto, ilustración, componente): texto alineado a la
  izquierda en dos columnas, con el bloque de texto acotado (~`lg:max-w-[52%]`). Referencia:
  `ArticlesHero`.
- **Hero solo texto** (los orbs de fondo no cuentan como visual): contenido **centrado** en
  `mx-auto max-w-3xl text-center`, bajada en `max-w-2xl`. Un bloque de texto a la izquierda
  sin nada que lo balancee deja media pantalla vacía en desktop. Referencias: `PressHero`,
  `GlossaryHero`. El breadcrumb queda siempre a la izquierda, pegado al marco del contenedor.

Los heros anteriores a esta regla (investigación, escuelas, adipados, CAP, palabras-cuento,
ebooks) tienen escalas divergentes, contenedores de 1200px y `font-mono` en eyebrows: converger
a esta receta al tocar cada superficie, sin barridos masivos.

### 15.7 Escudos de escuela — colocación en caja

El manual de marca («Colocación en una caja») define las cajas aceptables para los escudos
de escuela. El frontend adopta dos, implementadas en `globals.css` con radios en porcentaje
para escalar con el contenedor:

| Variante | Clase | Radio | Dónde |
|---|---|---|---|
| Cuadrado con bordes inferiores circulares (vértices 75) | `.adipa-school-shield-box` | `0 0 45% 45%` — superiores **rectos, sin redondeo** (estricto) | Cards grandes de escuela: home, quiénes somos, grillas |
| Cuadrado con bordes redondeados (vértices 22) | `.adipa-school-shield-box-rounded` | `12%` parejo | Badges compactos en heros: `SchoolBadge` (PDP, seminario), sidebar de perfil docente |

No usar círculos ni rectángulos genéricos para escudos; toda superficie nueva elige una de
estas dos variantes.

---

## 16. Recursos adicionales

El manual indica carpetas con:

- Archivos del logo.
- Archivos de fuentes tipográficas.
- Plantillas descargables.
- Recursos gráficos.

Usar siempre estos recursos oficiales cuando estén disponibles.

No reconstruir, descargar sustitutos, usar screenshots o recrear activos manualmente.

No compartir ni redistribuir archivos de fuente sin confirmación de licencia y permisos internos.

---

## 17. Checklist obligatorio para IA antes de entregar diseño

Antes de entregar una propuesta visual o implementación para ADIPA, validar:

- ¿Usa Poppins como fuente principal?
- ¿Usa colores oficiales y no aproximados?
- ¿El logo proviene de archivo oficial?
- ¿El logo respeta proporción, área de seguridad y fondo permitido?
- ¿Se usa caja blanca si el fondo compromete legibilidad?
- ¿Los colores activos están limitados a énfasis o campaña?
- ¿Se respeta la proporción 80/20?
- ¿Los escudos de escuela usan colores correctos?
- ¿No hay patrones densos detrás de textos o acciones críticas?
- ¿La fotografía es profesional, limpia, cercana y creíble?
- ¿El diseño se siente ADIPA y no una plantilla genérica?
- ¿Hay buena jerarquía, contraste y legibilidad?
