import React, { Component } from 'react';
class BookList extends Component {

    render() {
        return (
            <div className="book-list">
                <ul>
                    <li>"The fellowship of the ring"</li>
                    <li>"Two Towers"</li>
                    <li>"Return of the King"</li>
                </ul>
            </div>
        );
    }
}

export default BookList;