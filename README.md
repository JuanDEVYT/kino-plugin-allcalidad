# Kino Plugin - AllCalidad

Plugin oficial para la aplicación **Kino** (Android / Android TV / Fire Stick) que integra el catálogo de [allcalidad.re](https://allcalidad.re/).

<p align="center">
  <img src="icon.png" width="128" height="128" alt="AllCalidad Logo" />
</p>

## Características

- 🎬 **Catálogo Completo**: Películas, Series y Animes sincronizados con allcalidad.re.
- 📱 **Pantalla Nativa Estilo Xuper** (`screen` apiVersion 14/19):
  - Hero banner con carrusel de estrenos (`PageView`).
  - Pestañas rápidas: *Películas*, *Series*, *Animes*, *Top IMDB*.
  - Vista de detalles con sinopsis, valoración y selección de episodios.
  - Buscador integrado optimizado para control remoto (Android TV) y pantalla táctil.
- ⚡ **Reproducción Directa HLS**: Desempaquetado dinámico de streams `.m3u8` desde servidores de alta velocidad (Vimeos y alternativos).
- 🏷️ **Metadatos completos**: Pósters en alta definición, fondos de pantalla, año, episodios y sinopsis.

## Instalación en Kino

1. Abre **Kino** en tu dispositivo Android o Android TV.
2. Ve a **Ajustes > Plugins > Añadir plugin**.
3. Ingresa la ruta del repositorio:
   ```text
   JuanDEVYT/kino-plugin-allcalidad
   ```
4. Guarda y activa el plugin. Ya podrás acceder desde el menú principal o directamente abriendo la pantalla de AllCalidad.

## Desarrollo y Validación

Para validar el plugin con el SDK de Kino:

```bash
node sdk/validate.mjs .
node sdk/run.mjs . home
node sdk/run.mjs . search "batman"
node sdk/run.mjs . screen
```

## Aviso Legal

Este plugin no aloja ningún archivo multimedia en sus servidores ni en GitHub. Todo el contenido es consultado de forma remota a través de enlaces públicos del sitio web allcalidad.re.
