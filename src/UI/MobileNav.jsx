import { useEffect, useRef } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import ThemeToggleButton from "./ThemeToggleButton";
import { useAppContext } from "../Services/ContextProvider";
import NavToggleButton from "./NavToggleButton";

function MobileNav() {
	const { toggle, handleToggle } = useAppContext();
	const navRef = useRef(null);

	useEffect(() => {
		if (!toggle) return;
		function handleOutsideClick(event) {
			if (
				navRef.current &&
				!navRef.current.contains(event.target) &&
				toggle
			) {
				handleToggle();
			}
		}

		function handleScroll() {
			if (toggle) {
				handleToggle();
			}
		}

		document.addEventListener("mousedown", handleOutsideClick);
		window.addEventListener("scroll", handleScroll);

		return () => {
			document.removeEventListener("mousedown", handleOutsideClick);
			window.removeEventListener("scroll", handleScroll);
		};
	}, [toggle, handleToggle]);

	return (
		<nav
			ref={navRef}
			role='navigation'
			aria-label='Mobile Navigation'
			className={`w-[250px] h-screen bg-[var(--bg-color-100)] shadow-lg px-12 py-8 transform transition duration-200 ease-linear fixed md:hidden top-0 right-0 z-[999] ${
				toggle ? "translate-x-0" : "translate-x-full"
			}`}>
			<div className='flex items-center justify-between w-full mb-12'>
				<ThemeToggleButton />
				<Link
					className='capitalize text-md text-white font-semibold bg-[#4144bd] px-2 py-1 rounded-lg hover:bg-[#31349b] transition-colors duration-200'
					to='contact'>
					contact us
				</Link>
			</div>

			<ul className='flex flex-col gap-4 list-none mb-6'>
				{["home", "about", "services", "projects"].map((item) => (
					<li
						key={item}
						className='mr-6 list-none'
						onClick={handleToggle}>
						<NavLink
							className='capitalize text-lg text-[var(--text-color)] font-semibold transition-colors duration-200'
							to={item === "home" ? "/home" : item}>
							{item === "about"
								? "About us"
								: item === "projects"
								? "Our Projects"
								: item}
						</NavLink>
					</li>
				))}
			</ul>

			<NavToggleButton
				icon={<FaTimes className='text-[var(--text-color)] text-2xl' />}
			/>
		</nav>
	);
}

export default MobileNav;
