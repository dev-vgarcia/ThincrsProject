import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Alert, Button, Form, FormGroup, Input, Label } from 'reactstrap';

function InsertarProducto() {

	const [message, setMessage] = useState("");
	const navigate = useNavigate();

	function InsertarProducto(event) {
		event.preventDefault();
		
		const endpoint = event.target.action;
		const data = Array.from(event.target.elements)
			.filter((input) => input.name)
			.reduce((obj, input) => Object.assign(obj, { [input.name]: input.value }), {});

			fetch(endpoint, {
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			}).then((response) => {
				if (response.status !== 200) {
					throw new Error(response.statusText);
				}

				return response.json();
			}).then(() => {
				navigate("/");
			}).catch((err) => {
			
				setMessage(err.toString());
			});
			
	}

	return (
		<>
		{ message && <Alert color="danger">{message}</Alert> }
		<Form action='/products/save' method='post' onSubmit={InsertarProducto}>
			<FormGroup>
				<Label for="inputNombre">Nombre:</Label>
				<Input id="inputNombre" name="name"  />
			</FormGroup>
			<FormGroup>
				<Label for="categoria">Categoria:</Label>
				<Input id="categoria" name="categoryId" />
			</FormGroup>
			<FormGroup>
				<Label for="precio">Precio:</Label>
				<Input id="precio" name="price" />
			</FormGroup>
			<FormGroup>
				<Label for="stock">Cantidad:</Label>
				<Input id="stock" name="stock" />
			</FormGroup>
			<FormGroup>
				<Label for="active">En Venta:</Label>
				<Input id="active" name="active" />
			</FormGroup>
			
			<Button>
				Insertar
			</Button>
		</Form>
		</>
	);
}

export default InsertarProducto;