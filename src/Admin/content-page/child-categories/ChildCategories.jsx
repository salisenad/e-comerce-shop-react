import React, { Component, Fragment } from 'react';
import CategoriesService from '../../../services/category-service';

const http = new CategoriesService();
class ChildCategories extends Component {
    constructor(props) {
        super(props)
        this.state = {
            childCategories : []
        }
        this.loadChildCategories()
        this.loadChildCategories = this.loadChildCategories.bind(this)
    }

    loadChildCategories = () => {
        http.getCategories().then(data =>{
        this.setState({childCategories: data})
        })
    }

    chldCategoriesList = () => {
        const childCategoryList = this.state.childCategories.map((category) =>
           <Fragment>
               {category.childCategory.map(childCat =>
                 <tr>
                   <td>{childCat.id}</td>
                   <td>{childCat.childName}</td>
                   <td>{childCat.description}</td>
                   <td>{category.categoryName}</td>
                 </tr>)}
             </Fragment>)
              return (childCategoryList);
      }
      
    render() { 
        return (  
        <div id='main'>
            <h3 className="text-center mb-5 font-weight-bold">Child Categories</h3>
            {/* <table className="table table-hover table-dark table-bordered"> */}
            <table className="table table-hover table-striped table-bordered">

                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Description</th>
                        <th scope="col">Parent name</th>
                    </tr>
                </thead>
                <tbody>
                    {this.chldCategoriesList()}
                </tbody>
            </table>
        </div>

        );
    }
}
  
export default ChildCategories;