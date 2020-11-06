import { CODES, response, STATUS } from '../global/vars';
import Langue from '../models/langue';


const langueController = {};

langueController.getAllLangues = (req, res) => {

    Langue.getLangues().then((langues) => {
        response.body = langues;
        res.status(200).json(response);
    }).catch((error) => {
        response.body = error;
        response.code = 101;
        response.message = CODES[101];
        response.status = STATUS.FAILED;
        res.status(200).json(response);
    })
}

langueController.getLangue = (req, res) => {

    Langue.getLangueById(req.params).then((langues) => {
        response.body = langues;
        res.status(200).json(response)
    }).catch((error) => {
        response.body = error;
        response.code = 101;
        response.message = CODES[101];
        response.status = STATUS.FAILED;
        res.status(200).json(response);
    })
}

langueController.getTextLangue = (req, res) => {

    Langue.getTextLangue(req.params).then((langues) => {
        response.body = langues;
        res.status(200).json(response)
    }).catch((error) => {
        response.body = error;
        response.code = 101;
        response.message = CODES[101];
        response.status = STATUS.FAILED;
        res.status(200).json(response);
    })
}
langueController.getNomsLangue = (req, res) => {

    Langue.getNomsLangue(req.params).then((langues) => {
        response.body = langues;
        res.status(200).json(response)
    }).catch((error) => {
        response.body = error;
        response.code = 101;
        response.message = CODES[101];
        response.status = STATUS.FAILED;
        res.status(200).json(response);
    })
}
langueController.postLangue = (req, res) => {

    Langue.langue(req.body).then((langue) => {
        response.body = langue;
        res.status(200).json(response)
    }).catch((error) => {
        response.body = error;
        response.code = 101;
        response.message = CODES[101];
        response.status = STATUS.FAILED;
        res.status(200).json(response);
    })
}
langueController.postNomLangue = (req, res) => {

    Langue.nomLangue(req.params).then((langue) => {
        response.body = langue;
        res.status(200).json(response)
    }).catch((error) => {
        response.body = error;
        response.code = 101;
        response.message = CODES[101];
        response.status = STATUS.FAILED;
        res.status(200).json(response);
    })
}

langueController.postTextLangue = (req, res) => {

    Langue.textLangue(req.params).then((langue) => {
        response.body = langue;
        res.status(200).json(response)
    }).catch((error) => {
        response.body = error;
        response.code = 101;
        response.message = CODES[101];
        response.status = STATUS.FAILED;
        res.status(200).json(response);
    })
}

export default langueController;