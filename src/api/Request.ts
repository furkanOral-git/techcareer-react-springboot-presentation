
export default class Request {

    private static url: string = "http://localhost:8080/api";
    private static token: string;


    static updateToken(token: string) {

        this.token = token;
    }
    static async post(endpoint: string, data: {}, tokenRequired: boolean): Promise<any> {

        const tokenStr = (tokenRequired) ? `?token=${this.token}` : "";
        
        const response = await fetch(`${this.url}${endpoint}${tokenStr}`, {

            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        return response.json();
    }
    static async get(endpoint: string, tokenRequired: boolean): Promise<any> {

        const tokenStr = (tokenRequired) ? `?token=${this.token}` : "";
        const response = await fetch(`${this.url}${endpoint}${tokenStr}`, {

            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
            

        })
        return response.json();
    }
    static async delete(endpoint: string, data: {}, tokenRequired: boolean): Promise<any> {

        const tokenStr = (tokenRequired) ? `?token=${this.token}` : "";
        const response = await fetch(`${this.url}${endpoint}${tokenStr}`, {

            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)

        })
        return response.json();
    }
    static async update(endpoint: string, data: {}, tokenRequired: boolean): Promise<any> {

        const tokenStr = (tokenRequired) ? `?token=${this.token}` : "";
        const response = await fetch(`${this.url}${endpoint}${tokenStr}`, {

            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        return response.json();
    }
}