// src/components/BookList.tsx
import React, { useEffect, useState } from 'react';
import { fetchBooks } from '../services/api';
import { Link } from 'react-router-dom';

const BookList = () => {
    const [books, setBooks] = useState<any[]>([]); // Ajuste o tipo conforme a estrutura dos dados

    useEffect(() => {
        const getBooks = async () => {
            const data = await fetchBooks();
            setBooks(data);
        };

        getBooks();
    }, []);

    return (
        <div>
            <h1>Lista de Livros</h1>
            <ul>
                {books.map(book => (
                    <li key={book.id}>
                        <Link to={`/details/${book.id}`}>{book.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BookList;
