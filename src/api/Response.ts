export class SecurityToken {
    token: string


    constructor(token: string) {
        this.token = token;
    }
}
export class BaseResponse {
    __success: boolean;
    __message: string;

    constructor(message: string, success: boolean) {
        this.__message = message;
        this.__success = success;
    }
}
export class BaseDataResponse<TData> extends BaseResponse {
    __data: TData
    /**
     *
     */
    constructor(message: string, success: boolean, data: TData) {

        super(message, success);
        this.__data = data;

    }
}