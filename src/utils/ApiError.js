class ApiError extends Error {
    constructor(
        message = "wrongg!!",
        status,
        errors = [],
        stack = ""
    ) {
        super(message)
        this.data = null
        this.statusCode = statusCode
        this.message = message
        this.success = false
        this.errors = errors

        if (stack) {

        }
    }
}
export { ApiError }