import React, { Component } from 'react';

class SearchForm extends Component {
    state = { term: '', quantity: 10, size: 'regular' };

    onFormSubmit = event => {
        event.preventDefault();
        const { term, quantity, size } = this.state;
        this.props.onSubmit(term, quantity, size);

        // Clear Search field
        this.setState({ term: '' });
    }

    render() {
        return (
            <form action="#" className="search-form" onSubmit={this.onFormSubmit}>
                <div className="group-options">
                    <select title="size" value={this.state.size} className="search-form__select-size"
                        onChange={e => this.setState({ size: e.target.value })}
                    >
                        <option className="size-option" value="small">Small Size</option>
                        <option className="size-option" value="regular">Regular Size</option>
                        <option className="size-option" value="full">Gimme Large</option>
                    </select>
                    
                    <select title="quantity" value={this.state.quantity} className="search-form__select-quantity"
                        onChange={e => this.setState({ quantity: e.target.value })}
                    >
                        <option className="quantity-option" value="10">Fewer</option>
                        <option className="quantity-option" value="20">Not Much</option>
                        <option className="quantity-option" value="50">Just Enough</option>
                        <option className="quantity-option" value="100">I need More!</option>
                    </select>
                </div>

                <input
                    type="text"
                    className="search-form__input"
                    title="search field"
                    placeholder="Search for simple terms...  eg 'animals, houses'"
                    value={this.state.term}
                    onChange={ e => this.setState({ term: e.target.value }) }
                />
            </form>
        )
    }
}

export default SearchForm;