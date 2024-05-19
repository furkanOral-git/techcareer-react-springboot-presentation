export class LoginForm {

    emailOrUsername: string;
    password: string;
    macAddress: string;

    constructor(emailOrUsername: string, password: string, macAddress: string) {

        this.emailOrUsername = emailOrUsername;
        this.password = password;
        this.macAddress = macAddress;

    }
}
export class RegisterForm {

    email: string
    password: string
    macAddress: string

    constructor(email: string, password: string, macAddress: string) {

        this.email = email;
        this.password = password;
        this.macAddress = macAddress;

    }
}
export class CreateTodoItemForm {
    content: string
    list_id: string


    constructor(content: string, list_id: string) {

        this.content = content;
        this.list_id = list_id;
    }
}
export class CreateTodoListForm {
    title: string
    /**
     *
     */
    constructor(title: string) {
        this.title = title;
    }
}
export class DataForm<T> {
    data: T


    constructor(data: T) {
        this.data = data;
    }
}
export class UpdateTodoItemForm {
    id: number
    status: boolean
    content: string

    /**
     *
     */
    constructor(id: number, status: boolean, content: string) {

        this.id = id;
        this.status = status;
        this.content = content;
    }
}