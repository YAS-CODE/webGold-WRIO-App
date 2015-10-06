import React from 'react';
import User from './components/User';
import Info from './components/Info';
import PaymentForm from './components/PaymentForm';
import request from 'superagent';
import PaymentHistory from './components/PaymentHistory'
import EthereumClient from './components/EthereumClient'
import { Router,Route, Link } from 'react-router'

class EthereumStats extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            ethBalance: "",
            wrgBalance: ""

        };
    }

    requestStats(cb) {
        request.get('/api/webgold/coinadmin/master').end((err,balance)=> {
            if (err) {
                cb(err);
                return;
            }
            cb(null,JSON.parse(balance.text));
        })
    }

    componentWillMount() {
       var that = this;
       this.requestStats((err,state) => {
           if (err) {
               alert('Cant get stats');
               return;
           }
           that.setState(state);
       });
    }

    render() {
        return (
            <div>
                <h1>Webgold admin</h1>
                <h2>Feed account stats</h2>
                <p> Master account: { this.state.ethBalance } ETH </p>
                <p> Master account: { this.state.wrgBalance } WRG </p>
                <p> Gas price: { this.state.gasPrice } WRG </p>
            </div>

        );
    }
}

class Balances extends React.Component {


    constructor(props) {
        console.log("Balances created");
        super(props);

        this.state = {
            data:[

            ]
        };
    }

    requestUsers(cb) {
        request.get('/api/webgold/coinadmin/users').end((err,users)=> {
            if (err) {
                cb(err);
                return;
            }
            cb(null,JSON.parse(users.text));
        })
    }

    componentWillMount() {
        var that = this;

        this.requestUsers((err,state) => {
            if (err) {
                alert('Cant get users');
                return;
            }
            that.setState({
                data: state
            });
        });
    }

    render() {
        return (
            <div>
                <h2>User's balance</h2>
                <table className="table">
                    <thead>
                    <tr>
                        <th>WRIOID</th>
                        <th>NAME</th>
                        <th>ETH ADRESS</th>
                        <th>ETH BALANCE</th>
                        <th>WRG BALANCE</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.data.map(function (item) {

                            return  <tr>
                                <td>{ item.wrioID }</td>
                                <td>{ item.name }</td>
                                <td>{ item.ethWallet  }</td>
                                <td>{ item.ethBalance}</td>
                                <td>{ item.wrgBalance}</td>
                            </tr>;
                        })}

                    </tbody>
                </table>
            </div>

        );
    }
}

class Emissions extends React.Component {


    constructor(props) {
        console.log("Balances created");
        super(props);

        this.state = {
            data:[

            ]
        };
    }

    requestUsers(cb) {
        request.get('/api/webgold/coinadmin/emissions').end((err,users)=> {
            if (err) {
                cb(err);
                return;
            }
            cb(null,JSON.parse(users.text));
        })
    }

    componentWillMount() {
        var that = this;

        this.requestUsers((err,state) => {
            if (err) {
                alert('Cant get users');
                return;
            }
            that.setState({
                data: state
            });
        });
    }

    render() {
        return (
            <div>
                <h2>WRG emission list</h2>
                <table className="table">
                    <thead>
                    <tr>
                        <th>WRIOID</th>
                        <th>NAME</th>
                        <th>ETH ADRESS</th>
                        <th>ETH BALANCE</th>
                        <th>WRG BALANCE</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.data.map(function (item) {

                            return  <tr>
                                <td>{ item.wrioID }</td>
                                <td>{ item.name }</td>
                                <td>{ item.ethWallet  }</td>
                                <td>{ item.ethBalance}</td>
                                <td>{ item.wrgBalance}</td>
                            </tr>;
                        })}

                    </tbody>
                </table>
            </div>

        );
    }
}

class Donations extends React.Component {


    constructor(props) {
        console.log("Balances created");
        super(props);

        this.state = {
            data:[

            ]
        };
    }

