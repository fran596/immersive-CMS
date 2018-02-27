import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form';

import {managePage, deletePage} from './Actions/Creators/actionCreators'


/*Other container dependencies */
import ManageSection from './manageSection'
import InputField from '../validatedInputField'

import validate from './managePagevalidation'



class managePageContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            sections: this.props.location.state.page.sections,
            title: this.props.location.state.page.title,
            url: this.props.location.state.page.url
        },
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onAddSection = this.onAddSection.bind(this);
        this.onTxtChange = this.onTxtChange.bind(this);
        this.onDeletePage = this.onDeletePage.bind(this);
        this.onTitleChange = this.onTitleChange.bind(this);
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.location.key !== this.props.location.key){
            this.setState({sections: nextProps.location.state.page.sections })
            // this.onUpdateState()
           // window.location.reload(false);
           location.reload();
           //this.forceUpdate()
        }
    }

    
    

    onAddSection() {
        this.setState({ sections: [...this.state.sections, {}] });
    }

    onTxtChange(pos, txt) {
        let cont = 0;
        let newSections = this.state.sections.filter(function (section) {
            if (cont === pos) {
                section.txt = txt.editor.getData()
            }
            ++cont
            return section
        })
        this.setState({ sections: newSections })
    }

    onTitleChange(ev, name){
        console.log(name)
        if(name === "title"){
            this.setState({title: ev.target.value})
        }
        else if( name === "url"){
            this.setState({url: ev.target.value})
        }
        
    }

    onDeletePage(){
        let id = this.props.location.state.page._id
        console.log(`id:${id}`)
        this.props.deletePage(id, this.props.history)
    }

    handleSubmit() {
        let page = this.props.location.state.page;
        page.sections = this.state.sections
        page.title = this.state.title
        page.url = this.state.url
        
        this.props.managePage(page, this.props.history)
    }



    render() {
        let cont = 0
        let onTxtChange = this.onTxtChange
        let page = this.state.sections
        
        //console.log(page)
        let onUpdateState = this.onUpdateState
        //console.log(this.state.sections)
        return (
          <div className="container-fluid">
            <h3>Manage Page</h3>
            <hr />
            <div className="row">
              <div className="col-5-md">
                <label htmlFor="title" className="font-weight-bold col-form-label ">Page title</label>
                <Field 
                  name="title" 
                  type="text"
 
                  component={InputField} 
                  options={{
                     defaultValue: this.state.title,
                     onTitleChange: this.onTitleChange
                 }}
                  className="form-control"
                />
              </div>
              <div className="col-5-md">
                <label htmlFor="url" className="font-weight-bold col-form-label ">Page url</label>
                <Field name="url" type="text" component={InputField}
                options={{
                    defaultValue: this.state.url,
                     onTitleChange: this.onTitleChange
                }}
                 className="form-control" />
              </div>
              <div className="col-2-md">
                <button type="button" className="btn btn-danger" onClick={this.onDeletePage}>Delete Page</button>
              </div>
            </div>

            <div className="row mx-auto inside-home">
              <div className="col-sm-12" >
                <button onClick={this.onAddSection}>Add section</button>
              </div>
            </div>
            <div>
              {
                this.state.sections.map(function (item) {
                    //console.log(item)
                    ++cont
                    if(typeof page !== "undefined"){
                        // console.log(page[cont-1].txt)
                        if(page.length > (cont-1)){
                            // conte.forceUpdate()
                            return (<ManageSection 
                              section={item}
                              number={cont} 
                              onTxtChange={onTxtChange} 
                              key={cont}
                              onUpdateState={onUpdateState}
                              other={page[cont-1].txt}
                            />)
                        }
                    }
                    
                    else{
                        return (<ManageSection 
                          section={item}
                          number={cont} 
                          onTxtChange={onTxtChange} 
                          key={cont}
                          other=""
                        />)
                    }
                })
              }
            </div>
            <div className="row mx-auto inside-home">
              <div className="col-sm-12" >
                <button onClick={this.handleSubmit}>Save changes</button>
              </div>
            </div>
          </div>
                );
            }
        }
        
managePageContainer.propTypes = {
    form: PropTypes.object,
    addPage: PropTypes.func,
    history: PropTypes.object
}

managePageContainer.defaultProps = {
    form: null,
    addPage: () => { },
    history: null
}

function mapStateToProps(state) {
    return {
                form: state.form.managePage,
                pages: state.page.pages,
                initialValues: {'title': 'hola', 'url':'/hola'}
            }
        }
        
function mapDispatchToProps(dispatch) {
    return {
        managePage: (values, history) => dispatch(managePage(values, history)),
        deletePage: (id, history) => dispatch(deletePage(id, history))
    }
}

let managePageRedux = connect(
    mapStateToProps, 
    mapDispatchToProps
)(managePageContainer);

export default reduxForm({
    form: 'managePage',
    validate: validate,
    enableReinitialize: true
  })(managePageRedux)

