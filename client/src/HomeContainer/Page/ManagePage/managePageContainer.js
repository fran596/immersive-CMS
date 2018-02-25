import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';

// import {addPage} from './Actions/Creators/actionCreators'

/*Other container dependencies */
import ManageSection from './manageSection'

class managePageContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            sections: [],
        },
            this.handleSubmit = this.handleSubmit.bind(this);
            this.onAddSection = this.onAddSection.bind(this);
            this.onTxtChange = this.onTxtChange.bind(this);
    }

    onAddSection(){
        this.setState({ sections: [...this.state.sections, {}] });
    }

    onTxtChange(pos, txt){
        let cont = 0;
        let newSections = this.state.sections.filter(function(section){
            if(cont === pos){
                section.txt = txt
            }
            ++cont
            return section
        })
        this.setState({sections: newSections})
    }

    handleSubmit() {
        
        let values = this.props.form.values;
        let errors = this.props.form.syncErrors;
        if(!errors){
            this.props.addPage(values, this.props.history)
        }
        else{
            toast.error("Please correct the errors on this form",{
                position: toast.POSITION.TOP_RIGHT
              });
        }
    }

    render() {
        let cont = 0
        let onTxtChange = this.onTxtChange
        console.log(this.state.sections)
        return (
          <div className="container-fluid">
            <ToastContainer />
            <h3>Manage Page</h3>
            <hr />
            <div className="row mx-auto inside-home">
              <div className="col-sm-12" />
              <button onClick={this.onAddSection}>Add section</button>
            </div>
            {
                  this.state.sections.map(function(item){
                      //console.log(item)
                      ++cont
                      return <ManageSection section={item} number={cont} onTxtChange={onTxtChange} key={cont}  />
                  })
              }
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
    addPage: () => {},
    history: null
}

function mapStateToProps(state) {
    return {
        form: state.form.addPage,
        pages: state.page.pages
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addPage: (values, history) => dispatch(addPage(values, history))
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(managePageContainer);
