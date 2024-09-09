import React, { useState } from 'react';


function Footer() {
    const [reviews, setReviews] = useState([]);
    const [review, setReview] = useState('');

    const handleReviewSubmit = (e) => {
        e.preventDefault();
        setReviews([...reviews, review]);
        setReview('');
    };

    return (
        <footer className="footer">
            <h3>Customer Reviews</h3>
            <form onSubmit={handleReviewSubmit}>
                <textarea
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                    placeholder="Leave a review..."
                    required
                />
                <button type="submit">Submit Review</button>
            </form>
            <div className="reviews">
                {reviews.map((rev, index) => (
                    <>
                    <p key={index}>{rev}</p>
                <a style={{color:'black'}} href='mailto:pawsandbubbless@gmail.com'>Contact Us</a>
                </>
                ))}
            </div>
        </footer>
    );
}

export default Footer;
