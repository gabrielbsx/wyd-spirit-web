const emailRules = require('email-validator');
const userRepository = require('../repositories/news-repository');

module.exports = class newsService{
    slugRules = /^([a-zA-Z0-9_-]{10,50})$/;

    constructor() {
        this.status = '';
        this.message = '';
    }

    setTitle(title) {
        try {
            return (this.title = title);
        } catch (err) {
            return false;
        }
    }

    setSlug(slug) {
        try {
            return (this.slug = slug);
        } catch (err) {
            return false;
        }
    }

    setCategory(category) {
        try {
            return (this.category = category);
        } catch (err) {
            return false;
        }
    }

    setContent(content) {
        try {
            return (this.content = content);
        } catch (err) {
            return false;
        }
    }

    setName(name) {
        try {
            return (this.name = name);
        } catch (err) {
            return false;
        }
    }

    getStatus() {
        return this.status;
    }

    getMessage() {
        return this.message;
    }

    create() {
        try {
            if (this.title.length > 10 && this.title.length < ) {

            } else {
                this.status = 'error';
                this.message = 'Titulo deve conter 10 a 50 caracteres!';
            }
            return false;
        } catch (err) {
            return false;
        }
    }

};