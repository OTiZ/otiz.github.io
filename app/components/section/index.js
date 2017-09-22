'use strict';

const React = require('react');

const ResumePropTypes = require('../../prop_types/resume');
const About = require('./about');
const Work = require('./work');
const Volunteer = require('./volunteer');
const Education = require('./education');
const Awards = require('./awards');
const Skills = require('./skills');
const Portfolio = require('./portfolio');
const References = require('./references');
const Footer = require('./footer');

const Section = React.createClass({
    propTypes: {
        basics: ResumePropTypes.basics,
        work: ResumePropTypes.workSet,
        volunteer: ResumePropTypes.volunteerSet,
        education: ResumePropTypes.educationSet,
        awards: ResumePropTypes.awardsSet,
        skills: ResumePropTypes.skillsSet,
        languages: ResumePropTypes.languagesSet,
        portfolio: ResumePropTypes.publicationsSet,
        references: ResumePropTypes.referencesSet
    },

    render: function () {
        const skillsContent = {
            skills: this.props.skills,
            languages: this.props.languages
        };

        return (
            <div>
                <About content={this.props.basics}/>
                <Work content={this.props.work}/>
                <Volunteer content={this.props.volunteer}/>
                <Education content={this.props.education}/>
                <Awards content={this.props.awards}/>
                <Skills content={skillsContent}/>
                <Portfolio content={this.props.portfolio}/>
                <References content={this.props.references}/>
                <Footer content={this.props.basics}/>
            </div>
        );
    }
});

module.exports = Section;
