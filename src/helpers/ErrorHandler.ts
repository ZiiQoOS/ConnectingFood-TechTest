import Error from "../Models/Error";


export default class ErrorHandler {

    // TODO : Enhance error handling
    static handleError(error: Error) {
        return error.message;
    }
}