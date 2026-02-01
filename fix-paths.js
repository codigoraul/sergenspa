import { readFileSync, writeFileSync } from 'fs';

const distPath = './dist/index.html';
let html = readFileSync(distPath, 'utf-8');

// Función para convertir todas las rutas absolutas a relativas
function fixAbsolutePaths(content) {
  // Corregir href con slash inicial (excepto anclas #)
  content = content.replace(/href="\/(?!\/|#)([^"]*)"/g, 'href="./$1"');
  
  // Corregir src con slash inicial
  content = content.replace(/src="\/(?!\/)([^"]*)"/g, 'src="./$1"');
  
  // Corregir action con slash inicial
  content = content.replace(/action="\/(?!\/)([^"]*)"/g, 'action="./$1"');
  
  // Corregir url() en estilos inline con comillas simples
  content = content.replace(/url\('\/(?!\/)([^']*)'\)/g, "url('./$1')");
  
  // Corregir url() en estilos inline con comillas dobles
  content = content.replace(/url\("\/(?!\/)([^"]*)"\)/g, 'url("./$1")');
  
  // Corregir url() sin comillas
  content = content.replace(/url\(\/(?!\/)([^)]*)\)/g, 'url(./$1)');
  
  return content;
}

html = fixAbsolutePaths(html);

writeFileSync(distPath, html, 'utf-8');
console.log('✅ Todas las rutas absolutas convertidas a relativas en dist/index.html');
