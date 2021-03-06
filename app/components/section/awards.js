'use strict';

const React = require('react');
const PropTypes = React.PropTypes;

const ResumePropTypes = require('../../prop_types/resume');
const Datetime = require('../../utils/datetime');

const Entry = React.createClass({
    propTypes: {
        index: PropTypes.number.isRequired,
        total: PropTypes.number.isRequired,
        entry: ResumePropTypes.awards
    },

    render: function () {
        const startDate = Datetime.getDisplayFromDate(this.props.entry.startDate);
        const index = this.props.index + 1;
        const divider = index === this.props.total ? (<br/>) : (<hr/>);

        return (
            <div className='row item'>
                <div className='twelve columns'>
                    <h3>
                        <a href={this.props.entry.website}target='_blank'>{this.props.entry.title}</a>
                    </h3>
                    <p className='info'>
                        {this.props.entry.awarder}
                        <span> &bull; </span>
                        <span className='info-summary'>{this.props.entry.summary}</span>
                        <span> &bull; </span>
                        <em className='date'>{startDate}</em>
                    </p>
                </div>
                {divider}
            </div>
        );
    }
});

const Awards = React.createClass({
    propTypes: {
        content: ResumePropTypes.awardsSet
    },

    render: function () {
        const numEntries = this.props.content.length;
        return (
            <section id='awards'>
                <div className='row awards'>
                    <div className='two columns header-col'>
                        <h1>
                            <span>Awards</span>
                        </h1>
                    </div>
                    <div className='ten columns main-col'>
                        {this.props.content.map(function (entry, index) {
                            return (
                                <Entry key={index} index={index} total={numEntries} entry={entry}/>
                            );
                        })}
                    </div>
                </div>
            </section>
        );
    }
});

module.exports = Awards;
