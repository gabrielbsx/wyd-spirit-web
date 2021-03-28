const newsRepository = require('../repositories/news-repository');

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

    getMessage() {
        return this.message;
    }

    create() {
        try {
            if (this.title.length > 10 && this.title.length < 100) {
                if (this.slug.length > 10 && this.slug.length < 50) {
                    if (this.name.length > 4 && this.name.length < 50) {
                        if (this.category > 0 && this.category < 5) {
                            if (newsRepository.create(this.title, this.slug, this.category, this.content, this.name)) {
                                this.message = 'Notícia criada com sucesso!';
                                return true;
                            } else this.message = 'Não foi possível criar a notícia!';
                        } else this.message = 'Categoria inválida!';
                    } else this.message = 'Nome deve conter entre 4 a 50 caracteres!';
                } else this.message = 'Slug deve conter entre 10 a 50 caracteres!';
            } else this.message = 'Título deve conter entre 10 a 50 caracteres!';
            return false;
        } catch (err) {
            this.message = err.toString();
            return false;
        }
    }

};