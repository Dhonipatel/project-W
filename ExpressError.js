class ExpressError extends Error {
    constructor(status, message) {
        super();
        this.status;
        this.message = message;
    }
}

module.exports = ExpressError;