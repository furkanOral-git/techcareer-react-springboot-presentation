import { motion } from "framer-motion";
import { useRef } from "react";
import Request from "../api/Request";
import { LoginForm } from "../api/Form";
import AuthApiService from "../api/AuthApiService";
import "../assets/login.css";
interface LoginProps {

    setAuthenticated: React.Dispatch<React.SetStateAction<boolean>>
    animate: string
}
export const Login: React.FC<LoginProps> = (props) => {

    const warningRef = useRef<HTMLParagraphElement>(null);





    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault();

        if (warningRef.current != null && warningRef.current.innerText.length > 0) {
            warningRef.current.innerText = "";
        }
        const formData = new FormData(e.currentTarget)
        const password = formData.get("password");
        const email = formData.get("emailOrUsername");


        const data: LoginForm = new LoginForm(email as string, password as string, "FR:FR:FR:FR:FR:FR")
        var response = await AuthApiService.login(data);

        if (!response.__success && warningRef.current) {

            warningRef.current.innerText = response.__message
            warningRef.current.classList.toggle("warning-active")
            return;
        }
        if (response.__success && warningRef.current) {
            warningRef.current.innerText = response.__message;
            warningRef.current.classList.toggle("warning-active-done")
            return;
        }
        Request.updateToken(response.__data.token);
    };

    return (
        <motion.form variants={{
            hidden: { x: "100vw" },
            visible: { x: 0 },
            left:{x : "-100vw"},
        }} initial="hidden" animate={props.animate} className="form-login" onSubmit={handleSubmit}>
            <h2>Giriş Yap</h2>
            <div className="login-emailOrUsername input">
                <label htmlFor="username">Email</label>
                <input type="text" id="login-emailOrUsername" name="emailOrUsername" required />
            </div>
            <div className="login-password input">
                <label htmlFor="password">Şifre</label>
                <input type="password" id="login-password" name="password" required />
                <p ref={warningRef} className="warning login-warning"></p>
            </div>
            <button className="login-btnSubmit btn" type="submit">Login</button>
        </motion.form>
    )
}

