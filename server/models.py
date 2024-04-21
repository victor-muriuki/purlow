from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Product (db.model):
    __tablename__ = "products"

    id = db.Column(db.integer, primary_key = True )
    name = db.Column(db.String(50))
    price = db.Column(db.string)
    quantity = db.Column (db.Integer )


class User (db.model):
    __tablename__ = "users"

    id = db.Column(db.Integer, primary_key= True)
    username = db.Column(db.String(25))
    password = db.Column(db.String)
    role = db.Column(db.String)


class Sale (db.model):
    __tablename__ = "sales"

    id = db.Column(db.Integer, primary_key= True)
    user_id = db.Column(db.integer)
    total_amount = db.Column(db.Integer)
    sale_date  = db.Column(db.String)
    role = db.Column(db.String)



# CREATE TABLE Sale (
#     id INTEGER PRIMARY KEY,
#     user_id INTEGER,
#     total_amount REAL NOT NULL,
#     sale_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
#     FOREIGN KEY (user_id) REFERENCES User(id)
# );

# CREATE TABLE SaleItem (
#     id INTEGER PRIMARY KEY,
#     sale_id INTEGER,
#     product_id INTEGER,
#     quantity INTEGER NOT NULL,
#     unit_price REAL NOT NULL,
#     total_price REAL NOT NULL,
#     FOREIGN KEY (sale_id) REFERENCES Sale(id),
#     FOREIGN KEY (product_id) REFERENCES Product(id)
# );
