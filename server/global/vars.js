const CODES = {
    100: 'Succès',
    101: 'Erreur interne au serveur',
    102: 'Service indisponible',
};

const TABLES = {
    COMPETENCE: 'competence',
    LANGUE: 'langue',
    R_AVOIR_AUTRE_NOM: 'r_avoir_autre_nom',
    R_AVOIR_COMPETENCE_LANGUE: 'r_avoir_competence_langue',
    R_AVOIR_COMPETENCE_LANGUE: 'r_avoir_text_competence',
    TEXT_LANGUE: 'text_langue',
}
const STATUS = {
    SUCESS: "Sucess",
    FAILED: "Failed",
    PENDING: "Pending"
}
const response = {
    body: "",
    code: 100,
    status: "Success",
    message: ""
}
export {
    TABLES,
    CODES,
    STATUS,
    response
};