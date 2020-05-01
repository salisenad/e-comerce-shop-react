import React, { Component, Fragment } from 'react';
import { Pagination } from 'react-bootstrap';
import CategoriesService from '../../../services/category-service';

const http = new CategoriesService();

class CategoryPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories : []
            }
        this.loadCategories()
        this.loadCategories = this.loadCategories.bind(this)
    }

    loadCategories = () => {
        http.getCategories().then(data =>{
            this.setState({categories: data})
            console.log('categoriet e adminit', data)
        })
    }
    categoriesList = () => {
        const categoryList = this.state.categories.map(category =>
                        <tr key={category.id}>
                          <th style={{width: "10%"}}>{category.id}</th>
                          <td style={{width: "30%"}}>{category.categoryName}</td>
                          <td style={{width: "30%"}}>{category.description}</td>
                          <td style={{width: '30%'}}>
                            {category.childCategory.map(childCategory =>
                            <ul><li>{childCategory.childName} </li> </ul>)}
                          </td>
                        </tr>
                       )
                       return (categoryList);
      }
      
    render() { 
        return (  
          <Fragment>
            <div id='main'>
            <h3 className="text-center mb-2 font-weight-bold">Categories</h3>
            <table className="table table-hover table-striped table-bordered">
                <thead> 
                  <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Description</th>
                    <th scope="col">Child categories</th>
                  </tr>
                </thead>
                <tbody>
                  {this.categoriesList()}
                </tbody>
            </table>
      </div>
      </Fragment>
        );
    }
}
  
export default CategoryPage;