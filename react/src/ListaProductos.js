import React, { useState, useEffect } from 'react';
import { Table } from 'reactstrap';

function ListaProductos() {

	const [productos, setProductos] = useState([]);

	useEffect(function() {
		fetch("/products/all", { redirect: "error" })
			.then(response => response.json())
			.then(response => setProductos(response))
			.catch(() => setProductos([{id: '', nombre: 'Debe iniciar sesión para ver las productos.'}]));
	}, []);

	return (
		<>
			<h1>productos en la base de datos</h1>
			<Table striped>
				<thead>
					<tr>
						<th>ID</th>
						<th>Nombre</th>
					</tr>
				</thead>
				<tbody>
					{productos.map(producto => (
						<tr>
							<td>
								{producto.productId}
							</td>
							<td>
								{producto.name}
							</td>
						</tr>
					))}
				</tbody>
			</Table>
		</>
	);
}

export default ListaProductos;