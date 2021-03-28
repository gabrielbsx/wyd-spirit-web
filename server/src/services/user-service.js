const emailRules = require('email-validator');
const userRepository = require('../repositories/user-repository');

module.exports = class userService{
    userRules = /^([A-Za-z0-9]{4,12})$/;
    passRules = /^([A-Za-z0-9]{4,12})$/;

    constructor() {
        this.status = '';
        this.message = '';
    }

    setUsername(username) {
        try {
            return (this.username = username);
        } catch (err) {
            return false;
        }
    }

    setPassword(password) {
        try {   
            return (this.password = password);
        } catch (err) {
            return false;
        }
    }
    
    setEmail(email) {
        try {
            return (this.email = email);
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

    setOldPassword(oldpassword) {
        try {
            return (this.oldpassword = oldpassword);
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
            if (this.username.match(this.userRules)) {
                if (this.password.match(this.passRules)) {
                    if (emailRules(this.email) && this.email.length < 100) {
                        if (this.name.length > 4 && this.name.length < 50) {
                            if (!this.userExists()) {
                                if (userRepository.create(this.username, this.password, this.email, this.name)) {
                                    this.status = 'success';
                                    this.message = 'Cadastro efetuado com sucesso!';
                                    return true;
                                } else {
                                    this.status = 'error';
                                    this.message = 'Não foi possível efetuar o cadastro!';
                                }
                            } else {
                                this.status = 'error';
                                this.message = 'Não foi possível efetuar o cadastro!';
                            }
                        } else {
                            this.status = 'error';
                            this.message = 'Nome inválido!';
                        }
                    } else {
                        this.status = 'error';
                        this.message = 'Email inválido!';
                    }
                } else {
                    this.status = 'error';
                    this.message = 'Senha inválida!';
                }
            } else {
                this.status = 'error';
                this.message = 'Usuário inválido!';
            }
            return false;
        } catch (err) {
            this.status = 'error';
            this.message = err.toString();
            return false;
        }
    }

    userExists() {
        try {
            if (userRepository.exists(this.username)) {
                return true;
            }
            return false;
        } catch (err) {
            return false;
        }
    }

    getByUsername() {
        try {

        } catch (err) {
            return false;
        }
    }

    getByEmail() {
        try {

        } catch (err) {
            return false;
        }
    }

    updateByEmail() {
        try {
            if (emailRules(this.email)) {
                if (this.password.match(this.passRules)) {
                    if (userRepository.updateByEmail(this.email, this.password)) {
    
                    }
                }
            }
            return false;
        } catch (err) {
            return false;
        }
    }

    updateByUsername() {
        try {
            if (this.username.match(this.userRules)) {
                if (this.password.match(this.passRules)) {
                    if (userRepository.updateByUsername(this.username, this.password, this.oldpassword)) {
    
                    }
                }
            }
            return false;
        } catch (err) {
            return false;
        }
    }

    deleteByUsername() {
        try {
            if (this.username.match(this.userRules)) {
    
            }
            return false;
        } catch (err) {
            return false;
        }
    }

    deleteByEmail() {
        try {
            if (emailRules(this.email)) {
    
            }
            return false;
        } catch (err) {
            return false;
        }
    }
};