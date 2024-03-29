import Errors from "./Errors";

class Form {
    /**
     * Create a new Form instance.
     *
     * @param {object} data
     */
    constructor(data) {
        this.originalData = data;

        for (let field in data) {
            this[field] = data[field];
        }

        this.errors = new Errors();
    }

    /**
     * Fetch all relevant data for the form.
     */
    data(requestType) {
        let data = new FormData();

        for (let property in this.originalData) {
            if (this[property] != null) {
                if (
                    typeof this[property] === "object" &&
                    !("lastModified" in this[property])
                ) {
                    data.set(property, JSON.stringify(this[property]));
                } else {
                    data.set(property, this[property]);
                }
            }
        }

        data.set("_method", requestType);

        return data;
    }

    /**
     * Reset the form fields.
     */
    reset() {
        for (let field in this.originalData) {
            this[field] = "";
        }

        this.errors.clear();
    }

    /**
     * Send a POST request to the given URL.
     * .
     * @param {string} url
     */
    post(url) {
        return this.submit("post", url);
    }

    /**
     * Send a PUT request to the given URL.
     * .
     * @param {string} url
     */
    put(url) {
        return this.submit("put", url);
    }

    /**
     * Send a PATCH request to the given URL.
     * .
     * @param {string} url
     */
    patch(url) {
        return this.submit("patch", url);
    }

    /**
     * Send a DELETE request to the given URL.
     * .
     * @param {string} url
     */
    delete(url) {
        return this.submit("delete", url);
    }

    /**
     * Submit the form.
     *
     * @param {string} requestType
     * @param {string} url
     */
    submit(requestType, url) {
        return new Promise((resolve, reject) => {
            axios
                .post(url, this.data(requestType))
                .then((response) => {
                    this.onSuccess(response.data);
                    resolve(response.data);
                })
                .catch((error) => {
                    this.onFail(error.response.data.errors);
                    reject(error.response.data.errors);
                });
        });
    }

    /**
     * Handle a successful form submission.
     *
     * @param {object} data
     */
    onSuccess(data) {
        this.reset();
    }

    /**
     * Handle a failed form submission.
     *
     * @param {object} errors
     */
    onFail(errors) {
        this.errors.record(errors);
    }
}
export default Form;
