const nombre = "Manuel";
const apellido = "Losada";

const estudiante = nombre.concat(" ").concat(apellido);

const estudianteMayus = estudiante.toUpperCase();
const estudianteMinus = estudiante.toLowerCase();

const estudianteLongitud = estudiante.length;

const inicialNombre = nombre[0]
const finalApellido = apellido[apellido.length - 1]

const estudianteSinEspacios = estudiante.replace(/ /g, "")

const nombreEnEstudiante = estudiante.includes(nombre)
