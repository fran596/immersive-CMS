import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

/*Page actions */
import {getPages} from '../HomeContainer/Page/AddPage/Actions/Creators/actionCreators'

import PageTemplate from './pageTemplate'

class pageTemplateContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillMount(){
        this.props.getPages()
    }

    render() {
        return (
          <div className="container-fluid">
            {
                this.props.pages.map(function(page){
                   return <PageTemplate content={page.content} title={page.title} />
                })
            }
          </div>
        );
    }
}

pageTemplateContainer.propTypes = {
    pages: PropTypes.array,
    getPages: PropTypes.func,
    // history: PropTypes.object
}

pageTemplateContainer.defaultProps = {
    pages: [],
    getPages: () => { },
    // history: null
}

function mapStateToProps(state) {
    return {
        pages: state.page.pages
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getPages: () => dispatch(getPages())
        // loadData: () => {
        //     dispatch(fetchContact())
        // }
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(pageTemplateContainer);