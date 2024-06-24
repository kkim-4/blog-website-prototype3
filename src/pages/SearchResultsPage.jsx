import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const SearchResultsPage = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get('q');
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
 
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await fetch(`http://localhost:1337/blogs?blogTitle_contains=${query}`);
                const data = await response.json();
                setResults(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };
        

        if (query) {
            fetchData();
        }
    }, [query]);

    return (
        <div className="p-4">
            <h2 className="text-xl mb-4">Search Results for "{query}"</h2>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <ul>
                    {Array.isArray(results) && results.length > 0 ? (
                        results.map((result) => (
                            <li key={result.id} className="border-b py-2">
                                {result.title}
                            </li>
                        ))
                    ) : (
                        <p>No results found.</p>
                    )}
                </ul>
            )}
        </div>
    );
};

export default SearchResultsPage;
