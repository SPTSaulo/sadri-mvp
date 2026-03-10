# Configuración de Firebase para Travel Stories Tab

Este documento describe los pasos necesarios para configurar Firebase Storage y Firestore para la funcionalidad de Travel Stories Tab.

## Requisitos Previos

- Tener instalado Firebase CLI: `npm install -g firebase-tools`
- Estar autenticado en Firebase: `firebase login`
- Tener un proyecto de Firebase creado (sadri-mvp)

## 1. Inicializar Firebase en el Proyecto

Si aún no has inicializado Firebase en el proyecto, ejecuta:

```bash
firebase init
```

Selecciona:
- Firestore
- Storage
- Hosting (opcional)

## 2. Desplegar Reglas de Seguridad

### Reglas de Firestore

Las reglas de Firestore están definidas en `firestore.rules`. Para desplegarlas:

```bash
firebase deploy --only firestore:rules
```

Estas reglas:
- Permiten lectura/escritura solo a usuarios autenticados
- Validan la estructura de datos de las historias
- Verifican tipos de datos y límites de tamaño

### Reglas de Storage

Las reglas de Storage están definidas en `storage.rules`. Para desplegarlas:

```bash
firebase deploy --only storage:rules
```

Estas reglas:
- Permiten lectura/escritura solo a usuarios autenticados
- Limitan el tamaño de archivos a 10MB
- Solo permiten archivos de tipo imagen

## 3. Configurar CORS para Firebase Storage

Firebase Storage necesita configuración CORS para permitir que la aplicación web acceda a las imágenes.

### Crear archivo cors.json

Crea un archivo `cors.json` en la raíz del proyecto con el siguiente contenido:

```json
[
  {
    "origin": ["*"],
    "method": ["GET", "HEAD", "PUT", "POST", "DELETE"],
    "maxAgeSeconds": 3600,
    "responseHeader": ["Content-Type", "Access-Control-Allow-Origin"]
  }
]
```

**Nota de Seguridad**: En producción, reemplaza `"*"` con los dominios específicos de tu aplicación:

```json
[
  {
    "origin": ["https://tu-dominio.com", "https://www.tu-dominio.com"],
    "method": ["GET", "HEAD", "PUT", "POST", "DELETE"],
    "maxAgeSeconds": 3600,
    "responseHeader": ["Content-Type", "Access-Control-Allow-Origin"]
  }
]
```

### Aplicar configuración CORS

Usa gsutil (parte de Google Cloud SDK) para aplicar la configuración:

```bash
gsutil cors set cors.json gs://sadri-mvp.firebasestorage.app
```

Si no tienes gsutil instalado:

1. Instala Google Cloud SDK: https://cloud.google.com/sdk/docs/install
2. Autentica: `gcloud auth login`
3. Configura el proyecto: `gcloud config set project sadri-mvp`
4. Aplica CORS: `gsutil cors set cors.json gs://sadri-mvp.firebasestorage.app`

### Verificar configuración CORS

Para verificar que CORS está configurado correctamente:

```bash
gsutil cors get gs://sadri-mvp.firebasestorage.app
```

## 4. Verificar Configuración de Storage en Firebase Console

1. Ve a Firebase Console: https://console.firebase.google.com/
2. Selecciona el proyecto "sadri-mvp"
3. Ve a Storage en el menú lateral
4. Verifica que el bucket `sadri-mvp.firebasestorage.app` esté activo
5. Ve a la pestaña "Rules" y verifica que las reglas estén desplegadas

## 5. Verificar Configuración de Firestore en Firebase Console

1. En Firebase Console, ve a Firestore Database
2. Ve a la pestaña "Rules"
3. Verifica que las reglas estén desplegadas correctamente
4. Verifica que la colección `stories` esté creada (se creará automáticamente al agregar la primera historia)

## 6. Configurar Autenticación (si no está configurada)

La aplicación requiere autenticación de Firebase. Si aún no está configurada:

1. Ve a Authentication en Firebase Console
2. Habilita los métodos de autenticación que desees usar (Email/Password, Google, etc.)
3. Asegúrate de que los usuarios puedan autenticarse antes de usar la funcionalidad de historias

## 7. Desplegar Todas las Reglas

Para desplegar todas las reglas de una vez:

```bash
firebase deploy --only firestore:rules,storage:rules
```

## 8. Verificar Integración en la Aplicación

1. Ejecuta la aplicación: `ionic serve` o `npm start`
2. Navega a la pestaña "Viajes" (tab5)
3. Intenta crear una nueva historia
4. Verifica que las imágenes se suban correctamente a Firebase Storage
5. Verifica que los metadatos se guarden en Firestore

## Troubleshooting

### Error: "CORS policy: No 'Access-Control-Allow-Origin' header"

- Verifica que CORS esté configurado correctamente en el bucket de Storage
- Ejecuta: `gsutil cors get gs://sadri-mvp.firebasestorage.app` para verificar
- Si no está configurado, aplica la configuración CORS nuevamente

### Error: "Permission denied" al subir imágenes

- Verifica que las reglas de Storage estén desplegadas
- Verifica que el usuario esté autenticado
- Revisa las reglas en Firebase Console > Storage > Rules

### Error: "Permission denied" al guardar metadatos

- Verifica que las reglas de Firestore estén desplegadas
- Verifica que el usuario esté autenticado
- Revisa las reglas en Firebase Console > Firestore > Rules

### Error: "Quota exceeded"

- Verifica el uso de Storage en Firebase Console
- La aplicación tiene fallback automático a IndexedDB cuando se excede la cuota
- Considera actualizar el plan de Firebase si es necesario

## Comandos Útiles

```bash
# Ver estado del proyecto
firebase projects:list

# Ver configuración actual
firebase use

# Desplegar todo
firebase deploy

# Solo reglas
firebase deploy --only firestore:rules,storage:rules

# Ver logs
firebase functions:log
```

## Recursos Adicionales

- [Firebase Storage CORS Configuration](https://firebase.google.com/docs/storage/web/download-files#cors_configuration)
- [Firebase Security Rules](https://firebase.google.com/docs/rules)
- [Firestore Security Rules](https://firebase.google.com/docs/firestore/security/get-started)
- [Storage Security Rules](https://firebase.google.com/docs/storage/security)
