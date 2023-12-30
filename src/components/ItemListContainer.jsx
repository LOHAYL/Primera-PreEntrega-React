
export const ItemListContainer = ({ greeting }) => {

	return (
		<div className="container">
            <h2>Saludo enviado desde una Props de App.js</h2>
            <h2>{greeting}</h2>
        </div>
	);
};

export default ItemListContainer;