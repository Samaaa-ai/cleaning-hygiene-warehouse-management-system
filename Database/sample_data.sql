-- ROLES
INSERT INTO roles(role_name)
VALUES
('Facility Manager'),
('Sales Admin'),
('Warehouse Staff'),
('Delivery Coordinator');

-- USERS
INSERT INTO users(full_name,email,phone,password,role_id)
VALUES
('Rajesh Kumar','rajesh@gangamaxx.com','9876543210','123456',1),
('Priya Sharma','priya@gangamaxx.com','9876543211','123456',2),
('Amit Reddy','amit@gangamaxx.com','9876543212','123456',3);

-- PRODUCT CATEGORIES
INSERT INTO product_categories(category_name)
VALUES
('Floor Cleaners'),
('Disinfectants'),
('Hygiene Products');

-- PRODUCTS
INSERT INTO products
(product_name,brand,sku,pack_size,category_id,reorder_level)
VALUES
('Lizol Floor Cleaner','Lizol','LIZ001','1 Litre',1,20),
('Dettol Disinfectant','Dettol','DET001','500 ml',2,15),
('Hand Sanitizer','PureHands','SAN001','250 ml',3,25);

-- WAREHOUSES
INSERT INTO warehouses
(warehouse_name,location)
VALUES
('Hyderabad Warehouse','Hyderabad'),
('Bangalore Warehouse','Bangalore');

-- STOCK BATCHES
INSERT INTO stock_batches
(product_id,warehouse_id,batch_number,manufacture_date,expiry_date,quantity)
VALUES
(1,1,'LIZB001','2026-01-01','2027-01-01',100),
(2,1,'DETB001','2026-02-01','2027-02-01',80),
(3,2,'SANB001','2026-03-01','2027-03-01',150);

-- INVENTORY TRANSACTIONS
INSERT INTO inventory_transactions
(batch_id,transaction_type,quantity,remarks)
VALUES
(1,'INWARD',100,'Initial Stock Entry'),
(2,'INWARD',80,'Initial Stock Entry'),
(3,'INWARD',150,'Initial Stock Entry');