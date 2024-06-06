import json

# Function to update the book entries
def update_books(books):
    for book in books:
        # Rename 'bookId' to 'id'
        book['_id'] = book.pop('bookId')
        
        # Convert string representations of lists to actual lists
        book['genres'] = eval(book['genres'])
        book['characters'] = eval(book['characters'])
        book['awards'] = eval(book['awards'])
        book['ratingsByStars'] = eval(book['ratingsByStars'])
        book['setting'] = eval(book['setting'])
        
        # Ensure 'author' is a list
        if isinstance(book['author'], str):
            book['author'] = [author.strip() for author in book['author'].split(',')]

    return books

# Read the data from 'livros.json'
with open('dataset.json', 'r') as file:
    books = json.load(file)

# Update the books
updated_books = update_books(books)

# Save the updated data to 'updated_livros.json'
with open('books.json', 'w') as file:
    json.dump(updated_books, file, indent=4)

print("The data has been successfully updated and saved to 'book.json'")