    requestUsers(cb) {
        request.get('/api/webgold/coinadmin/donations').end((err,users)=> {
            if (err) {
                cb(err);
                return;
            }
            cb(null,JSON.parse(users.text));
        })
    }

    componentWillMount() {
        var that = this;

        this.requestUsers((err,state) => {
            if (err) {
                alert('Cant get users');
                return;
            }
            that.setState({
                data: state
            });
        });
    }

    render() {
        return (
            <div>
                <h2>WRG donations list</h2>
                <table className="table">
                    <thead>
                    <tr>
                        <th>WRIOID</th>
                        <th>NAME</th>
                        <th>ETH ADRESS</th>
                        <th>ETH BALANCE</th>
                        <th>WRG BALANCE</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.data.map(function (item) {

                            return  <tr>
                                <td>{ item.wrioID }</td>
                                <td>{ item.name }</td>
                                <td>{ item.ethWallet  }</td>
                                <td>{ item.ethBalance}</td>
                                <td>{ item.wrgBalance}</td>
                            </tr>;
                        })}

                    </tbody>
                </table>
            </div>

        );
    }
}

class EtherFeeds extends React.Component {


    constructor(props) {
        console.log("Balances created");
        super(props);

        this.state = {
            data:[

            ]
        };
    }

    requestUsers(cb) {
        request.get('/api/webgold/coinadmin/etherfeeds').end((err,users)=> {
            if (err) {
                cb(err);
                return;
            }
            cb(null,JSON.parse(users.text));
        })
    }

    componentWillMount() {
        var that = this;

        this.requestUsers((err,state) => {
            if (err) {
                alert('Cant get users');
                return;
            }
            that.setState({
                data: state
            });
        });
    }

    render() {
        return (
            <div>
                <h2>Ether Feed list</h2>
                <p>Description: to ensure proper user account operation each accound is feeded with minimal ether amount to perform opartion. Each ether withdrawal by user is logged in this page</p>
                <table className="table">
                    <thead>
                    <tr>
                        <th>Amount</th>
                        <th>Ethereum account</th>
                        <th>Timestamp</th>

                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.data.map(function (item) {

                            return  <tr>
                                <td>{ item.amount / 100}</td>
                                <td>{ item.eth_account }</td>
                                <td>{ item.timestamp  }</td>
                            </tr>;
                        })}

                    </tbody>
                </table>
            </div>

        );
    }
}

class PrePayments extends React.Component {


    constructor(props) {
        console.log("Balances created");
        super(props);

        this.state = {
            data:[

            ]
        };
    }

    requestUsers(cb) {
        request.get('/api/webgold/coinadmin/prepayments').end((err,users)=> {
            if (err) {
                cb(err);
                return;
            }
            cb(null,JSON.parse(users.text));
        })
    }

    componentWillMount() {
        var that = this;

        this.requestUsers((err,state) => {
            if (err) {
                alert('Cant get users');
                return;
            }
            that.setState({
                data: state
            });
        });
    }

    render() {
        return (
            <div>
                <h2>Pre payment list</h2>
                <table className="table">
                    <thead>
                    <tr>
                        <th>WRIOID</th>
                        <th>NAME</th>
                        <th>ETH ADRESS</th>
                        <th>ETH BALANCE</th>
                        <th>WRG BALANCE</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.data.map(function (item) {

                            return  <tr>
                                <td>{ item.wrioID }</td>
                                <td>{ item.name }</td>
                                <td>{ item.ethWallet  }</td>
                                <td>{ item.ethBalance}</td>
                                <td>{ item.wrgBalance}</td>
                            </tr>;
                        })}

                    </tbody>
                </table>
            </div>

        );
    }
}



console.log(Router,Route);
React.render((
    <Router>
        <Route path="/" component={EthereumStats} />
        <Route path="/balances" component={Balances}/>
        <Route path="/etherfeeds" component={EtherFeeds}/>
        <Route path="/prepayments" component={PrePayments}/>
        <Route path="/donations" component={Donations}/>
        <Route path="/emissions" component={Emissions}/>

    </Router>
), document.getElementById('main'));

