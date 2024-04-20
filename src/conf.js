//Base de datos
const ddbbConfig = {
    user: "root",
    host: "pg_container_motos",
    database: "db",
    password: "root",
    port: 5432,
};
const PORT =  8100;
const IP =  null;
const FOTO_PATH = "/app/fotos/";
const FOTO_URL = "http://laurldequecorrespongui.com/";

module.exports = {
    ddbbConfig,
    PORT,
    IP,
    FOTO_PATH,
    FOTO_URL
}