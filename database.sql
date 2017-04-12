create database bamazon_db;

CREATE TABLE `products` (
  `itemID` int(11) NOT NULL AUTO_INCREMENT,
  `productName` varchar(45) NOT NULL,
  `departmentName` varchar(45) NOT NULL,
  `price` int(11) NOT NULL,
  `stockQuantity` int(11) NOT NULL,
  PRIMARY KEY (`itemID`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;


USE bamazon_db;

insert into products (productName, departmentName, price, stockQuantity)
values ("iPhone8", "Cellphones", 500, 15);
insert into products (productName, departmentName, price, stockQuantity)
values ("iPad", "Tech", 800, 10);
insert into products (productName, departmentName, price, stockQuantity)
values ("iMac", "Computers", 2500, 20);
insert into products (productName, departmentName, price, stockQuantity)
values ("GooglePixel", "Cellphones", 600, 8);
insert into products (productName, departmentName, price, stockQuantity)
values ("Shirt", "Apparel", 50, 13);
insert into products (productName, departmentName, price, stockQuantity)
values ("Shoes", "Apparel", 200, 5);
insert into products (productName, departmentName, price, stockQuantity)
values ("Basketball", "Equipment", 25, 30);
insert into products (productName, departmentName, price, stockQuantity)
values ("Wrench", "Tools", 15, 20);
insert into products (productName, departmentName, price, stockQuantity)
values ("Bookbag", "Luggage", 100, 40);
insert into products (productName, departmentName, price, stockQuantity)
values ("Vizio75inch", "Entertainment", 4500, 7);
insert into products (productName, departmentName, price, stockQuantity)
values ("Couch", "Furniture", 1500, 4);
insert into products (productName, departmentName, price, stockQuantity)
values ("Cereal", "Food", 5, 80);