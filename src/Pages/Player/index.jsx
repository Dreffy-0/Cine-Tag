import { useParams } from "react-router-dom";
import styles from "./Player.module.css";
import Banner from "@/Components/Banner";
import Titulo from "@/Components/Titulo";
import NaoEncontrada from "../NaoEncontrada";
import { useEffect, useState } from "react";

function Player() {
	const [video, setVideo] = useState();
	const parametros = useParams();

	useEffect(() => {
		fetch(
			`https://my-json-server.typicode.com/Dreffy-0/Cine-Tag/videos?id=${parametros.id}`,
		)
			.then(resposta => resposta.json())
			.then(dados => {
				setVideo(...dados);
			});
	}, []);

	if (!video) {
		return <NaoEncontrada />;
	}

	return (
		<>
			<Banner image="player" />
			<Titulo>
				<h1>Player</h1>
			</Titulo>
			<section className={styles.container}>
				<iframe
					width="100%"
					height="100%"
					src={video.link}
					title={video.titulo}
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowFullScreen
				></iframe>
			</section>
		</>
	);
}

export default Player;
