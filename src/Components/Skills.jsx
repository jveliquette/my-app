import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import skillsData from '../data/skillsData';

const Skills = () => {
  return (
    <section id="skills" className="skills-section py-5">
        <Container>
            <h2 className='text-center mb-4'><FontAwesomeIcon icon={faLaptopCode} /> Skills & <span className='text-light'>Abilities</span></h2>
            <Row>
          {skillsData.map((skill, index) => (
            <Col key={index} md={3} sm={6} xs={12} className="skill-item text-center">
                <div className='skill-box'>
                    <img src={skill.icon} alt={skill.name} className="skill-icon mb-2" />
                    <p>{skill.name}</p>
                </div>
            </Col>
          ))}
        </Row>
        </Container>
    </section>
  );
};

export default Skills;
