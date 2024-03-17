import RegisterForm from "./register-form";

export default function RegisterPage() {
	return (
		<div className="flex flex-col ">
			<div className="md:w-1/2 lg:w-1/3 md:mx-auto px-2">
				<h1 className="text-center text-2xl font-bold">Đăng ký</h1>
				<RegisterForm />
			</div>
		</div>
	);
}
