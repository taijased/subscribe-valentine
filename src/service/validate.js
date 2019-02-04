const Validate = {
    validateForWhom(rule, value, callback) {
        if (value === "") {
            callback(new Error("Обязательное поле"));
        } else {
            if (value !== "" && value.length < 20) {
                callback();
            } else {
                callback(new Error("Слишком длинное Имя"));
            }
        }
    },
    validateFromWhom(rule, value, callback) {
        if (value === "") {
            callback(new Error("Обязательное поле"));
        } else {
            if (value !== "" && value.length < 20) {
                callback();
            } else {
                callback(new Error("Слишком длинное Имя"));
            }
        }
    },
    validateMessage(rule, value, callback) {
        if (value === "") {
            callback(new Error("Обязательное поле"));
        } else {
            if (value !== "" && value.length < 300) {
                callback();
            } else {
                callback(new Error("Слишком длинное Поздравление"));
            }
        }
    },
    validateEmail(rule, value, callback) {
        if (value === "") {
            callback(new Error("Обязательное поле"));
        } else {
            let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            const isTrue = re.test(value);
            if (!isTrue) {
                callback(new Error("Введите в формате. Пример: name@mail.ru"));
            } else {
                callback();
            }
        }
    },
    validateCheckBox(rule, value, callback) {
        if (value === false) {
            callback(
                new Error("Пожалуйста согласитесь с пользовательским соглашением")
            );
        } else {
            callback();
        }
    }
}

export default Validate