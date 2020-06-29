import React from "react";
import PropTypes from "prop-types";

import { Row } from "react-bootstrap";
import SectionHeader from "components/SectionHeader";
import PageSection from "components/PageSection";

const Feedback = ({ className, frontmatter }) => {
    if (!frontmatter) {
        return null;
    }

    const { anchor, header: rootHeader, subheader: rootSubHeader } = frontmatter;

    return (
        <PageSection className={className} id={anchor}>
            <Row>
                <SectionHeader header={rootHeader} subheader={rootSubHeader} />
            </Row>

        </PageSection>
    );
};

Feedback.propTypes = {
    className: PropTypes.string,
    frontmatter: PropTypes.object,
};

Feedback.defaultProps = {
    className: null,
    frontmatter: null,
};

export default Feedback;
