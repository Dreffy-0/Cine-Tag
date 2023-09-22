import styles from "./Inicio.module.css";
import Card from "@/Components/Card";
import Banner from "@/Components/Banner";
import Titulo from "@/Components/Titulo";
import { useEffect, useState } from "react";

function Inicio() {
	const [videos, setVideos] = useState([]);

	useEffect(() => {
		fetch("https://my-json-server.typicode.com/Dreffy-0/Cine-Tag/videos")
			.then(resposta => resposta.json())
			.then(dados => {
				setVideos(dados);
			});
	}, []);

	return (
		<>
			<Banner image="home" />
			<Titulo>
				<h1>Um lugar para guardar seus vídeos e filmes!</h1>
			</Titulo>
			<section className={styles.container}>
				{videos.map(video => (
					<Card {...video} key={video.id} />
				))}
			</section>
		</>
	);
}

export default Inicio;
