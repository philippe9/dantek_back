import { CODES, response, STATUS } from '../global/vars';
import Competence from '../models/competence';

const competenceController = {};


competenceController.getCompetences = (req, res) => {
    Competence.getCompetences().then((competences) => {
        response.body = competences;
        res.status(200).json(response);
    }).catch((error) => {
        response.body = error;
        response.code = 101;
        response.message = CODES[101];
        response.status = STATUS.FAILED;
        res.status(200).json(response);
    })
}
competenceController.getCompetence = (req, res) => {
    Competence.getCompetenceById(req.params).then((competences) => {
        response.body = competences;
        res.status(200).json(response);
    }).catch((error) => {
        response.body = error;
        response.code = 101;
        response.message = CODES[101];
        response.status = STATUS.FAILED;
        res.status(200).json(response);
    })
}
competenceController.getTextesCompetence = (req, res) => {
    Competence.getTextesCompetence(req.params).then((competences) => {
        response.body = competences;
        res.status(200).json(response);
    }).catch((error) => {
        response.body = error;
        response.code = 101;
        response.message = CODES[101];
        response.status = STATUS.FAILED;
        res.status(200).json(response);
    })
}
competenceController.getCompetencesLangue = (req, res) => {
    Competence.getCompetencesLangue(req.params).then((competences) => {
        response.body = competences;
        res.status(200).json(response);
    }).catch((error) => {
        response.body = error;
        response.code = 101;
        response.message = CODES[101];
        response.status = STATUS.FAILED;
        res.status(200).json(response);
    })
}
competenceController.postCompetenceLangue = (req, res) => {
    Competence.competenceLangue(req.body).then((competences) => {
        response.body = competences;
        res.status(200).json(response);
    }).catch((error) => {
        response.body = error;
        response.code = 101;
        response.message = CODES[101];
        response.status = STATUS.FAILED;
        res.status(200).json(response);
    })
}
competenceController.postUpdateCompetenceLangue = (req, res) => {
    Competence.updateCompetenceLangue(req.body).then((competences) => {
        response.body = competences;
        res.status(200).json(response);
    }).catch((error) => {
        response.body = error;
        response.code = 101;
        response.message = CODES[101];
        response.status = STATUS.FAILED;
        res.status(200).json(response);
    })
}
competenceController.postDeleteCompetenceLangue = (req, res) => {
    Competence.deleteCompetenceLangue(req.body).then((competences) => {
        response.body = competences;
        res.status(200).json(response);
    }).catch((error) => {
        response.body = error;
        response.code = 101;
        response.message = CODES[101];
        response.status = STATUS.FAILED;
        res.status(200).json(response);
    })
}

export default competenceController;