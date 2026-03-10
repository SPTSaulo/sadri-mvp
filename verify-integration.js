#!/usr/bin/env node

/**
 * Script de verificación de integración para Travel Stories Tab
 * 
 * Este script verifica que todos los archivos necesarios estén presentes
 * y que la configuración esté correcta.
 */

const fs = require('fs');
const path = require('path');

console.log('🔍 Verificando integración de Travel Stories Tab...\n');

let allChecksPass = true;

// Lista de archivos que deben existir
const requiredFiles = [
  { path: 'firestore.rules', description: 'Reglas de seguridad de Firestore' },
  { path: 'storage.rules', description: 'Reglas de seguridad de Storage' },
  { path: 'firebase.json', description: 'Configuración de Firebase' },
  { path: 'cors.json', description: 'Configuración CORS' },
  { path: 'FIREBASE_SETUP.md', description: 'Documentación de configuración' },
  { path: 'src/app/app.module.ts', description: 'Módulo principal de la app' },
  { path: 'src/app/tab5/tab5.page.ts', description: 'Página principal de Tab5' },
  { path: 'src/app/tab5/services/story.service.ts', description: 'Servicio de historias' },
  { path: 'src/app/tab5/services/storage.service.ts', description: 'Servicio de almacenamiento' },
  { path: 'src/app/tab5/components/story-viewer/story-viewer.component.ts', description: 'Componente visor de historias' },
  { path: 'src/app/tab5/components/photo-uploader/photo-uploader.component.ts', description: 'Componente subidor de fotos' },
];

// Verificar existencia de archivos
console.log('📁 Verificando archivos requeridos:\n');
requiredFiles.forEach(file => {
  const exists = fs.existsSync(file.path);
  const status = exists ? '✅' : '❌';
  console.log(`${status} ${file.description}`);
  console.log(`   ${file.path}`);
  if (!exists) {
    allChecksPass = false;
  }
});

console.log('\n');

// Verificar contenido de app.module.ts
console.log('🔧 Verificando configuración de Firebase Storage:\n');
try {
  const appModuleContent = fs.readFileSync('src/app/app.module.ts', 'utf8');
  
  const hasStorageImport = appModuleContent.includes('getStorage') && 
                           appModuleContent.includes('provideStorage');
  const hasStorageProvider = appModuleContent.includes('provideStorage(() => getStorage())');
  
  if (hasStorageImport && hasStorageProvider) {
    console.log('✅ Firebase Storage está correctamente configurado en app.module.ts');
  } else {
    console.log('❌ Firebase Storage NO está configurado correctamente en app.module.ts');
    if (!hasStorageImport) {
      console.log('   - Falta import de getStorage y provideStorage');
    }
    if (!hasStorageProvider) {
      console.log('   - Falta provideStorage en providers');
    }
    allChecksPass = false;
  }
} catch (error) {
  console.log('❌ Error al leer app.module.ts:', error.message);
  allChecksPass = false;
}

console.log('\n');

// Verificar firebase.json
console.log('🔥 Verificando configuración de firebase.json:\n');
try {
  const firebaseConfig = JSON.parse(fs.readFileSync('firebase.json', 'utf8'));
  
  const hasFirestore = firebaseConfig.firestore && firebaseConfig.firestore.rules;
  const hasStorage = firebaseConfig.storage && firebaseConfig.storage.rules;
  
  if (hasFirestore) {
    console.log('✅ Configuración de Firestore presente');
  } else {
    console.log('❌ Configuración de Firestore faltante');
    allChecksPass = false;
  }
  
  if (hasStorage) {
    console.log('✅ Configuración de Storage presente');
  } else {
    console.log('❌ Configuración de Storage faltante');
    allChecksPass = false;
  }
} catch (error) {
  console.log('❌ Error al leer firebase.json:', error.message);
  allChecksPass = false;
}

console.log('\n');

// Verificar reglas de Firestore
console.log('📜 Verificando reglas de Firestore:\n');
try {
  const firestoreRules = fs.readFileSync('firestore.rules', 'utf8');
  
  const hasStoriesCollection = firestoreRules.includes('match /stories/{storyId}');
  const hasAuthentication = firestoreRules.includes('request.auth != null');
  
  if (hasStoriesCollection) {
    console.log('✅ Reglas para colección "stories" presentes');
  } else {
    console.log('❌ Reglas para colección "stories" faltantes');
    allChecksPass = false;
  }
  
  if (hasAuthentication) {
    console.log('✅ Validación de autenticación presente');
  } else {
    console.log('❌ Validación de autenticación faltante');
    allChecksPass = false;
  }
} catch (error) {
  console.log('❌ Error al leer firestore.rules:', error.message);
  allChecksPass = false;
}

console.log('\n');

// Verificar reglas de Storage
console.log('💾 Verificando reglas de Storage:\n');
try {
  const storageRules = fs.readFileSync('storage.rules', 'utf8');
  
  const hasStoriesPath = storageRules.includes('match /stories/{storyId}/{photoId}');
  const hasAuthentication = storageRules.includes('request.auth != null');
  const hasSizeLimit = storageRules.includes('10 * 1024 * 1024');
  
  if (hasStoriesPath) {
    console.log('✅ Reglas para path "stories" presentes');
  } else {
    console.log('❌ Reglas para path "stories" faltantes');
    allChecksPass = false;
  }
  
  if (hasAuthentication) {
    console.log('✅ Validación de autenticación presente');
  } else {
    console.log('❌ Validación de autenticación faltante');
    allChecksPass = false;
  }
  
  if (hasSizeLimit) {
    console.log('✅ Límite de tamaño de archivo (10MB) configurado');
  } else {
    console.log('⚠️  Límite de tamaño de archivo no encontrado');
  }
} catch (error) {
  console.log('❌ Error al leer storage.rules:', error.message);
  allChecksPass = false;
}

console.log('\n');

// Resumen final
console.log('═══════════════════════════════════════════════════════════\n');
if (allChecksPass) {
  console.log('✅ ¡Todas las verificaciones pasaron exitosamente!\n');
  console.log('📋 Próximos pasos:');
  console.log('   1. Desplegar reglas de Firebase:');
  console.log('      firebase deploy --only firestore:rules,storage:rules');
  console.log('   2. Configurar CORS en Firebase Storage:');
  console.log('      gsutil cors set cors.json gs://sadri-mvp.firebasestorage.app');
  console.log('   3. Verificar en Firebase Console que todo esté correcto');
  console.log('\n📖 Para más información, consulta FIREBASE_SETUP.md\n');
} else {
  console.log('❌ Algunas verificaciones fallaron.\n');
  console.log('Por favor, revisa los errores anteriores y corrige los problemas.');
  console.log('Consulta FIREBASE_SETUP.md para más información.\n');
  process.exit(1);
}
