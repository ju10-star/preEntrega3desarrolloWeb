#!/bin/bash

# Crear carpetas
mkdir -p scss/{abstracts,base,components,layout,pages}

# Crear archivos con contenido

# === ABSTRACTS ===
cat <<EOF > scss/abstracts/_variables.scss
\$primary-color: #2c3e50;
\$font-main: 'Helvetica', sans-serif;
EOF

cat <<EOF > scss/abstracts/_mixins.scss
@mixin respond-to(\$breakpoint) {
  @if \$breakpoint == small {
    @media (max-width: 576px) { @content; }
  }
  @else if \$breakpoint == medium {
    @media (max-width: 768px) { @content; }
  }
  @else if \$breakpoint == large {
    @media (max-width: 1024px) { @content; }
  }
}
EOF

touch scss/abstracts/_functions.scss

# === BASE ===
cat <<EOF > scss/base/_reset.scss
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
EOF

cat <<EOF > scss/base/_typography.scss
body {
  font-family: \$font-main;
  line-height: 1.6;
  color: #333;
}
EOF

cat <<EOF > scss/base/_base.scss
html, body {
  height: 100%;
}
EOF

# === COMPONENTS ===
cat <<EOF > scss/components/_buttons.scss
.button {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  background-color: \$primary-color;
  color: white;
  font-weight: bold;
  cursor: pointer;
  margin: 0.5rem;

  &:hover {
    background-color: darken(\$primary-color, 10%);
  }
}
EOF

# === LAYOUT ===
cat <<EOF > scss/layout/_header.scss
.navbar {
  background-color: \$primary-color;
  padding: 1rem;

  .nav-list {
    list-style: none;
    display: flex;
    gap: 2rem;
    justify-content: center;
  }

  a {
    color: white;
    text-decoration: none;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }
}
EOF

cat <<EOF > scss/layout/_footer.scss
.footer {
  background-color: \$primary-color;
  color: white;
  text-align: center;
  padding: 1rem;
  margin-top: 2rem;
}
EOF

# === PAGES ===
cat <<EOF > scss/pages/_home.scss
.portada {
  text-align: center;
  padding: 2rem;

  img {
    width: 100%;
    max-width: 800px;
    height: auto;
    margin-top: 1rem;
  }
}

.botonera {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 2rem;
}

.descripcion-bienvenida,
.galeria-fotos,
.clientes,
.about-us {
  padding: 2rem;
  text-align: center;
}

.clientes ul {
  list-style: none;
  padding: 0;
}
EOF

# === STYLE PRINCIPAL ===
cat <<EOF > scss/style.scss
@use 'abstracts/variables';
@use 'abstracts/mixins';
@use 'abstracts/functions';

@use 'base/reset';
@use 'base/typography';
@use 'base/base';

@use 'layout/header';
@use 'layout/footer';

@use 'components/buttons';

@use 'pages/home';
EOF

echo "✅ Estructura SCSS creada con éxito."
