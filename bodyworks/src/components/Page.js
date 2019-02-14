import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CirculatoryPage from './CirculatoryPage';
import RespiratoryPage from './RespiratoryPage';
import DigestivePage from './DigestivePage';
import MuscularPage from './MuscularPage';
import SkeletalPage from './SkeletalPage';

class Page extends Component {
    render() {
        switch (this.props.page) {
            case "circulatory":
                return <CirculatoryPage backToCategories={this.props.backToCategories} />;
            case "respiratory":
                return <RespiratoryPage backToCategories={this.props.backToCategories} />;
            case "digestive":
                return <DigestivePage backToCategories={this.props.backToCategories} />;
            case "muscular":
                return <MuscularPage backToCategories={this.props.backToCategories} />;
            case "skeletal":
                return <SkeletalPage backToCategories={this.props.backToCategories} />;
        }
    }
}

Page.propTypes = {
    page: PropTypes.string,
    backToCategories: PropTypes.func
};

export default Page;