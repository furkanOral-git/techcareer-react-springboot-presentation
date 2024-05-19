import { DataForm, LoginForm, RegisterForm } from "./Form";
import Request from "./Request";
import { BaseResponse, BaseDataResponse, SecurityToken } from "./Response";

export default class AuthApiService {


    static async logout(itemId: number): Promise<BaseResponse> {

        return await Request.delete("/session/logout", { data: itemId }, true);
    }
    static async changePassword(form: DataForm<string>): Promise<BaseResponse> {
        return await Request.update("/session/pass", form, true);
    }
    static async changeEmail(form: DataForm<string>): Promise<BaseResponse> {
        return await Request.update("/session/email", form, true);
    }
    static async changeUsername(form: DataForm<string>): Promise<BaseResponse> {

        return await Request.update("/session/username", form, true);
    }
    static async login(form: LoginForm): Promise<BaseDataResponse<SecurityToken>> {

        return await Request.post("/auth", form, true);
    }
    static async register(form: RegisterForm): Promise<BaseResponse> {

        return await Request.post("/sign", form, false);
    }
}