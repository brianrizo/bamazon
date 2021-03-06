//npm installed packages
var mysql = require('mysql');
var inquirer = require('inquirer');

// connection to mysql
var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	password: "root",
	database: "bamazon_db"
})

console.log("Welcome to BAMazon!");
//connect to sql and start the products view in command
connection.connect(function(err){
	if (err) throw err;
	console.log("connected as Customer");
	start();
})

// start promopting
var start = function (){
	inquirer.prompt(
	{
		name: "welcome",
		type: "list",
		message: "Welcome, would you like to see our BAMazing products?",
		choices: ["YES", "NO"]
	}).then(function(answer) {
		if (answer.welcome.toUpperCase() == "YES"){
			ourProducts();
		}
		else {
			console.log("Come back and visit us again!");
			return;
		}
	})
};


var ourProducts = function (){
connection.query('SELECT * FROM products', function(err, res) {
    for (var i = 0; i < res.length; i++) {
    	//diplay products offered
        console.log(res[i].itemID + " | " + res[i].productName + " | " + res[i].departmentName + " | " + "$" + res[i].price);
    }
    console.log("-----------------------------------");
    // asks the next question ater 2 seconds
    setTimeout(function() {nextAsk();}, 2000);
})
};

// prompt next questions to find out what customer wants
var nextAsk = function (){
	inquirer.prompt([
	{
		name: "productid",
		type: "list",
		message: "Choose the ID of the product you wish to purchase:",
		choices: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]
	},	
	{
		name: "productunits",
		type: "input",
		message: "How many units of this product would you like to puchase?",
		validate: function(value) {
            if (isNaN(value) == false) {
                return true;
            } else {
                return false;
            }
        }
	}]).then(function(answer) {
		console.log("-----------CHECK OUT------------------------");
			checkQuantity(answer);
	})
};

// compare product units wanted vs available products
var checkQuantity = function(answer) {
	console.log("Checking my stock");
	var query = 'SELECT stockQuantity, price FROM products WHERE itemID =?';
	var params = answer.productid;

		connection.query(query, params, function(err, res) {
			if ( res[0].stockQuantity < answer.productunits) {
				console.log("Insufficient quantity");
				nextAsk(1);
			}
			else {
				// calculate the total by pulling the price and multiple by product wanted	
				var total = answer.productunits * res[0].price;
				var newQuantity = res[0].stockQuantity-answer.quantity;
				
				console.log("Total Cost: $" + total);

				connection.query("UPDATE `products` SET stockQuantity = (stockQuantity - ?) WHERE id = ?;", [answer.productunits, answer.productid], function(err, res){
					
						console.log("Your order had been processed for a total of $" + total);
					});
				
				}
		});

	
			setTimeout(function(){
				console.log("Thank you for your business!");
			},3000);
	
	
};