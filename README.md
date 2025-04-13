Para **desplegar una app de React creada con Vite en GitHub Pages**, sigue estos pasos:
---

```sh
rm -rf .git
git init
git remote add origin git@github.com:cuides/cuides.github.io.git



```

### ✅ 1. Instala dependencias necesarias

Abre tu terminal en el proyecto y ejecuta:

```bash
npm install --save-dev gh-pages

```


---

### ✅ 2. Configura el archivo `vite.config.js`

Agrega la opción `base` con la ruta correcta. Si tu repositorio se llama `mi-app`, el archivo se vería así:

```js
// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
```

> Si es un user/organization site (por ejemplo, `tusuario.github.io`), usa `base: '/'`.

---

### ✅ 3. Modifica el archivo `package.json`

Agrega estas dos líneas:

```json
"homepage": "https://tusuario.github.io/mi-app",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

> Sustituye `tusuario` y `mi-app` por los tuyos.

---

### ✅ 4. Sube tu proyecto a GitHub

Asegúrate de que el proyecto esté en un repositorio remoto.

```bash
git init
git remote add origin https://github.com/tusuario/mi-app.git
git add .
git commit -m "first commit"
git push -u origin main
```

---

### ✅ 5. Ejecuta el despliegue

Lanza el script:

```bash
npm run deploy
```

Esto subirá la carpeta `dist` a la rama `gh-pages`.

---

### ✅ 6. Activa GitHub Pages

Ve al repositorio en GitHub → **Settings** → **Pages**  
- En _Source_, selecciona **Deploy from a branch**
- Rama: `gh-pages`
- Carpeta: `/ (root)`
- Guarda.

---

### 💡 ¡Listo! Tu app estará disponible en:

```
https://tusuario.github.io/mi-app/
```

---

¿Quieres que te genere un ejemplo de configuración con tu nombre de usuario y repo?