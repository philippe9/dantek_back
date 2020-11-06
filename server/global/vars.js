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
    R_AVOIR_TEXT_COMPETENCE: 'r_avoir_text_competence',
    TEXT_LANGUE: 'text_langue',
    NIVEAU: 'niveau',
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
const NIVEAU = {
    PARLE: 1,
    ECRIT: 2,
    COMPREHENSION: 3
}
export {
    TABLES,
    CODES,
    STATUS,
    response
};