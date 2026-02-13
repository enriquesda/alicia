#!/bin/bash

# Script para convertir imágenes a WebP
echo "🖼️  Iniciando conversión de imágenes a WebP..."

# Crear carpeta de backup
echo "📁 Creando carpeta de backup..."
mkdir -p fotos/originales

# Contador
total=0
convertidos=0

# Función para convertir
convert_image() {
    input="$1"
    output="${input%.*}.webp"
    
    # Si ya es webp, saltar
    if [[ "$input" == *.webp ]]; then
        return
    fi
    
    ((total++))
    echo "🔄 Convirtiendo: $input"
    
    # Convertir a WebP
    if cwebp -q 85 "$input" -o "$output" > /dev/null 2>&1; then
        cp "$input" "fotos/originales/$(basename "$input")"
        rm "$input"
        ((convertidos++))
        echo "✅ Convertido: $(basename "$output")"
    fi
}

# Convertir archivos
echo "🔍 Buscando imágenes..."

# Exportar función para usar con find
export -f convert_image

# Buscar y convertir
find fotos -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) ! -path "fotos/originales/*" | while read -r img; do
    convert_image "$img"
done

echo ""
echo "═══════════════════════════════════════"
echo "✨ Conversión completada!"
echo "═══════════════════════════════════════"
echo "✅ Imágenes convertidas exitosamente"
echo "💾 Originales guardados en: fotos/originales/"
echo ""
