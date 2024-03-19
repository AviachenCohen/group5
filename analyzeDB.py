from db_connector import customers_col, products_col


# Function to print the contents of the customers collection
def analyze_customers():
    print("Customers collection:")
    for customer in customers_col.find():
        print(customer)
    print()  # Print an empty line after printing the customers collection


# Function to print the contents of the products collection
def analyze_products():
    print("Products collection:")
    for product in products_col.find():
        print(product)
    print()  # Print an empty line after printing the products collection


# Main function to call other analysis functions
def main():
    print()  # Print an empty line
    print("DB Collections:")
    analyze_customers()
    analyze_products()


# Run to print DB collections
if __name__ == "__main__":
    main()
