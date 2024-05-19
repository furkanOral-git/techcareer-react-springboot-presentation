import { motion } from "framer-motion";
import { SetStateAction, useRef } from "react";
import { RegisterForm } from "../api/Form";
import AuthApiService from "../api/AuthApiService";
import "../assets/register.css";


interface RegisterProps {
    
    setIsSigned: React.Dispatch<SetStateAction<boolean>>
    animate: string

}
export const Register: React.FC<RegisterProps> = (props) => {


    const checkPassRef = useRef<HTMLInputElement>(null);
    const warningRef = useRef<HTMLParagraphElement>(null);


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault(); // Formun varsayılan submit davranışını engelle
        if (warningRef.current != null && warningRef.current.innerText.length > 0) {
            warningRef.current.innerText = "";
        }
        const formData = new FormData(e.currentTarget)
        const password = formData.get("password");
        const email = formData.get("email");
        const check = checkPassRef.current?.value;

        if (password !== check && warningRef.current) {
            warningRef.current.innerText = "Parolalar eşleşmiyor!"
            warningRef.current.classList.toggle("warning-active")
            return;
        }

        const data: RegisterForm = new RegisterForm(email as string, password as string, "FR:FR:FR:FR:FR:FR")
        var response = await AuthApiService.register(data);
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


    };



    return (
        <motion.form variants={{
            hidden: { x: "100vw" },
            visible: { x: 0 },
        }} initial="hidden" animate={props.animate} className="form-register" onSubmit={handleSubmit} >
            <div className="register-email input">
                <label htmlFor="email">Email</label>
                <input type="text" id="register-email" name="email" required />
            </div>
            <div className="register-password input">
                <label htmlFor="password">Şifre</label>
                <input type="password" className="register-input input" id="register-password" name="password" required />
            </div>
            <div className="register-password input">
                <label htmlFor="password">Şifre</label>
                <input ref={checkPassRef} type="password" className="register-input input" id="register-check-password" name="check" required />
                <p ref={warningRef} className="warning register-warning"></p>
            </div>
            <button className="login-btnSubmit btn" type="submit">Kayıt Ol</button>
        </motion.form>
    )
}

