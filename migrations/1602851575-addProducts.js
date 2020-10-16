const products = [
	{
		name: 'Groot',
		price: 15,
		photo_one: 'groot1.png',
		photo_two: 'groot2.png',
	},
	{
		name: 'Captain Marvel',
		price: 15,
		photo_one: 'captain_marvel1.png',
		photo_two: 'captain_marvel2.png',
	},
	{
		name: 'Gambit',
		price: 15,
		photo_one: 'gambit1.png',
		photo_two: 'gambit2.png',
	},
	{
		name: 'Harley Quinn',
		price: 15,
		photo_one: 'harley1.png',
		photo_two: 'harley2.png',
	},
	{
		name: 'Superman',
		price: 15,
		photo_one: 'superman1.png',
		photo_two: 'superman2.png',
	},
	{
		name: 'Joker',
		price: 15,
		photo_one: 'joker1.png',
		photo_two: 'joker2.png',
	},
	{
		name: 'Spider-man',
		price: 15,
		photo_one: 'spiderman1.png',
		photo_two: 'spiderman2.png',
	},
	{
		name: 'Wonder Woman',
		price: 15,
		photo_one: 'wonderwoman1.png',
		photo_two: 'wonderwoman2.png',
	},
	{
		name: 'Iron Man',
		price: 15,
		photo_one: 'ironman1.png',
		photo_two: 'ironman2.png',
	},
]

exports.up = async (sql) => {
	await sql`
		INSERT INTO products ${sql(products, 'name', 'price', 'photo_one', 'photo_two')}
	`
};

exports.down = async (sql) => {
	for (const product in products) {
		await sql`DELETE FROM products WHERE
		name = ${product.name}`
	}
};
