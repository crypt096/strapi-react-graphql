import React from 'react'
import { Link } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';

const CATEGORIES = gql`
    query getCategories {
        categories {
            name,
            id
        }
    }
`

export default function SiteHeader() {
    const { loading, error, data } = useQuery(CATEGORIES);

    if(loading) return <p>Loading...</p>
    if(error) return <p>Error fetching categories</p>

    return (
        <div className="site-header">
            <Link to="/"><h1>Game Reviews</h1></Link>
            <div className="categories">
                <span>Filter reviews by category:</span>
                {data.categories.map(category => (
                    <Link key={category.id} to={`/category/${category.id}`}>
                        {category.name}
                    </Link>
                ))}
            </div>
        </div>
    )
}
