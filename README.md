# 📌 Guía Completa de Uso del Repositorio (GitHub)

Este documento explica cómo trabajar correctamente con Git y GitHub para evitar conflictos, errores y pérdida de trabajo.

---

# 🛠 1️⃣ Configuración inicial (SOLO la primera vez)

## ✅ 1.1 Instalar Git
Si no tienes Git instalado:
https://git-scm.com/

Instálalo antes de continuar.

---

## ✅ 1.2 Configurar usuario en Git

⚠ OBLIGATORIO antes de poder subir cambios.

Abre la terminal y ejecuta:

```bash
git config --global user.name "TuNombre"
git config --global user.email "tuemail@example.com"
```

Para comprobar que está bien configurado:

```bash
git config --global --list
```

Si no configuras esto correctamente, NO podrás hacer `git push`.

---

## ✅ 1.3 Reiniciar la terminal

Después de instalar Git o configurarlo:

1. Cierra la terminal completamente.
2. Vuelve a abrirla.
3. Entra otra vez en la carpeta del proyecto.

Esto evita errores al hacer `pull` o `push`.

---

# 📥 2️⃣ Descargar el proyecto por primera vez

```bash
git clone URL_DEL_REPO
cd nombre-del-repo
```

Con esto ya tendrás el proyecto en tu ordenador.

---

# 🔄 3️⃣ Flujo de trabajo OBLIGATORIO

## 🚨 ANTES DE EMPEZAR A TRABAJAR (SIEMPRE)

```bash
git pull origin main
```

⚠ Esto es obligatorio.
⚠ Nunca empieces a trabajar sin hacer pull antes.
⚠ Evita conflictos y sobrescribir trabajo de otros.

---

## 💻 DESPUÉS DE HACER CAMBIOS

```bash
git add .
git commit -m "Descripción clara del cambio"
git push origin main
```

Ejemplo correcto:

```bash
git commit -m "Añadido gráfico de ventas por año"
```

Ejemplo incorrecto:

```bash
git commit -m "cambios"
```

---

# 🚨 4️⃣ Normas IMPORTANTES del equipo

🔴 SIEMPRE hacer `git pull origin main` antes de empezar.

🔴 No trabajar dos personas a la vez sobre el archivo `.pbix`.

🔴 Avisar por WhatsApp cuando alguien esté usando Power BI.

🔴 No dejar cambios sin subir al finalizar el día.

🔴 Hacer commits con mensajes claros y específicos.

🔴 No borrar archivos sin avisar.

🔴 No modificar archivos de otro compañero sin avisar.

---

# ❌ 5️⃣ Si hay error al hacer push

Si aparece un error al hacer `git push`, normalmente significa que alguien ha subido cambios antes que tú.

Solución:

```bash
git pull origin main
```

Si aparecen conflictos:
1. Resolver los conflictos manualmente.
2. Guardar los archivos.
3. Ejecutar:

```bash
git add .
git commit -m "Conflictos resueltos"
git push origin main
```

---

# 🔁 6️⃣ Si algo está roto o no sincroniza

Puedes forzar que tu proyecto quede exactamente como el repositorio remoto (⚠ BORRA CAMBIOS LOCALES NO GUARDADOS):

```bash
git fetch origin
git reset --hard origin/main
```

⚠ Usar solo si sabes lo que haces.

---

# 📌 7️⃣ Resumen rápido del flujo correcto

```bash
git pull origin main
(trabajas)
git add .
git commit -m "mensaje claro"
git push origin main
```

---

# ✅ 8️⃣ Regla de oro

ANTES DE TRABAJAR → `git pull origin main`  
DESPUÉS DE TRABAJAR → `git push origin main`

Si todos seguimos estas normas, evitaremos conflictos y pérdida de trabajo 🚀
