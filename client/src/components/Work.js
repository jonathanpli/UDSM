/**
 * Created by Jonathan on 9/25/16.
 */

var React = require("react"),
    _ = require("lodash"),
    config = require("../../../config/config.work");

var Work = React.createClass({
    render: function () {
        var sections = _.map(config.sections, function (section, idx) {
            return (
                <div key={ section + idx }>
                    <section className="section">
                        <div className="col-sm-10 col-sm-offset-1">
                            { section.header ? <h2>{section.header}</h2> : <span />}
                            { section.body ? <p>{section.body}</p> : <span />}
                            { section.body3 ? <div>
                                <p className="col-sm-4">{section.body}</p>
                                <p className="col-sm-4">{section.body3}</p>
                            </div> : <span />}
                            { section.header2 ? <h2>{section.header2}</h2> : <span />}
                            { section.list3 ?
                                <ul>
                                    {
                                        _.map(section.list3, function (item, idx) {
                                            return (<li className="moderate" key={ "item" + idx }>{ item }</li>);
                                        })
                                    }
                                </ul> : <span />
                            }
                            { section.body2 ? <p>{section.body2}</p> : <span />}
                            { section.header3 ? <h2>{section.header3}</h2> : <span />}
                            { section.list ?
                                <ul>
                                    {
                                        _.map(section.list, function (item, idx) {
                                            return (<li className="moderate" key={ "item" + idx }>{ item }</li>);
                                        })
                                    }
                                </ul> : <span />
                            }
                            { section.list2 ?
                                <ul>
                                    {
                                        _.map(section.list2, function (item, idx) {
                                            return (<li className="moderate col-sm-6 out_goals" key={ "item" + idx }>{ item }</li>);
                                        })
                                    }
                                </ul> : <span />
                            }
                            { section.list4 ?
                                <ul>
                                    {
                                        _.map(section.list4, function (item, idx) {
                                            return (<li className="moderate col-sm-6 text-center value-list" key={ "item" + idx }>{ item }</li>);
                                        })
                                    }
                                </ul> : <span />
                            }
                            { section.link ? <a className="btn btn-default" href={section.link.link}>{section.link.title}</a> : <span />}
                        </div>
                    </section>
                    <hr/>
                </div>
            );
        });

        return (
            <div>
                <section className="titleSection page2">
                    <h1 className="title">{config.title}</h1>
                    <h5>{config.titleDesc}</h5>
                    <div className="col-xs-12">
                        <a href={config.link.link} className="btn btn-secondary btn-lg title-button">{config.link.title}</a>
                    </div>
                </section>

                <hr/>

                { sections }
            </div>
        );
    }
});

module.exports = Work;