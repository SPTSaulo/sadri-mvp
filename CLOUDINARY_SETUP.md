# Configuración de Cloudinary (Almacenamiento Gratuito de Imágenes)

## ¿Por qué Cloudinary?
- ✅ 25 GB de almacenamiento gratis al mes
- ✅ No requiere tarjeta de crédito
- ✅ Almacenamiento en la nube (compartido entre usuarios)
- ✅ CDN global incluido
- ✅ Optimización automática de imágenes

## Pasos de Configuración

### 1. Crear cuenta gratuita
Ve a: https://cloudinary.com/users/register/free

### 2. Obtener Cloud Name
1. Inicia sesión en: https://console.cloudinary.com/
2. En el Dashboard verás tu **Cloud Name**
3. Cópialo

### 3. Crear Upload Preset (sin autenticación)
1. Ve a: Settings > Upload (https://console.cloudinary.com/settings/upload)
2. Scroll hasta "Upload presets"
3. Haz clic en "Add upload preset"
4. Configura:
   - **Preset name**: Elige un nombre (ej: `sadri_unsigned`)
   - **Signing Mode**: Selecciona **"Unsigned"**
   - **Folder**: (opcional) `sadri-stories`
5. Guarda el preset
6. Copia el nombre del preset

### 4. Actualizar configuración en el proyecto
Edita el archivo: `src/environments/cloudinary.config.ts`

```typescript
export const cloudinaryConfig = {
  cloudName: 'tu-cloud-name',        // Reemplaza con tu Cloud Name
  uploadPreset: 'sadri_unsigned',    // Reemplaza con tu Upload Preset
};
```

### 5. Probar la aplicación
```bash
ng serve
```

Ahora cuando subas una foto en tu app, se guardará en Cloudinary y será accesible desde cualquier navegador.

## Verificar que funciona
1. Sube una foto en tu app
2. Ve a: https://console.cloudinary.com/console/media_library
3. Deberías ver la imagen subida

## Límites del plan gratuito
- 25 GB de almacenamiento
- 25 GB de ancho de banda/mes
- 25,000 transformaciones/mes

Más que suficiente para desarrollo y proyectos pequeños.
