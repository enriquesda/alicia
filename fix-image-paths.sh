#!/bin/bash

echo "🔧 Corrigiendo rutas de imágenes en HTML..."

# Mapeo de archivos y sus extensiones correctas
declare -A extensiones=(
    ["Enrique"]="jpg"
    ["Alicia"]="png"
    ["Nuevo_vivero"]="jpg"
    ["abril2021"]="png"
    ["abril2022"]="png"
    ["abril2023"]="jpg"
    ["abril2024"]="jpg"
    ["abril2025"]="png"
    ["agosto2022"]="jpg"
    ["agosto2024"]="jpg"
    ["agosto2025"]="png"
    ["diciembre2021"]="jpg"
    ["diciembre2022"]="jpg"
    ["diciembre2023"]="jpg"
    ["diciembre2024"]="jpg"
    ["enero2022"]="jpg"
    ["enero204"]="jpg"
    ["enero2026"]="jpg"
    ["febrero2022"]="jpg"
    ["febrero2023"]="jpg"
    ["febrero2024"]="jpg"
    ["febrero2025"]="jpg"
    ["julio2022"]="jpg"
    ["julio2024"]="jpg"
    ["julio2025"]="jpg"
    ["junio2022"]="jpg"
    ["junio2024"]="png"
    ["junio2025"]="png"
    ["marzo2022"]="jpg"
    ["marzo2023"]="jpg"
    ["marzo2024"]="jpg"
    ["mayo2021"]="jpeg"
    ["mayo2022"]="jpg"
    ["mayo2023"]="jpg"
    ["mayo2024"]="jpg"
    ["mayo2025"]="JPG"
    ["nobiembre2021"]="jpg"
    ["noviembre2023"]="png"
    ["noviembre2025"]="jpg"
    ["octubre2021"]="jpg"
    ["octubre2023"]="jpg"
    ["octubre2025"]="jpg"
    ["septiembre2022"]="jpg"
    ["septiembre2024"]="jpg"
    ["septiembre2025"]="png"
    ["grecia"]="jpg"
)

# Archivo temporal
for file in index.html viajes.html momentosHumildes.html motivos.html; do
    if [ -f "$file" ]; then
        echo "📝 Procesando: $file"
        cp "$file" "${file}.bak"
        
        # Reemplazar cada extensión
        for nombre in "${!extensiones[@]}"; do
            ext="${extensiones[$nombre]}"
            sed -i "" "s|${nombre}\.webp|${nombre}.${ext}|g" "$file"
        done
        
        # Casos especiales para subdirectorios (mantener webp ya que no existen)
        # Las de londres/budapest/grecia/venecia están en JPG pero necesitamos verificar
        
        echo "✅ Actualizado: $file"
    fi
done

echo ""
echo "✨ Corrección completada!"
