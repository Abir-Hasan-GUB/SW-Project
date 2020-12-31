import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import './ProductDetails.css';
import { UserContext } from '../../App';

const ProductDetails = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [review, setReview] = useState([]);
    const [product, setProduct] = useState({});
    const { productKey } = useParams();//recive product key

    // load one product/ search one product using key

    useEffect(() => {
        fetch(`https://creative-agency-abir.herokuapp.com/product/` + productKey)
            .then(response => response.json())
            .then(function (value) {
                if (value) {
                    setProduct(value)
                }
            })

    }, [productKey]);

    // ==================== Update review state for show to uI =================
    useEffect(() => {
        fetch(`https://creative-agency-abir.herokuapp.com/allReview?key=` + productKey)
            .then(response => response.json())
            .then(result => setReview(result))//Update review state
    }, [])

    // =============== Add an review ============
    const handleAddReview = (e) => {
        let name = document.getElementById('reviewUserName').value;
        let comment = document.getElementById('reviewUserComment').value;
        let email = document.getElementById('reviewUserEmail').value;
        let userComment = {
            name: name,
            email: loggedInUser.email,
            comment: comment,
            time: new Date(),
            img: loggedInUser.photo,
            key: productKey
        }

        // send comment data to database
        fetch('https://creative-agency-abir.herokuapp.com/addReview', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userComment)
        })
            .then(response => response.json())
            .then(success => {
                if (success) {
                    alert("Comment Added !")
                }
            })

        document.getElementById('reviewUserComment').value = '';
        e.preventDefault();
    }

    return (
        <div className="container">
            <NavBar></NavBar>
            <div className="row mx-0 mt-5 bg-light">
                <div className="col-md-6 px-0 mt-4">
                    {/* product img  */}
                    <img className="img-fluid productImg" src={product.img} alt={product.name} />
                </div>

                {/* product main feature   */}
                <div className="col-md-6 pt-3 mt-4">
                    <h5>{product.name}</h5>
                    <div className=" mt-3 d-flex justify-content-between">
                        <div>
                            <ul className=" productDetailsPoint1">
                                <li>Price</li>
                                <li>Reguler Price</li>
                                <li>Stock</li>
                                <li>Product Code</li>
                                <li>Brand</li>
                                <li>MPN</li>
                            </ul>
                        </div>
                        <div className="productDetailsPoint2 pr-md-5">
                            <ul className="list-unstyled">
                                <li>{product.price}</li>
                                <li>{product.price + 12}</li>
                                <li>{product.stock}</li>
                                <li>{parseInt(product.price * 12.2)}</li>
                                <li>{product.seller}</li>
                                <li>{product.key}</li>
                            </ul>
                        </div>
                    </div>

                    <h1 className="mt-5" style={{ color: '#f58220', fontWeight: '700' }}>$ {product.price}</h1>
                    <small className="text-primary"><strong>CASH DISCOUNT PRICE</strong></small>
                </div>

                {/* products description in details  */}
                <div className="productDescription p-3">
                    <h4 className="pt-3 proDetls">Description:</h4>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit ut quisquam nobis quo aliquid deleniti, quos aspernatur! Et dicta ratione sunt? Culpa voluptatum quam, obcaecati quaerat, tenetur fuga atque, quas consequatur quos deserunt facere voluptates commodi vitae inventore suscipit sit nulla quod aliquam voluptas consectetur perferendis reprehenderit! Esse corporis, atque distinctio in numquam natus commodi ipsa voluptatem possimus incidunt harum dolorum porro. Rem cupiditate sed natus temporibus fugit non totam repellendus iure libero ut tempora accusamus officia amet quia, nesciunt id neque qui provident sit deserunt. Adipisci veniam illo delectus excepturi soluta, enim eveniet voluptatum vero, aut perferendis debitis dolore, iure reiciendis? Quaerat numquam ipsam eligendi. Repellat aut a quis quos deleniti amet quidem autem, earum iste quaerat ipsa quo magnam laboriosam vero commodi dicta voluptate provident eius sequi similique cumque. Aliquid, laboriosam recusandae voluptatibus inventore, non alias doloribus quam totam similique sunt necessitatibus sit facere veritatis fugiat accusantium quae itaque delectus neque libero repellendus. Facere aut illum tenetur ratione a harum accusantium soluta nemo officia laborum unde nam repellendus sed tempora sunt id perferendis esse eligendi blanditiis quo, nihil corrupti. Ad quos, eligendi illo quod ipsa dolores maiores laudantium nisi voluptate deleniti assumenda cupiditate necessitatibus tempora eveniet consequatur ducimus!</p>
                </div>
            </div>

            {/* clients review show from database here  */}
            <div className="reviewsOfClientByProduct p-3 bg-light">
                <h4>Reviews ({review.length}) :</h4>
                <p>Get specific details about this product from customers who own it.</p>
                <hr />
                <div className="clientReview px-5">
                    {
                        review.map(review => <div class="media my-3">
                            <img src={review.img} class="align-self-center clientImgInReview mr-3 img-fluid" alt="client" />
                            <div class="media-body">
                                <h5 class="mt-0">Md. Abir Hasan</h5>
                                <p>{review.comment}</p>
                            </div>
                        </div>)
                    }
                </div>

                {/* recive clients review by form here  */}
                {!loggedInUser.name && <h4 className="my-5 text-info text-center"><i class="fas fa-quote-left"></i> To write your review please <Link to="/login"><span className="text-danger"> logIn <i class="fas fa-quote-right text-info"></i></span></Link></h4>}
                {loggedInUser.name && <form onSubmit={handleAddReview}>
                    <h5 className="mt-5 mb-3">Write your review</h5>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <input className="form-control form-control-lg" type="text" placeholder="Your Name*" name="" value={loggedInUser.name} id="reviewUserName" required />
                            </div>
                            <div className="form-group">
                                <textarea style={{ resize: 'none' }} className="form-control form-control-lg" placeholder="Your Comments*" name="" id="reviewUserComment" cols="30" rows="5" required></textarea>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <input className="form-control form-control-lg" type="email" placeholder="Your Email*" name="" id="reviewUserEmail" value={loggedInUser.email} required />
                            </div>

                            {/* rating part here  */}
                            <div className="form-group d-flex mt-4">
                                <h6 className="mr-3">Ratting: </h6>
                                <p className="mr-3">Bad</p>
                                <div className="justify-content-between">
                                    <input className="mr-2" type="radio" name="" id="" />
                                    <input className="mr-2" type="radio" name="" id="" />
                                    <input className="mr-2" type="radio" name="" id="" />
                                    <input className="mr-2" type="radio" name="" id="" />
                                    <input type="radio" name="" id="" />
                                </div>
                                <p className="ml-3">Good</p>
                            </div>
                            <input className="btn btn-lg btn btn-dark text-light" type="submit" value="Comment" />
                        </div>
                    </div>
                </form>}
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ProductDetails;