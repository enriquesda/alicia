#!/bin/bash

echo "⏮️  Revirtiendo cambios de WebP..."

# Eliminar todos los archivos WebP
echo "🗑️  Eliminando archivos WebP..."
find fotos -name "*.webp" ! -path "fotos/originales/*" -delete

# Restaurar originales
echo "📦 Restaurando imágenes originales..."
if [ -d "fotos/originales" ]; then
    cp -r fotos/originales/* fotos/
    echo "✅ Originales restaurados"
fi

# Revertir cambios en HTML
echo "📝 Revirtiendo cambios en HTML..."
git checkout HEAD~1 -- index.html viajes.html momentosHumildes.html motivos.html

echo ""
echo "✅ Reversión completada!"
echo "📁 Imágenes originales restauradas"
echo "📝 Archivos HTML revertidos"
