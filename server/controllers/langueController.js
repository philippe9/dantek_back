import { CODES, response, STATUS } from '../global/vars';
import Langue from '../models/langue';


const langueController = {};

langueController.getAllLangues = (req, res) => {

    Langue.getLangues().then((langues) => {
        response.body = langues
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
    // console.log(req.params);
    Langue.getLangueById(req.params).then((langues) => {
        res.status(200).json(langues)
    })
}

export default langueController;