import os
from dotenv import load_dotenv
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi

# Load environment variables from .env file
load_dotenv()

# get your uri from .env file
uri = os.environ.get('DB_URI')

# create cluster
cluster = MongoClient(uri, server_api=ServerApi('1'))

# Send a ping to confirm a successful connection
try:
    cluster.admin.command('ping')
    print("Pinged your deployment. You successfully connected to MongoDB!")
except Exception as e:
    print(e)


# get all dbs and collections that needed
mydatabase = cluster['mydatabase']
customers_col = mydatabase['customers']
products_col = mydatabase['products']

# create all necessary functions
def get_list_of_customers():
    return list(customers_col.find())


def insert_customers(customers):
    customers_col.insert_many(customers)


def insert_products(products):
    products_col.insert_many(products)


def get_list_of_products():
    return list(products_col.find())

