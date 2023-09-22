import Cabecalho from "@/Components/Cabecalho";
import Container from "@/Components/ContainerPaginas";
import Rodape from "@/Components/Rodape";
import FavoritosProvider from "@/Context/Favoritos";
import { Outlet } from "react-router-dom";

function PaginaBase() {
	return (
		<main>
			<Cabecalho />
			<FavoritosProvider>
				<Container>
					<Outlet />
				</Container>
			</FavoritosProvider>
			<Rodape />
		</main>
	);
}

export default PaginaBase;
