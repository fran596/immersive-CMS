import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { toast } from 'react-toastify';

import {addPage} from './Actions/Creators/actionCreators'

/*Other container dependencies */
import AddPageForm from './addPageForm'

class addPageContainer extends React.Component {

    constructor(props) {
        super(props);
            this.handleSubmit = this.handleSubmit.bind(this);
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
        return (
          <div className="container-fluid">
            <h3>Add Page</h3>
            <hr />
            <div className="row mx-auto inside-home card-form">
              <div className="col-sm-12">
                <AddPageForm handleSubmit={this.handleSubmit}  />
              </div>
            </div>
          </div>
        );
    }
}

addPageContainer.propTypes = {
      form: PropTypes.object,
      addPage: PropTypes.func,
      history: PropTypes.object
}

addPageContainer.defaultProps = {
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



export default connect(mapStateToProps, mapDispatchToProps)(addPageContainer);
