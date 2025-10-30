module.exports = {
  // CLAVE: Tailwind debe escanear todos los archivos .jsx, .js, .tsx, .ts, etc., 
  // en la carpeta src/ para encontrar y generar las clases que usas.
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Inconsolata", "monospace"],
      },
    },
  },
  plugins: [],
}