import React, { Component, useState } from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Card, CardImg, CardBody, CardTitle } from "reactstrap";
import { IMAGES } from './data';



class Blog extends Component {

    handleClick=(id)=>{
		console.log('id', id)
		// const {history}=this.props
		// history.push(`/${id}`)
	}
    render() {

        return (
        <div style={{ margin:'50px' }}>
            <div className="row list-container">
              { IMAGES.map((el, i) => 
                  //  return <Post onClickFn={()=>this.handleClick(el.i)} {...el}  />;
                  <div  className="user col-6 col-md-4">
                  <Card className="" key={el.id}>
                    <CardImg
                        top
                        width="100%"
                        height="250px"
                        src={el.postImage}
                        alt="Card image cap"
                    />
                    <CardBody>
                        <CardTitle style={{maxHeight:'100px'}}>
                        <Link to ={`/description/${el.id}`} >
                            <strong className='postTitle' >{el.title} </strong>, 
                            <span className='datePublication'> {el.postDate}</span>
                        </Link>
                        </CardTitle>
                    </CardBody>
                  </Card>

                </div>
                )
              }
            </div>
        </div>
        )
    }
    
}

export default Blog;