import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class RepoList extends React.Component {
    //getInitialState: function() {
    //    return {
    //        loading: true,
    //        error: null,
    //        data: null
    //    };
    //},

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            error: null,
            data: null
        };
    }

    componentDidMount() {
        this.props.promise.then(
            value => this.setState({loading: false, data: value}),
            error => this.setState({loading: false, error: error}));
    }

    render() {
        if (this.state.loading) {
            return <span>Loading...</span>;
        }
        else if (this.state.error !== null) {
            return <span>Error: {this.state.error.message}</span>;
        }
        else {
            let repos = this.state.data.items;
            let repoList = repos.map((repo, index)=>(
                <li key={index}><a href={repo.html_url}>{repo.name}</a> ({repo.stargazers_count} stars)
                    <br/> {repo.description}</li>
            ));
            return (
                <main>
                    <h1>Most Popular JavaScript Projects in Github</h1>
                    <ol>{repoList}</ol>
                </main>
            );
        }
    }
}


ReactDOM.render(
    <RepoList promise={$.getJSON('https://api.github.com/search/repositories?q=javascript&sort=stars')}/>,
    document.getElementById('example')
);