import { TodoListProp } from "../components/todo";
import { CreateTodoItemForm, CreateTodoListForm, DataForm, UpdateTodoItemForm } from "./Form";
import Request from "./Request";
import { BaseDataResponse, BaseResponse } from "./Response";


export default class TodoApiService {


    static async updateItem(form: UpdateTodoItemForm): Promise<boolean> {

        return await Request.update("/todo/update", form, true);
    }
    static async createList(form: CreateTodoListForm): Promise<BaseResponse> {
        return await Request.post("/todo/create", form, true);
    }
    static async createListItem(form: CreateTodoItemForm): Promise<BaseResponse> {
        return await Request.post("/todo/create-item", form, true);
    }
    static async deleteItem(form: DataForm<number>): Promise<BaseResponse> {

        return await Request.delete("/todo/delete-item", form, true);
    }
    static async deleteList(form: DataForm<number>): Promise<BaseResponse> {

        return await Request.delete("/todo/delete", form, true);
    }
    static async getAllList(): Promise<BaseDataResponse<TodoListProp[]>> {

        return await Request.get("/todo/get-all", true);
    }
}