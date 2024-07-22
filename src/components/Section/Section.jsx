import PropTypes from 'prop-types';
import styles from './Section.module.css'

const Section = ({title, children}) => {
    return (
        <div>
            <h3 className={(styles["title"])}>{title}</h3>
            {children}
        </div>
    )
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

export default Section;