import Card from "@/Components/Card";
import styles from "./Favoritos.module.css";
import { useFavoritosContext } from "@/Context/Favoritos";
import Banner from "@/Components/Banner";
import Titulo from "@/Components/Titulo";

function Favoritos() {
	const { favorito } = useFavoritosContext();
	return (
		<>
			<Banner image="favoritos" />
			<Titulo>
				<h1>Meus Favoritos</h1>
			</Titulo>
			<section className={styles.container}>
				{favorito.length === 0 ? (
					<>
						<h1>Você ainda não favoritou nenhum filme!</h1>
						<img
							width="300"
							src="https://assets.stickpng.com/images/5896f72ecba9841eabab60fe.png"
							alt="Foto de sapo triste"
						/>
					</>
				) : (
					favorito.map(fav => {
						return <Card {...fav} key={fav.id} />;
					})
				)}
			</section>
		</>
	);
}

export default Favoritos;
