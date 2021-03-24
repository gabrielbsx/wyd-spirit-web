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
        return (this.username = username);
    }

    setPassword(password) {
        return (this.password = password);
    }
    
    setEmail(email) {
        return (this.email = email);
    }

    setName(name) {
        return (this.name = name);
    }

    setOldPassword(oldpassword) {
        return (this.oldpassword = oldpassword);
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
            return {
                status: this.status,
                message: this.message,
            };
        } catch (err) {
            console.log(err);
            return {
                status: 'error',
                message: this.message,
            };
        }
    }

    userExists() {
        try {
            if (userRepository.exists(this.username)) {
                return true;
            }
            return false;
        } catch (err) {
            console.log(err);
            return false;
        }
    }

    getByUsername() {
        try {

        } catch (err) {
            
        }
    }

    getByEmail() {
        try {

        } catch (err) {

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
            console.log(err);
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
            console.log(err);
            return false;
        }
    }

    deleteByUsername() {
        try {
            if (this.username.match(this.userRules)) {
    
            }
            return false;
        } catch (err) {
            console.log(err);
            return false;
        }
    }

    deleteByEmail() {
        try {
            if (emailRules(this.email)) {
    
            }
            return false;
        } catch (err) {
            console.log(err);
            return false;
        }
    }
};