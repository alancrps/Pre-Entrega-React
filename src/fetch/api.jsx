export const getMotos = async () => {
	try {
		const response = await fetch('https://bikecorps-api.onrender.com/motos');
		if (!response.ok) throw new Error('Error al obtener las motos');
		return await response.json();
	} catch (error) {
		console.error(error);
		return [];
	}
};
