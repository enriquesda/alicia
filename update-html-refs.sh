#!/bin/bash

# Script para actualizar referencias de imágenes en HTML
echo "📝 Actualizando referencias en archivos HTML..."

# Archivos HTML a actualizar
html_files=("index.html" "viajes.html" "momentosHumildes.html" "motivos.html")

for file in "${html_files[@]}"; do
    if [ -f "$file" ]; then
        echo "🔄 Procesando: $file"
        
        # Reemplazar extensiones de imágenes
        sed -i.bak -E 's/\.(jpg|jpeg|JPG|JPEG|png|PNG)/.webp/g' "$file"
        
        # Eliminar backups
        rm -f "${file}.bak"
        
        echo "✅ Actualizado: $file"
    fi
done

echo ""
echo "✨ Todos los archivos HTML actualizados!"
echo "📊 Referencias cambiadas a formato .webp"
