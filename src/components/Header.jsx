/* eslint-disable no-unused-vars */
import { useState, useContext } from "react"

import { MovieContext } from "../context";
import CartDetails from "./CartDetails";


const Header = () => {
	const [showCart, setShowCart] = useState(false);
	const {cartData} = useContext(MovieContext);

	function handleCartShow(){
		setShowCart(true);
	}

  return (
    <>
      <header>
				{
					showCart &&
						<CartDetails onClose={() => setShowCart(false)}></CartDetails>
				}
		<nav className="container flex items-center justify-between space-x-10 py-6">
			<a href="index.html">
				<img src="./assets/logo.svg" width="139" height="26" alt="" />
			</a>

			<ul className="flex items-center space-x-5">
				<li>
					<a className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block" href="#">
						<img src="./assets/ring.svg" width="24" height="24" alt="" />
					</a>
				</li>
				<li>
					<a className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block" href="#">
						<img src="./assets/icons/moon.svg" width="24" height="24" alt="" />
					</a>
				</li>
				<li>
					<a className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
						onClick={handleCartShow}>
						<img src="./assets/shopping-cart.svg" width="24" height="24" alt="" />
						{
							cartData.length > 0 && (
								// eslint-disable-next-line no-undef
								<span
									className="rounded-full absolute top-[-12px] left-[28px] bg-[#12CF6F] text-white text-center p-[2px] w-[30px] h-[30px]"
								>{cartData.length}</span>
							)
						}
					</a>
				</li>
			</ul>
		</nav>
	</header>
    </>
  )
}

export default Header