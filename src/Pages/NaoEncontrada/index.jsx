import styles from "./NaoEncontrada.module.css";
import erro404 from "@/assets/erro404.jpg";

function NaoEncontrada() {
	return (
		<section className={styles.container}>
			<img
				src={erro404}
				alt="Imagem robo erro 404"
				className={styles.erro404}
			/>
			<p>O conteúdo que você procura não foi encontrado!</p>
		</section>
	);
}

export default NaoEncontrada;
