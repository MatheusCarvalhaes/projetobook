import React, { useEffect, useState } from 'react';
import { fetchBookDetails } from '../services/api';
import { useParams } from 'react-router-dom';

const BookDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const validId = id || '';  // Garante que o id seja uma string válida
    const [book, setBook] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadBookDetails = async () => {
            try {
                const data = await fetchBookDetails(validId);  // Usar validId no lugar de id
                setBook(data);
            } catch (err) {
                setError('Error loading book details');
            } finally {
                setLoading(false);
            }
        };

        loadBookDetails();
    }, [validId]);  // Atualizar a dependência para validId

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            <h1>{book.title}</h1>
            <p><strong>Sinopse:</strong> {book.synopsis}</p>
            <p><strong>Ano de Publicação:</strong> {book.year}</p>
            <p><strong>Gênero:</strong> {book.genre}</p>
        </div>
    );
};

export default BookDetails;
