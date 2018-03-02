import React from 'react'
import PropTypes from 'prop-types'
import draftToHtml from 'draftjs-to-html'
import htmlToDraft from 'html-to-draftjs'

import { connect } from 'react-redux'
import {EditorState, convertToRaw, ContentState} from 'draft-js';

/*Actions*/
import {managePage, deletePage,} from './Actions/Creators/actionCreators'

/*Other container dependencies */
import ManageForm from './managePageForm'
import ManageSection from './manageSection'

class managePageContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            content: this.props.location.state.page.content,
            title: this.props.location.state.page.title,
            url: this.props.location.state.page.url,
            home: this.props.location.state.page.home,
            homeString: (this.props.location.state.page.home) ?'Yes' :'No',
            editorState: EditorState.createWithContent(ContentState.createFromBlockArray(htmlToDraft(this.props.location.state.page.content)))
        },
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onTxtChange = this.onTxtChange.bind(this);
        this.onDeletePage = this.onDeletePage.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
        this.editorChange = this.editorChange.bind(this);
        this.onSelectChange = this.onSelectChange.bind(this);
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.location.key !== this.props.location.key){
            this.setState({editorState: EditorState.createWithContent(ContentState.createFromBlockArray(htmlToDraft(nextProps.location.state.page.content)))})
            this.setState({title: nextProps.location.state.page.title})
            this.setState({url: nextProps.location.state.page.url})
            this.setState({home: nextProps.location.state.page.home})
            if(nextProps.location.state.page.home){
                this.setState({homeString: 'Yes'})
            }
            else{
                this.setState({homeString: 'No'})
            }
        }
    }

    onTxtChange(pos, txt) {
        let cont = 0;
        let newcontent = this.state.content.filter(function (section) {
            if (cont === pos) {
                section.txt = txt.editor.getData()
            }
            ++cont
            return section
        })
        this.setState({ content: newcontent })
    }

    onInputChange(ev, name){
        if(name === "title"){
            this.setState({title: ev.target.value})
        }
        else if( name === "url"){
            this.setState({url: ev.target.value})
        }
    }

    onSelectChange(value){
        
        let isTrueSet = (value == 'true');
        this.setState({home: isTrueSet})
        if(value === 'true'){
            console.log('en yes')
            this.setState({homeString: 'Yes'})
        }
        else{
            this.setState({homeString: 'No'})
        }
        console.log(isTrueSet)
    }

    onDeletePage(){
        let id = this.props.location.state.page._id
        this.props.deletePage(id, this.props.history)
    }

    
    editorChange(editorState){
        this.setState({editorState});
        this.setState({content: draftToHtml(convertToRaw(this.state.editorState.getCurrentContent())) })
    }

    handleSubmit() {
        let page = this.props.location.state.page;
        page.content = this.state.content
        page.title = this.state.title
        page.url = this.state.url
        page.home = this.state.home
        this.props.managePage(page, this.props.history)
    }



    render() {
        let onTxtChange = this.onTxtChange
        let editorState = this.state.editorState
        let editorChange = this.editorChange
       // let isTrueSet = (this.state.home) ?'Yes' :'No'
        return (
          <div className="container-fluid home-container">
            <h3>Manage Page</h3>
            <hr />
            <div className="manage-margin">
              <ManageForm 
                title={this.state.title} 
                url={this.state.url} 
                home={this.state.homeString}
                onInputChange={this.onInputChange}
                onSelectChange={this.onSelectChange}
                onDeletePage={this.onDeletePage}
              />
            </div>
            <div className="manage-margin">
              <ManageSection 
                onTxtChange={onTxtChange} 
                editorState={editorState}
                editorChange={editorChange}
              /> 
            </div>
            <div className="row mx-auto ">
              <div className="col-sm-12" >
                <button onClick={this.handleSubmit} className="btn btn-primary wizard-btn">Save changes</button>
              </div>
            </div>
          </div>
                );
            }
        }
        
managePageContainer.propTypes = {
    form: PropTypes.object,
    addPage: PropTypes.func,
    history: PropTypes.object,
    location: PropTypes.object,
    deletePage: PropTypes.func,
    managePage: PropTypes.func
}

managePageContainer.defaultProps = {
    form: null,
    addPage: () => { },
    history: null,
    location: null,
    deletePage: () => {},
    managePage: () => {}
}

function mapStateToProps(state) {
    return {
                form: state.form.managePage,
                pages: state.page.pages
            }
        }
        
function mapDispatchToProps(dispatch) {
    return {
        managePage: (values, history) => dispatch(managePage(values, history)),
        deletePage: (id, history) => dispatch(deletePage(id, history))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(managePageContainer);


