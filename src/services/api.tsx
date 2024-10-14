// src/services/api.ts
import axios from 'axios';

const API_URL = 'https://stephen-king-api.onrender.com/api';

export const fetchBooks = async () => {
    const response = await axios.get(`${API_URL}/books`);
    return response.data; 
};

export const fetchBookDetails = async (id: string) => {
    const response = await axios.get(`${API_URL}/book/${id}`);
    return response.data; 
};

export const fetchShorts = async () => {
    const response = await axios.get(`${API_URL}/shorts`);
    return response.data; 
};

export const fetchShortDetails = async (id: string) => {
    const response = await axios.get(`${API_URL}/short/${id}`);
    return response.data; 
};

export const fetchVillains = async () => {
    const response = await axios.get(`${API_URL}/villains`);
    return response.data;
};

export const fetchVillainDetails = async (id: string) => {
    const response = await axios.get(`${API_URL}/villain/${id}`);
    return response.data; 
};
