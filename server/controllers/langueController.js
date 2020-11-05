import Langue from '../models/langue';
import db from './../models'

const langueController = {};

langueController.getAllLangues = (req, res) => {

    Langue.getLangues().then((langues) => {
        res.status(200).json(langues)
    })
}

export default langueController;