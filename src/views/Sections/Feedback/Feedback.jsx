import React from "react";
import PropTypes from "prop-types";

import { Row, Col } from "react-bootstrap";
import SectionHeader from "components/SectionHeader";
import PageSection from "components/PageSection";
import Icon from "components/Icon";
import "./Feedback.scss";

const Feedback = ({ className, frontmatter }) => {
    if (!frontmatter) {
        return null;
    }

    const { anchor, header: rootHeader, subheader: rootSubHeader, telephone, telephone2, email } = frontmatter;

    return (
        <PageSection className={className} id={anchor}>
            <Row>
                <SectionHeader header={rootHeader} subheader={rootSubHeader} />
            </Row>
            <Row>
                <Col lg={4} className="ml-auto text-center">
                    <Icon iconName="PhoneIcon" size="3x" className="text-muted mb-3" />
                    <a className="d-block href-c" href={`tel:${telephone}`}>
                        {telephone}
                    </a>
                </Col>
                <Col lg={4} className="mr-auto text-center">
                    <Icon iconName="EnvelopIcon" size="3x" className="text-muted mb-3" />
                    <a className="d-block href-c" href={`mailto:${email}`} >
                        {email}
                    </a>
                </Col>
                <Col lg={4} className="ml-auto text-center">
                    <Icon iconName="PhoneIcon" size="3x" className="text-muted mb-3" />
                    <a className="d-block href-c" href={`tel:${telephone2}`}>
                        {telephone2}
                    </a>
                </Col>
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
