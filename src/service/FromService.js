import Api from '../api/Api'
const FormService = {
    sendMail(email) {
        return Api.post('?email=' + email)
    }
}

export default FormService