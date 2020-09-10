// Import Components and Libs
import React, { Component } from 'react';
import '../App.css';
import unsplash from '../api/unsplash';
import Header from './Header';
import SearchForm from './SearchForm';
import ImageRender from './ImageRender';
import Footer from './Footer';

// Create App
class App extends Component {
    state = { images: [], size: 'regular' };
    
    onSearchSubmit = async (searchTerm, quantity, size) => {
        this.setState({ size });
        try {
            const response = await unsplash.get(`/search/photos`, {
                params: { query: searchTerm, per_page: quantity}
            });
            this.setState({ images: response.data.results });

        } catch (error) {
            console.log(error)
        }
    }

    render() {
        return (
            <div className="main">
                <Header />
                <div className="body-section">
                    <SearchForm onSubmit={this.onSearchSubmit} />
                    <ImageRender images={this.state.images} size={this.state.size} />
                </div>
                <Footer />
            </div>
        )
    }
}

// Export App
export default App;