'use strict';

const React = require('react');

const ResumePropTypes = require('../../prop_types/resume');
const Random = require('../../utils/random');
const Modal = require('./modal');

const Entry = React.createClass({
    propTypes: {
        entry: ResumePropTypes.awards
    },

    getInitialState: function () {
        return {
            modalOpen: false
        };
    },

    handleOpenModal: function () {
        return this.setState({
            modalOpen: true
        });
    },

    handleCloseModal: function () {
        return this.setState({
            modalOpen: false
        });
    },

    render: function () {
        return (
            <div className='columns awards-item'>
                <div className='item-wrap' onClick={this.handleOpenModal}>
                    <img
                        src={this.props.entry.image.thumb}
                        alt={this.props.entry.title}/>
                    <div className='overlay'>
                        <div className='awards-item-meta'>
                            <h5>{this.props.entry.title}</h5>
                            <p>{this.props.entry.awarder}</p>
                        </div>
                    </div>
                    <div className='link-icon'>
                        <i className='icon-down-open'/>
                    </div>
                </div>
                <Modal entry={this.props.entry} isOpen={this.state.modalOpen} onRequestClose={this.handleCloseModal}/>
            </div>
        );
    }
});

const Awards = React.createClass({
    propTypes: {
        content: ResumePropTypes.awardsSet
    },

    render: function () {
        const awards = Random.shuffleArray(this.props.content).slice(0, 8);
        return (
            <section id='awards'>
                <div className='row'>
                    <div className='twelve columns collapsed'>
                        <h1>Awards</h1>
                        <div id='awards-wrapper' className='bgrid-quarters s-bgrid-thirds cf'>
                            {awards.map(function (entry, index) {
                                return (
                                    <Entry key={index} index={index} entry={entry}/>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
});

module.exports = Awards;
