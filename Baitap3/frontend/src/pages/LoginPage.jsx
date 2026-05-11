import InputCustom from "../components/InputCustom.jsx"
import ButtonCustom from "../components/ButtonCustom.jsx"

const LoginPage = () =>{
    return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-96">
            <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">Đăng Nhập</h2>
            <form>
                <InputCustom label="Email" type="email" placeholder="Nhập email của bạn" />
                <InputCustom label="Mật khẩu" type="password" placeholder="*********" />
                <ButtonCustom text="Đăng nhập" />
                <p className= "mt-4 text-sm text-center">
                    Chưa có tài khoản? <span classNamev="text-blue-500 cursor-pointer"> Đăng ký ngay </span>
                </p>
                </form>
        </div>
    </div>
    );
};

export default LoginPage;
