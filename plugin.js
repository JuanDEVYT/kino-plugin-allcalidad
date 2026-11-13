// Plugin oficial AllCalidad para Kino
// Soporta catálogo completo, películas, series, animes, buscador, episodios, reproducción directa m3u8 HLS
// y pantalla visual nativa completa (apiVersion 14 / enhancements) estilo Xuper.

const BASE_URL = "https://allcalidad.re";
const API_URL = "https://allcalidad.re/api/rest";
const IMG_BASE = "https://allcalidad.re/wp-content/uploads";

const LOGO_DATA = "data:image/png;base64,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";

// Cliente HTTP seguro con fallback a kino.fetch
async function httpGet(url, headers = {}) {
  const h = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
    "Accept": "application/json, text/html, */*",
    ...headers
  };
  const fn = (typeof kino !== "undefined" && kino && kino.fetch) ? kino.fetch : globalThis["fetch"];
  if (!fn) throw new Error("fetch not available");
  const res = await fn(url, { headers: h });
  return res.text();
}

async function httpJson(url) {
  const raw = await httpGet(url);
  try {
    return JSON.parse(raw);
  } catch (_) {
    return null;
  }
}

// Desempaquetador Dean Edwards p.a.c.k.e.r
function unpack(p, a, c, k) {
  function e(c) {
    return (c < a ? "" : e(Math.floor(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36));
  }
  const dict = {};
  for (let i = 0; i < c; i++) {
    dict[e(i)] = k[i] || e(i);
  }
  return p.replace(/\b\w+\b/g, (x) => (dict[x] !== undefined ? dict[x] : x));
}

function parseYear(title, releaseDate) {
  if (typeof releaseDate === "string") {
    const m = releaseDate.match(/^(\d{4})/);
    if (m) return parseInt(m[1], 10);
  }
  if (typeof title === "string") {
    const m = title.match(/\((\d{4})\)/);
    if (m) return parseInt(m[1], 10);
  }
  return undefined;
}

function toItem(post) {
  if (!post || typeof post !== "object") return null;
  const id = String(post._id || post.id || "");
  if (!id) return null;
  const isSeries = post.type === "tvshows" || post.type === "animes";
  const kind = isSeries ? "series" : "movie";
  const title = (post.title || post.name || "Sin título").replace(/\s*\(\d{4}\)$/, "").trim();
  const year = parseYear(post.title, post.release_date);

  let poster;
  if (post.images && post.images.poster) {
    poster = post.images.poster.startsWith("http") ? post.images.poster : IMG_BASE + post.images.poster;
  }
  let backdrop;
  if (post.images && post.images.backdrop) {
    backdrop = post.images.backdrop.startsWith("http") ? post.images.backdrop : IMG_BASE + post.images.backdrop;
  }

  const rating = post.rating ? parseFloat(post.rating) : undefined;
  const ref = JSON.stringify({
    id,
    type: post.type || "movies",
    slug: post.slug || "",
    kind
  });

  return {
    id,
    title,
    ref,
    kind,
    ...(poster ? { poster } : {}),
    ...(backdrop ? { backdrop } : {}),
    ...(year ? { year } : {}),
    ...(Number.isFinite(rating) ? { rating } : {}),
    overview: post.overview || ""
  };
}

// ----------------------------------------------------
// Capacidad: home
// ----------------------------------------------------
export async function home() {
  try {
    const [moviesRes, seriesRes, animesRes] = await Promise.all([
      httpJson(`${API_URL}/listing?page=1&post_type=movies&posts_per_page=14`),
      httpJson(`${API_URL}/listing?page=1&post_type=tvshows&posts_per_page=14`),
      httpJson(`${API_URL}/listing?page=1&post_type=animes&posts_per_page=14`)
    ]);

    const movies = (moviesRes?.data?.posts || []).map(toItem).filter(Boolean);
    const series = (seriesRes?.data?.posts || []).map(toItem).filter(Boolean);
    const animes = (animesRes?.data?.posts || []).map(toItem).filter(Boolean);

    const rows = [];
    if (movies.length > 0) {
      rows.push({
        id: "movies",
        title: "Películas recientes",
        ref: "movies",
        items: movies
      });
    }
    if (series.length > 0) {
      rows.push({
        id: "tvshows",
        title: "Series recientes",
        ref: "tvshows",
        items: series
      });
    }
    if (animes.length > 0) {
      rows.push({
        id: "animes",
        title: "Animes en emisión",
        ref: "animes",
        items: animes
      });
    }

    return rows;
  } catch (e) {
    return [];
  }
}

// ----------------------------------------------------
// Capacidad: browse
// ----------------------------------------------------
export async function browse(ref, page) {
  const p = page || 1;
  let url;
  if (ref === "tops") {
    url = `${API_URL}/tops?range=all&limit=24&post_type=movies,tvshows,animes`;
  } else {
    const postType = (ref === "tvshows" || ref === "animes" || ref === "movies") ? ref : "movies";
    url = `${API_URL}/listing?page=${p}&post_type=${postType}&posts_per_page=24`;
  }

  const res = await httpJson(url);
  let posts = [];
  if (Array.isArray(res?.data)) {
    posts = res.data;
  } else if (Array.isArray(res?.data?.posts)) {
    posts = res.data.posts;
  }

  const items = posts.map(toItem).filter(Boolean);
  return {
    items,
    hasMore: items.length >= 24
  };
}

// ----------------------------------------------------
// Capacidad: search
// ----------------------------------------------------
export async function search(query, page) {
  let text = "";
  if (typeof query === "string") {
    text = query;
  } else if (query && typeof query === "object") {
    text = query.q || query.query || "";
  }
  if (!text) return [];

  const q = encodeURIComponent(text.trim());
  const url = `${API_URL}/search?query=${q}&post_type=movies,tvshows,animes`;
  const res = await httpJson(url);
  const posts = res?.data?.posts || [];
  return posts.map(toItem).filter(Boolean);
}

// ----------------------------------------------------
// Capacidad: episodes
// ----------------------------------------------------
export async function episodes(ref) {
  let postId = "";
  try {
    const parsed = JSON.parse(ref);
    postId = parsed.id;
  } catch (_) {
    postId = ref;
  }

  const url = `${API_URL}/episodes?post_id=${postId}`;
  const res = await httpJson(url);
  const data = Array.isArray(res?.data) ? res.data : [];

  const eps = data.map((ep) => {
    const sNum = parseInt(ep.season_number, 10) || 1;
    const eNum = parseInt(ep.episode_number, 10) || 1;
    const epRef = JSON.stringify({
      id: String(ep._id || ep.id),
      type: "episodes",
      season: sNum,
      episode: eNum,
      showId: ep.show_id
    });
    return {
      season: sNum,
      number: eNum,
      title: ep.title || `Episodio ${eNum}`,
      overview: ep.overview || "",
      ref: epRef
    };
  });

  return {
    episodes: eps
  };
}

// ----------------------------------------------------
// Capacidad: resolve
// ----------------------------------------------------
export async function resolve(ref) {
  let postId = "";
  try {
    const parsed = JSON.parse(ref);
    postId = parsed.id;
  } catch (_) {
    postId = ref;
  }

  const playerUrl = `${API_URL}/player?post_id=${postId}&_any=1`;
  const res = await httpJson(playerUrl);
  const embeds = res?.data?.embeds || [];
  const alternatives = [];

  // Buscar stream m3u8 en servidores conocidos (vimeos.net)
  for (const embed of embeds) {
    const u = embed.url;
    if (!u) continue;

    if (u.includes("vimeos.net")) {
      try {
        const html = await httpGet(u, { "Referer": BASE_URL });
        const m = html.match(/eval\(function\(p,a,c,k,e,d\)[\s\S]*?\('((?:[^'\\]|\\.)*)',(\d+),(\d+),'((?:[^'\\]|\\.)*)'\.split\('\|'\)/);
        if (m) {
          const cleanP = m[1].replace(/\\'/g, "'");
          const unpacked = unpack(cleanP, parseInt(m[2], 10), parseInt(m[3], 10), m[4].split("|"));
          const m3u8Match = unpacked.match(/file\s*:\s*["'](https?:\/\/[^"']+\.m3u8[^"']*)/);
          if (m3u8Match) {
            const streamUrl = m3u8Match[1];
            // Si hay otros embeds, registrarlos como alternativas
            for (const alt of embeds) {
              if (alt.url && alt.url !== u) {
                alternatives.push({
                  url: alt.url,
                  label: alt.lang ? `${alt.quality || "HD"} - ${alt.lang}` : (alt.quality || "Stream alternativo")
                });
              }
            }
            return {
              url: streamUrl,
              mime: "application/vnd.apple.mpegurl",
              headers: {
                "Referer": "https://vimeos.net/",
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36"
              },
              ...(alternatives.length > 0 ? { alternatives } : {})
            };
          }
        }
      } catch (_) {}
    } else {
      alternatives.push({
        url: u,
        label: embed.lang ? `${embed.quality || "HD"} - ${embed.lang}` : (embed.quality || "Embed")
      });
    }
  }

  // Si no se pudo desempaquetar m3u8 directo, retornar la mejor alternativa disponible
  if (alternatives.length > 0) {
    return {
      url: alternatives[0].url,
      alternatives: alternatives.slice(1)
    };
  }

  throw new Error("No se encontraron fuentes de reproducción disponibles para este título");
}

// ----------------------------------------------------
// Capacidad: screen & screenEvent (Pantalla interactiva como Xuper)
// ----------------------------------------------------
const TABS = [
  { value: "movies", label: "Películas", labelEn: "Movies" },
  { value: "tvshows", label: "Series", labelEn: "Series" },
  { value: "animes", label: "Animes", labelEn: "Anime" },
  { value: "tops", label: "Top IMDB", labelEn: "Top IMDB" }
];

export async function screen(ctx) {
  const c = ctx || {};
  const route = c.route || { name: "main" };
  const state = c.state || {};
  const activeTab = state.tab || "movies";

  // 1. Pantalla de Detalle de Título
  if (route.name === "detail") {
    const item = state.detailItem || route.params || {};
    const isSeries = item.kind === "series";
    const eps = state.detailEpisodes || [];

    const detailChildren = [
      {
        type: "Column",
        gap: 16,
        padding: 16,
        children: [
          {
            type: "Row",
            gap: 16,
            children: [
              ...(item.poster ? [{
                type: "Image",
                url: item.poster,
                aspect: "2:3",
                fit: "cover",
                w: 120,
                alt: item.title || ""
              }] : []),
              {
                type: "Column",
                flex: 1,
                gap: 8,
                children: [
                  { type: "Text", text: item.title || "Detalle", style: "h3" },
                  {
                    type: "Row",
                    gap: 12,
                    children: [
                      ...(item.year ? [{ type: "Badge", text: String(item.year), color: "blue" }] : []),
                      ...(item.rating ? [{ type: "Badge", text: `★ ${item.rating}`, color: "amber" }] : []),
                      { type: "Badge", text: isSeries ? "Serie" : "Película", color: "indigo" }
                    ]
                  },
                  ...(!isSeries && item.ref ? [{
                    type: "ElevatedButton",
                    icon: "play",
                    labelText: "Reproducir película",
                    labelTextEn: "Play Movie",
                    onPressed: {
                      go: {
                        play: {
                          ref: item.ref,
                          kind: "movie",
                          id: item.id,
                          title: item.title
                        }
                      }
                    }
                  }] : [])
                ]
              }
            ]
          },
          ...(item.overview ? [
            { type: "Text", text: "Sinopsis", textEn: "Synopsis", style: "h4" },
            { type: "Text", text: item.overview, style: "body" }
          ] : []),
          ...(isSeries ? [
            { type: "Text", text: `Episodios (${eps.length})`, textEn: `Episodes (${eps.length})`, style: "h4" },
            ...(eps.length === 0 ? [
              { type: "Skeleton", shape: "block", height: 80 }
            ] : eps.map((ep, idx) => ({
              type: "Card",
              key: `ep-${ep.season}-${ep.number}-${idx}`,
              children: [
                {
                  type: "ListTile",
                  title: ep.title || `T${ep.season} E${ep.number}`,
                  subtitle: `Temporada ${ep.season}, Episodio ${ep.number}`,
                  trailing: {
                    type: "IconButton",
                    icon: "play",
                    onPressed: {
                      go: {
                        play: {
                          ref: ep.ref,
                          kind: "series",
                          id: `${item.id}-s${ep.season}e${ep.number}`,
                          title: `${item.title}: ${ep.title}`
                        }
                      }
                    }
                  },
                  onTap: {
                    go: {
                      play: {
                        ref: ep.ref,
                        kind: "series",
                        id: `${item.id}-s${ep.season}e${ep.number}`,
                        title: `${item.title}: ${ep.title}`
                      }
                    }
                  }
                }
              ]
            })))
          ] : [])
        ]
      }
    ];

    return {
      type: "Scaffold",
      appBar: {
        type: "AppBar",
        mergeWithKinoBar: true,
        dense: true,
        leading: {
          type: "IconButton",
          icon: "arrowBack",
          labelText: "Volver",
          labelTextEn: "Back",
          onPressed: { event: "back" }
        },
        title: { type: "Text", text: item.title || "Detalle", style: "h4" }
      },
      body: {
        type: "SingleChildScrollView",
        key: `detail-scroll-${item.id || "0"}`,
        children: detailChildren
      }
    };
  }

  // 2. Pantalla de Búsqueda
  if (route.name === "search") {
    const results = state.searchResults || [];
    const searchBody = [
      {
        type: "Padding",
        padding: 16,
        child: {
          type: "TextField",
          key: "searchField",
          hintText: "Buscar películas, series y animes...",
          hintTextEn: "Search movies, series and anime...",
          onSubmitted: "doSearch"
        }
      },
      ...(results.length > 0 ? [
        {
          type: "GridView",
          key: "searchResultsGrid",
          columns: { compact: 3, expanded: 6 },
          children: results.map((it) => ({
            type: "titleCard",
            key: `search-card-${it.id}`,
            size: "medium",
            item: it,
            onTap: {
              event: "openTitle",
              arg: JSON.stringify(it)
            }
          }))
        }
      ] : state.searchQuery ? [
        {
          type: "Column",
          padding: 32,
          crossAxisAlignment: "center",
          children: [
            { type: "Text", text: "No se encontraron resultados", textEn: "No results found", style: "h4" }
          ]
        }
      ] : [])
    ];

    return {
      type: "Scaffold",
      appBar: {
        type: "AppBar",
        mergeWithKinoBar: true,
        dense: true,
        leading: {
          type: "IconButton",
          icon: "arrowBack",
          labelText: "Volver",
          labelTextEn: "Back",
          onPressed: { event: "back" }
        },
        title: { type: "Text", text: "Buscar en AllCalidad", textEn: "Search AllCalidad", style: "h4" }
      },
      body: {
        type: "SingleChildScrollView",
        key: "searchScroll",
        children: searchBody
      }
    };
  }

  // 3. Pantalla Principal (Catálogo y Navegación)
  const items = state.items || [];
  const slides = state.slides || [];
  const isLoading = state.loading === true;

  const mainChildren = [
    {
      type: "TabBar",
      key: "mainTabBar",
      value: activeTab,
      onChanged: "tab",
      tabs: TABS
    }
  ];

  if (isLoading) {
    mainChildren.push(
      {
        type: "Column",
        gap: 16,
        padding: 16,
        children: [
          { type: "Skeleton", shape: "block", height: 200 },
          {
            type: "Row",
            gap: 12,
            children: [1, 2, 3].map((i) => ({
              type: "Skeleton",
              key: `skel-${i}`,
              shape: "card",
              flex: 1
            }))
          }
        ]
      }
    );
  } else {
    // Hero Banner (Slides)
    if (slides.length > 0 && activeTab === "movies") {
      const heroCards = slides.slice(0, 5).map((s) => ({
        type: "heroCard",
        key: `hero-${s.id}`,
        title: s.title,
        text: s.overview || "",
        image: s.backdrop || s.poster,
        buttons: [
          {
            type: "ElevatedButton",
            icon: "play",
            labelText: "Ver ahora",
            labelTextEn: "Watch now",
            onPressed: {
              go: {
                play: {
                  ref: s.ref,
                  kind: s.kind,
                  id: s.id,
                  title: s.title
                }
              }
            }
          },
          {
            type: "TextButton",
            icon: "info",
            labelText: "Detalles",
            labelTextEn: "Details",
            onPressed: {
              event: "openTitle",
              arg: JSON.stringify(s)
            }
          }
        ]
      }));

      mainChildren.push({
        type: "PageView",
        key: `heroPager-${slides.length}`,
        autoPlayMs: 6000,
        children: heroCards
      });
    }

    // Grid de Catálogo de títulos
    if (items.length > 0) {
      mainChildren.push({
        type: "GridView",
        key: `grid-${activeTab}-${items.length}`,
        columns: { compact: 3, expanded: 6 },
        children: items.map((it) => ({
          type: "titleCard",
          key: `tc-${activeTab}-${it.id}`,
          size: "medium",
          item: it,
          onTap: {
            event: "openTitle",
            arg: JSON.stringify(it)
          }
        }))
      });
    }
  }

  return {
    type: "Scaffold",
    appBar: {
      type: "AppBar",
      mergeWithKinoBar: true,
      dense: true,
      leading: {
        type: "IconButton",
        icon: "close",
        labelText: "Cerrar",
        labelTextEn: "Close",
        onPressed: { close: true }
      },
      title: {
        type: "Image",
        url: LOGO_DATA,
        aspect: "4.66:1",
        fit: "contain",
        h: 32,
        alt: "AllCalidad",
        fallback: { type: "Text", text: "AllCalidad", style: "h4" }
      },
      actions: [
        {
          type: "IconButton",
          key: "searchBtn",
          icon: "search",
          labelText: "Buscar",
          labelTextEn: "Search",
          onPressed: { event: "goSearch" }
        },
        {
          type: "IconButton",
          key: "refreshBtn",
          icon: "refresh",
          labelText: "Actualizar",
          labelTextEn: "Refresh",
          onPressed: { event: "refresh" }
        }
      ]
    },
    body: {
      type: "SingleChildScrollView",
      key: `mainScroll-${activeTab}`,
      children: mainChildren
    }
  };
}

export async function screenEvent(ev) {
  const e = ev || {};
  const name = e.name || "";
  const state = e.state || {};

  if (name === "open") {
    // Carga inicial al abrir la pantalla
    try {
      const [slidersRes, moviesRes] = await Promise.all([
        httpJson(`${API_URL}/sliders?type=movies&posts_per_page=6`),
        httpJson(`${API_URL}/listing?page=1&post_type=movies&posts_per_page=18`)
      ]);
      const slides = (slidersRes?.data || []).map(toItem).filter(Boolean);
      const items = (moviesRes?.data?.posts || []).map(toItem).filter(Boolean);

      return {
        state: {
          tab: "movies",
          slides,
          items,
          loading: false
        }
      };
    } catch (_) {
      return {
        state: {
          tab: "movies",
          slides: [],
          items: [],
          loading: false
        }
      };
    }
  }

  if (name === "tab") {
    const newTab = e.value || "movies";
    let url;
    if (newTab === "tops") {
      url = `${API_URL}/tops?range=all&limit=24&post_type=movies,tvshows,animes`;
    } else {
      url = `${API_URL}/listing?page=1&post_type=${newTab}&posts_per_page=24`;
    }

    const res = await httpJson(url);
    let posts = [];
    if (Array.isArray(res?.data)) {
      posts = res.data;
    } else if (Array.isArray(res?.data?.posts)) {
      posts = res.data.posts;
    }
    const items = posts.map(toItem).filter(Boolean);

    return {
      state: {
        tab: newTab,
        items,
        loading: false
      }
    };
  }

  if (name === "refresh") {
    const currentTab = state.tab || "movies";
    let url;
    if (currentTab === "tops") {
      url = `${API_URL}/tops?range=all&limit=24&post_type=movies,tvshows,animes`;
    } else {
      url = `${API_URL}/listing?page=1&post_type=${currentTab}&posts_per_page=24`;
    }
    const res = await httpJson(url);
    let posts = [];
    if (Array.isArray(res?.data)) {
      posts = res.data;
    } else if (Array.isArray(res?.data?.posts)) {
      posts = res.data.posts;
    }
    const items = posts.map(toItem).filter(Boolean);
    return {
      state: {
        items,
        loading: false
      }
    };
  }

  if (name === "goSearch") {
    return {
      route: { push: "search" },
      state: {
        searchResults: [],
        searchQuery: ""
      }
    };
  }

  if (name === "doSearch") {
    const query = e.value || "";
    if (!query) {
      return {
        state: {
          searchQuery: "",
          searchResults: []
        }
      };
    }
    const q = encodeURIComponent(query.trim());
    const res = await httpJson(`${API_URL}/search?query=${q}&post_type=movies,tvshows,animes`);
    const posts = res?.data?.posts || [];
    const items = posts.map(toItem).filter(Boolean);
    return {
      state: {
        searchQuery: query,
        searchResults: items
      }
    };
  }

  if (name === "openTitle") {
    let item = null;
    try {
      item = JSON.parse(e.arg);
    } catch (_) {
      item = null;
    }
    if (!item) return null;

    let eps = [];
    if (item.kind === "series") {
      const epRes = await httpJson(`${API_URL}/episodes?post_id=${item.id}`);
      const data = Array.isArray(epRes?.data) ? epRes.data : [];
      eps = data.map((ep) => ({
        season: parseInt(ep.season_number, 10) || 1,
        number: parseInt(ep.episode_number, 10) || 1,
        title: ep.title || `Episodio ${ep.episode_number || 1}`,
        overview: ep.overview || "",
        ref: JSON.stringify({
          id: String(ep._id || ep.id),
          type: "episodes",
          season: ep.season_number,
          episode: ep.episode_number,
          showId: ep.show_id
        })
      }));
    }

    return {
      route: { push: "detail", params: item },
      state: {
        detailItem: item,
        detailEpisodes: eps
      }
    };
  }

  if (name === "back") {
    return {
      route: { pop: true }
    };
  }

  return null;
}
