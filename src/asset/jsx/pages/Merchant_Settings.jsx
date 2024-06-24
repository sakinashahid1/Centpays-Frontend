import React, { Component } from 'react'

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export class Merchant_Settings extends Component {
    constructor(props) {
		super(props);
		const today = new Date();
		const endDate = new Date(today);
		const startDate = new Date(today);
		startDate.setDate(today.getDate() - 6);
		this.state = {
			sidebaropen: true,
            token: localStorage.getItem("token"),
			userRole: localStorage.getItem("role"),
        }
    }

    render() {
        return (
            <>
                <Header />
                <Sidebar  />
                <div className={`main-screen ${this.state.sidebaropen
                    ? "collapsed-main-screen"
                    : "expanded-main-screen"
                    }  `} >
                    <div className='MerchantSetting-main-screen'>
                        MM
                    </div>
                </div>
            </>
        )
    }
}

export default Merchant_Settings