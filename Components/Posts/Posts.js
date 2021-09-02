import React, { useState, useEffect, useContext } from 'react';
import { FirebaseContext, AuthContext } from '../../store/Context'
import { PostContext } from '../../store/PostContext';
import { useHistory } from 'react-router-dom';
import './Post.css';

function Posts() {
  const { user } = useContext(AuthContext)
  const { firebase } = useContext(FirebaseContext)
  const [products, setProducts] = useState([])
  const { setPostDetails } = useContext(PostContext)
  const history = useHistory()
  useEffect(() => {
    firebase.firestore().collection('products').get().then((snapshot) => {
      const allPost = snapshot.docs.map((product) => {
        return {
          ...product.data(),
          id: product.id
        }
      })
      setProducts(allPost)
    })
  }, [])
  return (
    <div className="recommendations">
      <div className="cards" >
        {products.map(product => {
          return <div
            className="card" onClick={() => {
              setPostDetails(product)
              history.push('/view')
            }}
          >
            
            <div className="image">
              <img src={product.url} alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; {product.price}</p>
              <span className="kilometer">{product.category}</span>
              <p className="name"> {product.name}</p>
            </div>
            <div className="date">
              <span>{product.createdAt}</span>
            </div>
          </div>

        })
        }
      </div>


      {!user && <div className="bannerChildDiv">
        <div className="banner">
          <img
            src="../../../Images/wallpapertip_selling-wallpaper_834178.jpg"
            alt=""
          />
        </div>
        <h1 className="title">Vend in VenDIt</h1>
      </div>

      }
    </div>
  );
}

export default Posts;
