import { InstagramLogo } from 'phosphor-react';

export default function Home() {
	return (
		<div className="w-full h-[100vh] bg-white flex flex-col items-center justify-center">
			<div className="">
				<img src="logo.svg" alt="Logo do NR Cortes" />
			</div>
			<div>
				<h1 className="text-3xl">
					<strong> Em construção! </strong>
				</h1>
			</div>
			<div>
				<a
					className="p-5 text-xl flex justify-center items-center"
					href="https://www.instagram.com/nrcortes__/"
				>
					<strong className="mr-2"> Siga nosso instagram </strong>
					<InstagramLogo size={24} />
				</a>
			</div>
		</div>
	);
}
