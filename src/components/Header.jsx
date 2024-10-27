/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useState, useContext } from "react";
import { MovieContext, ThemeContext } from "../context";
import CartDetails from "./CartDetails";

const Header = () => {
	const [showCart, setShowCart] = useState(false);
	const { cartData } = useContext(MovieContext);
	const { darkMode, setDarkMode } = useContext(ThemeContext);

	function handleCartShow(e) {
		e.preventDefault(); // Prevents page scroll on anchor click
		setShowCart(true);
	}

	function toggleDarkMode() {
		setDarkMode(!darkMode);
	}

	return (
		<>
			<header>
				{showCart && <CartDetails onClose={() => setShowCart(false)} />}
				<nav className="container flex items-center justify-between space-x-10 py-6">
					<a href="index.html">
						<img src="/assets/logo.svg" width="139" height="26" alt="Logo" />
					</a>

					<ul className="flex items-center space-x-5">
						<li>
							<a className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block" href="#">
								<img src="/assets/ring.svg" width="24" height="24" alt="Notifications" />
							</a>
						</li>
						<li>
							<button
								className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
								onClick={toggleDarkMode}
							>
								<img
									src={darkMode ? "/assets/icons/sun.svg" : "/assets/icons/moon.svg"}
									width="24" height="24" alt="Toggle Dark Mode"
								/>
							</button>
						</li>
						<li>
							<button
								className="relative bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
								onClick={handleCartShow}
							>
								<img src="/assets/shopping-cart.svg" width="24" height="24" alt="Cart" />
								{cartData.length > 0 && (
									<span className="rounded-full absolute top-[-12px] left-[28px] bg-[#12CF6F] text-white text-center p-[2px] w-[30px] h-[30px]">
										{cartData.length}
									</span>
								)}
							</button>
						</li>
					</ul>
				</nav>
			</header>
		</>
	);
};

export default Header;
