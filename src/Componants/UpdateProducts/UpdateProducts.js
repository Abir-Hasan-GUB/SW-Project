import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import DashBoardTop from '../AdminPanel/DashBoardTop/DashBoardTop';
import DashBoardMenu from '../DashBoardMenu/DashBoardMenu';
import Footer from '../Footer/Footer';
import LoadingText from '../LoadingText/LoadingText';
import wrongImg from '../../images/wrong.png';
import { UserContext } from '../../App';

const UpdateProducts = () => {
    const [products, setProducts] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [productid, setId] = useState([])
    const location = useLocation();

    // all products load form database
    useEffect(() => {
        fetch('http://localhost:5000/products/')
            .then(response => response.json())
            .then(data => setProducts(data))
    }, [])

    // console.log(products)

    const saveUpdateInformation = () => {
        const id = productid; // get clicked product id
        const newPrice = document.getElementById('newPrice').value; //get new price
        const newStock = document.getElementById('newStock').value; // get new stock
        const updateProduct = { id, newPrice, newStock };

        // send information to database
        fetch(`http://localhost:5000/updateProductInformation/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updateProduct) // send update information to database
        })
            .then(response => response.json())
            .then(data => {
                if (data.modifiedCount) {
                    alert("Product updated successfully !");
                    document.getElementById('newPrice').value = '';
                    document.getElementById('newStock').value = '';
                    // window.location.reload();

                }
            })

    }

    const handleUpdateProduct = (id) => setId(id); //stor id to state for query


      // ======================== Check Admin =================
      const [admin, setAdmin] = useState([]);
      let role = "admin";
  
      let adminCheck = false;
  
      // load all admin 
      useEffect(() => {
          fetch('http://localhost:5000/findAdmin?role=' + role)
              .then(response => response.json())
              .then(data => setAdmin(data))
      }, [])
  
  
      for (let i = 0; i < admin.length; i++) {
          let user = admin[i];
          if (user.role === role && user.email == loggedInUser.email) {
              adminCheck = true;
          }
      }


    return (
        <div className="container">
            { adminCheck === true && <div className="row mx-0">
                <div className="col-md-3 dashBoardMenu bg-dark px-0">
                    <DashBoardMenu></DashBoardMenu>
                </div>
                <div className="col-md-9 dashBoardMainDiv px-0">
                    <DashBoardTop></DashBoardTop>
                    <div className="reviews row bg-light ml-0 mr-0">
                        <div className="col-md-12 pr-2 pl-2" style={{ height: '632px', overflow: 'scroll' }}>

                            {/* ============== Product navigation menu bar ================= */}
                            <div className="sticky-top">
                                <div className="row mb-2 d-flex align-items-center bg-dark py-2 text-light">
                                    <div className="col-md-2">
                                        <h6 className="ml-3">Picture</h6>
                                        {/* <img className="img-fluid" src={product.img} alt={product.name} /> */}
                                    </div>
                                    <div className="col-md-4">
                                        <h6 className="text-center">Title</h6>
                                    </div>
                                    <div className="col-md-2">
                                        <h6>Stock</h6>
                                    </div>
                                    <div className="col-md-2">
                                        <h6>Price</h6>
                                    </div>
                                    <div className="col-md-2">
                                        <h6 className="ml-2">Action</h6>
                                    </div>

                                </div>
                            </div>

                            {/* ============ Load all products to UI ================= */}
                            {
                                products.map(product => <div className="row my-2 d-flex align-items-center" style={{ borderBottom: '1px solid gray' }}>
                                    <div className="col-md-2">
                                        <img className="img-fluid" src={product.img} alt={product.name} />
                                    </div>
                                    <div className="col-md-4">
                                        <h6>{product.name}</h6>
                                    </div>
                                    <div className="col-md-2 text-danger">
                                        <h5>{product.stock}</h5>
                                    </div>
                                    <div className="col-md-2 text-danger">
                                        <h5>$ {product.price}</h5>
                                    </div>
                                    <div className="col-md-2">
                                        <button onClick={() => handleUpdateProduct(product._id)} data-toggle="modal" data-target="#updatePriceModal" className="btn btn-info btn-md">Update</button>
                                    </div>

                                </div>

                                )
                            }

                            {/* ==================== Update product information Modal Start ================= */}

                            <div class="modal fade" id="updatePriceModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog" role="document">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Update Product Information</h5>
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div class="modal-body">
                                            <div className="form-group">
                                                <form>
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <label htmlFor="price"><strong className="text-info">Give Updated Price</strong></label>
                                                            <input placeholder="New Price" className="form-control form-control-lg" type="number" name="" id="newPrice" required />
                                                        </div>
                                                        <div className="col-md-6">
                                                            <label htmlFor="stock"><strong className="text-info">Give Updated Stock</strong></label>
                                                            <input placeholder="Stock Number" className="form-control form-control-lg round" type="number" name="" id="newStock" required />
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                            <button onClick={saveUpdateInformation} type="button" class="btn btn-primary">Save changes</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* ==================== Update product information Modal End ================= */}
                            {
                                products.length === 0 && <LoadingText></LoadingText>
                            }
                        </div>
                    </div>
                </div>
            </div>}
            {adminCheck == false &&
                <div className="bg-light text-center p-3">
                    <img className="img-fluid" src={wrongImg} alt="wrongImg" />
                    <h1 className="text-danger py-4">Wrong Information</h1>
                    <Link to="/"><button className="btn btn-danger btn-lg p-3 mt-3">Back to Home Page</button></Link>
                </div>}
            <Footer></Footer>
        </div>
    );
};

export default UpdateProducts;