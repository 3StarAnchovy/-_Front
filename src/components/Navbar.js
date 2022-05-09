import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as BsIcons from 'react-icons/bs';
import Button from "react-bootstrap/Button";
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
/* 아이콘 컬러 전체 변경 기능 */
import { IconContext } from 'react-icons';

const UserInfo = ({ user }) => {
	const onLogout = (e) => {
        e.preventDefault();
        fetch('http://localhost:3001/User/Logout',
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization" : localStorage.getItem(user)
                },
                credentials: 'include',
            }).then(res => res.json()).then(data => {
                if (data.result === 'true')
                {
                    console.log(localStorage);
                    localStorage.removeItem(user);
                    alert('로그아웃 성공');
                }
            });
    }
	console.log(user);
	return (
		<nav>
			{user === 'null' ? <li className='nav-text'>
				<Link to='/Login'>
					<BsIcons.BsPersonCircle />
					<span>Login</span>
				</Link>
			</li> : <li className='nav-text'>
				<Button variant="primary" type="submit" size="sm" onClick={onLogout}>
					로그아웃
				</Button>
			</li>
			}

			{SidebarData.map((item, index) => {
				return (
					<div>
						<li key={index} className={item.cName}>
							<Link to={item.path}>
								{item.icon}
								<span>{item.title}</span>
							</Link>
						</li>
					</div>
				);
			})}
		</nav>
	);
}

function Navbar(props) {
	const [sidebar, setSidebar] = useState(false);
	const showSidebar = () => setSidebar(!sidebar);
	return (
		<>
			{/* 아이콘 컬러 전체 변경 기능 */}
			<IconContext.Provider value={{ color: '#fff' }}>
				{/* 네비게이션 토글 코드*/}
				<div className="navbar">
					<Link to="#" className="menu-bars">
						<FaIcons.FaBars onClick={showSidebar} />
					</Link>
				</div>
				<nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
					<ul className="nav-menu-items" onClick={showSidebar}>
						<li className="navbar-toggle">
							<Link to="#" className="menu-bars">
								<AiIcons.AiOutlineClose />
							</Link>
						</li>
						{/* SidebarData를 순서대로 담기*/}
						{localStorage.getItem(props.UserInfo) ? <UserInfo user={props.UserInfo}></UserInfo> : <UserInfo user='null'></UserInfo>}
					</ul>
				</nav>
			</IconContext.Provider>
		</>
	);
}
export default Navbar;
