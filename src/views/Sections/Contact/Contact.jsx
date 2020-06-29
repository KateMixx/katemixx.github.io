import React from "react";
import PropTypes from "prop-types";

import { Row, Col } from "react-bootstrap";
import Icon from "components/Icon";
import PageSection from "components/PageSection";
import { YMaps, Map, Placemark } from 'react-yandex-maps';

const Contact = ({ className, frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const { anchor, header, subheader, telephone, telephone2, email, address, address2 } = frontmatter;

  return (
    <PageSection className={className} id={anchor}>
      <Row className="justify-content-center">
        <Col lg={8} className="text-center">
          <h2 className="mt-0">{header}</h2>
          <hr className="divider my-4" />
          <p className="text-muted mb-5">{subheader}</p>
        </Col>
      </Row>
      <Row>
        <Col lg={12} className="mr-auto text-center">
          <Icon iconName="EnvelopIcon" size="3x" className="text-muted mb-3" />
          <a className="d-block" href={`mailto:${email}`}>
            {email}
          </a>
        </Col>
      </Row>
      <Row>
        <Col lg={4} className="mr-auto text-center">
          <Icon iconName="AdressIcon" size="3x" className="text-muted mb-3" />
          <a className="d-block">
            {address}
          </a>
        </Col>
        <YMaps>
          <div>
            <Map defaultState={{ center: [56.831231, 35.944226], zoom: 16 }} >
              <Placemark geometry={[56.831231, 35.944226]} />
            </Map>
          </div>
        </YMaps>
        <Col lg={4} className="mr-auto text-center">
          <Icon iconName="PhoneIcon" size="3x" className="text-muted mb-3" />
          <a className="d-block">
            {telephone}
          </a>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col lg={4} className="mr-auto text-center">
          <Icon iconName="AdressIcon" size="3x" className="text-muted mb-3" />
          <a className="d-block">
            {address2}
          </a>
        </Col>
        <YMaps>
          <div>
            <Map defaultState={{ center: [56.888467, 35.902049], zoom: 16 }}>
              <Placemark geometry={[56.888467, 35.902049]} />
            </Map>
          </div>
        </YMaps>
        <Col lg={4} className="mr-auto text-center">
          <Icon iconName="PhoneIcon" size="3x" className="text-muted mb-3" />
          <a className="d-block">
            {telephone2}
          </a>
        </Col>
      </Row>
    </PageSection>
  );
};

Contact.propTypes = {
  className: PropTypes.string,
  frontmatter: PropTypes.object,
};

Contact.defaultProps = {
  className: null,
  frontmatter: null,
};

export default Contact;
